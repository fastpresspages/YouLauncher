// YouLauncher — email capture that lands in YOUR inbox/db, not just the browser.
// ── SETUP (pick ONE, 2 minutes) ──────────────────────────────────────────
// OPTION A (recommended, free, email to inbox): https://web3forms.com → get free
//   access key → paste below. Every signup lands in your email + Web3Forms dashboard.
// OPTION B (no signup): https://formsubmit.co → activate your email once, then set
//   ENDPOINT = "https://formsubmit.co/ajax/hello@youlauncher.io"
// OPTION C (database/Sheets): Google Apps Script web-app URL, or Supabase/Firebase.
//   Any endpoint that accepts JSON POST {email, source, page, date} works.
// Leave ENDPOINT = "" to run in local-only demo mode (emails stay in this browser).
const CONFIG = {
  ENDPOINT: "https://formsubmit.co/ajax/meetcode99@gmail.com",
  ACCESS_KEY: "", // not needed for FormSubmit
  OWNER_EMAIL: "meetcode99@gmail.com",
};
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// 1. progress bar + nav glow follows mouse
const prog = $('#progress'), glow = $('#glow');
addEventListener('scroll', () => {
  const h = document.documentElement;
  prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, { passive: true });
addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px';
}, { passive: true });

// 2. stacking scale: shrink earlier cards as next covers them
const cards = $$('.card');
addEventListener('scroll', () => {
  cards.forEach((card, i) => {
    const r = card.getBoundingClientRect();
    const p = Math.min(Math.max((90 - r.top) / 500, 0), 1); // 0..1 as next slides over
    const scale = 1 - (cards.length - 1 - i) * 0 + p * 0.04 * (i < cards.length - 1 ? 1 : 0);
    card.style.transform = `scale(${i === cards.length - 1 ? 1 : 1 - p * 0.05})`;
    card.style.filter = i === cards.length - 1 ? '' : `brightness(${1 - p * 0.35})`;
  });
}, { passive: true });

// 3. reveal on scroll + animated counters + score bar
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  // counters
  $$('[data-count]', e.target.parentElement || document).forEach(runCount);
  const fill = e.target.querySelector?.('[data-score]');
  if (fill) fill.style.width = fill.dataset.score + '%';
  io.unobserve(e.target);
}), { threshold: 0.2 });
$$('.reveal, .card, .stats, .scorebar').forEach(el => io.observe(el));
// hero stats animate immediately
$$('.stats [data-count]').forEach(runCount);
function runCount(el) {
  if (el.dataset.done) return; el.dataset.done = 1;
  const target = +el.dataset.count, suf = el.dataset.suffix || (target >= 100000 ? '+' : '');
  const t0 = performance.now(), dur = 1400;
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    const v = Math.round(target * e);
    el.textContent = (v >= 1000 ? v.toLocaleString() : v) + suf;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}
// score bars fill when visible
$$('[data-score]').forEach(f => new IntersectionObserver((es, o) => es.forEach(e => {
  if (e.isIntersecting) { f.style.width = f.dataset.score + '%'; o.disconnect(); }
}), { threshold: 0.4 }).observe(f));

// 4. marquee duplicate for seamless loop
const track = $('#marqueeTrack');
track.innerHTML += track.innerHTML;

// 5. EMAIL capture — validate → send to YOUR inbox/db → celebrate + referral
const KEY = 'youlauncher_emails';
const getAll = () => { try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] } };
const emailOK = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

