import DeferredVideo from "../Components/DeferredVideo";
import Footer from "../Components/Footer";
import Enquire from "../Components/Enquire";
import PopUpEnquiry from "../Components/PopUpEnquiry";
import Chatbot from "../Components/Chatbot";
import FreeConsultation from "../Components/FreeConsultation";
import SEO from "../Components/SEO";
import {
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  FileCheck,
  Headphones,
} from "lucide-react";
import AchievementsAwards from "../Components/AchievementsAwards";

const ContactUs = () => {
  const contactNumbers = [
    { country: "UK", flag: "🇬🇧", number: "+44-7868143558", code: "44" },
    { country: "India", flag: "🇮🇳", number: "+91-9216399808", code: "91" },
    { country: "Canada", flag: "🇨🇦", number: "+1-613-295-6385", code: "1" },
    { country: "USA", flag: "🇺🇸", number: "+1-414-690-6435", code: "1" },
    { country: "Europe", flag: "🇪🇺", number: "+49-15563030611", code: "49" },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Expertise",
      description:
        "20+ years of experience in NRI property transactions with 100% legal compliance",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Serving clients across UK, USA, Canada, Europe and India with dedicated support",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Verified Properties",
      description:
        "Every property is thoroughly verified for clear titles and legal documentation",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description:
        "Round-the-clock support across all time zones for your convenience",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best ROI",
      description:
        "Strategic property selection ensuring maximum returns on your investment",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Dedicated Support",
      description:
        "Personal relationship manager assigned to guide you through every step",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    { number: "10000+", label: "Happy Clients Worldwide" },
    { number: "20+", label: "Years Experience" },
    { number: "1000+", label: "Properties Sold" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "London, UK",
      text: "Excellent service! They helped me sell my property in India remotely without any hassle.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Toronto, Canada",
      text: "Professional team with deep knowledge of legal requirements. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "New York, USA",
      text: "Best property consultants for NRIs. They handled everything from documentation to registration.",
      rating: 5,
    },
  ];



  return (
    <div className="contact-page font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Contact NRI Property Experts in India | Free Consultation"
        description="Speak to NRI property experts for India. 24/7 UK support, legal documentation, and buy/sell help. Book a free consultation."
        path="/contact"
        keywords="contact NRI property consultant UK, NRI property helpline UK, NRI property support India, NRI legal property consultation, NRI property documentation assistance, NRI litigation consultation India, buy sell lease property support for NRIs"
      />

      {/* <Chatbot /> */}
      <FreeConsultation />
      <DeferredVideo
        src="https://res.cloudinary.com/dksbdsixz/video/upload/f_auto,q_auto:eco,w_1280/v1769850528/Banner2_mp9ilx.mp4"
        className="w-full object-cover"
        ariaLabel="Pinnacle Group contact page hero video"
        playLabel="Play contact hero video"
        controls={false}
      />


      {/* Enquiry Form */}
      <div className="">
        <Enquire />
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl !p-4 text-center">
        <h3 className="text-2xl font-bold !mb-6 text-gray-800">
          Certified & Trusted
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <FileCheck className="w-8 h-8 text-green-600" />
            <span className="font-semibold text-gray-700">RERA Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="font-semibold text-gray-700">100% Legal</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-8 h-8 text-purple-600" />
            <span className="font-semibold text-gray-700">Award Winning</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-8 h-8 text-orange-600" />
            <span className="font-semibold text-gray-700">
              5000+ Clients Worldwide
            </span>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="!px-6">
        <h2 className="text-3xl font-bold !my-6 text-center">
          About{" "}
          <span className="text-red-600 underline underline-offset-4">
            Pinnacle Group
          </span>
        </h2>
        <section className="text-center !px-2 text-gray-600 text-lg !mb-6 font-serif">
          <p>
            As one of the leading services providers operating in the real
            estate domain, at Pinnacle Group, we are offering host of services
            according to the various realty needs and requirements of the
            clients. Located in India, United Kingdom, United States of America,
            Canada, we have specialization in{" "}
            <span className="text-red-800 font-semibold">
              NRI Property Management Services
            </span>{" "}
            such as Buying Property Services, Selling Property Services and
            Leasing Property Services. As a reliable service provider, we are
            offering services keeping in mind the various realty needs and
            requirements of the clients, providing them with good and effective
            realty solution on a prompt basis. Since the incorporation of the
            company in the year 2007, we have benefitted many clients by
            providing world-class services at the most reasonable charges.
            Keeping in mind the convenience of the clients we are offering
            prompt and reliable services which are highly appreciated by the
            clients. <br />
            Under the guidance and supervision of our owner, Mr. Ajay Banger, we
            have achieved great heights in the real estate domain. We have with
            us a team of highly efficient and hardworking professionals whose
            main concern is to provide full client satisfaction while offering
            realty services. Our professionals understand the exact need and
            requirement of the clients and accordingly provide services to
            ensure all the needs and requirements of the clients are being
            properly catered to.
          </p>
        </section>

        <AchievementsAwards />
        {/* <ServicesSection /> */}
      </div>

      <div className="container !mx-auto !px-6 !py-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 !mb-10 relative z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg !p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 !mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white  !mb-8 !py-20 !px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
          </div>
          <div className="container !mx-auto text-center relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold !mb-4">
              Get In Touch With Us
            </h1>
            <p className="text-xl !mb-6 text-red-100">
              Your trusted partner for hassle-free NRI property transactions
            </p>
            <div className="flex flex-wrap justify-center gap-4 !mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm !px-4 !py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>100% Legal Compliance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm !px-4 !py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Verified Properties</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm !px-4 !py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div className="!mb-16">
          <div className="text-center !mb-12">
            <h2 className="text-3xl md:text-4xl font-bold !mb-4">
              Why Cho<span className="text-red-600">ose US?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl !mx-auto">
              We provide end-to-end property solutions with complete
              transparency and legal security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg !p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white !mb-4 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold !mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 !mb-16">
          {/* Contact Numbers */}
          <div className="bg-white rounded-xl shadow-lg !p-8 border border-gray-100">
            <div className="flex items-center gap-3 !mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Call Us Directly
              </h2>
            </div>
            <p className="text-gray-600 !mb-6">
              Available 24/7 across all time zones
            </p>
            <div className="flex flex-col gap-2">
              {contactNumbers.map((contact) => (
                <div
                  key={contact.country}
                  className="flex items-center justify-between !p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{contact.flag}</span>
                    <span className="font-semibold text-gray-800">
                      {contact.country}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`tel:${contact.number}`}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="hidden sm:inline">{contact.number}</span>
                    </a>
                    <a
                      href={`https://wa.me/${contact.code}${contact.number
                        .replace(/[-+]/g, "")
                        .substring(contact.code.length)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email & Additional Info */}
          <div className="gap-8 md:!mt-10">
            <div className="bg-white rounded-xl shadow-lg !p-8 border border-gray-100">
              <div className="flex items-center gap-3 !mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Email Us</h2>
              </div>
              <p className="text-gray-600 !mb-4">
                For detailed inquiries and documentation
              </p>
              <a
                href="mailto:info@nriproperty.uk"
                className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                info@nriproperty.uk
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl !mt-4 md:!mt-10 !p-8 border border-red-200">
              <h3 className="text-xl font-bold !mb-4 text-gray-800">
                Quick Response Guarantee
              </h3>
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 !mt-1" />
                  <span className="text-gray-700">
                    Email responses within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 !mt-1" />
                  <span className="text-gray-700">
                    Phone consultation available anytime
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 !mt-1" />
                  <span className="text-gray-700">
                    Free property evaluation for all clients
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
