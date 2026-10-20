import React from 'react';
import { Store, Star, CheckCircle, ArrowRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Vikram & Neha Malhotra",
    location: "Swaroop Nagar, Kanpur",
    event: "Engagement Ceremony",
    rating: 5,
    text: "Booking The Grand Imperial Lawn along with Kanpur Delights catering through EventX saved us weeks of running around. Everything was synchronized perfectly on our event date."
  },
  {
    name: "Dr. Alok Srivastava",
    location: "Civil Lines, Kanpur",
    event: "25th Anniversary",
    rating: 5,
    text: "The side-by-side vendor comparison feature made choosing decor and photography so simple. Transparent pricing with zero hidden charges."
  }
];

export default function TrustBadgeSection({ onOpenVendorOnboarding }) {
  return (
    <section className="py-14 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Customer Reviews */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Customer Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-0.5">
              Trusted by Event Hosts Across Kanpur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    {t.event}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{t.text}"
                </p>

                <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-slate-500 text-[11px]">{t.location}</div>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Host
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Onboarding Light Banner */}
        <div className="rounded-2xl bg-emerald-50/80 dark:bg-zinc-900 text-slate-900 dark:text-white p-6 sm:p-8 border border-emerald-200 dark:border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[11px]">
              <Store className="w-3.5 h-3.5" /> For Kanpur Vendors & Partners
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Are you an event vendor in Kanpur?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Join EventX Kanpur marketplace to list your venue, catering, decor, photography, or DJ business. Get direct customer leads and token deposits.
            </p>
          </div>

          <button
            onClick={onOpenVendorOnboarding}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 shrink-0"
          >
            List Your Business <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
