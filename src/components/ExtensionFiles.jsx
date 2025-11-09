import React from 'react';

const codeBlock = (label, code) => (
  <div className="mb-8">
    <div className="text-sm font-medium text-slate-700 mb-2">{label}</div>
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{code}</code></pre>
  </div>
);

export default function ExtensionFiles() {
  const manifest = `{
  "manifest_version": 3,
  "name": "Luxury Services",
  "version": "1.0.0",
  "description": "Quick access to booking and exclusive offers from the toolbar.",
  "action": {
    "default_popup": "popup.html",
    "default_title": "Luxury Services"
  },
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}`;

  const popupHtml = `<!doctype html>
<html>
  <head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>Luxury Services</title>
    <link rel=\"stylesheet\" href=\"popup.css\" />
  </head>
  <body>
    <div class=\"container\">
      <header>
        <div class=\"logo\">✨</div>
        <div class=\"title\">
          <h1>Luxury Services</h1>
          <p>Instant access to booking & offers</p>
        </div>
      </header>

      <main>
        <button id=\"bookBtn\" class=\"btn primary\">Book Now</button>
        <button id=\"offersBtn\" class=\"btn\">View Offers</button>
        <button id=\"siteBtn\" class=\"btn ghost\">Visit Website</button>
      </main>

      <footer>
        <small>v1.0.0 • Manifest V3</small>
      </footer>
    </div>
    <script src=\"popup.js\"></script>
  </body>
</html>`;

  const popupJs = `// Update these URLs to your real pages
const BOOKING_URL = 'https://example.com/booking';
const OFFERS_URL = 'https://example.com/offers';
const SITE_URL = 'https://example.com';

function openTab(url) {
  chrome.tabs.create({ url });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bookBtn').addEventListener('click', () => openTab(BOOKING_URL));
  document.getElementById('offersBtn').addEventListener('click', () => openTab(OFFERS_URL));
  document.getElementById('siteBtn').addEventListener('click', () => openTab(SITE_URL));
});`;

  const popupCss = `:root{ --bg:#0f172a; --card:#111827; --muted:#94a3b8; --brand:#4f46e5; --brand-600:#4f46e5; --brand-700:#4338ca; }
*{ box-sizing:border-box; }
html,body{ margin:0; padding:0; background:var(--bg); color:white; font:14px/1.4 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
.container{ width:320px; padding:16px; background:var(--card); }
header{ display:flex; gap:10px; align-items:center; margin-bottom:12px; }
.logo{ width:36px; height:36px; display:grid; place-items:center; border-radius:10px; background:linear-gradient(135deg, #22d3ee, #6366f1); }
.title h1{ font-size:16px; margin:0; }
.title p{ margin:2px 0 0; color:var(--muted); font-size:12px; }
main{ display:grid; gap:8px; }
.btn{ width:100%; padding:10px 12px; border-radius:10px; border:1px solid #1f2937; background:#0b1220; color:white; cursor:pointer; transition:.2s; }
.btn:hover{ background:#0e1628; }
.btn.primary{ background:var(--brand-600); border-color:transparent; }
.btn.primary:hover{ background:var(--brand-700); }
.btn.ghost{ background:transparent; border-color:#334155; color:#cbd5e1; }
footer{ margin-top:12px; color:#64748b; text-align:center; font-size:11px; }`;

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Chrome Extension Files</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">Copy the following into a folder to load as an unpacked extension.</p>
      {codeBlock('manifest.json', manifest)}
      {codeBlock('popup.html', popupHtml)}
      {codeBlock('popup.js', popupJs)}
      {codeBlock('popup.css', popupCss)}
    </section>
  );
}
