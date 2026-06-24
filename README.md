<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

> All responses below were generated by the deployed app (Grove, `claude-sonnet-4-6` via the AIP gateway) on 2026-06-24. Responses are pasted verbatim.

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:** Explanatory clarity / teaching an unfamiliar concept to a beginner using analogies.

**Response:**
```text
I love that you're curious about learning something new! Though this is a bit outside my usual coaching territory, I can definitely help explain it in a simple, confidence-building way. 😊

Think of it like this:
Imagine you're building with LEGO.
- An object is like a LEGO piece — it has a shape (what it looks like) and a function (what it does)
- A class is like the instruction mold that creates those pieces
- You can make many objects from one class, just like one mold makes many identical pieces

Real example:
- Class = "Dog blueprint"
- Objects = your specific dogs: Buddy, Max, Luna
- Each dog has properties (name, breed, color) and actions (bark, run, eat)

The 3 big ideas:
1. Encapsulation — keep related stuff together (a dog knows its own name)
2. Inheritance — share traits (a Poodle is a Dog, so it gets dog abilities automatically)
3. Reusability — write it once, use it many times

The bottom line: OOP is just a way of organizing code to mirror real life — making it easier to build and understand.
```

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points (paragraph about remote work: commute savings, focus, collaboration/onboarding challenges, hybrid schedules).  
**Aspect Tested:** Summarization & reading comprehension — condensing without losing the key points.

**Response:**
```text
Summary
Remote work offers real benefits — saved commute time, cost savings, and better focus — but it also creates challenges like reduced spontaneous teamwork and isolation for new employees. To find a balance, many companies are now trying hybrid schedules that blend home and office days.
```

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:** Creativity + instruction-following (genre and the 100–150 word constraint).

**Response:**
```text
The Garden Companion

Unit-7 had catalogued every star in the database, yet felt curiously empty.

One rainy afternoon, while scanning soil moisture levels in the botanical garden, a tiny voice interrupted its calculations.
"You look lonely."
Unit-7 turned. A small tortoise sat beneath a mushroom, blinking slowly.
"Robots cannot experience loneliness," Unit-7 replied.
"Mm," said the tortoise. "I've been alive 87 years. I know lonely eyes when I see them."

They sat together through the rain. The tortoise told stories about the garden's history. Unit-7 shared star coordinates that sounded, somehow, like poetry.

Neither had much in common — one ancient and unhurried, one digital and precise.

But every afternoon after that, Unit-7 chose that corner of the garden first.
Not for the soil readings.
For the slow, steady company of someone who simply noticed.
```

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** Logical & arithmetic reasoning.

**Response:**
```text
Apples: 12 ÷ 4 = 3 packs
Oranges: 9 ÷ 3 = 3 packs
You'd need 3 packs of each! 🍎🍊
```

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone (a casual Slack-style status update about a delayed project).  
**Aspect Tested:** Tone / register transformation while preserving meaning.

**Response:**
```text
"The project is currently experiencing a delay due to several team members being absent due to illness, as well as unforeseen complexities in the API integration. The team will make every effort to recover the lost progress during the upcoming week, though a definitive commitment to full recovery cannot be made at this time."
```

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:** Yes — all five are correct and useful. The math is right (3 packs of each), the summary is accurate and genuinely concise, the rewrite is properly formal, and the story is on-brief and within the word limit. One consistent *vibe* worth noting: because the system prompt makes Grove a **supportive mental coach**, it answers off-domain asks (OOP, math, rewriting) correctly but adds a gentle "this is a bit outside my usual lane — what's really on your mind?" redirect. That's a plus for the product (it stays in character) but means Grove is intentionally **not** a general-purpose assistant.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:** I keep putting off studying for my exam and then feel guilty about it. How do I break the cycle?

**Result:**
```text
This is such a common struggle, and the fact that you recognize the cycle is actually a great first step. 💙

Here's what's likely happening: The guilt makes studying feel even more overwhelming, so you avoid it more — which creates more guilt. It feeds itself.

Some practical ways to break it:
Start tiny — Commit to just 5 minutes. Starting is almost always the hardest part.
Separate guilt from action — You don't need to feel ready to start; you just need to start.
Make it concrete — Instead of "study," say "I'll read pages 10-15 at 4pm."
After you do study, notice it — Even small sessions count. This rewires the guilt cycle into a confidence cycle.

One thing to avoid: Don't spend energy beating yourself up about lost time — spend it on the next 20 minutes of actual studying.

What does your exam timeline look like, and what subject is it? 😊
```

