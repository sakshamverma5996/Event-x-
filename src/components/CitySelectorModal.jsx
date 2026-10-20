import React from 'react';
import { MapPin, X, Check, Sparkles } from 'lucide-react';

const CITIES = [
  { name: "Kanpur", state: "Uttar Pradesh", active: true, tag: "Live Marketplace", localCount: "350+ Vendors" },
  { name: "Lucknow", state: "Uttar Pradesh", active: false, tag: "Launching Q4", localCount: "Waitlist open" },
  { name: "Varanasi", state: "Uttar Pradesh", active: false, tag: "Coming Soon", localCount: "Waitlist open" },
  { name: "Agra", state: "Uttar Pradesh", active: false, tag: "Coming Soon", localCount: "Waitlist open" },
  { name: "Delhi NCR", state: "NCR Region", active: false, tag: "Coming Soon", localCount: "Waitlist open" },
  { name: "Prayagraj", state: "Uttar Pradesh", active: false, tag: "Coming Soon", localCount: "Waitlist open" }
];

export default function CitySelectorModal({ isOpen, onClose, selectedCity, setSelectedCity }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Select Event City</h3>
              <p className="text-xs text-slate-500">Currently serving Kanpur with verified local vendors</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cities Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
          {CITIES.map((city) => {
            const isSelected = selectedCity === city.name;
            return (
              <button
                key={city.name}
                onClick={() => {
                  if (city.active) {
                    setSelectedCity(city.name);
                    onClose();
                  }
                }}
                disabled={!city.active}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20"
                    : city.active
                    ? "border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50"
                    : "border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-sm text-slate-900">
                    {city.name}
                    {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{city.state}</div>
                </div>

                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  city.active
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-200 text-slate-600"
                }`}>
                  {city.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Expanding across UP soon
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-opacity"
          >
            Confirm City
          </button>
        </div>
      </div>
    </div>
  );
}
