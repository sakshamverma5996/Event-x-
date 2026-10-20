import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function AIPackagePreview({ onOpenAIBuilder }) {
  return (
    <section className="py-14 bg-emerald-50/40 transition-colors border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Event Package Bundles
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Custom Event Packages in Kanpur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Specify your guest count and budget target. We bundle verified local venues, caterers, decorators, and photographers.
          </p>
        </div>

        {/* 3 Package Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Budget Saver */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Value Tier</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  Saver Option
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Budget Saver</h3>
              <p className="text-xs text-slate-500 mb-4">Top quality Kanpur providers optimized for tighter budgets.</p>

              <div className="text-2xl font-extrabold text-slate-900 mb-5">
                ₹85,000 <span className="text-xs font-normal text-slate-500">est. bundle</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rooftop / AC Banquet Hall Venue</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Veg Buffet Catering (100 Guests)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pastel Theme Stage Decor</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Traditional Photography & HD Video</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenAIBuilder}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              Customize Saver Bundle <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Balanced Choice (Recommended) */}
          <div className="relative bg-white rounded-2xl p-6 border-2 border-emerald-500 shadow-md flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider">
              Recommended Choice
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Best Value</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                  4.9★ Rated
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Balanced Choice</h3>
              <p className="text-xs text-slate-500 mb-4">Lawn venue, Awadhi biryani catering & cinematic video.</p>

              <div className="text-2xl font-extrabold text-emerald-600 mb-5">
                ₹2,45,000 <span className="text-xs font-normal text-slate-500">est. bundle</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-900">Grand Lawn & AC Banquet (Swaroop Nagar)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Awadhi Buffet & Live Chaat (200 Guests)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Royal Fresh Floral Stage & Fairy Lights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>4K Cinematic Film + Drone Shoot</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Concert DJ & Cold Pyro Guns</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenAIBuilder}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              Build Balanced Bundle <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Premium Luxe */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Grand Luxury</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800">
                  Luxe Option
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Premium Luxe</h3>
              <p className="text-xs text-slate-500 mb-4">Heritage estate, HD bridal makeup & multi-course feast.</p>

              <div className="text-2xl font-extrabold text-slate-900 mb-5">
                ₹5,80,000 <span className="text-xs font-normal text-slate-500">est. bundle</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Royal Heritage Estate (Civil Lines)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Gold Royal Feast (5 Starters, Biryani, Pasta)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Imported Floral Mandap & German Hangar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Full Cinema & Drone Crew (2 Albums)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>HD Airbrush Makeup + Punjab Dhol</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenAIBuilder}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              Customize Luxe Bundle <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
