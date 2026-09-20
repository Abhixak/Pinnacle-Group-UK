import React from "react";
import { Award, Home, Globe } from "lucide-react";
import { Link } from "react-router-dom"; // if you are using react-router


const Achievements = () => {
  const highlights = [
    {
      icon: <Home className="w-10 h-10 text-indigo-600" />,
      title: "20+ Years",
      desc: "Property Management Service",
    },
    {
      icon: <Globe className="w-10 h-10 text-emerald-600" />,
      title: "10000+ Happy Clients",
      desc: "Serving NRIs Worldwide",
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: "3x Awarded",
      desc: "Recognized by Media & Industry Leaders",
    },
    {
      title: "Member of BRICS",
      image:
        "https://res.cloudinary.com/dljubulyn/image/upload/v1772782592/BRICS_jnm8ix.jpg",
    }
  ];

  const awards = [
    "Bizz Next 2025 – News18",
    "Best NRI Property Management Services – PTC Awards 2024",
    "NRI Conclave 2025 – News18",
  ];

  return (
    <section className="content-auto bg-gradient-to-b from-gray-50 to-white rounded-xl !my-6 !py-8 !px-6 md:!px-12 lg:!px-20">
      <div className="max-w-6xl !mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-12">
          Our{" "}
          <span className="text-red-600 underline underline-offset-4">
            Journey of Excellence
          </span>
        </h2>

        {/* Highlights */}
        <div className="grid gap-8 md:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md !py-8 !px-4 flex flex-col items-center justify-center 
                         transform transition duration-500 hover:scale-105 hover:shadow-lg animate-fadeIn"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {!item.image && <div className="!mb-4 w-auto">{item.icon}</div>}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 !mt-2">{item.desc}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt="Member of BRICS"
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="200"
                />
              )}
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="!mt-6 bg-white shadow-lg rounded-2xl !p-8 animate-fadeInUp">
          <h3 className="text-2xl font-semibold text-gray-900 !mb-3 text-center">
            Awards & Recognition
          </h3>
          <p className="text-md font-semibold text-gray-400 !mb-8 text-center">Awarded 3 times for Best NRI Property Management Services</p>

          {/* Award Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {/* Award 1 */}
            <div className="group w-80 rounded-xl !p-4 hover:shadow-xl transition">
              <img
                src="https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Biz-Next.png?updatedAt=1769753330849&tr=w-600,q-70"
                alt="Biz Next Award 2025"
                className="w-full h-40 object-contain transform group-hover:scale-105 transition duration-300"
                loading="lazy"
                decoding="async"
                width="320"
                height="160"
              />
              <p className="text-center text-sm font-semibold !mt-3 text-gray-700">
                Bizz Next – News18, 2025
              </p>
            </div>

            {/* Award 2 */}
            <div className="group w-80 rounded-xl !p-4 hover:shadow-xl transition">
              <img
                src="https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Central-Minister.jpeg?updatedAt=1769753329382"
                alt="PTC Award"
                className="w-full h-40 object-contain transform group-hover:scale-105 transition duration-300"
                loading="lazy"
                decoding="async"
                width="320"
                height="160"
              />
              <p className="text-center text-sm font-semibold !mt-3 text-gray-700">
                Best NRI Property Management – PTC, 2024
              </p>
            </div>

            {/* Award 3 */}
            <div className="group w-80 rounded-xl !p-4 hover:shadow-xl transition">
              <img
                src="https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/NRI-Conclave2.jpeg?updatedAt=1769753330830&tr=w-600,q-70"
                alt="NRI Conclave Award"
                className="w-full h-40 object-contain transform group-hover:scale-105 transition duration-300"
                loading="lazy"
                decoding="async"
                width="320"
                height="160"
              />
              <p className="text-center text-sm font-semibold !mt-3 text-gray-700">
                NRI Conclave – News18, 2025
              </p>
            </div>
          </div>

          {/* View Gallery Button */}
          <div className="!mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-block bg-indigo-600 text-white font-semibold !py-3 !px-8 rounded-full 
                 shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
