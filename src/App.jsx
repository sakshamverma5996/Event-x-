import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CitySelectorModal from './components/CitySelectorModal';
import AuthModal from './components/AuthModal';
import ContactVendorModal from './components/ContactVendorModal';
import ComparisonDrawer from './components/ComparisonDrawer';

// Pages
import HomePage from './pages/HomePage';
import VendorDiscoveryPage from './pages/VendorDiscoveryPage';
import VendorDetailsPage from './pages/VendorDetailsPage';
import VendorComparisonPage from './pages/VendorComparisonPage';
import AIPackageBuilderPage from './pages/AIPackageBuilderPage';
import CheckoutPage from './pages/CheckoutPage';
import CustomerDashboardPage from './pages/CustomerDashboardPage';
import VendorDashboardPage from './pages/VendorDashboardPage';

// Data
import { VENDORS, INITIAL_BOOKINGS } from './data/kanpurVendors';

export default function App() {
  // Enforce light bright theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('eventx_theme', 'light');
  }, []);

  // App Navigation State
  const [activePortal, setActivePortal] = useState('customer'); // customer | vendor
  const [activePage, setActivePage] = useState('home'); 

  // Selection & Search State
  const [selectedCity, setSelectedCity] = useState('Kanpur');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchPreset, setSearchPreset] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);

  // Persistent Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('eventx_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('eventx_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const [compareList, setCompareList] = useState([]);
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [currentUser, setCurrentUser] = useState(null);

  // Modals State
  const [citySelectorOpen, setCitySelectorOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [contactVendorTarget, setContactVendorTarget] = useState(null);

  // Navigation Helpers
  const handleSelectVendor = (vendor) => {
    setSelectedVendor(vendor);
    setActivePortal('customer');
    setActivePage('vendor-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setActivePortal('customer');
    setActivePage('discovery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (preset) => {
    setSearchPreset(preset);
    if (preset.eventType) {
      setSelectedCategory('all');
    }
    setActivePortal('customer');
    setActivePage('discovery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToCheckout = (data) => {
    setCheckoutData(data);
    setActivePortal('customer');
    setActivePage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteBooking = (newBooking, targetPage = null) => {
    if (newBooking) {
      setBookings([newBooking, ...bookings]);
    }
    if (targetPage) {
      setActivePage(targetPage);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      
      {/* Top Navbar */}
      <Navbar
        selectedCity={selectedCity}
        onOpenCitySelector={() => setCitySelectorOpen(true)}
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activePortal={activePortal}
        setActivePortal={setActivePortal}
        onOpenAuth={() => setAuthModalOpen(true)}
        currentUser={currentUser}
        wishlist={wishlist}
      />

      {/* Main View */}
      <div className="flex-1">
        {activePortal === 'vendor' ? (
          <VendorDashboardPage />
        ) : activePage === 'home' ? (
          <HomePage
            vendors={VENDORS}
            onSelectCategory={handleSelectCategory}
            onSelectVendor={handleSelectVendor}
            onOpenContact={(vendor) => setContactVendorTarget(vendor)}
            wishlist={wishlist}
            setWishlist={setWishlist}
            compareList={compareList}
            setCompareList={setCompareList}
            onOpenAIBuilder={() => {
              setActivePage('ai-builder');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewAllVendors={() => {
              setActivePage('discovery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSearchSubmit={handleSearchSubmit}
            onOpenVendorOnboarding={() => {
              setActivePortal('vendor');
              setActivePage('vendor-dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : activePage === 'discovery' ? (
          <VendorDiscoveryPage
            vendors={VENDORS}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onSelectVendor={handleSelectVendor}
            onOpenContact={(vendor) => setContactVendorTarget(vendor)}
            wishlist={wishlist}
            setWishlist={setWishlist}
            compareList={compareList}
            setCompareList={setCompareList}
            searchPreset={searchPreset}
          />
        ) : activePage === 'vendor-details' ? (
          <VendorDetailsPage
            vendor={selectedVendor}
            onBack={() => setActivePage('discovery')}
            onOpenContact={(vendor) => setContactVendorTarget(vendor)}
            onProceedToCheckout={handleProceedToCheckout}
            wishlist={wishlist}
            setWishlist={setWishlist}
            compareList={compareList}
            setCompareList={setCompareList}
          />
        ) : activePage === 'comparison' ? (
          <VendorComparisonPage
            compareList={compareList}
            setCompareList={setCompareList}
            onBack={() => setActivePage('discovery')}
            onSelectVendor={handleSelectVendor}
            onOpenContact={(vendor) => setContactVendorTarget(vendor)}
          />
        ) : activePage === 'ai-builder' ? (
          <AIPackageBuilderPage
            onProceedToCheckout={handleProceedToCheckout}
            onSelectVendor={handleSelectVendor}
          />
        ) : activePage === 'checkout' ? (
          <CheckoutPage
            checkoutData={checkoutData}
            onCompleteBooking={handleCompleteBooking}
            onBack={() => setActivePage('discovery')}
          />
        ) : activePage === 'customer-dashboard' ? (
          <CustomerDashboardPage
            bookings={bookings}
            wishlist={wishlist}
            setWishlist={setWishlist}
            compareList={compareList}
            setCompareList={setCompareList}
            onSelectVendor={handleSelectVendor}
            onOpenContact={(vendor) => setContactVendorTarget(vendor)}
            onExploreVendors={() => {
              setActivePage('discovery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <HomePage
            vendors={VENDORS}
            onSelectCategory={handleSelectCategory}
            onSelectVendor={handleSelectVendor}
            onOpenContact={(vendor) => setContactVendorTarget(vendor)}
            wishlist={wishlist}
            setWishlist={setWishlist}
            compareList={compareList}
            setCompareList={setCompareList}
            onOpenAIBuilder={() => setActivePage('ai-builder')}
            onViewAllVendors={() => setActivePage('discovery')}
            onSearchSubmit={handleSearchSubmit}
            onOpenVendorOnboarding={() => {
              setActivePortal('vendor');
              setActivePage('vendor-dashboard');
            }}
          />
        )}
      </div>

      {/* Floating Compare Bar */}
      {compareList.length > 0 && activePage !== 'comparison' && (
        <ComparisonDrawer
          compareList={compareList}
          setCompareList={setCompareList}
          onOpenCompare={() => {
            setActivePage('comparison');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        setActivePortal={setActivePortal}
        onOpenCitySelector={() => setCitySelectorOpen(true)}
      />

      {/* Modals */}
      <CitySelectorModal
        isOpen={citySelectorOpen}
        onClose={() => setCitySelectorOpen(false)}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <ContactVendorModal
        isOpen={!!contactVendorTarget}
        onClose={() => setContactVendorTarget(null)}
        vendor={contactVendorTarget}
      />
    </div>
  );
}
