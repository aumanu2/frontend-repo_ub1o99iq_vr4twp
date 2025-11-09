import React from 'react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import HowToInstall from './components/HowToInstall';
import ExtensionFiles from './components/ExtensionFiles';

export default function App() {
  const openDemo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="max-w-5xl mx-auto px-6 -mt-8">
        <section className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Book Now"
            description="Opens your booking page in a new tab for instant access."
            actionLabel="Open Booking"
            onClick={() => openDemo('https://example.com/booking')}
          />
          <FeatureCard
            title="View Offers"
            description="Takes users straight to your curated offers page."
            actionLabel="See Offers"
            onClick={() => openDemo('https://example.com/offers')}
          />
          <FeatureCard
            title="Visit Website"
            description="Launches your main website homepage in a new tab."
            actionLabel="Go to Site"
            onClick={() => openDemo('https://example.com')}
          />
        </section>

        <ExtensionFiles />
        <HowToInstall />
      </main>

      <footer className="py-10 text-center text-slate-500">
        Built for quick access to your luxury services.
      </footer>
    </div>
  );
}
