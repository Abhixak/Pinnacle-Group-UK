import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center text-black  !px-6 md:!px-20 !py-6 bg-white">
      <h2 className="text-3xl font-bold !mb-8 text-center">
        About{" "}
        <span className="text-red-600 underline underline-offset-4">
          Pinnacle Group
        </span>
      </h2>
      <p className="text-sm leading-7 text-center !mx-auto">
        As one of the leading services providers operating in the real estate
        domain, at <strong>Pinnacle Group</strong>, we are offering host of
        services according to the various realty needs and requirements of the
        clients.
      </p>
      <p className="text-sm leading-7 text-center !mb-6 !mx-auto">
        Located in India, United Kingdom, United States of America, Canada, we have specialization in <span className="text-red-800 font-semibold">NRI Property Management Services</span> such as Buying
        Property Services, Selling Property Services, Leasing Property Services
        and Property Loan Consultancy. As a reliable service provider, we are
        offering services keeping in mind the various realty needs and
        requirements of the clients, providing them with good and effective
        realty solution on a prompt basis. &nbsp;
        <Link
          to="/about"
          className="text-red-600 font-semibold underline-offset-4"
        >
          Read more..
        </Link>
      </p>
    </div>
  );
};

export default AboutSection;
