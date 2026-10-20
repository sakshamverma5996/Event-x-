import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid, List, X, MapPin, Sparkles, RefreshCw } from 'lucide-react';
import { SERVICE_CATEGORIES, KANPUR_LOCALITIES } from '../data/kanpurVendors';
import VendorCard from '../components/VendorCard';

export default function VendorDiscoveryPage({
  vendors,
  selectedCategory,
  setSelectedCategory,
  onSelectVendor,
  onOpenContact,
  wishlist,
  setWishlist,
  compareList,
  setCompareList,
  searchPreset
}) {
  const [searchQuery, setSearchQuery] = useState(searchPreset?.query || '');
  const [selectedLocality, setSelectedLocality] = useState(searchPreset?.locality || 'all');
  const [maxPrice, setMaxPrice] = useState(searchPreset?.budget || 200000);
  const [minRating, setMinRating] = useState(0);
  const [minGuestCapacity, setMinGuestCapacity] = useState(0);
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredVendors = useMemo(() => {
    return vendors
      .filter((v) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesName = v.name.toLowerCase().includes(q);
          const matchesLoc = v.locality.toLowerCase().includes(q);
          const matchesTags = v.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchesName && !matchesLoc && !matchesTags) return false;
        }

        if (selectedCategory && selectedCategory !== 'all' && v.category !== selectedCategory) {
          return false;
        }

        if (selectedLocality !== 'all' && v.locality !== selectedLocality) {
          return false;
        }

        if (v.startingPrice > maxPrice) return false;
        if (v.rating < minRating) return false;
        if (minGuestCapacity > 0 && v.capacityMax < minGuestCapacity) return false;
        if (onlyVerified && !v.verified) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-high') return b.startingPrice - a.startingPrice;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [vendors, searchQuery, selectedCategory, selectedLocality, maxPrice, minRating, minGuestCapacity, onlyVerified, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLocality('all');
    setMaxPrice(200000);
    setMinRating(0);
    setMinGuestCapacity(0);
    setOnlyVerified(false);
    setSortBy('recommended');
  };

  const hasActiveFilters =
    searchQuery ||
    (selectedCategory && selectedCategory !== 'all') ||
    selectedLocality !== 'all' ||
    maxPrice < 200000 ||
    minRating > 0 ||
    minGuestCapacity > 0 ||
    onlyVerified;

  return (
    <div className="min-h-screen py-8 bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Sparkles className="w-4 h-4" /> Local Event Marketplace
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
              Explore Kanpur Vendors
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Showing {filteredVendors.length} of {vendors.length} verified vendors in Kanpur
            </p>
          </div>

          {/* Search & View Mode */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search venue, caterer, decor..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center p-1 bg-white rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'list'
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Services ({vendors.length})
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filters Sidebar + Vendor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <aside className="space-y-6 bg-white p-6 rounded-2xl border border-slate-200 h-fit sticky top-24 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-600" /> Filters
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-500 font-semibold hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {/* Kanpur Locality */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Kanpur Locality
              </label>
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Kanpur Areas</option>
                {KANPUR_LOCALITIES.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Max Price */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold uppercase tracking-wider text-slate-500">
                  Max Starting Price
                </label>
                <span className="font-extrabold text-emerald-600">
                  ₹{(maxPrice).toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Minimum Rating */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Minimum Rating
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[0, 4.5, 4.8, 4.9].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setMinRating(rate)}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      minRating === rate
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {rate === 0 ? 'Any' : `${rate}★`}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Capacity */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Guest Capacity (Min)
              </label>
              <select
                value={minGuestCapacity}
                onChange={(e) => setMinGuestCapacity(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value={0}>Any Capacity</option>
                <option value={100}>100+ Guests</option>
                <option value={300}>300+ Guests</option>
                <option value={500}>500+ Guests</option>
              </select>
            </div>

            {/* Verified Only */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  checked={onlyVerified}
                  onChange={(e) => setOnlyVerified(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                />
                Verified Kanpur Vendors Only
              </label>
            </div>
          </aside>

          {/* Vendors Output */}
          <main className="lg:col-span-3 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 text-slate-900 font-bold px-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none cursor-pointer"
                >
                  <option value="recommended">Recommended (Popular First)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated (Highest First)</option>
                </select>
              </div>
            </div>

            {filteredVendors.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-4">
                <Search className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">No Vendors Found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your filters or price range to find available event services in Kanpur.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVendors.map((vendor) => (
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
            ) : (
              <div className="space-y-4">
                {filteredVendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    onClick={() => onSelectVendor(vendor)}
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex flex-col sm:flex-row items-center gap-5 cursor-pointer shadow-xs"
                  >
                    <img
                      src={vendor.images[0]}
                      alt={vendor.name}
                      className="w-full sm:w-48 h-36 rounded-xl object-cover"
                    />

                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                          {vendor.category}
                        </span>
                        <div className="flex items-center gap-1 font-bold text-xs">
                          ★ {vendor.rating} ({vendor.reviewCount})
                        </div>
                      </div>

                      <h3 className="font-bold text-slate-900 text-lg">{vendor.name}</h3>

                      <p className="text-xs text-slate-500 line-clamp-2">{vendor.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-600" /> {vendor.locality}, Kanpur</span>
                      </div>
                    </div>

                    <div className="sm:border-l border-slate-100 sm:pl-5 flex flex-row sm:flex-col justify-between items-end gap-3 w-full sm:w-auto shrink-0">
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 uppercase">Starting</div>
                        <div className="text-lg font-extrabold text-slate-900">
                          ₹{vendor.startingPrice.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectVendor(vendor)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>

      </div>
    </div>
  );
}
