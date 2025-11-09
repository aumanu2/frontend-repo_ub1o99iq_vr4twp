import React from 'react';

export default function FeatureCard({ title, description, actionLabel, onClick }) {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mt-1">{description}</p>
      <button
        onClick={onClick}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        {actionLabel}
      </button>
    </div>
  );
}
