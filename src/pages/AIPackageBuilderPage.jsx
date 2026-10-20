import React, { useState } from 'react';
import { Sparkles, Calendar, IndianRupee, Check, ArrowRight, ChevronRight } from 'lucide-react';
import { EVENT_TYPES, VENDORS } from '../data/kanpurVendors';

export default function AIPackageBuilderPage({ onProceedToCheckout, onSelectVendor }) {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState('engagement');
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [guestCount, setGuestCount] = useState(200);
  const [budgetTarget, setBudgetTarget] = useState(250000);
  const [foodPref, setFoodPref] = useState('veg');
  const [vibe, setVibe] = useState('royal');
  const [selectedBundleTier, setSelectedBundleTier] = useState('balanced');

  const generateBundles = () => {
    const budgetVenue = VENDORS.find((v) => v.id === 'v-103') || VENDORS[0];
    const balancedVenue = VENDORS.find((v) => v.id === 'v-101') || VENDORS[0];
    const luxeVenue = VENDORS.find((v) => v.id === 'v-102') || VENDORS[1];

    const budgetCatering = VENDORS.find((v) => v.id === 'v-105') || VENDORS[4];
    const balancedCatering = VENDORS.find((v) => v.id === 'v-104') || VENDORS[3];
    const luxeCatering = VENDORS.find((v) => v.id === 'v-104') || VENDORS[3];

    const budgetDecor = VENDORS.find((v) => v.id === 'v-107') || VENDORS[6];
    const balancedDecor = VENDORS.find((v) => v.id === 'v-106') || VENDORS[5];
    const luxeDecor = VENDORS.find((v) => v.id === 'v-106') || VENDORS[5];

    const budgetPhoto = VENDORS.find((v) => v.id === 'v-109') || VENDORS[8];
    const balancedPhoto = VENDORS.find((v) => v.id === 'v-108') || VENDORS[7];
    const luxePhoto = VENDORS.find((v) => v.id === 'v-108') || VENDORS[7];

    const balancedDJ = VENDORS.find((v) => v.id === 'v-110') || VENDORS[9];
    const luxeDhol = VENDORS.find((v) => v.id === 'v-111') || VENDORS[10];

    const budgetTotal = budgetVenue.startingPrice + (budgetCatering.startingPrice * guestCount) + budgetDecor.startingPrice + budgetPhoto.startingPrice;
    const balancedTotal = balancedVenue.startingPrice + (balancedCatering.startingPrice * guestCount) + balancedDecor.startingPrice + balancedPhoto.startingPrice + (balancedDJ?.startingPrice || 15000);
    const luxeTotal = luxeVenue.startingPrice + ((luxeCatering.startingPrice + 200) * guestCount) + luxeDecor.startingPrice + (luxePhoto.startingPrice + 35000) + (balancedDJ?.startingPrice || 15000) + luxeDhol.startingPrice;

    return {
      budget: {
        name: "Budget Saver Bundle",
        tag: "Maximum Value",
        total: budgetTotal,
        items: [
          { category: "Venue", vendor: budgetVenue, cost: budgetVenue.startingPrice },
          { category: "Catering", vendor: budgetCatering, cost: budgetCatering.startingPrice * guestCount, detail: `${guestCount} Guests @ ₹${budgetCatering.startingPrice}/plate` },
          { category: "Decor", vendor: budgetDecor, cost: budgetDecor.startingPrice },
          { category: "Photography", vendor: budgetPhoto, cost: budgetPhoto.startingPrice }
        ]
      },
      balanced: {
        name: "Balanced Kanpur Choice",
        tag: "Recommended Option",
        total: balancedTotal,
        items: [
          { category: "Venue & Lawn", vendor: balancedVenue, cost: balancedVenue.startingPrice },
          { category: "Gourmet Catering", vendor: balancedCatering, cost: balancedCatering.startingPrice * guestCount, detail: `${guestCount} Guests @ ₹${balancedCatering.startingPrice}/plate (Awadhi Buffet & Live Chaat)` },
          { category: "Floral Stage Decor", vendor: balancedDecor, cost: balancedDecor.startingPrice },
          { category: "Cinematic Photography", vendor: balancedPhoto, cost: balancedPhoto.startingPrice },
          { category: "Concert DJ & Sound", vendor: balancedDJ, cost: balancedDJ.startingPrice }
        ]
      },
      luxe: {
        name: "Premium Royal Luxe",
        tag: "VIP Celebration",
        total: luxeTotal,
        items: [
          { category: "Heritage Palace Venue", vendor: luxeVenue, cost: luxeVenue.startingPrice },
          { category: "Gold Royal Banquet Catering", vendor: luxeCatering, cost: (luxeCatering.startingPrice + 200) * guestCount, detail: `${guestCount} Guests @ ₹${luxeCatering.startingPrice + 200}/plate (Multi-course & Live Pasta)` },
          { category: "Royal Mandap & Entrance Decor", vendor: luxeDecor, cost: luxeDecor.startingPrice },
          { category: "Full Cinema & Drone Crew", vendor: luxePhoto, cost: luxePhoto.startingPrice + 35000 },
          { category: "DJ + Punjab Dhol Troupe", vendor: luxeDhol, cost: luxeDhol.startingPrice + 15000 }
        ]
      }
    };
  };

  const bundles = generateBundles();
  const activeBundle = bundles[selectedBundleTier];

  return (
    <div className="min-h-screen py-8 bg-slate-50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" /> Event Package Planner
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Plan Your Kanpur Event in 3 Easy Steps
          </h1>

          <div className="flex items-center justify-center gap-2 pt-2">
            {[
              { num: 1, label: "Event Specs" },
              { num: 2, label: "Budget & Vibe" },
              { num: 3, label: "Package Bundles" }
            ].map((s) => (
              <div
                key={s.num}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  step === s.num
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : step > s.num
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                <span>{s.num}. {s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-fade-in">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" /> 1. Event Specs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Guests in Kanpur
                  </label>
                  <span className="font-extrabold text-emerald-600 text-base">{guestCount} Guests</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                Next: Budget & Vibe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-fade-in">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-emerald-600" /> 2. Target Budget & Food Vibe
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Target Total Budget
                  </label>
                  <span className="font-extrabold text-emerald-600 text-lg">
                    ₹{budgetTarget.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={budgetTarget}
                  onChange={(e) => setBudgetTarget(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Food Catering Preference
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFoodPref('veg')}
                    className={`p-4 rounded-xl border-2 font-bold text-xs text-left transition-all ${
                      foodPref === 'veg'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="text-base mb-1">🥦 100% Pure Veg Menu</div>
                    <div className="text-[11px] text-slate-500 font-normal">Pure Veg & Jain Caterers</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFoodPref('nonveg')}
                    className={`p-4 rounded-xl border-2 font-bold text-xs text-left transition-all ${
                      foodPref === 'nonveg'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="text-base mb-1">🍗 Veg & Non-Veg Awadhi</div>
                    <div className="text-[11px] text-slate-500 font-normal">Biryani & Kebabs live stalls</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Decor Theme & Vibe
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'royal', label: '👑 Royal Heritage', desc: 'Maroon & Gold' },
                    { id: 'modern', label: '✨ Modern Pastel', desc: 'Pink Hydrangeas & Fairy lights' },
                    { id: 'traditional', label: '🌺 Traditional Marigold', desc: 'Yellow & Diyas' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVibe(v.id)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        vibe === v.id
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs">{v.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{v.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-3 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Generate Bundles
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'budget', bundle: bundles.budget, badge: 'Value Saver' },
                { id: 'balanced', bundle: bundles.balanced, badge: 'Recommended' },
                { id: 'luxe', bundle: bundles.luxe, badge: 'Grand Luxe' }
              ].map((tier) => {
                const isSelected = selectedBundleTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedBundleTier(tier.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-white shadow-md ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-white hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tier.badge}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg">{tier.bundle.name}</h3>
                    <div className="text-2xl font-extrabold text-emerald-600 mt-2">
                      ₹{tier.bundle.total.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{tier.bundle.items.length} Bundled Vendors</div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Selected Bundle Breakdown</span>
                  <h2 className="text-2xl font-extrabold text-slate-900">{activeBundle.name}</h2>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-500">Itemized Total</div>
                  <div className="text-3xl font-extrabold text-slate-900">
                    ₹{activeBundle.total.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {activeBundle.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img src={item.vendor.images[0]} alt={item.vendor.name} className="w-14 h-14 rounded-xl object-cover" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-slate-900 text-base">{item.vendor.name}</h4>
                        <p className="text-xs text-slate-500">
                          {item.detail || `${item.vendor.locality}, Kanpur • ${item.vendor.rating}★`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0">
                      <div className="text-right">
                        <div className="font-bold text-slate-900 text-base">
                          ₹{item.cost.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectVendor(item.vendor)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-500 font-bold hover:underline"
                >
                  Modify Specs
                </button>

                <button
                  onClick={() => onProceedToCheckout({ bundleName: activeBundle.name, total: activeBundle.total, vendors: activeBundle.items, guestCount, eventDate })}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Booking <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
