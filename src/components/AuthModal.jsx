import React, { useState } from 'react';
import { X, ArrowRight, UserCheck, Store, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, currentUser, setCurrentUser }) {
  const [authRole, setAuthRole] = useState('customer'); // customer | vendor
  const [authMethod, setAuthMethod] = useState('mobile'); // mobile | email
  const [step, setStep] = useState('input'); // input | otp | success
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const mockUser = {
      name: fullName || (authRole === 'vendor' ? 'Kanpur Catering Co.' : 'Saksham Verma'),
      role: authRole,
      contact: authMethod === 'mobile' ? `+91 ${phoneNumber || '9839012345'}` : email || 'user@eventx.in',
      city: 'Kanpur',
      avatar: authRole === 'vendor' ? 'https://images.unsplash.com/photo-1555244162-803834f70033?w=100' : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
    };
    setCurrentUser(mockUser);
    setStep('success');
    setTimeout(() => {
      onClose();
      setStep('input');
    }, 1200);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">
            {currentUser ? 'Account Profile' : 'Sign in to EventX'}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentUser ? (
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl overflow-hidden">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{currentUser.name}</h4>
                <p className="text-xs text-slate-500">{currentUser.contact}</p>
                <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 capitalize">
                  {currentUser.role} Account
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-2.5 px-4 bg-rose-50 text-rose-600 font-semibold rounded-xl hover:bg-rose-100 transition-colors text-sm"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="p-6">
            {step === 'success' ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Welcome back!</h4>
                <p className="text-sm text-slate-500">Signed in to EventX Kanpur.</p>
              </div>
            ) : step === 'otp' ? (
              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div className="text-center space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">Enter 4-Digit Code</h4>
                  <p className="text-xs text-slate-500">
                    Sent to {authMethod === 'mobile' ? `+91 ${phoneNumber}` : email}
                  </p>
                </div>

                <div className="flex justify-center gap-2">
                  {[0, 1, 2, 3].map((idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      defaultValue={idx + 4}
                      className="w-12 h-12 text-center text-xl font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  Verify & Continue <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setStep('input')}
                  className="w-full text-xs text-center text-slate-500 hover:text-slate-800"
                >
                  Change details
                </button>
              </form>
            ) : (
              <form onSubmit={handleSendOtp} className="space-y-5">
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setAuthRole('customer')}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      authRole === 'customer'
                        ? 'bg-white text-emerald-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <UserCheck className="w-4 h-4" /> Host / Client
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthRole('vendor')}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      authRole === 'vendor'
                        ? 'bg-white text-emerald-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Store className="w-4 h-4" /> Local Vendor
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Saksham Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-slate-700">
                      {authMethod === 'mobile' ? 'Mobile Number' : 'Email Address'}
                    </label>
                    <button
                      type="button"
                      onClick={() => setAuthMethod(authMethod === 'mobile' ? 'email' : 'mobile')}
                      className="text-[11px] text-emerald-600 font-medium hover:underline"
                    >
                      Use {authMethod === 'mobile' ? 'Email' : 'Mobile'}
                    </button>
                  </div>

                  {authMethod === 'mobile' ? (
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-xs font-semibold text-slate-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="98390 12345"
                        className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  ) : (
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Get OTP <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
