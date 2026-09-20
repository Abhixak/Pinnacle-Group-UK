import React from "react";
import { useParams, Navigate } from "react-router-dom";

import EnquiryForm from "../Components/Enquire";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";
import Chatbot from "../Components/Chatbot";
import FreeConsultation from "../Components/FreeConsultation";
import SEO from "../Components/SEO";
const serviceData = {
  // =============================
  // MAIN SERVICES
  // =============================

  selling: {
    title: "Selling Property",
    description:
      "At Pinnacle Group, we offer end-to-end Selling Property Services designed especially for NRIs and Indian residents who want a smooth, secure, and profitable selling experience. Our process begins with accurate property valuation based on current market trends to ensure you receive the best possible price. We handle professional property listing, marketing, buyer inquiries, and site visit coordination. Every potential buyer is carefully screened to avoid fraud and unnecessary delays. Our experts manage price negotiations, agreement drafting, legal documentation, and coordination with banks and authorities. From token amount to final registry and handover, we maintain complete transparency at every stage. For NRIs living abroad, our dedicated on-ground team acts as your trusted local representative, providing regular updates through calls, WhatsApp, and email. With strong legal backing and market expertise, we help you sell your property faster, safely, and with maximum returns while you remain stress-free anywhere in the world.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Selling%20Property.jpg?updatedAt=1769753331725",
  },

  buying: {
    title: "Buying Property",
    description:
      "Buying property in India requires thorough verification, legal clarity, and strong local coordination. Our Buying Property Services are designed to make the entire journey safe and hassle-free for both NRIs and resident Indians. We assist with property shortlisting based on your budget, location preference, and investment goals. Our team arranges site visits, conducts background checks, and verifies land records, approvals, and ownership history. We perform detailed legal due diligence to ensure the property is free from disputes, loans, or encumbrances. From price negotiation and agreement drafting to stamp duty calculation and final registration, we manage every step professionally. Whether you are purchasing residential, commercial, or agricultural property, our experts focus on long-term value and risk-free ownership. With transparent communication and complete documentation support, we ensure your investment remains secure, profitable, and legally compliant.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Buying%20Property.jpg?updatedAt=1769753330238",
  },

  leasing: {
    title: "Leasing Property",
    description:
      "Our Leasing Property Services help property owners and tenants connect through a secure and professionally managed process. We assist landlords in finding verified tenants while ensuring tenants receive legally compliant rental agreements. Our services include tenant background verification, rent negotiation, agreement drafting, registration, and move-in coordination. For property owners, especially NRIs, we aim to reduce vacancy periods and maximize rental income. We manage renewals, periodic follow-ups, and coordination between both parties to avoid conflicts. With access to a strong network of corporate and individual tenants, we ensure faster closures and reliable occupancy. Our team also supports rent structuring, security deposit handling, and documentation compliance. Whether residential or commercial leasing, our transparent and organized approach provides peace of mind and steady rental returns.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Leasing%20Property.jpg?updatedAt=1769753330380",
  },

  "buy-sell": {
    title: "Buy & Sell Assistance",
    seoTitle: "Buy & Sell Property in India from UK | NRI Property Experts",
    seoDescription:
      "End-to-end buy and sell support for UK NRIs with valuation, legal checks, documentation, and registry coordination in India.",
    description:
      "Our Buy & Sell Assistance service is specially designed for NRIs who require complete end-to-end property support in India. From the initial planning stage to final ownership transfer, our experts manage every detail on your behalf. We assist with property verification, valuation, market analysis, negotiation strategy, and documentation preparation. Whether you are buying your first property or selling an inherited asset, our team ensures legal accuracy and financial safety. We coordinate with lawyers, government offices, and buyers or sellers to prevent delays and miscommunication. Regular updates, transparent reporting, and digital documentation allow you to stay informed while living abroad. With strong on-ground execution and trusted legal expertise, we simplify complex transactions and ensure smooth property ownership transfer without stress or risk.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/buy&sell.png?updatedAt=1769753340851",
  },

  legal: {
    title: "Legal Litigation",
    description:
      "Our Legal Litigation Services provide strong legal protection for NRIs facing property-related challenges in India. We handle disputes involving ownership conflicts, illegal possession, inheritance matters, succession certificates, and partition cases. Our experienced legal team assists with power of attorney drafting, title verification, registration support, and fraud prevention. We represent clients before courts and government authorities while maintaining complete transparency. Each case is handled with detailed documentation review and strategic legal planning. Our goal is to protect your property rights, recover assets where required, and ensure long-term legal security. With continuous updates and professional guidance, we help NRIs resolve complex legal matters efficiently and confidently.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/legal.png?updatedAt=1769753343762",
  },

  management: {
    title: "Property Management",
    seoTitle: "Property Management for NRI Owners | India & UK Support",
    seoDescription:
      "Property management for NRI owners in India with inspections, tenant coordination, rent collection, and maintenance reporting for UK-based clients.",
    description:
      "Our Property Management Services are designed to give NRIs complete peace of mind while owning property in India. We act as your local representative and manage everything from routine inspections to tenant coordination. Services include maintenance supervision, repair management, rent collection, utility bill payments, society coordination, and compliance handling. We ensure your property remains secure, well-maintained, and income-generating. Regular reports, photographs, and financial updates keep you informed at all times. Whether your property is rented, vacant, or under renovation, our professional management ensures long-term value preservation and stress-free ownership.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Management.png?updatedAt=1769753343827",
  },

  title: {
    title: "Property Title Clearing",
    description:
      "Property title issues can delay transactions and create long-term legal risks. Our Property Title Clearing Services help resolve ownership problems through proper legal verification and documentation. We assist with land record verification, mutation entries, inheritance updates, encumbrance removal, and correction of government records. Our legal experts coordinate with revenue departments and registrars to ensure your property title becomes legally clean and transferable. This service is essential before selling, buying, or repatriating property assets. With accurate documentation and professional handling, we help eliminate disputes and secure your ownership rights permanently.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/title%20Clearing.png?updatedAt=1769753345500",
  },

  finance: {
    title: "NRI Tax & Finance Support",
    description:
      "Our NRI Tax & Finance Support services help clients stay compliant with Indian taxation laws while maximizing financial benefits. We assist with capital gains tax planning, TDS calculation and filing, DTAA benefits, repatriation approvals, and rental income taxation. Our experts also guide you on NRO and NRE account structuring for smooth fund transfers. Whether selling property, earning rental income, or transferring funds abroad, we ensure proper documentation and legal compliance. With accurate tax planning and professional advice, we help you reduce liabilities and protect your earnings.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/tax.png?updatedAt=1769753346511",
  },

  support: {
    title: "24X7 Support",
    description:
      "Our 24X7 Support service ensures you receive timely assistance regardless of your country or time zone. Our dedicated team is available through phone, WhatsApp, email, and video consultation to address your queries instantly. From transaction updates to urgent property matters, we remain accessible at all times. This continuous support model allows NRIs to manage Indian properties confidently without delays or uncertainty. Your peace of mind is our priority, and our team is always just one message away.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/24%20x%207.png?updatedAt=1769753346293",
  },
};

