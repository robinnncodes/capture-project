import React from "react";
import ServicesSection from "../Components/ServicesSection";
import AboutSection from "../Components/AboutSection";
import FAQSection from '../Components/FAQSection';
const UsAbout = () => {
  return (
    <>
    {/* fragment */} 
      <AboutSection />
      <ServicesSection />
      <FAQSection/>
    </>
  );
};

export default UsAbout;
