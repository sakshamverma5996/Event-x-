import React, { useState } from 'react';
import { X, Phone, MessageSquare, MapPin, CheckCircle2, Send } from 'lucide-react';

export default function ContactVendorModal({ isOpen, onClose, vendor }) {
  const [submitted, setSubmitted] = useState(false);
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [guests, setGuests] = useState('150');
  const [notes, setNotes] = useState('');

  if (!isOpen || !vendor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img src={vendor.images[0]} alt={vendor.name} className="w-10 h-10 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-slate-900 text-base leading-tight">{vendor.name}</h3>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" /> {vendor.locality}, Kanpur
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-bold text-slate-900">Inquiry Sent to Vendor</h4>
            <p className="text-sm text-slate-500">
              {vendor.name} has been notified in Kanpur. Their team will respond via phone/WhatsApp shortly.
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919839012345"
                className="flex items-center justify-center gap-2 p-3 bg-emerald-50 text-emerald-800 font-semibold text-xs rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" /> Call Vendor Directly
              </a>
              <button
                type="button"
                onClick={() => alert(`Simulated WhatsApp chat opened with ${vendor.name} Kanpur!`)}
                className="flex items-center justify-center gap-2 p-3 bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-200 hover:bg-slate-200 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Chat
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Guests
                  </label>
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need menu details, stage decor modifications..."
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
