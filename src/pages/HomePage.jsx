import React from 'react';
import Hero from '../components/Hero';
import ServiceCategories from '../components/ServiceCategories';
import PopularVendors from '../components/PopularVendors';
import AIPackagePreview from '../components/AIPackagePreview';
import HowItWorks from '../components/HowItWorks';
import TrustBadgeSection from '../components/TrustBadgeSection';

export default function HomePage({
  vendors,
  onSelectCategory,
  onSelectVendor,
  onOpenContact,
  wishlist,
  setWishlist,
  compareList,
  setCompareList,
  onOpenAIBuilder,
  onViewAllVendors,
  onSearchSubmit,
  onOpenVendorOnboarding
}) {
  return (
    <div className="min-h-screen">
      <Hero onSearchSubmit={onSearchSubmit} onOpenAIBuilder={onOpenAIBuilder} />
      <ServiceCategories onSelectCategory={onSelectCategory} />
      <PopularVendors
        vendors={vendors}
        onSelectVendor={onSelectVendor}
        onOpenContact={onOpenContact}
        wishlist={wishlist}
        setWishlist={setWishlist}
        compareList={compareList}
        setCompareList={setCompareList}
        onViewAll={onViewAllVendors}
      />
      <AIPackagePreview onOpenAIBuilder={onOpenAIBuilder} />
      <HowItWorks onOpenAIBuilder={onOpenAIBuilder} />
      <TrustBadgeSection onOpenVendorOnboarding={onOpenVendorOnboarding} />
    </div>
  );
}
