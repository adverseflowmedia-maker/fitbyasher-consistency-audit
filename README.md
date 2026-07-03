# FitByAsher — Consistency Audit

A high-conversion, lead-generation assessment tool for FitByAsher. Visitors take a 12-question audit, get scored 0-100 on "consistency," are typed into one of four behavioral archetypes, hand over name + email to unlock their full report, then get routed to a coaching CTA pointing at Instagram (@Asher.ex_).

Built with React 18 + Vite + Tailwind CSS. Fully client-side — no backend, no database, no API keys. All state lives in memory for the duration of the session (`useAuditFlow` hook).

---

## 1. Project structure

```
fitbyasher-audit/
├── index.html                  # HTML shell, fonts, meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js          # brand colors, fonts, animation keyframes
├── postcss.config.js
├── vercel.json                 # SPA rewrite rule for Vercel
├── .gitignore
└── src/
    ├── main.jsx                 # React root
    ├── App.jsx                  # Stage router (landing → quiz → lead → report)
    ├── index.css                # Tailwind directives + base/component styles
    ├── hooks/
    │   └── useAuditFlow.js       # All local state: stage, answers, lead, navigation
    ├── data/
    │   ├── questions.js          # 12 quiz questions + scored options
    │   ├── consistencyTypes.js   # The 4 archetypes (A/B/C/D) with full content
    │   ├── scoringEngine.js      # calculateResults() — scoring + type resolution
    │   └── resetPlan.js          # 7-Day Consistency Reset Plan content
    └── components/
        ├── NavBar.jsx
        ├── LandingPage.jsx       # Hero, problem, why-men-fail, benefits, CTA
        ├── ProgressBar.jsx
        ├── QuizFlow.jsx          # One question at a time, back/next, transitions
        ├── ConsistencyDial.jsx   # Signature animated circular score gauge
        ├── LeadCapture.jsx       # Name + email gate before the report
        ├── BreakdownChart.jsx    # Per-category horizontal bar chart
        ├── ResetPlan.jsx         # 7-day plan list
        ├── CoachingCTA.jsx       # Final "Apply For Coaching" section
        └── ReportPage.jsx        # Combines everything into the full report
```

---

## 2. How the flow works

1. **Landing** (`LandingPage.jsx`) — hero with headline/subhead, problem section, "why most men fail" (4 cards), benefits of taking the audit, CTA. Clicking **Start Free Audit** calls `flow.startAudit()`.
2. **Quiz** (`QuizFlow.jsx`) — 12 questions, one at a time, each with 4 options. Progress bar fills based on `(index + 1) / 12`. Next is disabled until the current question is answered. Back returns to the previous question, or to the landing page from question 1.
3. **Scoring** (`scoringEngine.js`) — on completing question 12, `calculateResults(answers)` runs:
   - Sums points (0-10 per question) → overall score 0-100.
   - Sums points per category (8 categories) → breakdown bars.
   - Sums weighted "trait" tags per option → determines which of the 4 archetypes wins.
   - Identifies the lowest-scoring category as the "bottleneck."
4. **Lead Capture** (`LeadCapture.jsx`) — shown before any report content. Validates name + email client-side, then calls `flow.submitLead()`, which stores the lead in state and advances to the report. **Nothing is sent anywhere** — this is intentional per the "no backend" requirement. See §5 for how to wire up real lead delivery.
5. **Report** (`ReportPage.jsx`) — renders the score dial, the winning archetype's full content (description, biggest weakness, blind spot, why past attempts failed, action plan), the category breakdown chart, the 7-Day Reset Plan, and the Coaching CTA.

---

## 3. Local setup

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Visit `http://localhost:5173`.

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 4. Deploying to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project). Vercel auto-detects Vite. The included `vercel.json` adds the SPA rewrite rule so client-side routing/refreshes don't 404.

**Option B — Git integration**

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In the Vercel dashboard: **New Project → Import** your repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

No environment variables are required — the app has no backend calls.

---

## 5. Wiring up real lead capture (optional next step)

Right now `LeadCapture.jsx` stores `{ name, email }` only in React state via `flow.submitLead()` — nothing leaves the browser, per the "no backend required" spec. To actually capture leads in production, the cleanest no-backend options:

- **Formspree / Getform / Basin** — point a `fetch()` POST at their endpoint inside `onSubmit` in `LeadCapture.jsx`.
- **ManyChat / Zapier webhook** — since the brand already uses ManyChat, a webhook call here can drop the lead straight into the existing "LEAN" funnel tagging.
- **Vercel serverless function** — add `/api/lead.js` and forward to email/Sheets/CRM; still no separate backend service to host.

Look for the `handleSubmit` function in `src/components/LeadCapture.jsx` — that's the single integration point.

---

## 6. Customizing content

- **Questions & scoring weights** — `src/data/questions.js`. Each option has a `points` value (0-10) and a `traits` object used for archetype resolution.
- **Archetype copy** — `src/data/consistencyTypes.js`. Four full entries (A-D), each with `description`, `biggestWeakness`, `blindSpot`, `whyPastAttemptsFailed`, `actionPlan`.
- **7-Day Reset Plan** — `src/data/resetPlan.js`.
- **Brand colors/fonts** — `tailwind.config.js` under `theme.extend.colors` / `fontFamily`.
- **Instagram handle / coaching link** — appears in `NavBar.jsx` and `CoachingCTA.jsx` (`https://instagram.com/Asher.ex_`).

---

## 7. Design notes

- Dark premium theme: near-black base (`#0A0B0D`), glassmorphic cards (`bg-base-surface/70 backdrop-blur-xl`), emerald accent (`#10B981` → `#34D399` gradient) used sparingly for CTAs, focus states, and the score dial.
- Signature element: `ConsistencyDial.jsx` — an animated SVG circular gauge reused at 3 sizes (hero teaser, lead-capture mini, full results). Built once, parameterized by `size`/`value`.
- Type pairing: `Inter Tight` (display/headlines) + `Inter` (body) + `JetBrains Mono` (scores, labels, eyebrows) — the mono face is used deliberately wherever something is being "measured" (score, progress %, category numbers) to reinforce the diagnostic framing.
- Reduced-motion respected globally via `prefers-reduced-motion` in `index.css`.
