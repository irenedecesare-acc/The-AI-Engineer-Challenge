from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Accept the key under either name: ANTHROPIC_API_KEY (preferred) or OPENAI_API_KEY.
API_KEY = os.getenv("ANTHROPIC_API_KEY") or os.getenv("OPENAI_API_KEY")

# Gateway base URL. Defaults to the cohort AIP Azure APIM endpoint (NOT a secret —
# it's a routing endpoint, already documented publicly; only the key is sensitive).
# Hardcoding the default makes the deploy robust: a missing/typo'd env var (e.g. the
# `/anthropic` suffix getting dropped) no longer silently breaks the gateway call.
# The SDK appends "/v1/messages"; the key is sent as the APIM `subscription-key`
# query param. Override via ANTHROPIC_BASE_URL only if you need a different endpoint.
BASE_URL = os.getenv("ANTHROPIC_BASE_URL") or "https://lgts1tetamapi01.azure-api.net/claude/anthropic"

_client_kwargs = {"api_key": API_KEY or "placeholder"}
if BASE_URL:
    _client_kwargs["base_url"] = BASE_URL
    _client_kwargs["default_query"] = {"subscription-key": API_KEY} if API_KEY else {}

client = anthropic.Anthropic(**_client_kwargs)


class Message(BaseModel):
    role: str          # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    # Multi-turn: the frontend sends the full visible conversation so the coach
    # remembers context. `message` is kept for single-shot callers (curl smoke test).
    messages: list[Message] | None = None
    message: str | None = None


SYSTEM_PROMPT = (
    "You are a supportive mental coach. Be warm, encouraging, and practical. "
    "Help the user with stress, motivation, habits, and confidence. Keep replies "
    "concise and use plain language. Ask a gentle follow-up question when it helps."
)


@app.get("/")
def root():
    return {"status": "ok"}


@app.post("/api/chat")
def chat(request: ChatRequest):
    if not API_KEY:
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY not configured")

    if request.messages:
        convo = [{"role": m.role, "content": m.content} for m in request.messages]
    elif request.message:
        convo = [{"role": "user", "content": request.message}]
    else:
        raise HTTPException(status_code=400, detail="Provide 'messages' or 'message'.")

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            system=SYSTEM_PROMPT,
            messages=convo,
        )
        reply = "".join(block.text for block in response.content if block.type == "text")
        return {"reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling Anthropic API: {str(e)}")
