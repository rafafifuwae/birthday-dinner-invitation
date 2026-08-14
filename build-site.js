// Wraps the invitation body into a standalone, hostable page.
// Source of truth stays concept-reserved-donna.html; run this after editing it.
const fs = require('fs');
const path = require('path');

// Everything is written next to this file, which is what GitHub Pages serves.
const DIR  = __dirname;
const SITE = DIR;
const BASE = 'https://rafafifuwae.github.io/birthday-dinner-invitation';

const body = fs.readFileSync(path.join(DIR, 'source.html'), 'utf8')
  .replace(/^<title>.*<\/title>\s*/, '');   // the title moves into <head>

const TITLE = 'Birthday Dinner Invitation';
const DESC  = 'Reserved for Sayang — Friday, 4 September 2026, 20.00 WIB at Donna Bar & Lounge.';

// A champagne "D" on charcoal, inlined so there is no extra request.
const ICON = 'data:image/svg+xml,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
  `<rect width="64" height="64" rx="10" fill="#0F0C0A"/>` +
  `<rect x="4.5" y="4.5" width="55" height="55" rx="7" fill="none" stroke="#C8AE79" stroke-width="1.4" opacity=".6"/>` +
  `<text x="32" y="43" font-family="Futura,Century Gothic,Avenir Next,sans-serif" font-size="30" ` +
  `letter-spacing="1" text-anchor="middle" fill="#E7D6AE">D</text></svg>`
);

const head = (extra = '') => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${TITLE}</title>
<meta name="description" content="${DESC}">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#070605">
<meta name="color-scheme" content="dark">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Invitation">
<link rel="icon" href="${ICON}">
<link rel="apple-touch-icon" href="${ICON}">
<meta property="og:type" content="website">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${DESC}">
<meta property="og:url" content="${BASE}/">
<meta property="og:image" content="${BASE}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<style>
  html,body{ margin:0; padding:0; }
  img,svg,canvas{ max-width:100%; }
</style>
${extra}</head>
<body>
`;

fs.mkdirSync(SITE, { recursive: true });

fs.writeFileSync(path.join(SITE, 'index.html'), head() + body + '\n</body>\n</html>\n');

// A 1200×630 crop of the card's head, for the WhatsApp / link preview.
const ogCss = `<style>
  body{ padding:0 !important; height:630px; display:flex; align-items:center; justify-content:center; }
  .stage{ width:100%; }
  .card{ width:min(90%, 44rem) !important; padding:3.4rem 3rem 3.6rem !important; }
  .inner{ gap:1.6rem; }
  .inner > *:nth-child(n+5){ display:none; }
  .foot{ display:none; }
  *{ transition:none !important; animation:none !important; }
</style>
<script>addEventListener('load',function(){document.documentElement.classList.add('ready')});<\/script>`;

fs.writeFileSync(path.join(SITE, 'og.html'), head(ogCss) + body + '\n</body>\n</html>\n');

fs.writeFileSync(path.join(SITE, 'robots.txt'), 'User-agent: *\nDisallow: /\n');

console.log('Wrote index.html, robots.txt, and og.html.');
console.log('og.html is only scaffolding: screenshot it at 1200x630 to refresh');
console.log('og.png, then delete it. It is gitignored, so it will not be pushed.');
