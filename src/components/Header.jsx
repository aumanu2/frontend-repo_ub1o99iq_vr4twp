import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-10 bg-gradient-to-b from-indigo-600 to-indigo-500 text-white">
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
          <Rocket className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Luxury Services Extension</h1>
          <p className="text-white/90 mt-1 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-300" />
            Access booking and offers from your toolbar in one click
          </p>
        </div>
      </div>
    </header>
  );
}
