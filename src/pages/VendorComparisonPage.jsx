import React from 'react';
import { ArrowLeft, Scale, Star, MapPin, Trash2, ArrowRight } from 'lucide-react';

export default function VendorComparisonPage({
  compareList,
  setCompareList,
  onBack,
  onSelectVendor,
  onOpenContact
}) {
  if (!compareList || compareList.length === 0) {
    return (
      <div className="min-h-screen py-16 bg-slate-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 max-w-md space-y-4 shadow-xs">
          <Scale className="w-12 h-12 text-slate-400 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">No Vendors Selected for Comparison</h2>
          <p className="text-xs text-slate-500">
            Browse Kanpur vendors and click the compare icon on any vendor card to add them to your comparison table.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs"
          >
            Explore Vendors
          </button>
        </div>
      </div>
    );
  }

  const removeVendor = (id) => {
    setCompareList(compareList.filter((v) => v.id !== id));
  };

  return (
    <div className="min-h-screen py-8 bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-600" /> Vendor Comparison
            </h1>
          </div>

          <button
            onClick={() => setCompareList([])}
            className="text-xs text-rose-500 font-bold hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 w-48 text-xs font-bold uppercase tracking-wider text-slate-400">Spec Metric</th>
                {compareList.map((vendor) => (
                  <th key={vendor.id} className="p-4 min-w-[220px]">
                    <div className="relative space-y-2">
                      <button
                        onClick={() => removeVendor(vendor.id)}
                        className="absolute top-0 right-0 p-1 text-slate-400 hover:text-rose-500"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <img src={vendor.images[0]} alt={vendor.name} className="w-full h-32 rounded-xl object-cover" />
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{vendor.name}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                        {vendor.category}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              
              {/* Rating */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Rating & Reviews</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4">
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {v.rating} ({v.reviewCount} reviews)
                    </span>
                  </td>
                ))}
              </tr>

              {/* Starting Price */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Starting Price</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4 font-extrabold text-emerald-600 text-sm">
                    ₹{v.startingPrice.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-slate-400">/{v.priceUnit}</span>
                  </td>
                ))}
              </tr>

              {/* Locality */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Kanpur Locality</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 inline mr-1" /> {v.locality}
                  </td>
                ))}
              </tr>

              {/* Guest Capacity */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Guest Capacity</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4 text-slate-700">
                    {v.capacityMax > 0 ? `${v.capacityMin} - ${v.capacityMax} guests` : 'Flexible'}
                  </td>
                ))}
              </tr>

              {/* Highlights */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Key Highlights</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {v.tags.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Cancellation Policy */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Cancellation Policy</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4 text-slate-500 leading-tight">
                    {v.cancellationPolicy}
                  </td>
                ))}
              </tr>

              {/* Actions */}
              <tr>
                <td className="p-4 font-bold text-slate-700">Actions</td>
                {compareList.map((v) => (
                  <td key={v.id} className="p-4 space-y-2">
                    <button
                      onClick={() => onSelectVendor(v)}
                      className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1"
                    >
                      View Specs <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenContact(v)}
                      className="w-full py-2 px-3 bg-slate-100 text-slate-800 font-bold rounded-xl text-xs"
                    >
                      Inquire
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
