import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/kanpurVendors';

export default function ServiceCategories({ onSelectCategory }) {
  return (
    <section className="py-12 bg-white dark:bg-black transition-colors border-b border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Kanpur Event Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-0.5">
              Popular Event Categories
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline transition-all"
          >
            Explore All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Photo-First Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group text-left bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Count Badge on Image */}
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/90 dark:bg-zinc-900/90 text-slate-900 dark:text-white backdrop-blur-xs shadow-xs">
                  {cat.count} Vendors in Kanpur
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">Starting from</span>
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{cat.startingPrice}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
