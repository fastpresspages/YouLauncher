# ▲ YouLauncher — We Grow Ideas Into Businesses

[![Live](https://img.shields.io/badge/Live-GitHub_Pages-c8ff3e?style=for-the-badge&logo=github)](https://fastpresspages.github.io/YouLauncher/)
[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?style=flat&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-no_frameworks-1572B6?style=flat&logo=css3&logoColor=white)](./style.css)
[![JavaScript](https://img.shields.io/badge/JS-vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](./script.js)
[![No build](https://img.shields.io/badge/build-none_needed-8b5cf6?style=flat)](./)
[![License](https://img.shields.io/github/license/fastpresspages/YouLauncher?style=flat)](./LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff5ca8?style=flat)](https://github.com/fastpresspages/YouLauncher/pulls)

> **Have an idea? We'll grow it.** YouLauncher is a growth-partner landing page:
> we validate your **idea**, build your **business** engine, and **launch your product**
> so it spreads — starting from a single email.

🔗 **Live site:** https://fastpresspages.github.io/YouLauncher/

## What this site is for

| You are here | We do for you |
|---|---|
| 💡 **I have an idea** | Free audit, 5 user interviews, positioning in 10 words, go / no-go score |
| 🏪 **I have a business** | Pricing + funnel fix, email drip that converts, referral engine ON |
| 🚀 **I have a product** | Viral waitlist, launch week (PH / communities / press), momentum kit |

One email-only form (no names, no passwords) captures the lead and delivers it
straight to the founder's inbox with its source (`hero` / `card-idea` / `final`).

## Highlights

- 🃏 **Stacking cards deck** — each stage (`position: sticky`) slides over the last
- 📊 Animated counters, growth-score bar, launch-week calendar, marquee
- 🎉 Canvas confetti + referral-link reveal on every signup (`?ref=`)
- 📱 Fully responsive, zero dependencies, zero build step

## Structure — 3 files only

```
YouLauncher/
├── index.html   # PR #1 — content & structure
├── style.css    # PR #2 — neon theme & stacking deck
├── script.js    # PR #3 — effects & email delivery
└── LICENSE
```

## Email delivery (important)

Static hosting can't send mail alone, so the form POSTs to
[FormSubmit](https://formsubmit.co) AJAX → inbox `meetcode99@gmail.com`.
Configured in `script.js` (`CONFIG.ENDPOINT`).

> ⚠️ **Two gotchas, both by design:**
>
> 1. **Local files are blocked** — FormSubmit rejects `file://` pages. Preview with
>    `npx serve` (or any static server) and open the `http://localhost` URL.
>    The form detects `file://` and tells the visitor exactly that.
> 2. **First submit = activation** — the first-ever submission sends an *activation*
>    email (check spam). Click it once; every lead after that lands in the inbox
>    with subject `YouLauncher lead [source]: <email>`.

## Run locally

```powershell
cd C:\Users\shahm\Projects\YouLauncher
npx serve   # then open the http://localhost URL it prints
```

## Deploy

Merge PRs → **Settings → Pages → Deploy from branch (`main`)**.
Project-site URL: `https://fastpresspages.github.io/YouLauncher/`

## Roadmap

- [ ] Real testimonials + case-study metrics
- [ ] Web3Forms / Sheets backup endpoint for leads
- [ ] 60-sec launch-video section (B站 formula: music + flash text + UI loop)
- [ ] Multilingual guides (EN + CN creator playbooks)
