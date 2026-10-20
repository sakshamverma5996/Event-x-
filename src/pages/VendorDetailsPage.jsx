import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Users, ShieldCheck, Calendar, Check, X, Heart, Scale, Phone, CreditCard, ChevronRight } from 'lucide-react';

export default function VendorDetailsPage({
  vendor,
  onBack,
  onOpenContact,
  onProceedToCheckout,
  wishlist,
  setWishlist,
  compareList,
  setCompareList
}) {
  if (!vendor) return null;

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(vendor.capacityMin || 150);
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isWishlisted = wishlist.some((v) => v.id === vendor.id);
  const isCompared = compareList.some((v) => v.id === vendor.id);

  const activePkg = vendor.packages?.[selectedPackageIndex] || { price: vendor.startingPrice, name: "Standard Package" };

  const calculatedTotal = vendor.priceUnit.includes('plate')
    ? activePkg.price * guestCount
    : activePkg.price;

  const tokenAdvance = Math.round(calculatedTotal * 0.2);

  const toggleWishlist = () => {
    if (isWishlisted) setWishlist(wishlist.filter((v) => v.id !== vendor.id));
    else setWishlist([...wishlist, vendor]);
  };

  const toggleCompare = () => {
    if (isCompared) setWishlist(compareList.filter((v) => v.id !== vendor.id));
    else setCompareList([...compareList, vendor]);
  };

  return (
    <div className="min-h-screen py-8 bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Search
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleCompare}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-4 h-4" /> {isCompared ? 'In Compare' : 'Add to Compare'}
            </button>

            <button
              onClick={toggleWishlist}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isWishlisted
                  ? 'bg-rose-500 text-white border-rose-500'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} /> Save
            </button>
          </div>
        </div>

        {/* Title, Location & Photo Gallery */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {vendor.category}
                </span>
                {vendor.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Kanpur Verified
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {vendor.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                <span className="flex items-center gap-1 font-bold text-slate-900">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {vendor.rating} ({vendor.reviewCount} Reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" /> {vendor.address}
                </span>
                {vendor.capacityMax > 0 && (
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-slate-400" /> {vendor.capacityMin}-{vendor.capacityMax} Guests
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden h-[400px]">
            <div
              className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-slate-100"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={vendor.images[selectedImg]}
                alt={vendor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs">
                Click for full photo viewer
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {vendor.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`relative cursor-pointer overflow-hidden rounded-xl h-[190px] border-2 transition-all ${
                    selectedImg === idx ? 'border-emerald-500' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            {/* Description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900">About the Vendor</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {vendor.description}
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Service Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {vendor.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 font-semibold text-slate-800">
                      ✨ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Tiers */}
            {vendor.packages && vendor.packages.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Package Options & Pricing Tiers</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vendor.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPackageIndex(idx)}
                      className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPackageIndex === idx
                          ? 'border-emerald-500 bg-emerald-50/50'
                          : 'border-slate-200 bg-white hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-900 text-base">{pkg.name}</h3>
                        {selectedPackageIndex === idx && (
                          <span className="p-1 rounded-full bg-emerald-600 text-white font-bold text-xs">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>

                      <div className="text-xl font-extrabold text-emerald-600 mb-2">
                        ₹{pkg.price.toLocaleString('en-IN')}
                        <span className="text-xs font-normal text-slate-500 ml-1">/{vendor.priceUnit}</span>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed">{pkg.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3">Package Inclusions</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {vendor.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Calendar Availability */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" /> Kanpur Calendar Availability (Demo)
                </h2>
                <span className="text-xs text-slate-400">Green = Available slot</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2">
                {['2026-10-15', '2026-10-18', '2026-10-22', '2026-11-05', '2026-11-15', '2026-11-20'].map((date) => {
                  const isAvailable = vendor.availableDates?.includes(date);
                  return (
                    <div
                      key={date}
                      className={`p-3 rounded-xl border text-center text-xs font-bold ${
                        isAvailable
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                          : 'bg-slate-100 border-slate-200 text-slate-400 line-through'
                      }`}
                    >
                      <div>{date}</div>
                      <div className="text-[10px] mt-0.5 font-semibold">
                        {isAvailable ? 'Available' : 'Booked'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">Ratings & Reviews</h2>
              <div className="space-y-3">
                {vendor.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{rev.user}</span>
                      <span className="text-slate-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">"{rev.text}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Quote & Booking Card */}
          <div className="space-y-6">
            <div className="sticky top-24 bg-white p-6 rounded-2xl border-2 border-emerald-500 shadow-md space-y-6">
              
              <div className="pb-4 border-b border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Estimated Live Cost</div>
                <div className="text-3xl font-extrabold text-slate-900 mt-1">
                  ₹{calculatedTotal.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" /> 20% Token Advance: ₹{tokenAdvance.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="space-y-4 text-xs">
                {vendor.priceUnit.includes('plate') && (
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Math.max(10, Number(e.target.value)))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Select Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onProceedToCheckout({ vendor, package: activePkg, total: calculatedTotal, guestCount, eventDate })}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  Book Now with 20% Token <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenContact(vendor)}
                  className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" /> Send Inquiry
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 text-white hover:text-emerald-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={vendor.images[selectedImg]}
            alt={vendor.name}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
