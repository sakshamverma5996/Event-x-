import React, { useState } from 'react';
import { MapPin, Sparkles, Heart, User, Store, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({
  selectedCity,
  onOpenCitySelector,
  activePage,
  setActivePage,
  activePortal,
  setActivePortal,
  onOpenAuth,
  currentUser,
  wishlist = []
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* LEFT: Logo & City */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setActivePortal('customer');
              setActivePage('home');
            }}
            className="flex items-center gap-2 focus:outline-none group text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-lg shadow-xs">
              X
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight text-slate-900">
                Event<span className="text-emerald-600">X</span>
              </div>
            </div>
          </button>

          <button
            onClick={onOpenCitySelector}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>{selectedCity}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => {
              setActivePortal('customer');
              setActivePage('discovery');
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activePage === 'discovery' && activePortal === 'customer'
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Explore Vendors
          </button>

          <button
            onClick={() => {
              setActivePortal('customer');
              setActivePage('ai-builder');
            }}
            className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activePage === 'ai-builder' && activePortal === 'customer'
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Plan Event
          </button>

          <button
            onClick={() => {
              setActivePortal('customer');
              setActivePage('customer-dashboard');
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activePage === 'customer-dashboard' && activePortal === 'customer'
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            My Events
          </button>
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          <button
            onClick={() => {
              setActivePortal('vendor');
              setActivePage('vendor-dashboard');
            }}
            className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-emerald-500 transition-colors"
          >
            <Store className="w-3.5 h-3.5 text-emerald-600" /> List Your Business
          </button>

          {/* Favourites */}
          <button
            onClick={() => {
              setActivePortal('customer');
              setActivePage('customer-dashboard');
            }}
            className="relative p-2 rounded-lg text-slate-600 hover:text-rose-500 hover:bg-slate-100 transition-colors"
            title="Favourites"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-extrabold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Sign In */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all"
          >
            <User className="w-4 h-4" />
            <span>{currentUser ? currentUser.name.split(' ')[0] : 'Sign In'}</span>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                onOpenCitySelector();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-800"
            >
              <MapPin className="w-4 h-4 text-emerald-600" /> City: {selectedCity}
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => {
                setActivePortal('customer');
                setActivePage('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => {
                setActivePortal('customer');
                setActivePage('discovery');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Explore Kanpur Vendors
            </button>
            <button
              onClick={() => {
                setActivePortal('customer');
                setActivePage('ai-builder');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg font-bold text-sm text-emerald-700 hover:bg-emerald-50 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" /> Plan Event
            </button>
            <button
              onClick={() => {
                setActivePortal('customer');
                setActivePage('customer-dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              My Events
            </button>
            <button
              onClick={() => {
                setActivePortal('vendor');
                setActivePage('vendor-dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Store className="w-4 h-4 text-emerald-600" /> List Your Business
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
