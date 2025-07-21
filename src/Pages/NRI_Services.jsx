import React from "react";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/Enquire";
import PMS from "../Components/PMS";
import Chatbot from "../Components/Chatbot";
import { Helmet } from "react-helmet";
import FreeConsultation from "../Components/FreeConsultation";

const NRI_Services = () => {
  return (
    <div className="!px-6 !py-2 bg-gray-100 rounded-xl !mt-4 !mx-5">
      <Helmet>
        <title>NRI Services | Real Estate Support for NRIs</title>
        <meta
          name="description"
          content="Explore our specialized services for NRIs including property management, legal help, home loans, and real estate investments in India."
        />
        <meta
          name="keywords"
          content="NRI real estate services, property for NRIs, legal help for NRI, invest in India from UK"
        />
        <link rel="canonical" href="https://www.nriproperty.uk/nri-services" />
      </Helmet>
      <FreeConsultation />

      {/* Chatbot */}

      <Chatbot />
      <h2 className="text-3xl font-bold !my-6 text-center">
        NRI{" "}
        <span className="text-red-600 underline underline-offset-4">
          Services
        </span>
      </h2>
      <section className="text-center !px-2 !py-4 text-gray-600 text-lg !mb-6 font-serif">
        <p>
          Pinnacle Group is one of the leading real estate houses in Mohali in
          Punjab that manage their business very professionally. That is why we
          are considered one of the best companies that are efficient in giving
          NRI Services. Our services to non-resident Indians include services
          like buying and selling property anywhere in India. We also help in
          evaluating our customer’s property so that they know exactly how much
          they are worth and can easily sell the property if required. We are
          backed by an efficient and experienced team that has been attached to
          the industry for many years now. You can trust and rely on us to do
          the job most honourably.
        </p>
      </section>
      <EnquiryForm />
      <PMS />
      <hr />
      <Footer />
    </div>
  );
};

export default NRI_Services;
