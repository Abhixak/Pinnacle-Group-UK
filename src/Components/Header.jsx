import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CLOUDINARY_IMAGES from "../cloudinaryImages";
import { FaChevronDown, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import {
  Mail,
  Home,
  Users,
  Briefcase,
  Images,
  PhoneCall,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Scale,
  Building2,
  ShieldCheck,
  Landmark,
  Clock,
  Calendar,
  LogIn,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// NRI Services definition with dedicated modern icons
const nriServices = [
  { name: "Buy & Sell Assistance", slug: "buy-sell", icon: TrendingUp },
  { name: "Legal Litigation", slug: "legal", icon: Scale },
  { name: "Property Management", slug: "management", icon: Building2 },
  { name: "Property Title Clearing", slug: "title", icon: ShieldCheck },
  { name: "NRI tax & Finance Support", slug: "finance", icon: Landmark },
  { name: "24X7 support", slug: "support", icon: Clock },
];

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

  // Scroll detection for sticky header shadow and height
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const _handleContact = () => {
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

  const isNriActive =
    currentPath.toLowerCase().startsWith("/service-details") ||
    currentPath.toLowerCase() === "/nri-services";

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-[#312f6d] w-full min-h-10 flex items-center justify-between gap-2 text-white px-3 sm:px-4 py-2 text-xs">
        <span className="min-w-0 flex items-center gap-1.5">
          <Mail className="shrink-0 w-3.5 h-3.5 text-white/90" />
          <a
            href="mailto:info@nriproperty.uk"
            className="truncate hover:underline hover:text-white transition"
          >
            info@nriproperty.uk
          </a>
        </span>
        <span className="shrink-0 flex items-center gap-1">
          <a
            href="https://www.facebook.com/pinnacleinfra.co.in?ref=embed_page"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <MdFacebook className="w-3.5 h-3.5 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/nripropertyservices"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <AiFillInstagram className="w-3.5 h-3.5 cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/@NRIPropertyService"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <FaYoutube className="w-3.5 h-3.5 cursor-pointer" />
          </a>
        </span>
      </div>

      {/* Main Header Container */}
      <div
        className={`
    font-sans w-full !px-3 sm:!px-5 bg-white
    sticky top-0 z-40 transition-all duration-200 ease-out motion-reduce:transition-none
    ${isScrolled ? "shadow-md" : "shadow-none"}
  `}
      >
        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 64 : 96,
            paddingTop: isScrolled ? 8 : 16,
            paddingBottom: isScrolled ? 8 : 16,
          }}
          transition={navbarTransition}
          className="w-full flex items-center justify-between rounded-xl max-md:!h-[68px] max-md:!py-2"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Pinnacle Group UK home">
            <motion.img
              src={CLOUDINARY_IMAGES.NewLogo}
              alt="Pinnacle Group Logo"
              width="140"
              height="62"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              initial={false}
              animate={{
                height: isScrolled ? 82 : 102,
                width: "auto",
              }}
              transition={navbarTransition}
              className="!ml-0 md:!ml-2 lg:!ml-10 h-auto max-h-18 md:max-h-16 w-auto object-contain max-md:!h-17.5 max-md:!max-w-[140px]"
            />
          </Link>

          {/* Desktop Menu */}
          <motion.ul
            initial={false}
            animate={{
              fontSize: isScrolled ? 15 : 18,
              gap: isScrolled ? 20 : 24,
              marginBottom: isScrolled ? 8 : 16,
            }}
            transition={navbarTransition}
            className="hidden md:flex !mr-2 lg:!mr-10 items-center"
          >
            <li>
              <Link
                to="/"
                className={`${currentPath === "/" ? "text-[#c53030]" : "text-[#1d3d4f]"
                  } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                to="/about"
                className={`${currentPath === "/about"
                  ? "text-[#c53030]"
                  : "text-[#1d3d4f]"
                  } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                About Us
              </Link>
            </li>

            {/* NRI Services Dropdown */}
            <div className="relative group">
              <li
                className="flex items-center gap-2 text-[#1d3d4f] 
    hover:text-[#c53030] cursor-pointer font-semibold 
    transition-colors duration-500"
              >
                NRI Services
                <FaChevronDown
                  className="
        text-sm !mt-[2px]
        transition-transform duration-300
        group-hover:rotate-180
      "
                />
              </li>

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

            {/* Gallery */}
            <li>
              <Link
                to="/gallery"
                className={`${currentPath.toLowerCase() === "/gallery"
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
                className={`${currentPath === "/contact"
                  ? "text-[#c53030]"
                  : "text-[#1d3d4f]"
                  } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
              >
                Contact
              </Link>
            </li>
          </motion.ul>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="md:hidden shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl text-[#312f6d] bg-[#f2f5ff] hover:bg-[#e6ecfa] border border-[#d6def2] shadow-xs z-20 cursor-pointer transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#312f6d]/25"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#312f6d]" />
            ) : (
              <Menu className="w-5 h-5 text-[#312f6d]" />
            )}
          </button>

          {/* Mobile Menu Backdrop & Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 bg-[#0c1322]/60 backdrop-blur-xs z-50 md:hidden"
                  onClick={() => setIsMenuOpen(false)}
                  aria-hidden="true"
                />

                {/* Modern Slide-out Drawer */}
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    type: "spring",
                    damping: 28,
                    stiffness: 260,
                  }}
                  className="fixed top-0 right-0 w-[min(90vw,380px)] h-[100dvh] bg-white border-l border-slate-200/90 shadow-2xl z-[60] flex flex-col md:hidden text-slate-800"
                  aria-label="Mobile Navigation"
                >
                  {/* Top Bar inside Drawer */}
                  <div className="shrink-0 flex items-center justify-between !px-5 !py-3.5 border-b border-slate-100 bg-gradient-to-r from-slate-50/90 via-white to-slate-50/50 !pt-[max(1rem,env(safe-area-inset-top))]">
                    <Link
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2.5"
                    >
                      <img
                        src={CLOUDINARY_IMAGES.favicon}
                        alt="Pinnacle Group Logo"
                        className="h-12 sm:h-13 w-auto object-contain"
                      />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-9 h-9 inline-flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100/90 hover:bg-slate-200/80 active:scale-95 transition-all cursor-pointer"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Scrollable Navigation Body */}
                  <div className="flex-1 overflow-y-auto !px-4 !py-3.5 space-y-1.5 overscroll-contain">
                    <nav className="space-y-1" aria-label="Mobile Links">
                      {/* Home */}
                      <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between !px-3.5 !py-2.5 rounded-xl transition-all duration-200 ${currentPath === "/"
                          ? "bg-[#312f6d]/10 text-[#312f6d] font-semibold"
                          : "text-slate-700 hover:text-[#312f6d] hover:bg-slate-50 font-medium"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${currentPath === "/"
                              ? "bg-[#312f6d] text-white shadow-xs"
                              : "bg-slate-100 text-[#312f6d] group-hover:bg-[#312f6d]/10"
                              }`}
                          >
                            <Home className="w-4 h-4" />
                          </span>
                          <span className="text-[15px]">Home</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${currentPath === "/" ? "text-[#312f6d]" : "text-slate-400"
                            }`}
                        />
                      </Link>

                      {/* About Us */}
                      <Link
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between !px-3.5 !py-2.5 rounded-xl transition-all duration-200 ${currentPath === "/about"
                          ? "bg-[#312f6d]/10 text-[#312f6d] font-semibold"
                          : "text-slate-700 hover:text-[#312f6d] hover:bg-slate-50 font-medium"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${currentPath === "/about"
                              ? "bg-[#312f6d] text-white shadow-xs"
                              : "bg-slate-100 text-[#312f6d] group-hover:bg-[#312f6d]/10"
                              }`}
                          >
                            <Users className="w-4 h-4" />
                          </span>
                          <span className="text-[15px]">About Us</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${currentPath === "/about" ? "text-[#312f6d]" : "text-slate-400"
                            }`}
                        />
                      </Link>

                      {/* NRI Services Accordion */}
                      <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/60 transition-all">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDropdown(openDropdown === "nri" ? null : "nri")
                          }
                          className={`w-full flex items-center justify-between !px-3.5 !py-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer ${isNriActive
                            ? "bg-[#312f6d]/10 text-[#312f6d] font-semibold"
                            : "text-slate-700 hover:text-[#312f6d] hover:bg-slate-100/60 font-medium"
                            }`}
                          aria-expanded={openDropdown === "nri"}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isNriActive
                                ? "bg-[#312f6d] text-white shadow-xs"
                                : "bg-slate-100 text-[#312f6d]"
                                }`}
                            >
                              <Briefcase className="w-4 h-4" />
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[15px]">NRI Services</span>
                              <span className="text-[10px] font-semibold tracking-wide uppercase !px-2 !py-0.5 rounded-full bg-[#9d1c1a]/10 text-[#9d1c1a]">
                                6 Services
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${openDropdown === "nri" ? "rotate-180 text-[#312f6d]" : ""
                              }`}
                          />
                        </button>

                        {/* Accordion Sub-items */}
                        <AnimatePresence initial={false}>
                          {openDropdown === "nri" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden bg-white border-t border-slate-100"
                            >
                              <div className="!p-2 flex flex-col gap-y-1">
                                {nriServices.map((service) => {
                                  const IconComponent = service.icon;
                                  const isCurrent =
                                    currentPath === `/service-details/${service.slug}`;

                                  return (
                                    <button
                                      key={service.slug}
                                      type="button"
                                      onClick={() => handleServiceClick(service.name)}
                                      className={`w-full flex items-center justify-between !p-2.5 rounded-lg text-left transition-all duration-150 cursor-pointer ${isCurrent
                                        ? "bg-[#9d1c1a]/10 text-[#9d1c1a] font-semibold"
                                        : "text-slate-600 hover:text-[#312f6d] hover:bg-slate-50 active:bg-slate-100"
                                        }`}
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <span
                                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${isCurrent
                                            ? "bg-[#9d1c1a] text-white"
                                            : "bg-slate-100 text-[#312f6d]"
                                            }`}
                                        >
                                          <IconComponent className="w-3.5 h-3.5" />
                                        </span>
                                        <span className="text-[13px] truncate">
                                          {service.name}
                                        </span>
                                      </div>
                                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Gallery */}
                      <Link
                        to="/gallery"
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between !px-3.5 !py-2.5 rounded-xl transition-all duration-200 ${currentPath.toLowerCase() === "/gallery"
                          ? "bg-[#312f6d]/10 text-[#312f6d] font-semibold"
                          : "text-slate-700 hover:text-[#312f6d] hover:bg-slate-50 font-medium"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${currentPath.toLowerCase() === "/gallery"
                              ? "bg-[#312f6d] text-white shadow-xs"
                              : "bg-slate-100 text-[#312f6d] group-hover:bg-[#312f6d]/10"
                              }`}
                          >
                            <Images className="w-4 h-4" />
                          </span>
                          <span className="text-[15px]">Gallery</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${currentPath.toLowerCase() === "/gallery"
                            ? "text-[#312f6d]"
                            : "text-slate-400"
                            }`}
                        />
                      </Link>

                      {/* Contact */}
                      <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between !px-3.5 !py-2.5 rounded-xl transition-all duration-200 ${currentPath === "/contact"
                          ? "bg-[#312f6d]/10 text-[#312f6d] font-semibold"
                          : "text-slate-700 hover:text-[#312f6d] hover:bg-slate-50 font-medium"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${currentPath === "/contact"
                              ? "bg-[#312f6d] text-white shadow-xs"
                              : "bg-slate-100 text-[#312f6d] group-hover:bg-[#312f6d]/10"
                              }`}
                          >
                            <PhoneCall className="w-4 h-4" />
                          </span>
                          <span className="text-[15px]">Contact</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${currentPath === "/contact" ? "text-[#312f6d]" : "text-slate-400"
                            }`}
                        />
                      </Link>
                    </nav>

                    {/* Quick Help Card */}
                    <div className="!mt-3 !p-3.5 rounded-xl bg-gradient-to-br from-[#f3f6fe] to-[#fafbff] border border-[#dce5fa]">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#312f6d]">
                        <Clock className="w-3.5 h-3.5 text-[#9d1c1a]" />
                        <span>UK NRI Property Support</span>
                      </div>
                      <p className="text-[11px] text-slate-600 !mt-1 leading-relaxed">
                        Need assistance managing or resolving legal issues for your Indian properties?
                      </p>
                      <a
                        href="mailto:info@nriproperty.uk"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9d1c1a] hover:underline !mt-2.5"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span>info@nriproperty.uk</span>
                      </a>
                    </div>
                  </div>

                  {/* Drawer Footer */}
                  <div className="flex flex-col items-center shrink-0 !p-4 border-t border-slate-100 bg-slate-50/90 gap-y-2.5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                    {/* Book Free Consultation CTA */}
                    <div className="flex gap-3">
                      <Link
                        to="/support"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-[90%] flex items-center justify-center gap-2 !py-3 !px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[#9d1c1a] to-[#c53030] shadow-md shadow-red-900/15 hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Support</span>
                      </Link>

                      {/* Client Login Pill */}
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-[90%] flex items-center justify-center gap-2 !py-2 !px-3 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:text-[#312f6d] active:scale-[0.98] transition-all"
                      >
                        <LogIn className="w-3.5 h-3.5 text-[#312f6d]" />
                        <span>Login</span>
                      </Link>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-3 !pt-0.5 !m-4">
                      <a
                        href="https://www.facebook.com/pinnacleinfra.co.in?ref=embed_page"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1877F2] hover:bg-slate-100 transition-colors shadow-2xs"
                      >
                        <MdFacebook className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/nripropertyservices"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#E4405F] hover:bg-slate-100 transition-colors shadow-2xs"
                      >
                        <AiFillInstagram className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.youtube.com/@NRIPropertyService"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#FF0000] hover:bg-slate-100 transition-colors shadow-2xs"
                      >
                        <FaYoutube className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