const ServiceDetails = () => {
  const { serviceType } = useParams();
  const service = serviceData[serviceType?.toLowerCase()];

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | NRI Property Services"
          description="The service you're looking for does not exist. Contact us for custom NRI real estate assistance in India."
          path="/service-details"
          noIndex
        />
        {/* <Chatbot /> */}
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
      <SEO
        title={service.seoTitle || `${service.title} for UK NRIs | NRI Property Services India`}
        description={service.seoDescription || service.description.slice(0, 160)}
        path={`/service-details/${serviceType}`}
        image={service.image}
        type="article"
        keywords={`${service.title} for NRIs, ${service.title} in India, NRI property services UK, NRI legal documentation, NRI property litigation, NRI investment property India, NRI property consultant UK`}
        breadcrumbs={[
          { name: "NRI Property Services", path: "/nri-services" },
          { name: service.title, path: `/service-details/${serviceType}` },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: "Pinnacle Group UK",
            url: "https://www.nriproperty.uk",
          },
          areaServed: ["United Kingdom", "India", "United States", "Canada", "Europe"],
        }}
      />
      <FreeConsultation />

      {/* <Chatbot /> */}
      <div className="!m-5 !p-5 bg-gray-100 rounded-xl">
        <h1 className="text-3xl font-bold text-red-600 text-center !mb-4">
          {service.title} for NRIs
        </h1>
        <p className="text-center text-gray-600 !mb-6">
          UK-focused support for secure property transactions and compliant
          ownership in India.
        </p>

        {/* IMAGE CONTAINER */}
        <div className="w-full flex flex-col md:flex-row gap-6 rounded-xl overflow-hidden !my-6">
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-100 object-contain rounded-xl"
            loading="lazy"
            decoding="async"
          />

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
        </div>
      </div>

      <ServicesSection />
      <EnquiryForm />
      <Footer />
    </>
  );
};

export default ServiceDetails;