async function sendLead(email, source, referredBy) {
  if (!CONFIG.ENDPOINT) return { mode: 'local' };
  const payload = {
    email, source, referredBy: referredBy || '-', page: location.href, date: new Date().toISOString(),
    _subject: `YouLauncher lead [${source}]: ${email}`,
    _template: "table",
  };
  if (CONFIG.ACCESS_KEY) payload.access_key = CONFIG.ACCESS_KEY;
  const res = await fetch(CONFIG.ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('endpoint ' + res.status);
  return { mode: 'remote' };
}

// live spot counter — shared across ALL visitors via Abacus (free, no key needed
// for get/hit). Falls back to local-only math if the API is unreachable.
// Counter seeded at 0: /create/youlauncher-fastpresspages/spots-claimed
const COUNT = {
  NS: "youlauncher-fastpresspages",
  KEY: "spots-claimed",
  BASE: 0, // starting number shown if API unreachable
  MAX: 500,
};
let remoteCount = null; // null = unknown/offline
async function loadCount() {
  try {
    const r = await fetch(`https://abacus.jasoncameron.dev/get/${COUNT.NS}/${COUNT.KEY}`);
    if (!r.ok) throw new Error('count ' + r.status);
    remoteCount = (await r.json()).value;
  } catch { remoteCount = null; }
  paintSpots();
}
async function claimSpot() {
  // +1 on the shared counter; returns the new total (or local fallback)
  try {
    const r = await fetch(`https://abacus.jasoncameron.dev/hit/${COUNT.NS}/${COUNT.KEY}`);
    if (!r.ok) throw new Error('count ' + r.status);
    remoteCount = (await r.json()).value;
    return Math.min(remoteCount, COUNT.MAX);
  } catch {
    remoteCount = null;
    return Math.min(COUNT.BASE + getAll().length, COUNT.MAX);
  }
}
function paintSpots() {
  const n = remoteCount == null
    ? Math.min(COUNT.BASE + getAll().length, COUNT.MAX)
    : Math.min(remoteCount, COUNT.MAX);
  $$('#spotCount').forEach(el => el.textContent = n);
}
loadCount();

// 8. REFERRAL TRACKING (?ref=CODE) — zero backend. Each code gets two shared
// Abacus counters: ref-CODE-v (referred visits) and ref-CODE-c (referred signups).
// Attribution also lands in your inbox as the `referredBy` row.
const REF_STORE = 'youlauncher_referred_by';
const getRef = () => { try { return localStorage.getItem(REF_STORE) || ''; } catch { return ''; } };
async function refCount(code, hit) {
  try {
    const r = await fetch(`https://abacus.jasoncameron.dev/${hit ? 'hit' : 'get'}/${COUNT.NS}/${code}`);
    if (!r.ok) throw 0;
    return (await r.json()).value;
  } catch { return null; }
}
(async function initReferral() {
  const raw = new URLSearchParams(location.search).get('ref') || '';
  const code = raw.trim().toLowerCase();
  if (!/^[a-z0-9.-]{3,64}$/.test(code)) return;
  try { localStorage.setItem(REF_STORE, code); } catch { /* private mode */ }
  refCount(`ref-${code}-v`, true); // count the referred visit, fire-and-forget
  const note = $('#refNote');
  if (note) {
    note.hidden = false;
    note.textContent = `🎉 You were invited by ${code} — you've jumped the queue. Drop your email to claim your spot.`;
  }
})();

$$('[data-email-form]').forEach(form => {
  const input = $('input[type=email]', form);
  const btn = $('button[type=submit]', form);
  const source = form.dataset.source || 'unknown';
  const msg = form.parentElement.querySelector('[data-form-msg]')
    || form.closest('section,header,div')?.querySelector('[data-form-msg]');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const v = input.value.trim().toLowerCase();
    if (!emailOK(v)) { say(msg, 'Hmm — that email looks off. Try again?', true); input.focus(); return; }
    // FormSubmit (and most inbox APIs) refuse pages opened as local files.
    // Save locally and tell the founder exactly what to do.
    if (location.protocol === 'file:') {
      const all = getAll();
      if (!all.includes(v)) { all.push(v); localStorage.setItem(KEY, JSON.stringify(all)); }
      paintSpots();
      say(msg, `✓ Saved ${v} in this browser — but inbox delivery is BLOCKED on local files. Push to GitHub Pages (or run: npx serve) and submit from the https link.`, true);
      burst();
      return;
    }
    const old = btn.textContent; btn.textContent = 'Sending…'; btn.disabled = true;
    const referredBy = getRef();
    try {
      const r = await sendLead(v, source, referredBy);
      const all = getAll();
      if (!all.includes(v)) { all.push(v); localStorage.setItem(KEY, JSON.stringify(all)); }
      const pos = await claimSpot(); // shared +1, same number everywhere
      paintSpots();
      if (referredBy) refCount(`ref-${referredBy}-c`, true); // credit the inviter, fire-and-forget
      say(msg, r.mode === 'remote'
        ? `✓ Got it! We received ${v}${referredBy ? ` (invited by ${referredBy} — queue jumped)` : ''} — your growth plan is on its way.`
        : `✓ Saved! (Demo mode — connect ENDPOINT in script.js so ${v} reaches your inbox.)`, false);
      burst(); // confetti
      showRef(v, pos);
    } catch (err) {
      const all = getAll();
      if (!all.includes(v)) { all.push(v); localStorage.setItem(KEY, JSON.stringify(all)); }
      say(msg, `✓ Saved in this browser, but inbox delivery failed (${err.message}). Check ENDPOINT in script.js.`, true);
    } finally {
      btn.textContent = old; btn.disabled = false;
    }
    form.reset();
  });
});
function say(el, txt, err) {
  if (!el) return;
  el.textContent = txt;
  el.classList.toggle('err', !!err);
}
function showRef(email, pos) {
  const box = $('#refbox'); if (!box) return;
  box.hidden = false;
  $('#refPos').textContent = '#' + pos;
  const slug = email.split('@')[0].replace(/[^a-z0-9]+/gi, '').toLowerCase() || 'you';
  const code = `${slug}-${pos}`;
  $('#refLink').textContent = `fastpresspages.github.io/YouLauncher/?ref=${code}`;
  const stats = $('#refStats');
  if (stats) {
    stats.textContent = 'Counting your referrals…';
    refCount(`ref-${code}-c`, false).then(n => {
      stats.textContent = n == null
        ? 'Share your link — referral counts appear here.'
        : n === 0 ? 'No referrals yet — share your link to climb faster.'
        : `🔥 ${n} friend${n === 1 ? '' : 's'} joined with your link!`;
    });
  }
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
$('#copyRef')?.addEventListener('click', async e => {
  const t = $('#refLink').textContent;
  try { await navigator.clipboard.writeText('https://' + t); e.target.textContent = 'Copied ✓'; }
  catch { e.target.textContent = t; }
  setTimeout(() => e.target.textContent = 'Copy referral link', 1800);
});

// 6. tiny confetti (no libs — github.io friendly)
const cv = $('#confetti'), ctx = cv.getContext('2d');
let parts = [];
function sizeCv() { cv.width = innerWidth; cv.height = innerHeight; }
sizeCv(); addEventListener('resize', sizeCv);
function burst() {
  const colors = ['#c8ff3e', '#8b5cf6', '#ff5ca8', '#4de3ff', '#fff'];
  for (let i = 0; i < 120; i++) parts.push({
    x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * 0.35,
    vx: (Math.random() - .5) * 12, vy: Math.random() * -10 - 3,
    s: Math.random() * 7 + 3, c: colors[i % colors.length], r: Math.random() * Math.PI, life: 1
  });
  requestAnimationFrame(tick);
}
function tick() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter(p => p.life > 0);
  parts.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += .35; p.r += .1; p.life -= .008;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.globalAlpha = Math.max(p.life, 0);
    ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); ctx.restore();
  });
  if (parts.length) requestAnimationFrame(tick);
  else ctx.clearRect(0, 0, cv.width, cv.height);
}

// 7. rocket dodges cursor a little (playful)
const rocket = $('#rocket');
addEventListener('pointermove', e => {
  const x = (e.clientX / innerWidth - .5) * 20, y = (e.clientY / innerHeight - .5) * 20;
  rocket.style.translate = `${x}px ${y}px`;
}, { passive: true });