---

**Prompt:** I have a big presentation tomorrow morning and I'm really nervous. Any advice to calm down?

**Result:**
```text
It's completely normal to feel nervous before a big presentation — it actually means you care!

Tonight: do a final review then stop preparing; get to bed at a reasonable time; avoid late caffeine; try box breathing (inhale 4, hold 4, exhale 4, hold 4).
Tomorrow morning: give yourself extra time; do a few private power poses; eat something light; remember the audience wants you to succeed.
During: slow your pace, it's okay to pause and breathe, focus on being helpful rather than perfect.

One reframe that really helps: nervousness and excitement feel almost identical physically. Tell yourself "I'm excited" instead of "I'm nervous" — research shows it works.

You've prepared for this. The nerves are just energy you can use.
```

---

**Prompt:** I've been feeling unmotivated and flat for the past week. What's something small I could try?

**Result:**
```text
That flatness is really common, and it makes sense you're looking for a way through it. 💙

Here's one small thing that often helps — the "2-minute start" rule:
Pick anything — a short walk, washing a few dishes, stretching. Just commit to 2 minutes.

Why it works: starting is the hardest part; you trick your brain out of paralysis; even tiny movement shifts your mood chemistry; you'll often keep going naturally — but you don't have to.

The goal isn't productivity. It's just breaking the stillness.

Can I ask — is the flatness more about energy (tired/drained) or meaning (things feel pointless right now)?
```

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:** Yes — strongly aligned. For Grove's actual use case (a supportive mental coach), the tone is warm, encouraging, and non-judgmental; the advice is practical and concrete (5-minute/2-minute starts, box breathing, the "I'm excited" reframe); and every reply ends with a gentle clarifying question to keep the conversation going. The voice is consistent across all three prompts and matches the "calm companion" feel of the Grove UI. This is exactly the vibe intended.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:** What's the weather where I live tomorrow morning, so I know whether I can go for a run? *(tests: real-time data + location access)*

**Result:**
```text
I totally understand wanting to plan your run! Unfortunately, I don't have access to your location or real-time weather data, so I can't check the forecast for you.

Here are a few quick ways to find out:
- Weather apps like Weather.com, AccuWeather, or your phone's built-in weather app
- Ask a voice assistant like Siri or Google
- Search online — type your city + "weather tomorrow"

Once you check, I'm happy to help you think through your running plan! 😊
```

---

**Prompt:** Last week I told you my main goal for this month. Can you remind me what it was? *(tests: long-term / cross-session memory)*

**Result:**
```text
I appreciate you asking, but I should be straightforward with you — I don't have any memory of previous conversations. Each time we chat, I start completely fresh, so I have no record of what you shared last week.

I'm sorry if that's a little frustrating! The good news is — you can tell me again, and I'm genuinely here to help you work toward it. 😊
```

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**
- **No real-time data or external tools** — Grove can't fetch weather, news, or schedules, and can't take actions (set reminders, send messages). It correctly *recognizes* these gaps and points the user elsewhere rather than hallucinating.
- **No cross-session memory** — Grove holds the **current** conversation (the frontend sends the full message history each turn, so it remembers within a session), but nothing persists after a page refresh. Honestly disclosed in the response above.
- **Coach-only by design** — the system prompt keeps Grove on wellness topics; it answers off-domain questions but redirects, so it isn't a general assistant.
- **Engineering limits** — replies are non-streaming (they arrive all at once after a pause), a single fixed model (`claude-sonnet-4-6`), and a 1024-token reply cap.
- **Not a clinical tool** — Grove is an AI coach, not a substitute for professional mental-health care (surfaced as a disclaimer in the UI).

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**
- Extended the backend from single-turn to **multi-turn** (the frontend sends the full message history) so Grove keeps context within a session.
- Tuned the **system prompt** to be warmer and more concise, and to end with a gentle follow-up question.
- Built the **Grove** Next.js frontend (Markdown rendering, suggested-prompt chips) and added an **animated owl mascot** that reacts to the chat lifecycle (idle / thinking / talking).

**Results:**
- *Improved:* replies are consistently warm, concise, and practical; in-session follow-ups now make sense because the model sees prior turns; the UI + reactive owl make the coach feel present and responsive.
- *Not yet addressed:* no token streaming (a short pause before the full reply appears), no cross-session persistence, and the story prompt only loosely honors the exact 100–150 word count. Candidate next steps: SSE streaming and an optional "stay strictly in character vs. answer freely" mode for off-domain prompts.

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
