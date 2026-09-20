import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import { BsTiktok } from "react-icons/bs";
import SEO from "../Components/SEO";

const MotionSection = motion.section;
const MotionDiv = motion.div;

const phoneNumbers = {
  UK: "+447868143558",
  IN: "+919216399808",
  CA: "+16132956385",
  US: "+14146906435",
  EU: "+4915563030611",
};

const nextSteps = [
  {
    title: "Enquiry received",
    description: "Your details have been securely submitted to our team.",
  },
  {
    title: "Requirement reviewed",
    description: "We will match your query with the right property expert.",
  },
  {
    title: "Expert follow-up",
    description: "One of our property experts will get in touch with you shortly.",
  },
];

const ThankYou = () => {
  const [openContactMenu, setOpenContactMenu] = useState(null);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-999905524/zdfNCI_9x6EbEPSx5dwD",
      });
    } else {
      gtag("event", "conversion", {
        send_to: "AW-999905524/zdfNCI_9x6EbEPSx5dwD",
      });
    }
  }, []);

  const toggleContactMenu = (menu) => {
    setOpenContactMenu((current) => (current === menu ? null : menu));
  };

  const handleCall = (number) => {
    window.location.href = "tel:" + number;
  };

  const handleWhatsApp = (number) => {
    window.open(
      "https://wa.me/" + number.replace(/\D/g, ""),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f5f1] !px-4 !py-10 sm:!px-6 sm:!py-14">
      <SEO
        title="Thank You | NRI Property Consultation"
        description="Your property enquiry has been received. One of our property experts will get in touch with you shortly."
        path="/thankyou"
        noIndex
      />

      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#7a1f2b]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl"
        aria-hidden="true"
      />

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative !mx-auto w-full max-w-5xl overflow-visible rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
      >
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="!p-6 sm:!p-10 lg:!p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <CheckCircle2 size={34} strokeWidth={2} />
            </div>

            <p className="!mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#a87822]">
              Enquiry submitted
            </p>
            <h1 className="!mt-3 max-w-xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Thank you. Your property query is in expert hands.
            </h1>
            <p className="!mt-4 max-w-xl text-base leading-7 text-slate-600">
              We have received your enquiry. One of our property experts will
              review your requirements and get in touch with you shortly.
            </p>

            <div className="!mt-8 space-y-5">
              {nextSteps.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-sm font-semibold text-amber-800">
                    {index === 0 ? <Check size={16} /> : index + 1}
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">{item.title}</h2>
                    <p className="!mt-0.5 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="!mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7a1f2b] !px-6 !py-3 font-semibold text-white transition hover:bg-[#641925]"
              >
                Return to Home <ArrowRight size={18} />
              </Link>
              <Link
                to="/nri-services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white !px-6 !py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="!mt-7 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={16} className="text-emerald-700" />
              Your information is secure and only used to respond to your enquiry.
            </div>
          </div>

          <aside className="relative border-t border-slate-200 bg-[#163b2f] !p-6 text-white sm:!p-10 lg:rounded-r-3xl lg:border-l lg:border-t-0 lg:!p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8c576]">
              Need help sooner?
            </p>
            <h2 className="!mt-3 text-2xl font-semibold">
              Speak with our team directly
            </h2>
            <p className="!mt-3 text-sm leading-6 text-white/70">
              Choose your nearest office to call or continue the conversation on
              WhatsApp.
            </p>

            <div className="!mt-7 space-y-3">
              <ContactMenu
                type="call"
                label="Make a Call"
                icon={<Phone size={19} />}
                isOpen={openContactMenu === "call"}
                onToggle={() => toggleContactMenu("call")}
                onSelect={handleCall}
              />
              <ContactMenu
                type="whatsapp"
                label="Message on WhatsApp"
                icon={<MessageCircle size={19} />}
                isOpen={openContactMenu === "whatsapp"}
                onToggle={() => toggleContactMenu("whatsapp")}
                onSelect={handleWhatsApp}
              />
            </div>

            <div className="!mt-10 border-t border-white/15 !pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Stay connected
              </p>
              <div className="!mt-4 flex gap-3">
                <SocialLink
                  href="https://www.facebook.com/pinnacleinfra.co.in"
                  label="Facebook"
                  icon={<Facebook size={19} />}
                />
                <SocialLink
                  href="https://www.instagram.com/pinnaclegrouplondon/"
                  label="Instagram"
                  icon={<Instagram size={19} />}
                />
                <SocialLink
                  href="https://www.youtube.com/@pinnaclegroupofficial"
                  label="YouTube"
                  icon={<Youtube size={20} />}
                />
                <SocialLink
                  href="https://www.tiktok.com/@nripropertyservice"
                  label="TikTok"
                  icon={<BsTiktok size={18} />}
                />
              </div>
            </div>
          </aside>
        </div>
      </MotionSection>
    </main>
  );
};

const ContactMenu = ({
  type,
  label,
  icon,
  isOpen,
  onToggle,
  onSelect,
}) => (
  <div className="relative">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={type + "-contact-options"}
      className={
        "flex w-full items-center justify-between rounded-xl !px-4 !py-3.5 font-semibold transition " +
        (type === "whatsapp"
          ? "bg-emerald-500 text-white hover:bg-emerald-400"
          : "bg-white text-[#163b2f] hover:bg-amber-50")
      }
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>
      <ChevronDown
        size={18}
        className={"transition-transform " + (isOpen ? "rotate-180" : "")}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <MotionDiv
          id={type + "-contact-options"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div className="!mt-2 grid grid-cols-1 gap-2 rounded-xl bg-white/10 !p-2 sm:grid-cols-2 lg:grid-cols-1">
            {Object.entries(phoneNumbers).map(([country, number]) => (
              <button
                key={country}
                type="button"
                onClick={() => onSelect(number)}
                className="flex items-center justify-between rounded-lg bg-white/10 !px-3 !py-2 text-left text-sm text-white transition hover:bg-white/20"
              >
                <span>{country}</span>
                <span className="font-mono text-xs text-white/70">{number}</span>
              </button>
            ))}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  </div>
);

const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-[#e8c576] hover:bg-white/10 hover:text-[#e8c576]"
  >
    {icon}
  </a>
);

export default ThankYou;
