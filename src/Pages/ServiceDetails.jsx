import React from "react";
import { useParams } from "react-router-dom";

import SellingImg from "../assets/Selling Property.jpg";
import BuyingImg from "../assets/Buying Property.jpg";
import LeasingImg from "../assets/Leasing Property.jpg";
import BuySellImg from "../assets/buy&sell.png";
import LegalImg from "../assets/legal.png";
import ManagementImg from "../assets/Management.png";
import TaxImg from "../assets/title Clearing.png";
import FinanceImg from "../assets/tax.png";
import SupportImg from "../assets/24 x 7.png";

import EnquiryForm from "../Components/Enquire";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";
import Chatbot from "../Components/Chatbot";
import { Helmet } from "react-helmet";

const serviceData = {
  selling: {
    title: "Selling Property",
    description:
      "At Pinnacle Group, we understand the emotional and financial value of your property. Our dedicated Selling Property Services are designed to provide NRIs with a seamless and profitable selling experience. Whether you're looking to sell a Residential, Commercial, Industrial, or Agricultural property, we ensure complete support—from property listing and buyer shortlisting to legal documentation and final registration. We also offer expert market analysis and valuation services to help you receive the best price for your property. Our team handles negotiations, inspections, and legal formalities with utmost transparency, keeping you informed every step of the way.",
    image: SellingImg,
  },
  buying: {
    title: "Buying Property",
    description:
      "Buying a property in India while staying overseas can be complex—but with Pinnacle Group, it becomes effortless. Our Buying Property Services help NRIs explore, compare, and invest in the best Residential, Commercial, Industrial, and Agricultural properties based on their budget and requirements. We assist with everything from property shortlisting and virtual site visits to due diligence, negotiation, legal paperwork, and final registration. Whether you're investing in a home for your return or as a rental income source, we ensure every transaction is transparent and tailored to your financial goals.",
    image: BuyingImg,
  },
  leasing: {
    title: "Leasing Property",
    description:
      "If you’re an NRI looking to lease out your property in India or searching for one to lease, our expert Leasing Property Services ensure a secure and profitable experience. We act as a bridge between landlords and tenants, taking care of background verification, agreement drafting, rent negotiations, and lease registration. Whether it's a flat, villa, office space, or farmland, we maintain a robust database and provide periodic updates. Our goal is to help you avoid vacancy losses, manage tenants effectively, and ensure your leased property generates consistent returns with complete peace of mind.",
    image: LeasingImg,
  },
  "buy-sell": {
    title: "Buy & Sell Assistance",
    description:
      "Our integrated Buy & Sell Assistance service is tailored for NRIs who need guidance throughout the property transaction lifecycle. From market research and property verification to pricing, negotiation, legal documentation, and transfer of ownership, we ensure that both buyers and sellers experience a hassle-free and transparent process. We represent your interests at every step—even when you're abroad—ensuring legal compliance and optimal returns. With our team of real estate, legal, and financial experts, you're guaranteed secure and profitable deals, whether you're buying your dream home or selling inherited property.",
    image: BuySellImg,
  },
  legal: {
    title: "Legal & Documentation",
    description:
      "Navigating Indian property laws from abroad can be overwhelming. At Pinnacle Group, our Legal & Documentation Services are designed to protect your interests and ensure every property transaction or dispute is handled with legal precision. We specialize in succession and inheritance matters, title disputes, property frauds, and power of attorney (PoA) services. Our in-house legal experts assist with due diligence, property title verification, mutation, registration, and agreement drafting. Whether it’s a will, gift deed, or PoA execution, we ensure full legal compliance—saving you time, risk, and travel.",
    image: LegalImg,
  },
  management: {
    title: "Property Management",
    description:
      "Owning property in India while living abroad requires trusted hands to manage it. Our end-to-end Property Management Services include periodic inspections, repairs & maintenance, tenant management, rent collection, bill payments, and legal compliance. We act as your on-ground representatives, ensuring your property remains well-maintained, secure, and profitable. Whether it's a residential unit, office, or farmland, we provide monthly updates, visual reports, and quick responses to emergencies. With our services, you no longer need to depend on relatives or risk mismanagement—we protect your investment like it's our own.",
    image: ManagementImg,
  },
  title: {
    title: "Property Title Clearing",
    description:
      "Title-related issues are among the biggest roadblocks for NRIs selling or transferring ownership of their property in India. At Pinnacle Group, we provide expert Title Clearing Services to help you resolve any legal discrepancies. We conduct thorough due diligence, verify land records, manage mutation entries, and resolve disputes over ownership or encroachments. Our legal team works with local authorities and registration offices to ensure your property has a clean, transferable title. With our support, your property becomes fully compliant for sale, lease, or inheritance—without your physical presence in India.",
    image: TaxImg,
  },
  finance: {
    title: "NRI Tax & Finance Support",
    description:
      "Managing finances related to Indian real estate can be challenging for NRIs. Our NRI Tax & Finance Support includes capital gains calculation, repatriation services, TDS compliance, and guidance on Double Tax Avoidance Agreements (DTAA). We help NRIs plan their property investments in a tax-efficient manner, ensuring compliance with Indian Income Tax laws. We also assist in opening NRO/NRE accounts, handling home loans, and coordinating with CA/legal professionals for tax filing. Whether you're buying, selling, or earning rental income, our team helps you optimize returns and stay fully compliant.",
    image: FinanceImg,
  },
  support: {
    title: "24x7 Support",
    description:
      "As an NRI, your questions and concerns don’t wait for office hours—and neither do we. Our 24x7 Support Service ensures that you get real-time assistance regardless of your timezone. From urgent legal advice and documentation updates to property visits and dispute resolution coordination, our multilingual team is always ready to support you. With multiple communication channels (WhatsApp, Email, Video Call, Phone), you can connect with our experts anytime. We’re committed to being your trusted partner, wherever you are in the world.",
    image: SupportImg,
  },
};

const ServiceDetails = () => {
  const { serviceType } = useParams();
  const service = serviceData[serviceType];

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Service Not Found | NRI Property Services</title>
          <meta
            name="description"
            content="The service you're looking for does not exist. Contact us for custom NRI real estate assistance in India."
          />
        </Helmet>
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
      <Helmet>
        <title>{`${service.title} | NRI Property Services`}</title>
        <meta name="description" content={service.description.slice(0, 160)} />
        <link
          rel="canonical"
          href={`https://www.nriproperty.uk/services/${serviceType}`}
        />
      </Helmet>

      <Chatbot />
      <div className="!m-5 !p-5 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-red-600 text-center !mb-4">
          {service.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-[30%] max-w-xl h-auto rounded-md !mx-auto !mb-4"
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
