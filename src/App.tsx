import { useState } from 'react';

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="flex flex-col items-center gap-6 px-12 py-10 rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-slate-800">
        <h1 className="text-5xl font-bold tracking-tight">Wordle Clone</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest">Scaffold ready</p>
        <button
          type="button"
          onClick={() => setClicks((c) => c + 1)}
          className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-colors font-medium shadow-sm"
        >
          Clicks: {clicks}
        </button>
      </div>
    </main>
  );
}
