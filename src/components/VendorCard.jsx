import React, { useState } from 'react';
import { Star, MapPin, Users, Heart, Scale, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VendorCard({
  vendor,
  onSelectVendor,
  onOpenContact,
  wishlist = [],
  setWishlist,
  compareList = [],
  setCompareList
}) {
  const isWishlisted = wishlist.some((v) => v.id === vendor.id);
  const isCompared = compareList.some((v) => v.id === vendor.id);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    if (isWishlisted) {
      setWishlist(wishlist.filter((v) => v.id !== vendor.id));
    } else {
      setWishlist([...wishlist, vendor]);
    }
  };

  const toggleCompare = (e) => {
    e.stopPropagation();
    if (isCompared) {
      setCompareList(compareList.filter((v) => v.id !== vendor.id));
    } else {
      if (compareList.length >= 4) {
        alert("You can compare up to 4 vendors at a time.");
        return;
      }
      setCompareList([...compareList, vendor]);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div
      onClick={() => onSelectVendor(vendor)}
      className="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-500/50 transition-all duration-200 flex flex-col cursor-pointer"
    >
      {/* Image Banner */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
        <img
          src={vendor.images[currentImgIndex]}
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {vendor.verified && (
            <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 bg-white/90 dark:bg-zinc-900/90 text-emerald-700 dark:text-emerald-400 backdrop-blur-xs rounded-full shadow-xs">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> Kanpur Verified
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={toggleCompare}
            title={isCompared ? "In compare list" : "Add to compare"}
            className={`p-2 rounded-full backdrop-blur-xs transition-all ${
              isCompared
                ? "bg-emerald-600 text-white font-bold"
                : "bg-black/30 hover:bg-black/50 text-white"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleWishlist}
            title={isWishlisted ? "Saved" : "Save to favourites"}
            className={`p-2 rounded-full backdrop-blur-xs transition-all ${
              isWishlisted
                ? "bg-rose-500 text-white"
                : "bg-black/30 hover:bg-black/50 text-white"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-white" : ""}`} />
          </button>
        </div>

        {/* Dots */}
        {vendor.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-xs">
            {vendor.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImgIndex ? "bg-white w-2.5" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-600 dark:text-emerald-400">
              {vendor.category}
            </span>
            <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{vendor.rating}</span>
              <span className="text-slate-400 font-normal">({vendor.reviewCount})</span>
            </div>
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {vendor.name}
          </h3>

          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
            <span className="flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {vendor.locality}, Kanpur
            </span>
            {vendor.capacityMax > 0 && (
              <span className="flex items-center gap-1 shrink-0">
                <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {vendor.capacityMin}-{vendor.capacityMax}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-slate-400 font-medium uppercase">Starting from</div>
            <div className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
              {formatPrice(vendor.startingPrice)}
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 ml-0.5">
                /{vendor.priceUnit}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenContact(vendor);
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Inquire
            </button>
            <button
              onClick={() => onSelectVendor(vendor)}
              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
              title="View details"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
