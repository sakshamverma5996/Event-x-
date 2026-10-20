import React, { useState } from 'react';
import { Search, Calendar, Users, IndianRupee, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { EVENT_TYPES, KANPUR_LOCALITIES } from '../data/kanpurVendors';

export default function Hero({ onSearchSubmit, onOpenAIBuilder }) {
  const [eventType, setEventType] = useState('birthday');
  const [locality, setLocality] = useState('All Kanpur');
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [guests, setGuests] = useState('150');
  const [budget, setBudget] = useState('150000');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit({ eventType, locality, eventDate, guests: Number(guests), budget: Number(budget) });
  };

  return (
    <section className="bg-slate-50 transition-colors pt-8 pb-10 lg:pt-12 lg:pb-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tagline Pill */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Kanpur Event Marketplace • Birthdays, Weddings & Celebrations
          </span>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Every celebration, <span className="text-emerald-600">beautifully planned.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Discover banquet halls, caterers, decorators, photofilm studios, and DJ sound across Kanpur. Compare specs, transparent prices, and lock your date.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="mt-8 max-w-5xl mx-auto bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              
              {/* Event Type */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t.id} value={t.id} className="bg-white text-slate-900">
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Locality */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Kanpur Area
                </label>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer truncate"
                  >
                    <option value="All Kanpur" className="bg-white">All Kanpur Areas</option>
                    {KANPUR_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc} className="bg-white text-slate-900">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Date
                </label>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Guest Count
                </label>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="150"
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Budget
                </label>
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <option value="50000" className="bg-white">Under ₹50k</option>
                    <option value="150000" className="bg-white">₹1.5 Lakhs</option>
                    <option value="300000" className="bg-white">₹3 Lakhs</option>
                    <option value="600000" className="bg-white">₹6 Lakhs+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Transparent Kanpur vendor pricing • Demo data verified</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenAIBuilder}
                  className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Package Planner
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Search className="w-4 h-4" /> Find Vendors
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
