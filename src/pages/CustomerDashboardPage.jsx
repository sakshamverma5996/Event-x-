import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Phone, MessageSquare, FileText, Download, Heart, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import VendorCard from '../components/VendorCard';

export default function CustomerDashboardPage({
  bookings = [],
  wishlist = [],
  setWishlist,
  compareList = [],
  setCompareList,
  onSelectVendor,
  onOpenContact,
  onExploreVendors
}) {
  const [activeTab, setActiveTab] = useState('bookings'); // bookings | wishlist

  return (
    <div className="min-h-screen py-8 bg-slate-50 dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Dashboard Light Banner Header */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 text-slate-900 dark:text-white shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-200 dark:border-zinc-800">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-4 h-4" /> Kanpur Customer Event Control Center
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              My Celebrations & Bookings
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Manage your active event timelines, vendor contacts, and saved local providers in Kanpur.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'bookings'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-zinc-800 dark:text-slate-300'
              }`}
            >
              Active Events ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'wishlist'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-zinc-800 dark:text-slate-300'
              }`}
            >
              Saved Wishlist ({wishlist.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Active Booked Events */}
        {activeTab === 'bookings' && (
          <div className="space-y-6 animate-fade-in">
            {bookings.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 space-y-4">
                <Calendar className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Booked Events Yet</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Explore Kanpur banquet halls, caterers, and decorators or use our AI package builder to start planning.
                </p>
                <button
                  onClick={onExploreVendors}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  Explore Kanpur Vendors
                </button>
              </div>
            ) : (
              bookings.map((booking) => {
                const pendingBalance = booking.totalCost - booking.tokenPaid;
                return (
                  <div
                    key={booking.id}
                    className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-xs space-y-6"
                  >
                    {/* Header bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-zinc-800">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                            {booking.status}
                          </span>
                          <span className="text-xs font-mono text-slate-400">ID: {booking.id}</span>
                        </div>
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{booking.eventName}</h2>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-emerald-600" /> {booking.eventDate}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-slate-400" /> {booking.venueAddress}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-slate-400">Total Event Cost</div>
                        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                          ₹{booking.totalCost.toLocaleString('en-IN')}
                        </div>
                        <div className="text-xs text-emerald-600 font-semibold mt-0.5">
                          Paid: ₹{booking.tokenPaid.toLocaleString('en-IN')} | Pending: ₹{pendingBalance.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>

                    {/* Timeline & Checklist */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Event Preparation Checklist & Timeline
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {booking.timeline.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-3.5 rounded-xl border text-xs ${
                              item.done
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 text-emerald-800 dark:text-emerald-300 font-semibold'
                                : 'bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-500'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold mb-1">
                              <CheckCircle2 className={`w-4 h-4 ${item.done ? 'text-emerald-600' : 'text-slate-400'}`} />
                              <span>{item.title}</span>
                            </div>
                            <div className="text-[10px] text-slate-400">{item.date}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booked Vendors Coordination List */}
                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Booked Kanpur Local Vendors
                      </h3>

                      <div className="space-y-2">
                        {booking.vendors.map((v) => (
                          <div
                            key={v.id}
                            className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-4"
                          >
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                                {v.category}
                              </span>
                              <h4 className="font-bold text-slate-900 dark:text-white text-base">{v.name}</h4>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => alert(`Calling vendor ${v.name} in Kanpur (+91 98390 XXXXX)...`)}
                                className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1 border border-emerald-200"
                              >
                                <Phone className="w-3.5 h-3.5" /> Call Vendor
                              </button>
                              <button
                                onClick={() => alert(`Simulated contract PDF downloaded for ${v.name}!`)}
                                className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-zinc-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1"
                              >
                                <Download className="w-3.5 h-3.5" /> Receipt
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Tab 2: Saved Wishlist */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Your Saved Kanpur Vendors ({wishlist.length})</h2>

            {wishlist.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 space-y-4">
                <Heart className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Saved Vendors</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Click the heart icon on any vendor card to save them to your wishlist.
                </p>
                <button
                  onClick={onExploreVendors}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  Explore Vendors
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((vendor) => (
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
            )}
          </div>
        )}

      </div>
    </div>
  );
}
