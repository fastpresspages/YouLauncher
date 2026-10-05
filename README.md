# ▲ YouLauncher — We Grow Ideas Into Businesses

[![Live](https://img.shields.io/badge/Live-GitHub_Pages-c8ff3e?style=for-the-badge&logo=github)](https://fastpresspages.github.io/YouLauncher/)
[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?style=flat&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-no_frameworks-1572B6?style=flat&logo=css3&logoColor=white)](./style.css)
[![JavaScript](https://img.shields.io/badge/JS-vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](./script.js)
[![No build](https://img.shields.io/badge/build-none_needed-8b5cf6?style=flat)](./)
[![License](https://img.shields.io/github/license/fastpresspages/YouLauncher?style=flat)](./LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff5ca8?style=flat)](https://github.com/fastpresspages/YouLauncher/pulls)

> **Have an idea? We'll grow it.** YouLauncher is a growth partner powered by a
> **multi-agent AI swarm with humans in the loop**: we validate your **idea**,
> build your **business** engine, and **launch your product** so it spreads —
> starting from a single email.

🔗 **Live site:** https://fastpresspages.github.io/YouLauncher/

## Contents

- [What we do](#what-we-do)
- [How our multi-agent system works](#how-our-multi-agent-system-works)
- [The workflows that scale you](#the-workflows-that-scale-you)
- [Human-in-the-loop: speed without slop](#human-in-the-loop-speed-without-slop)
- [How this compounds into scale](#how-this-compounds-into-scale)
- [Site highlights](#site-highlights)
- [Project structure](#project-structure)
- [Lead delivery](#lead-delivery)
- [Contact](#contact)

## What we do

| You are here | We do for you |
|---|---|
| 💡 **I have an idea** | Free audit, user interviews, positioning in 10 words, go / no-go score |
| 🏪 **I have a business** | Pricing and funnel fix, email drip that converts, referral engine on |
| 🚀 **I have a product** | Viral waitlist, launch week across channels, post-launch momentum kit |

One email-only form captures the lead and delivers it straight to the founder's
inbox, tagged with its source (`YouLaunch`) and origin form (`hero` /
`card-idea` / `final`).

## How our multi-agent system works

One founder, one freelancer, or one generalist AI is a bottleneck. We work as a
**team of specialized AI agents**, each owning one growth lane, all coordinated
around your business:

| Agent lane | What it produces for you |
|---|---|
| 🔍 **Research agent** | Competitor teardowns (Product Hunt, BetaList, YC, Prefinery-style players), pricing benchmarks, review mining |
| ✍️ **Copy agent** | Positioning in 10 words, headlines, Product Hunt copy, X threads, email drips, press kit |
| 🎨 **Design agent** | Landing drafts, waitlist pages, social cards, demo-video shot lists |
| ✅ **Checklist agent** | The 44-step launch playbook (29 pre-launch / 6 launch-day / 9 post-launch), tailored to your stage |
| 📊 **Analytics agent** | Funnel math, referral K-factor tracking, bot-filtered signal (real signups, not vanity impressions) |
| 🌀 **Referral agent** | Queue-jump mechanics, milestone rewards, 2-sided incentives, per-link tracking |

The lanes run **in parallel**, not in sequence — research, copy, and design move
at the same time, so a full launch package that takes a solo team weeks ships in
days.

## The workflows that scale you

Every engagement follows the same operating loop, tuned to your stage:

1. **Audit (free, 48h)** — a human reads your idea, business, or product and
   replies with a growth plan. AI drafts it, a human approves it.
2. **Validate (idea stage)** — 5 user interviews, one landing test, price-before-code.
   Kill bad ideas in 7 days instead of funding them for 7 months.
3. **Engine (business stage)** — fix the offer, the funnel, and the email drip
   (subject lines drive ~64% of opens). Install the referral loop so every
   customer can bring one more.
4. **Launch (product stage)** — viral waitlist in a day, launch week fired across
   Product Hunt, communities, newsletter, and press at once. No 1-upvote ghost
   launches: 30 warm supporters booked before day one.
5. **Momentum (every week after)** — testimonials harvested into case studies,
   changelog shipped as newsletter, investor updates written. Launch day is day
   one, not the finish line.

## Human-in-the-loop: speed without slop

AI generates; humans decide. Nothing reaches you — or your customers — without
passing two gates:

- **Agent draft → human review.** Every word, number, and design passes a human
  who has launched before. Hallucinations, hype, and off-voice copy die here.
- **Human polish → your approval.** You see the final call before anything
  ships. Your taste is the last gate, not an afterthought.

The result: agency output at software speed, with a human accountable for every
line.

## How this compounds into scale

- **Referred customers are worth more** — +59% lifetime value, −18% churn, ~4×
  conversion versus cold traffic. Our loops turn one signup into many.
- **Positioning compounds** — 10 clear words beat 10 clever pages. Everything
  (ads, emails, launch copy) reuses one validated message.
- **Launching becomes a habit** — weekly ship logs and a standing checklist mean
  every release launches bigger than the last, instead of starting from zero.
- **You keep the engine** — playbooks, templates, counters, and tracking stay
  with your team. We scale you, then you scale yourself.

## Site highlights

- 🃏 **Stacking cards deck** — each growth stage slides over the last
- 🤝 **AI swarm, human taste** — the operating model, presented as the 6th card
- 📊 Shared live spot counter, per-link `?ref=` visit + signup tracking with inbox attribution
- 🎉 Confetti and referral-link reveal on every signup
- 📱 Fully responsive, zero dependencies, zero build step

## Project structure

```
YouLauncher/
├── index.html   # content and structure
├── style.css    # theme and stacking deck
├── script.js    # interactions, counters, referral tracking, lead delivery
└── LICENSE
```

## Lead delivery

Form submissions are delivered via [FormSubmit](https://formsubmit.co) to the
founder inbox, configured in `script.js` (`CONFIG.ENDPOINT`). Each lead arrives
tagged with `source` (YouLaunch), `form` (hero / card-idea / final), and
`referredBy` (referral code or `-`). The form requires an `https` origin and
one-time inbox activation before first delivery.

## Contact

📧 meetcode99@gmail.com
