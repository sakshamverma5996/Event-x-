import React from 'react';
import { Scale, X, ArrowRight, Trash2 } from 'lucide-react';

export default function ComparisonDrawer({ compareList, setCompareList, onOpenCompare }) {
  if (!compareList || compareList.length === 0) return null;

  const removeFromCompare = (vendorId) => {
    setCompareList(compareList.filter((v) => v.id !== vendorId));
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-3xl bg-white/95 dark:bg-zinc-900/95 text-slate-900 dark:text-white backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
      {/* Title & Vendors preview */}
      <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        <div className="flex items-center gap-2 pr-2 border-r border-slate-200 dark:border-zinc-800 shrink-0">
          <div className="p-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-xl">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              Compare Vendors
              <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-1.5 py-0.2 rounded-full">
                {compareList.length}/4
              </span>
            </div>
            <div className="text-[10px] text-slate-500 hidden sm:block">Side-by-side specs</div>
          </div>
        </div>

        {/* Selected Vendors list */}
        <div className="flex items-center gap-2">
          {compareList.map((vendor) => (
            <div
              key={vendor.id}
              className="relative group shrink-0 flex items-center gap-2 pl-1.5 pr-2.5 py-1 bg-slate-100 dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs"
            >
              <img src={vendor.images[0]} alt={vendor.name} className="w-6 h-6 rounded-md object-cover" />
              <span className="font-semibold max-w-[100px] truncate text-slate-800 dark:text-slate-200">{vendor.name}</span>
              <button
                onClick={() => removeFromCompare(vendor.id)}
                className="text-slate-400 hover:text-rose-500 transition-colors ml-0.5"
                title="Remove"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
        <button
          onClick={() => setCompareList([])}
          className="p-2 text-slate-400 hover:text-rose-500 text-xs flex items-center gap-1 transition-colors"
          title="Clear all"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden md:inline">Clear</span>
        </button>

        <button
          onClick={onOpenCompare}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 shrink-0"
        >
          Compare Side-by-Side <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
