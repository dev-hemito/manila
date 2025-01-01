import Brands from '@/components/Brands';
import CarCollection from '@/components/CarCollection';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import LocationSearch from '@/components/LocationSearch';
import ServicesSection from '@/components/ServiceSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import FloatingButtons from '@/components/FloatingButtons';
import React from 'react';

const Page = () => {
  return (
   <>
   <Hero/>
    <FloatingButtons/>
   <LocationSearch/>
    <Brands/>
    <CarCollection/>
    <HowItWorks/>
    <ServicesSection/>
    <TestimonialSlider/>
    <Footer/>
   </>  
  );
};

export default Page;
