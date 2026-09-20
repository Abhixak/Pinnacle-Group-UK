import { Link } from "react-router-dom";

const PMS = () => {
  const services = [
    {
      id: "buy-sell",
      img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/buy&sell.png?updatedAt=1769753340851&tr=w-600,q-70",
      alt: "Buy and Sell Property",
      title: "Buy & Sell Assistance",
      desc: "Get expert assistance for buying or selling property in India while living abroad.",
    },

    {
      id: "legal",
      img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/legal.png?updatedAt=1769753343762&tr=w-600,q-70",
      alt: "Legal Documentation",
      title: "Legal Documentation & Litigation",
      desc: "Complete support for agreements, registration, legal paperwork, and dispute handling.",
    },

    {
      id: "management",
      img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Management.png?updatedAt=1769753343827&tr=w-600,q-70",
      alt: "Property Management",
      title: "Property Management",
      desc: "End-to-end property care including maintenance, tenant management, inspections, and updates.",
    },

    {
      id: "verification",
      img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/title%20Clearing.png?updatedAt=1769753345500",
      alt: "Title Verification",
      title: "Title Verification & Legal Search",
      desc: "Ownership verification, dispute resolution, and ensuring your property has a clear legal title.",
    },

    {
      id: "finance",
      img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/tax.png?updatedAt=1769753346511&tr=w-600,q-70",
      alt: "Tax and Finance Support",
      title: "Tax & Financial Advisory",
      desc: "DTAA-based tax planning, capital gains guidance, and full financial compliance for NRIs.",
    },

    {
      id: "support",
      img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/24%20x%207.png?updatedAt=1769753346293&tr=w-600,q-70",
      alt: "24x7 Support",
      title: "24x7 Dedicated Support",
      desc: "Relationship managers available round-the-clock to assist you anytime, anywhere.",
    },
  ];

  return (
    // <div className="content-auto w-full !mx-auto !px-6 !py-8 rounded-xl shadow-md bg-[#e5f0ff]">
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !px-6 !py-8">
      {services.map((item) => (
        <Link
          key={item.id}
          to={`/service-details/${item.id}`}
          className="relative bg-white !p-6 rounded-xl shadow-md hover:shadow-lg
            transition text-center flex flex-col items-center hover:no-underline"
        >
          {/* Service Image */}
          <img
            src={item.img}
            alt={item.alt}
            className="!mx-auto !mb-4 w-full h-50 object-cover
              transition-transform duration-300 hover:scale-110 rounded"
            loading="lazy"
            decoding="async"
            width="360"
            height="200"
          />

          {/* Title */}
          <h3 className="text-xl font-semibold !mb-2 text-blue-700">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </Link>
      ))}
    </section>
    // </div >
  );
};

export default PMS;
