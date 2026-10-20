import React, { useState } from 'react';
import { Store, Star, ShieldCheck } from 'lucide-react';
import { INITIAL_VENDOR_LEADS } from '../data/kanpurVendors';

export default function VendorDashboardPage() {
  const [leads, setLeads] = useState(INITIAL_VENDOR_LEADS);
  const [activeTab, setActiveTab] = useState('leads');
  const [vendorName, setVendorName] = useState('The Grand Imperial Banquet & Lawns (Kanpur)');
  const [platePrice, setPlatePrice] = useState(650);
  const [hallRent, setHallRent] = useState(85000);
  const [quoteInput, setQuoteInput] = useState('');
  const [selectedLeadForQuote, setSelectedLeadForQuote] = useState(null);

  const handleUpdateLeadStatus = (leadId, newStatus) => {
    setLeads(
      leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  const handleSendCustomQuote = (e) => {
    e.preventDefault();
    if (!selectedLeadForQuote) return;
    setLeads(
      leads.map((l) =>
        l.id === selectedLeadForQuote.id
          ? { ...l, status: 'Quote Sent', requestedService: `Custom Quote: ${quoteInput}` }
          : l
      )
    );
    setSelectedLeadForQuote(null);
    setQuoteInput('');
  };

  return (
    <div className="min-h-screen py-8 bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-200">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <Store className="w-4 h-4" /> Kanpur Vendor Partner Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{vendorName}</h1>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Swaroop Nagar, Kanpur • Partner ID: #KNP-VEND-881
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'leads' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Leads & Inquiries ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'services' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Pricing & Packages
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-xs text-slate-400 font-bold uppercase">Total Revenue (2026)</div>
            <div className="text-2xl font-black text-slate-900">₹14,85,000</div>
            <div className="text-[11px] text-emerald-600 font-semibold">+18% growth</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-xs text-slate-400 font-bold uppercase">Active Leads</div>
            <div className="text-2xl font-black text-slate-900">{leads.length} Pending</div>
            <div className="text-[11px] text-slate-500">2 New today</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-xs text-slate-400 font-bold uppercase">Confirmed Bookings</div>
            <div className="text-2xl font-black text-emerald-600">18 Events</div>
            <div className="text-[11px] text-slate-500">Dates locked</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-xs text-slate-400 font-bold uppercase">Rating & Feedback</div>
            <div className="text-2xl font-black text-slate-900 flex items-center gap-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" /> 4.9
            </div>
            <div className="text-[11px] text-slate-500">142 Kanpur Reviews</div>
          </div>
        </div>

        {/* Tab 1: Leads */}
        {activeTab === 'leads' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-slate-900">Customer Inquiries</h2>
              <span className="text-xs text-slate-400">Direct booking requests</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs min-w-[750px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-400 uppercase">
                    <th className="p-3">Customer</th>
                    <th className="p-3">Event Type</th>
                    <th className="p-3">Date & Guests</th>
                    <th className="p-3">Budget & Request</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="p-3">
                        <div className="font-bold text-slate-900 text-sm">{lead.customerName}</div>
                        <div className="text-slate-500">{lead.locality} • {lead.phone}</div>
                      </td>
                      <td className="p-3 font-semibold text-slate-800">{lead.eventType}</td>
                      <td className="p-3 text-slate-700">
                        <div>{lead.eventDate}</div>
                        <div className="text-[11px] text-slate-400">{lead.guestCount} Guests</div>
                      </td>
                      <td className="p-3 text-slate-700">
                        <div className="font-bold text-emerald-600">{lead.budgetRange}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{lead.requestedService}</div>
                      </td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                          lead.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : lead.status === 'Quote Sent'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-1">
                        <button
                          onClick={() => setSelectedLeadForQuote(lead)}
                          className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700"
                        >
                          Send Quote
                        </button>
                        <button
                          onClick={() => handleUpdateLeadStatus(lead.id, 'Confirmed')}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg font-bold hover:bg-slate-200"
                        >
                          Accept
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedLeadForQuote && (
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-base">
                  Send Custom Price Quote to {selectedLeadForQuote.customerName}
                </h3>
                <form onSubmit={handleSendCustomQuote} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={quoteInput}
                    onChange={(e) => setQuoteInput(e.target.value)}
                    placeholder="e.g. Special Kanpur buffet menu + decor bundle offered at ₹1,85,000 all inclusive"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs"
                    >
                      Send Offer to Client
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLeadForQuote(null)}
                      className="px-4 py-2 bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Pricing */}
        {activeTab === 'services' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-fade-in">
            <h2 className="text-xl font-extrabold text-slate-900">Vendor Pricing & Service Tier Editor</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-xl border border-slate-200 space-y-3">
                <label className="block font-bold text-slate-700">
                  Hall Only Starting Price (Per Day)
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-slate-900">₹</span>
                  <input
                    type="number"
                    value={hallRent}
                    onChange={(e) => setHallRent(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-bold text-sm"
                  />
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 space-y-3">
                <label className="block font-bold text-slate-700">
                  Per Plate Veg Catering Price (Per Guest)
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-slate-900">₹</span>
                  <input
                    type="number"
                    value={platePrice}
                    onChange={(e) => setPlatePrice(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-bold text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => alert("Vendor pricing saved successfully for Kanpur marketplace!")}
                className="px-6 py-3 bg-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-xs hover:bg-emerald-700 transition-colors"
              >
                Save Updated Pricing
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
