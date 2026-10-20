import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, CreditCard, CheckCircle2, Lock, MapPin, Smartphone } from 'lucide-react';

export default function CheckoutPage({ checkoutData, onCompleteBooking, onBack }) {
  const [step, setStep] = useState('checkout');
  const [hostName, setHostName] = useState('Saksham Verma');
  const [phone, setPhone] = useState('9839012345');
  const [email, setEmail] = useState('saksham.verma@gmail.com');
  const [venueAddress, setVenueAddress] = useState('14/110 Motijheel Road, Swaroop Nagar, Kanpur, UP 208002');
  
  const [payMode, setPayMode] = useState('token');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('saksham@okaxis');
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  if (!checkoutData) return null;

  const totalAmount = checkoutData.total || (checkoutData.vendor ? checkoutData.vendor.startingPrice : 150000);
  const tokenAdvance = Math.round(totalAmount * 0.2);
  const payNowAmount = payMode === 'token' ? tokenAdvance : totalAmount;
  const remainingBalance = totalAmount - payNowAmount;

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `EX-KNP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBookingId(generatedId);

      const newBooking = {
        id: generatedId,
        eventName: checkoutData.bundleName || `${checkoutData.vendor?.name || 'EventX'} Kanpur Booking`,
        eventType: checkoutData.eventType || 'Celebration',
        city: 'Kanpur',
        venueAddress,
        eventDate: checkoutData.eventDate || '2026-11-20',
        guestCount: checkoutData.guestCount || 150,
        budget: totalAmount,
        status: 'Confirmed',
        tokenPaid: payNowAmount,
        totalCost: totalAmount,
        createdAt: new Date().toISOString().split('T')[0],
        vendors: checkoutData.vendors
          ? checkoutData.vendors.map((v) => ({
              id: v.vendor.id,
              name: v.vendor.name,
              category: v.category,
              price: v.cost,
              status: 'Confirmed'
            }))
          : [
              {
                id: checkoutData.vendor?.id || 'v-101',
                name: checkoutData.vendor?.name || 'The Grand Imperial Banquet',
                category: checkoutData.vendor?.category || 'Venue',
                price: totalAmount,
                status: 'Confirmed'
              }
            ],
        timeline: [
          { date: new Date().toISOString().split('T')[0], title: 'Token Paid via Escrow', done: true },
          { date: '2026-10-25', title: 'Menu Walkthrough', done: false },
          { date: checkoutData.eventDate || '2026-11-20', title: 'Event Execution in Kanpur', done: false }
        ]
      };

      setStep('success');
      onCompleteBooking(newBooking);
    }, 1200);
  };

  return (
    <div className="min-h-screen py-8 bg-slate-50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Selection
          </button>
          
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
            <Lock className="w-4 h-4" /> Encrypted Payment Simulation
          </div>
        </div>

        {step === 'success' ? (
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Booking Locked & Confirmed
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 pt-2">
                Congratulations, {hostName}!
              </h1>
              <p className="text-xs text-slate-500">
                Your event date has been locked with local Kanpur vendors.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-2 text-left text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">Booking Reference ID</span>
                <span className="font-mono font-extrabold text-emerald-600 text-sm">{confirmedBookingId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Event Date</span>
                <span className="font-bold text-slate-900">{checkoutData.eventDate || '2026-11-20'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Token Paid</span>
                <span className="font-extrabold text-emerald-600">₹{payNowAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Pending Venue Balance</span>
                <span className="font-bold text-slate-900">₹{remainingBalance.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onCompleteBooking(null, 'dashboard')}
                className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-all"
              >
                Go to My Event Dashboard
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" /> Event Host & Location
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={hostName}
                      onChange={(e) => setHostName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-slate-700 mb-1">
                      Kanpur Venue Address
                    </label>
                    <input
                      type="text"
                      required
                      value={venueAddress}
                      onChange={(e) => setVenueAddress(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900">Payment Options</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setPayMode('token')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      payMode === 'token'
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900 text-sm">20% Token Advance</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-600 text-white">Popular</span>
                    </div>
                    <div className="text-xl font-extrabold text-emerald-600">
                      ₹{tokenAdvance.toLocaleString('en-IN')}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Pay 20% to lock date; balance paid to vendors on event day.</p>
                  </div>

                  <div
                    onClick={() => setPayMode('full')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      payMode === 'full'
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900 text-sm">Full 100% Payment</span>
                    </div>
                    <div className="text-xl font-extrabold text-slate-900">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Clear full payment now.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900">Simulate Payment Method</h2>

                <form onSubmit={handleSimulatePayment} className="space-y-4">
                  <div className="space-y-2 text-xs">
                    <label className="block font-bold text-slate-700">
                      UPI ID / VPA
                    </label>
                    <div className="relative">
                      <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="e.g. 9839012345@paytm"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <span>Authorizing Token Payment...</span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" /> Authorize Payment (₹{payNowAmount.toLocaleString('en-IN')})
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-base pb-3 border-b border-slate-100">
                  Summary
                </h3>

                <div className="text-xs space-y-2">
                  <div className="font-bold text-slate-900">
                    {checkoutData.bundleName || checkoutData.vendor?.name}
                  </div>
                  <div className="text-slate-500">Date: {checkoutData.eventDate || '2026-11-20'}</div>
                  <div className="text-slate-500">Guests: {checkoutData.guestCount || 150}</div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Total Vendor Value</span>
                    <span className="font-bold text-slate-900">₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-100">
                    <span>Total Cost</span>
                    <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
