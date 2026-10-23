# AGENTS.md — YouLauncher

This repository is the static site for YouLauncher, a small growth studio. It is plain HTML, CSS and JavaScript with no build step and no framework.

## Canonical facts

- Live site: https://fastpresspages.github.io/YouLauncher/
- Repo: https://github.com/fastpresspages/YouLauncher
- Contact: meetcode99@gmail.com
- Code licence: Apache-2.0
- Parent project: FastPress Labs — https://github.com/fastpresspages
- Sister tool: LaunchGrade — https://fastpresspages.github.io/launchgrade/

## Rules for agents

1. Do not invent customer names, revenue, testimonials, case studies, grades or performance numbers.
2. Do not submit either form without explicit permission from the human you are working for. Do not submit on behalf of a third party.
3. Treat the public counters as aggregate counters, not customer counts.
4. The site's claims are process claims. Do not upgrade them into guarantees.
5. If you edit the page, keep the existing email capture, referral and Abacus logic working.
6. Keep the site zero-build. No framework, no bundler, no npm dependency is needed to serve it.
7. Test forms on a local HTTP server, not `file://`, because FormSubmit rejects local-file posts.
8. Preserve the visible labels on form fields and the honeypot input; both matter for accessibility and spam control.

## Files

- `index.html` — home, process, free-form collab form
- `style.css` — all styles
- `script.js` — email capture, referral, counters, collab form
- `privacy.html`, `terms.html`, `about.html` — trust pages
- `llms.txt`, `llms-full.txt` — agent-readable summaries
- `robots.txt`, `sitemap.xml` — crawler metadata
- `favicon.svg`, `og.png` — brand assets

## Verification

- Open `index.html` through a local server, e.g. `npx serve .` or `python -m http.server 4173`.
- Check both forms with a real email only when you intend to send a real message.
- Run LaunchGrade against the live URL after deployment:
  `npx -p github:fastpresspages/launchgrade launchgrade https://fastpresspages.github.io/YouLauncher/`
- Do not add fake analytics just to improve a score. The current warning about analytics is intentional and honest.
