import React from 'react';
import { Search, Sparkles, CreditCard, LayoutDashboard, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Specify your event date, Kanpur location, guest count, and estimated budget target.",
    icon: Search
  },
  {
    step: "02",
    title: "Compare & Select Vendors",
    desc: "Explore 3 instant AI package options or compare local venues, caterers, and decorators side-by-side.",
    icon: Sparkles
  },
  {
    step: "03",
    title: "Lock Date with 20% Token",
    desc: "Secure all your vendors with a single commitment token held safely in EventX escrow protection.",
    icon: CreditCard
  },
  {
    step: "04",
    title: "Coordinate on One Dashboard",
    desc: "Track preparation timelines, menu approvals, decor walk-throughs, and vendor contacts in one place.",
    icon: LayoutDashboard
  }
];

export default function HowItWorks({ onOpenAIBuilder }) {
  return (
    <section className="py-14 bg-white dark:bg-black transition-colors border-b border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Simple Booking Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-0.5">
            How EventX Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 dark:text-zinc-700">{item.step}</span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenAIBuilder}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Start Planning Your Kanpur Event <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
