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

  const _awards = [
    "Bizz Next 2025 – News18",
    "Best NRI Property Management Services – PTC Awards 2024",
    "NRI Conclave 2025 – News18",
  ];

  return (
    <section className="content-auto rounded-2xl border border-slate-200 bg-white !my-6 !py-10 !px-6 md:!px-10">
      <div className="max-w-7xl !mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
          Trusted Experience
        </p>
        <h2 className="!mt-2 font-serif text-3xl md:text-4xl font-semibold text-[#102a4c] !mb-10">
          A Track Record You Can Rely On
        </h2>

        {/* Highlights */}
        <div className="grid overflow-hidden rounded-xl border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fffdf9] !py-7 !px-4 flex min-h-40 flex-col items-center justify-center border-b border-slate-200 sm:border-r lg:border-b-0"
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
        <div className="!mt-10 border-t border-slate-200 !pt-9">
          <h3 className="font-serif text-3xl font-semibold text-[#102a4c] !mb-2 text-center">
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
              className="inline-flex items-center bg-[#9d1c1a] text-white font-semibold !py-3 !px-7 rounded-md shadow-md hover:bg-[#771522] transition duration-200"
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
