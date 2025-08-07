import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import './App.css';

export default function App() {
  const [revenue, setRevenue] = useState(250000);

  const base = 72000;
  const bonus = revenue > 100000 ? (revenue - 100000) * 0.02 : 0;
  const total = base + bonus;

  return (
    <div className="px-6 py-10 font-inter bg-black text-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-geist">AJR DISCOS | MEDIA MANAGEMENT</h1>
        <p className="text-red-400 mt-2 font-jakarta">
          Proposal by David Hamilton
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold font-jakarta">Stats Overview</h2>
        <ul className="mt-4 space-y-1 text-gray-300">
          <li>• 4M Subscribers</li>
          <li>• $255K+ Current Revenue</li>
          <li>• 12M Monthly Views</li>
          <li>• $12M Annual Revenue Target</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold font-jakarta mb-4">Compensation Calculator</h2>
        <div className="text-sm text-gray-400 mb-2">Monthly Revenue: ${revenue.toLocaleString()}</div>
        <input
          type="range"
          min="100000"
          max="2000000"
          step="10000"
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
          className="w-full mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-900 rounded">
            <p>Base Salary</p>
            <h3 className="text-lg font-bold text-red-400">${base.toLocaleString()}</h3>
          </div>
          <div className="p-4 bg-gray-900 rounded">
            <p>Performance Bonus</p>
            <h3 className="text-lg font-bold text-red-400">${Math.round(bonus).toLocaleString()}</h3>
          </div>
          <div className="p-4 bg-red-900/40 border border-red-700 rounded">
            <p>Total Compensation</p>
            <h3 className="text-xl font-bold text-red-500">${Math.round(total).toLocaleString()}</h3>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500 italic">
          *Profit sharing up to 5% negotiable after 36 months.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold font-jakarta">Growth Plan Snapshot</h2>
        <p className="mt-3 text-gray-400">
          A 9-month roadmap to scale the AJR DISCOS YouTube channel to $1M/mo in revenue.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 rounded p-4 text-sm">
            <h3 className="font-bold text-red-400 mb-1">Months 1–3</h3>
            <ul className="text-gray-300 space-y-1">
              <li>✅ Audit existing videos</li>
              <li>✅ Launch Patreon, sponsors, affiliate trials</li>
              <li>✅ Post: 3 long-form & 5 Shorts/week</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded p-4 text-sm">
            <h3 className="font-bold text-red-400 mb-1">Months 4–6</h3>
            <ul className="text-gray-300 space-y-1">
              <li>⬆️ Scale viral content</li>
              <li>🤝 Brand + label integrations</li>
              <li>📈 Memberships + early merch drops</li>
              <li>📅 Post: 5 long-form & Shorts daily</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded p-4 text-sm">
            <h3 className="font-bold text-red-400 mb-1">Months 7–9</h3>
            <ul className="text-gray-300 space-y-1">
              <li>🧰 Bundle products + launch sample packs</li>
              <li>🎓 Launch courses, remix contests</li>
              <li>🎤 Big collabs + repurpose content</li>
              <li>📌 Optimize all streams</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-700 pt-6 mt-10 text-center text-sm text-gray-500">
        Proposal by David Hamilton – Media Manager | AJR DISCOS  
      </footer>
    </div>
  );
}
