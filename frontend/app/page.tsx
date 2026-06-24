"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Owl, { type OwlState } from "./components/Owl";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "I'm feeling anxious",
  "Help me focus",
  "I can't sleep",
  "I'm overwhelmed",
];

function Leaf() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf0ea] text-base">
      🍃
    </div>
  );
}

export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [owlState, setOwlState] = useState<OwlState>("idle");
  const endRef = useRef<HTMLDivElement>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    setOwlState("thinking");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(e.detail || `Request failed (${res.status})`);
      }
      const data = await res.json();
      const reply: string = data.reply ?? "";
      setMessages([...next, { role: "assistant", content: reply }]);
      // Talk for a bit, scaled to reply length, then settle back to idle.
      setOwlState("talking");
      const ms = Math.min(6000, Math.max(1500, reply.length * 35));
      idleTimer.current = setTimeout(() => setOwlState("idle"), ms);
    } catch (err) {
      const m = err instanceof Error ? err.message : "Something went wrong";
      setMessages([
        ...next,
        { role: "assistant", content: `*Sorry — I couldn't reply just now. (${m})*` },
      ]);
      setOwlState("idle");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const empty = messages.length === 0;

  return (
    <main className="mx-auto flex h-dvh max-w-2xl flex-col px-4">
      {/* Header */}
      <header className="flex items-center gap-3 py-4">
        <Owl state={owlState} size={56} />
        <div className="flex items-baseline gap-2">
          <h1 className="font-serif-grove text-xl font-semibold text-[#2e3a33]">
            Grove
          </h1>
          <span className="text-sm text-[#7a857e]">· your coach</span>
        </div>
      </header>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto pb-4">
        {empty ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-3 text-3xl">🍃</div>
            <h2 className="font-serif-grove text-2xl text-[#2e3a33]">
              Hi, I&apos;m here with you.
            </h2>
            <p className="mt-1 text-[#7a857e]">What&apos;s on your mind today?</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-[#d8ded6] bg-white px-4 py-2 text-sm text-[#46604f] transition hover:bg-[#eaf0ea]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-[#5b7a6b] px-4 py-2.5 text-[#f6f4ee]">
                    {m.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex items-start gap-2">
                  <Leaf />
                  <div className="md max-w-[80%] rounded-2xl rounded-tl-md bg-[#eaf0ea] px-4 py-2.5 text-[#2e3a33]">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              ),
            )}
            {loading && (
              <div className="flex items-start gap-2">
                <Leaf />
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-[#eaf0ea] px-4 py-3.5">
                  <span className="grove-dot h-2 w-2 rounded-full bg-[#5b7a6b]" />
                  <span className="grove-dot h-2 w-2 rounded-full bg-[#5b7a6b]" />
                  <span className="grove-dot h-2 w-2 rounded-full bg-[#5b7a6b]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="pb-4">
        <div className="flex items-end gap-2 rounded-2xl border border-[#d8ded6] bg-white p-2 shadow-sm">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Type a message…"
            className="max-h-32 flex-1 resize-none bg-transparent px-2 py-1.5 text-[#2e3a33] outline-none placeholder:text-[#a9b2ac]"
          />
          <button
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            aria-label="Send"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5b7a6b] text-[#f6f4ee] transition hover:bg-[#46604f] disabled:opacity-40"
          >
            ➤
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-[#a9b2ac]">
          Grove is an AI coach, not a substitute for professional care.
        </p>
      </div>
    </main>
  );
}
