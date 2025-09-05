import React from "react";
import HeroSection from "./HeroSection";
import ShowCase from "./ShowCase";
import StatsComponent from "./StatsComponent";
import SmartLivingComponent from "./SmartLivingComponent";
import ScheduleVisit from "./ScheduleVisit";
import FeaturesSection from "./FeaturesSection";
import ChooseApartment from "./ChooseApartment";
import NearbyPlaces from "./NearbyPlaces";
import AppartmentPlans from "./AppartmentPlans";
import PropertyFeatures from "./PropertyFeatures";
import BlogSection from "./BlogSection";
import TestimonialSlider from "./TestimonialSlider";
import LogoSlider from "./LogoSlider";
import Requestreview from "./Requestreview";

const HomeMain = () => {
  return (
    <div>
      <HeroSection />
      <ShowCase />
      <StatsComponent />
      <SmartLivingComponent />
      <ScheduleVisit />
      <FeaturesSection />
      <ChooseApartment />
      <NearbyPlaces />
      <AppartmentPlans />
      <PropertyFeatures />
      <BlogSection />
      <TestimonialSlider />
      <Requestreview/>
      <LogoSlider/>
    </div>
  );
};

export default HomeMain;
