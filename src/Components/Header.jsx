import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown, FaTimes, FaYoutube } from "react-icons/fa";
import { Mail } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// import ChrisVid from "../assets/Christmas & new year.mp4";
// import CountdownTo2026 from "./CountdownTo2026";
// import HeroVideoWithCountdown from "./HeroVideoWithCountdown";

const Header = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const navbarTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.25, 1, 0.5, 1] };

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 768px)");
    let animationFrameId = null;

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        setIsScrolled((wasScrolled) => {
          if (!desktopMedia.matches) return false;

          // Separate thresholds prevent the header's own height change from
          // repeatedly crossing a single threshold and causing flicker.
          if (!wasScrolled && window.scrollY >= 48) return true;
          if (wasScrolled && window.scrollY <= 8) return false;
          return wasScrolled;
        });
        animationFrameId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    desktopMedia.addEventListener("change", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      desktopMedia.removeEventListener("change", handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const handleContact = () => {
    onContactClick?.();
    setIsMenuOpen(false);
  };

  // Map NRI service labels to their slugs
  const nriServiceLinkMap = {
    "Buy & Sell Assistance": "buy-sell",
    "Legal Litigation": "legal",
    "Property Management": "management",
    "Property Title Clearing": "title",
    "NRI tax & Finance Support": "finance",
    "24X7 support": "support",
  };

  const handleServiceClick = (service) => {
    const slug = nriServiceLinkMap[service];
    if (slug) {
      navigate(`/service-details/${slug}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header top */}
      <div
        className="md:hidden bg-[#312f6d] w-full h-full flex justify-between
       items-center gap-2 text-white text-md md:text-base !py-2 !px-4 relative"
      >
        <span className="flex gap-2 items-center">
          <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/90" />

          <a
            href="mailto:info@nriproperty.uk"
            className="hover:underline hover:text-white transition"
          >
            info@nriproperty.uk
          </a>
        </span>
        <span>
          <a
            href="https://www.facebook.com/pinnacleinfra.co.in?ref=embed_page"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10"
          >
            <MdFacebook className=" cursor-pointer" />
            {/* text-blue-600 */}
          </a>
          <a
            href="https://www.instagram.com/nripropertyservices"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10"
          >
            <AiFillInstagram className=" cursor-pointer" />
            {/* text-[#E1306C] */}
          </a>
          <a
            href="https://www.youtube.com/@NRIPropertyService"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10"
          >
            <FaYoutube className="cursor-pointer" />
            {/* text-red-600  */}
          </a>
        </span>
      </div>
      <div
        className={`
    font-sans w-full !px-5 !pt-5 bg-white
    sticky top-0 z-40 transition-all duration-200 ease-out motion-reduce:transition-none
    ${isScrolled ? "shadow-md" : "shadow-none"}
  `}
      >
        {/* Premium Color Blast Particles */}
        {/* <div className="color-blast-wrapper">
          <div className="blast-particle"></div>
          <div className="blast-particle"></div>
          <div className="blast-particle"></div>
          <div className="blast-particle"></div>
          <div className="blast-particle"></div>
        </div> */}

        {/* Header */}
        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 64 : 96,
            paddingTop: isScrolled ? 8 : 16,
            paddingBottom: isScrolled ? 8 : 16,
          }}
          transition={navbarTransition}
          className="w-full flex justify-between items-center rounded-xl"
        >
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Pinnacle Group UK home">
            <motion.img
              src="/NewLogo.png"
              alt="Pinnacle Group Logo"
              width="160"
              height="80"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              initial={false}
              animate={{ width: isScrolled ? 96 : 128 }}
              transition={navbarTransition}
              className="relative bottom-2 md:bottom-2 !ml-2 lg:!ml-10"
            />
          </a>

          {/* Desktop Menu */}
          <motion.ul
            initial={false}
            animate={{
              fontSize: isScrolled ? 15 : 18,
              gap: isScrolled ? 20 : 24,
              marginBottom: isScrolled ? 8 : 16,
            }}
            transition={navbarTransition}
            className="hidden md:flex !mr-2 lg:!mr-10"
          >
            <li>
              <Link
                to="/"
                className={`${
                  currentPath === "/" ? "text-[#c53030]" : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                to="/about"
                className={`${
                  currentPath === "/about"
                    ? "text-[#c53030]"
                    : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                About Us
              </Link>
            </li>

            {/* NRI Services Dropdown */}
            <div className="relative group">
              {/* NAV ITEM */}
              <li
                className="flex items-center gap-2 text-[#1d3d4f] 
    hover:text-[#c53030] cursor-pointer font-semibold 
    transition-colors duration-500"
              >
                NRI Services
                {/* ARROW ICON */}
                <FaChevronDown
                  className="
        text-sm !mt-[2px]
        transition-transform duration-300
        group-hover:rotate-180
      "
                />
              </li>

              {/* DROPDOWN */}
              <ul
                className="
      absolute top-full left-0 bg-white rounded-lg shadow-xl
      opacity-0 translate-y-2
      group-hover:opacity-100 group-hover:translate-y-0
      pointer-events-none group-hover:pointer-events-auto
      transition-all duration-300 ease-out
      z-10 min-w-[250px]
    "
              >
                {Object.keys(nriServiceLinkMap).map((item) => (
                  <li
                    key={item}
                    onClick={() => handleServiceClick(item)}
                    className="
          !px-4 !py-2 hover:bg-[#f2fbfb]
          hover:text-[#c53030]
          text-[#374b5c]
          cursor-pointer transition-colors duration-300
        "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            {/* <li>
              <Link
                to="/Gallery"
                className={`${
                  currentPath === "/Gallery"
                    ? "text-[#c53030]"
                    : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Legal Litigation & tax advice
              </Link>
            </li> */}

            {/* Finance */}
            {/* <li>
              <Link
                to="/Gallery"
                className={`${
                  currentPath === "/Gallery"
                    ? "text-[#c53030]"
                    : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Finance Services
              </Link>
            </li> */}

            {/* BUY SELL */}
            {/* <li>
              <Link
                to="/Gallery"
                className={`${
                  currentPath === "/Gallery"
                    ? "text-[#c53030]"
                    : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Buy & Sell Properties
              </Link>
            </li> */}

            {/* Gallery */}
            <li>
              <Link
                to="/Gallery"
                className={`${
                  currentPath === "/Gallery"
                    ? "text-[#c53030]"
                    : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Gallery
              </Link>
            </li>

            {/* Contact */}

            <li>
              <Link
                to="/contact"
                className={`${
                  currentPath === "/contact"
                    ? "text-[#c53030]"
                    : "text-[#1d3d4f]"
                } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Contact
              </Link>
            </li>

            {/* Free consultation */}

            <li className="hidden">
              <Link
                to="/login"
                className={`${
                  currentPath === "/login"
                    ? "bg-[#651823] ring-2 ring-[#7a1f2b]/25"
                    : "bg-[#9d1c1a] hover:bg-[#651823]"
                } inline-flex items-center whitespace-nowrap rounded-full !px-4 !py-2 text-white shadow-md hover:shadow-lg cursor-pointer font-semibold transition-all duration-300`}
              >
                Book Free Consultation
              </Link>
            </li>
          </motion.ul>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="md:hidden !mb-4 relative w-10 h-6 text-[2em] !mr-5 z-20 cursor-pointer"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <FaBars
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="
      fixed inset-0
      bg-black/40
      backdrop-blur-sm
      z-10
    "
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            {isMenuOpen && (
              <motion.ul
                initial={{ x: "100%" }} // from right
                animate={{ x: 0 }} // enter
                exit={{ x: "100%" }} // exit right
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="
        md:hidden
        fixed top-0 right-0
        w-85 h-screen
        bg-[#f9fdfd]
        border-l-4 border-[#312f6d]
        !p-8
        flex flex-col gap-6
        z-10
      "
                style={{
                  backgroundImage: `url(https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/bg%20nav.jpg?updatedAt=1769753334320)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button
                  type="button"
                  className="md:hidden fixed right-5 top-10 !p-4 text-[2em] text-blue-900 cursor-pointer z-20"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <FaTimes
                    className={`inset-0 transition-all duration-300 border-2 !p-1 rounded active:text-[#9d1c1a] active:scale-70 ${
                      isMenuOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>

                <div className="!mt-24 flex flex-col gap-6">
                  <li className="text-[#312f6d] active:text-red-900 active:scale-90 text-[1.2em] cursor-pointer font-semibold text-center !pb-6 border-b-2">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                  </li>

                  <li className="text-[#312f6d] active:text-red-900 active:scale-90 cursor-pointer text-[1.2em] font-semibold text-center !pb-6 border-b-2">
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                      About Us
                    </Link>
                  </li>

                  {/* NRI Services Dropdown */}
                  <div className="w-full border-b-2 border-[#312f6d] text-[1.2em] !pb-6">
                    <div
                      className="font-semibold text-[#312f6d] !py-2 cursor-pointer text-center"
                      onClick={() =>
                        setOpenDropdown(openDropdown === "nri" ? null : "nri")
                      }
                    >
                      NRI Services ▾
                    </div>

                    <ul
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openDropdown === "nri" ? "max-h-96" : "max-h-96"
                      } !pl-4 space-y-1 text-center`}
                    >
                      {Object.keys(nriServiceLinkMap).map((item) => (
                        <li
                          key={item}
                          onClick={() => handleServiceClick(item)}
                          className="active:text-[#312f6d] text-[#9d1c1a] cursor-pointer transition-colors duration-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <li className="text-[#312f6d] active:text-red-900 active:scale-90 cursor-pointer text-[1.2em] font-semibold text-center !pb-6 border-b-2">
                    <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                      Gallery
                    </Link>
                  </li>

                  <li className="text-[#312f6d] active:text-red-900 active:scale-90 cursor-pointer text-[1.2em] font-semibold text-center !pb-6 border-b-2">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>

                  <li
                    className="hidden text-white active:text-[#312f6d] active:bg-white active:scale-105 cursor-pointer font-semibold text-center
                border-2 rounded-full bg-[#9d1c1a]
                "
                  >
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex text-[1.2em] justify-center items-center 
                  gap-2 !py-2 !px-4"
                    >
                      Book Free Consultation
                    </Link>
                  </li>
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
