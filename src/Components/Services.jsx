const services = [
  {
    title: "Property Loan Consultant",
    description:
      "We have with us experts who have extensive knowledge about various schemes and can provide you with all the required information while assisting you...",
    image: "/src/assets/Property Loan Consultant.jpg",
  },
  {
    title: "Selling Property",
    description:
      "Based in Mohali, Punjab, we are one of the prominent real estate companies well-known for offering Selling Property Services for different type of...",
    image: "/src/assets/Selling Property.jpg",
  },
  {
    title: "Buying Property",
    description:
      "With the intention of providing the clients with comprehensive guidance while assisting them in Buying Properties, at Pinnacle Group, we are offering...",
    image: "/src/assets/Buying Property.jpg",
  },
  {
    title: "Leasing Property",
    description:
      "We have with us a huge database of wide range of properties and also of clients which enables us to provide Leasing Property Services for different...",
    image: "/src/assets/Leasing Property.jpg",
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full !px-5 !py-5 text-center bg-white">
      <h2 className="text-3xl font-bold !mb-12">
        Our <span className="text-red-600 underline underline-offset-4">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border !p-4 rounded-md shadow hover:shadow-lg transition duration-300">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover border !mb-4"
            />
            <h3 className="text-lg font-semibold text-red-600 !mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm !mb-4">{service.description}</p>
            <button className="bg-black text-white !px-4 !py-2 text-sm rounded hover:bg-gray-800 transition">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
