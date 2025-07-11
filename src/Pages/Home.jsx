import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";
import AboutSection from "../Components/AboutSection";
import Ad from "../Components/Ad";
import Chatbot from "../Components/Chatbot";
import EnquiryForm from "../Components/Enquire";
import NRIAdvice from "../Components/NRIAdvice";
import PMS from "../Components/PMS";
import PopUpEnquiry from "../Components/PopUpEnquiry";
import SocialMedia from "../Components/SocialMedia";

const Home = ({ footerRef }) => {
  const location = useLocation();

  useEffect(() => {
    // Check if we arrived at Home with a scroll intent
    if (location.state?.scrollToFooter && footerRef?.current) {
      setTimeout(() => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // delay ensures DOM is rendered
    }
  }, [location, footerRef]);

  return (
    <div className="w-full !p-5">
      <Chatbot />
      <PopUpEnquiry />
      <Ad />
      <NRIAdvice />
      <PMS />
      <ServicesSection />
      <SocialMedia />
      <EnquiryForm />
      <AboutSection />

      <div ref={footerRef} id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
