// Replace these with your real URLs
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
});
