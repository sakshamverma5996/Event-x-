import React from 'react';
import { MapPin, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ setActivePage, setActivePortal, onOpenCitySelector }) {
  return (
    <footer className="w-full bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-200 dark:border-zinc-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-lg shadow-xs">
                X
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                Event<span className="text-emerald-600 dark:text-emerald-400">X</span>
              </span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                Kanpur
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              India's premier small event marketplace targeting Kanpur & UP. Plan birthdays, engagements, weddings, and corporate gatherings by discovering, comparing, and booking local vendors through one unified platform.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Verified Kanpur Vendors
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                <Sparkles className="w-4 h-4 text-emerald-600" /> AI Bundled Pricing
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Marketplace</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActivePortal('customer');
                    setActivePage('discovery');
                  }}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Explore Vendors
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePortal('customer');
                    setActivePage('ai-builder');
                  }}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-emerald-500" /> AI Package Planner
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePortal('customer');
                    setActivePage('customer-dashboard');
                  }}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  My Events
                </button>
              </li>
              <li>
                <button onClick={onOpenCitySelector} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  City Selection (Kanpur)
                </button>
              </li>
            </ul>
          </div>

          {/* Vendor Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">For Vendors</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActivePortal('vendor');
                    setActivePage('vendor-dashboard');
                  }}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-bold text-emerald-600 dark:text-emerald-400"
                >
                  List Your Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePortal('vendor');
                    setActivePage('vendor-dashboard');
                  }}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Vendor Portal Dashboard
                </button>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">Kanpur Partner Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Kanpur Hub</h4>
            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>14/110, Swaroop Nagar, Near Motijheel Gate, Kanpur, UP 208002</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+91 0512 2548900 / +91 98390 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>kanpur@eventx.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 EventX Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="px-3 py-1 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-400 rounded-full text-[11px] font-medium border border-slate-200 dark:border-zinc-800">
            Kanpur Prototype Demo • Data simulated for Kanpur local market
          </div>
        </div>
      </div>
    </footer>
  );
}
