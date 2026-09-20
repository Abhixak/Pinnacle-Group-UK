
import React from "react";
import { useNavigate } from "react-router-dom";



// Service data with IDs for dynamic routing
const services = [
  {
    id: "selling",
    title: "Selling Property",
    description:
      "Based in India, we are one of the prominent real estate companies well-known for offering Selling Property Services for different types of properties.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Selling%20Property.jpg?updatedAt=1769753331725",
  },
  {
    id: "buying",
    title: "Buying Property",
    description:
      "With the intention of providing the clients with comprehensive guidance while assisting them in Buying Properties, at Pinnacle Group, we are offering trusted service.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Buying%20Property.jpg?updatedAt=1769753330238",
  },
  {
    id: "leasing",
    title: "Leasing Property",
    description:
      "We have with us a huge database of a wide range of properties and clients which enables us to provide Leasing Property Services for different requirements.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Leasing%20Property.jpg?updatedAt=1769753330380",
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
              loading="lazy"
              decoding="async"
              width="360"
              height="192"
            />
            <h3 className="text-lg font-semibold text-red-600 !mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm !mb-4">{service.description}</p>
            <button
              onClick={() => navigate(`/service-details/${service.id}`)}
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
