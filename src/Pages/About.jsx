import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";

const About = () => {
  return (
    <div className="!px-6">
      <h2 className="text-3xl font-bold !my-6 text-center">
        About{" "}
        <span className="text-red-600 underline underline-offset-4">
          Pinnacle Group
        </span>
      </h2>
      <section className="text-center !px-2 text-gray-600 text-lg !mb-6 font-serif">
        <p>
          As one of the leading services providers operating in the real estate
          domain, at Pinnacle Group, we are offering host of services according
          to the various realty needs and requirements of the clients. Located
          in Mohali, Punjab, & Wolverhampton London. we are offering services
          such as Buying Property Services, Selling Property Services, Leasing
          Property Services and Property Loan Consultancy. As a reliable service
          provider, we are offering services keeping in mind the various realty
          needs and requirements of the clients, providing them with good and
          effective realty solution on a prompt basis. Since the incorporation
          of the company in the year 2007, we have benefitted many clients by
          providing world-class services at the most reasonable charges. Keeping
          in mind the convenience of the clients we are offering prompt and
          reliable services which are highly appreciated by the clients. <br />
          Under the guidance and supervision of our owner, Mr. Ajay Banger, we
          have achieved great heights in the real estate domain. We have with us
          a team of highly efficient and hardworking professionals whose main
          concern is to provide full client satisfaction while offering realty
          services. Our professionals understand the exact need and requirement
          of the clients and accordingly provide services to ensure all the
          needs and requirements of the clients are being properly catered to.
        </p>
      </section>
    
        <ServicesSection />
        <Footer />
      
    </div>
  );
};

export default About;
