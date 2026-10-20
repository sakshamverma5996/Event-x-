import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import VendorCard from './VendorCard';

export default function PopularVendors({
  vendors,
  onSelectVendor,
  onOpenContact,
  wishlist,
  setWishlist,
  compareList,
  setCompareList,
  onViewAll
}) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredVendors = activeTab === 'all'
    ? vendors
    : vendors.filter((v) => v.category === activeTab);

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Sparkles className="w-4 h-4" /> Top Rated in Kanpur
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Popular Local Vendors & Venues
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Vendors' },
              { id: 'venues', label: 'Banquet & Lawns' },
              { id: 'catering', label: 'Catering' },
              { id: 'decorators', label: 'Decor' },
              { id: 'photographers', label: 'Photography' },
              { id: 'djs', label: 'DJ Sound' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.slice(0, 6).map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              onSelectVendor={onSelectVendor}
              onOpenContact={onOpenContact}
              wishlist={wishlist}
              setWishlist={setWishlist}
              compareList={compareList}
              setCompareList={setCompareList}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-xs transition-all"
          >
            Explore All 60+ Kanpur Vendors <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
