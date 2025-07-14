


import React from "react";
import { useNavigate } from "react-router-dom";

// Import service images
import SellingImg from "../assets/Selling Property.jpg";
import BuyingImg from "../assets/Buying Property.jpg";
import LeasingImg from "../assets/Leasing Property.jpg";

// Service data with IDs for dynamic routing
const services = [
  {
    id: "selling",
    title: "Selling Property",
    description:
      "Based in India, we are one of the prominent real estate companies well-known for offering Selling Property Services for different types of properties.",
    image: SellingImg,
  },
  {
    id: "buying",
    title: "Buying Property",
    description:
      "With the intention of providing the clients with comprehensive guidance while assisting them in Buying Properties, at Pinnacle Group, we are offering trusted service.",
    image: BuyingImg,
  },
  {
    id: "leasing",
    title: "Leasing Property",
    description:
      "We have with us a huge database of a wide range of properties and clients which enables us to provide Leasing Property Services for different requirements.",
    image: LeasingImg,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl !my-4 w-full !px-5 !py-5 text-center bg-white">
      <h2 className="text-3xl font-bold !mb-12">
        Our <span className="text-red-600 underline underline-offset-4">Services</span>
      </h2>

      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border !p-4 rounded-md shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover border !mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold text-red-600 !mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm !mb-4">{service.description}</p>
            <button
              onClick={() => navigate(`/ServiceDetails/${service.id}`)}
              className="bg-black text-white !px-4 !py-2 text-sm rounded hover:bg-gray-800 transition"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
