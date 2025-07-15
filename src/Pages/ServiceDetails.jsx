import React from "react";
import { useParams } from "react-router-dom";

import SellingImg from "../assets/Selling Property.jpg";
import BuyingImg from "../assets/Buying Property.jpg";
import LeasingImg from "../assets/Leasing Property.jpg";
import EnquiryForm from "../Components/Enquire";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";
import Chatbot from "../Components/Chatbot";
import { Helmet } from "react-helmet";

const serviceData = {
  selling: {
    title: "Selling Property",
    description:
      "While assisting clients in Selling Properties conveniently and also getting a good deal while doing so, at Pinnacle Group, we are offering Selling Property Services. Based in India, we are one of the prominent real estate companies well-known for offering Selling Property Services for different type of Residential Property, Commercial property, Industrial Property and Agricultural Property such as Agricultural Land, Residential Land/ Plot, Flat/ Apartment, Individual House, Commercial Land, Commercial Shop/ Space, Office Space, Industrial Land/ Plot, Warehouse/ Godown, Farm Land, etc. With the Selling Property Services the clients can not only get an easy dealing process, but also get the best deal and complete assistance throughout the transaction process.",
    image: SellingImg,
  },
  buying: {
    title: "Buying Property",
    description:
      "With the intention of providing the clients with comprehensive guidance while assisting them in Buying Properties, at Pinnacle Group, we are offering Buying Property Services at very reasonable charges. Based in India, we are counted among one of the prominent service providers operating in the real estate industry offering Buying Property Services according to the exact needs and requirements of the clients. Offering services for different type of properties such as Residential Property, Commercial property, Industrial Property and Agricultural Property, we present the clients with the option of choosing a property that exactly meets their requirement and also suits well within their budget.",
    image: BuyingImg,
  },
  leasing: {
    title: "Leasing Property",
    description:
      "Creating an effective link between the landlord and the tenant, at Pinnacle Group, we are offering services to help clients in Leasing Properties. As one of the leading service providers operating in India, we are offering prompt and reliable services at very reasonable charges. We have with us a huge database of wide range of properties and also of clients which enables us to provide Leasing Property Services for different type of Residential Property, Commercial property, Industrial Property and Agricultural Property such as Agricultural Land, Residential Land/ Plot, Flat/ Apartment, Individual House, Commercial Land, Commercial Shop/ Space, Office Space, Industrial Land/ Plot, Warehouse/ Godown, Farm Land, etc.",
    image: LeasingImg,
  },
};

const ServiceDetails = () => {
  const { serviceType } = useParams();
  const service = serviceData[serviceType];

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Legal Help for NRIs | Expert Guidance & Property Law</title>
          <meta
            name="description"
            content="Get expert legal assistance for your property matters in India. Our lawyers specialize in NRI property disputes, succession, and more."
          />
          <meta
            name="keywords"
            content="legal help for NRI, NRI property lawyer, property dispute NRI, Indian real estate legal advice"
          />
          <link
            rel="canonical"
            href="https://www.nriproperty.uk/services/legal-help"
          />
        </Helmet>
        {/* Chatbot */}
        <Chatbot />
        <div className="!m-5 !p-5 bg-red-100 text-red-600 rounded-xl text-center">
          <h2 className="text-xl font-bold">Service Not Found</h2>
          <p>You can contact the Advisor regarding this service.</p>
        </div>
        <ServicesSection />
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Chatbot */}
      <Chatbot />
      <div className="!m-5 !p-5 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-red-600 text-center !mb-4">
          {service.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-xl h-auto rounded-md !mx-auto !mb-4"
          />
          <p className="text-gray-700 text-left !mb-6">{service.description}</p>
        </div>
      </div>
      <EnquiryForm />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default ServiceDetails;
