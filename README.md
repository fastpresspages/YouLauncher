# YouLauncher — we grow ideas into businesses

[![Live site](https://img.shields.io/badge/live-fastpresspages.github.io%2FYouLauncher-c8ff3e?style=for-the-badge&logo=github)](https://fastpresspages.github.io/YouLauncher/)
[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?style=flat&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-no_frameworks-1572B6?style=flat&logo=css3&logoColor=white)](./style.css)
[![JavaScript](https://img.shields.io/badge/JS-vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](./script.js)
[![No build](https://img.shields.io/badge/build-none_needed-8b5cf6?style=flat)](./)
[![License](https://img.shields.io/github/license/fastpresspages/YouLauncher?style=flat)](./LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff5ca8?style=flat)](https://github.com/fastpresspages/YouLauncher/pulls)
[![LaunchGrade](https://img.shields.io/badge/LaunchGrade-A%2B%20100%2F100-c8ff3e?style=flat)](https://fastpresspages.github.io/launchgrade/)

> **Have an idea? We'll grow it.** YouLauncher is a small growth studio for
> people with an idea, a business or a product. Free audit, a clear next move,
> AI-assisted drafts reviewed by a human.

- **Live:** https://fastpresspages.github.io/YouLauncher/
- **Sister project:** [LaunchGrade](https://fastpresspages.github.io/launchgrade/) — grade any public launch page in 60 seconds
- **Community:** [FastPress Labs](https://github.com/fastpresspages)

## What it does

| You are here | The useful next move |
|---|---|
| 💡 **I have an idea** | A short diagnostic, positioning options, a go / no-go recommendation, and the smallest test worth running |
| 🏪 **I have a business** | An offer, pricing, funnel and follow-up review before adding another channel |
| 🚀 **I have a product** | A launch-week plan, page and asset checklist, channel plan, and a post-launch loop |
| 🤝 **I want to collaborate** | A free-form form for collabs, sponsorship, deals or a scoped build |

The first read is free. Paid work is scoped separately in writing. No
guaranteed signups, revenue, funding or press — and no invented case studies.

## The free-form request

The `#collab` form on the home page accepts:

- email
- request type: free audit / collaboration / sponsorship or deal / paid build / something else
- optional project link
- a short message

It posts through FormSubmit to the owner's inbox. The three email-only forms
(hero, idea card, final CTA) remain in place, tagged by source so replies have
context.

## How the work happens

1. **You describe the stage.** A link and one paragraph is enough.
2. **AI assists with the drafts.** Research, positioning options, copy,
   checklists and launch assets.
3. **A human reviews before delivery.** Nothing is sent or published without a
   person deciding it is good enough.
4. **You keep the final call.** The plan is a recommendation, not a promise.

## What is in the site

- Stacking-card journey through idea → business → product → growth → scale
- Free-form collab / deal form with validation, honeypot and file:// warning
- Email capture with source tags, referral `?ref=` tracking and shared counters
- Honest process section: no fake testimonials, no invented customer logos
- Trust pages: [about](./about.html), [privacy](./privacy.html), [terms](./terms.html)
- Agent-readable [llms.txt](./llms.txt), [llms-full.txt](./llms-full.txt), [AGENTS.md](./AGENTS.md)
- SEO: canonical, Open Graph, Twitter card, JSON-LD (Organization, WebSite, FAQPage)
- Crawler files: [robots.txt](./robots.txt), [sitemap.xml](./sitemap.xml)
- Brand assets: `favicon.svg`, `og.png` (1200×630)

## Run it locally

No build step, no dependencies.

```bash
# any static server works
python -m http.server 4180
# then open http://127.0.0.1:4180/
```

Do not test the forms from `file://`; FormSubmit rejects local-file posts. Use a
local HTTP server or the live GitHub Pages URL.

## Project structure

```text
YouLauncher/
├── index.html          # home, process, FAQ, collab form
├── style.css           # theme, stacking cards, forms, legal pages
├── script.js           # email capture, referral, counters, collab handler
├── about.html
├── privacy.html
├── terms.html
├── llms.txt
├── llms-full.txt
├── AGENTS.md
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── og.png
└── LICENSE
```

## Honesty rules

- No fake customers, revenue, testimonials or case studies.
- No guaranteed outcomes.
- AI assists; a human reviews.
- Public counters are aggregate counters, not customer counts.
- The site is early and says so. If a result is published later, it will include
  a date, a source and permission.

## Audit

The live page is scored with LaunchGrade. The scan after the rebuild returned
**A+ 100/100** with one intentional warning: the site has no analytics script.
The earlier **B- 71/100** snapshot and the current report are preserved in
LaunchGrade's sample folder. Run it yourself:

```bash
npx -p github:fastpresspages/launchgrade launchgrade https://fastpresspages.github.io/YouLauncher/
```

## Contact

- Email: meetcode99@gmail.com
- Collab / deal form: https://fastpresspages.github.io/YouLauncher/#collab
- GitHub: https://github.com/fastpresspages/YouLauncher

Code is licensed under Apache-2.0. The brand and site copy are not.
