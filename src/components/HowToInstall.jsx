import React from 'react';

export default function HowToInstall() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">How to test the Chrome Extension locally</h2>
      <ol className="mt-4 space-y-3 list-decimal list-inside text-slate-700 dark:text-slate-300">
        <li>Download the extension files the page provides (manifest.json, popup.html, popup.js, popup.css) into a single folder on your computer.</li>
        <li>Open Google Chrome and go to chrome://extensions.</li>
        <li>Enable Developer mode (toggle in the top-right corner).</li>
        <li>Click "Load unpacked" and select the folder containing the extension files.</li>
        <li>A new toolbar icon will appear. Click it to open the popup and use the buttons.</li>
      </ol>
      <p className="mt-4 text-sm text-slate-500">Tip: If you edit files, click the refresh icon on the extension card in chrome://extensions to reload.</p>
    </section>
  );
}
