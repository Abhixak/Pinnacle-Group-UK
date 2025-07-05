import AboutSection from "../Components/AboutSection";
import EnquiryForm from "../Components/Enquire";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";

const Home = () => {
  return (
    <div className="w-full !p-5">
      <div className="!py-2 w-full rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, i) => {
          const bgColors = [
            "bg-red-300",
            "bg-blue-300",
            "bg-green-300",
            "bg-yellow-300",
            "bg-purple-300",
            "bg-pink-300",
            "bg-orange-300",
            "bg-teal-300",
          ];
          return (
            <div
              key={i}
              className={`${bgColors[i % bgColors.length]} rounded-lg h-60 flex items-center justify-center text-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300`}
            >
              Property {i + 1}
            </div>
          );
        })}
      </div>

      <div className="w-full !mt-6 flex justify-center text-center items-center">
        <button className="!px-6 !py-2 !mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          View More
        </button>
      </div>
      <ServicesSection />
      <EnquiryForm />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
