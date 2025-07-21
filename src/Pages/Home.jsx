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

import { Helmet } from "react-helmet";
import FreeConsultation from "../Components/FreeConsultation";

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
      <Helmet>
        <title>
          NRI Property UK | Buy, Sell, and Invest in Indian Real Estate
        </title>
        <meta
          name="description"
          content="Helping NRIs to buy, sell, and invest in real estate in India. Legal assistance and personalized guidance."
        />
        <meta
          name="keywords"
          content="NRI property India, buy property in India, invest in Indian real estate, sell Indian property from UK"
        />
        <link rel="canonical" href="https://www.nriproperty.uk/" />
      </Helmet>
      <FreeConsultation />
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
