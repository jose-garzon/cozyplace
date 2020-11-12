// ------------------------------ import libraries
import React, { useRef } from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { Map } from '../../components/Map';
import { LocationCard } from '../../components/LocationCard';
import { Footer } from '../../components/Footer';
import { TestimonialSection } from '../../components/TestimonialSection';
import { LoginModal } from '../../components/LoginModal';
import { TrendingSection } from '../../components/TrendingSection';
import { ResulIndicator } from '../../components/ResultIndicator';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landing page.
// This page has login or sign up buttons, the search bar, features location and testiomanials

export const LandingPage = () => {
  const modalRef = useRef();
  const trendingRef = useRef();

  function searchFocus() {
    trendingRef.current.focus({ preventScroll: false });
  }

  return (
    <>
      <ResulIndicator />
      <Hero focus={searchFocus} />
      <Map />
      <LocationCard />
      <TrendingSection ref={trendingRef} />
      <TestimonialSection />
      <Footer />
      <LoginModal ref={modalRef} />
    </>
  );
};
