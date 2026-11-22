import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import MakeCallButton from "./CallBtn";
import DeferredCountryDropdown from "./DeferredCountryDropdown";
import { API_BASE_URL } from "../config";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Home,
  Scale,
  ShieldCheck,
  Landmark,
  Building2,
  Check,
  CheckCircle2,
  Lock,
  Edit3,
} from "lucide-react";

const serviceOptions = [
  {
    id: "Sell Property",
    title: "Sell Property in India",
    desc: "Remote sale, title clearing, POA & fund repatriation",
    icon: ArrowUpRight,
  },
  {
    id: "Buy Property",
    title: "Buy Property in India",
    desc: "Verified investments, due diligence & registration",
    icon: Home,
  },
  {
    id: "Legal Documentation",
    title: "Legal & Litigation",
    desc: "Disputes, partition suits, eviction & court representation",
    icon: Scale,
  },
  {
    id: "Title Clearing",
    title: "Title Clearing & Due Diligence",
    desc: "Encumbrance search, 30-yr chain verification & mutation",
    icon: ShieldCheck,
  },
  {
    id: "Tax and Finance",
    title: "Tax, FEMA & Repatriation",
    desc: "Form 15CA/15CB, lower TDS deduction & outward transfer",
    icon: Landmark,
  },
  {
    id: "Others",
    title: "Property Management & Other",
    desc: "Tenancy oversight, inspections & custom requirements",
    icon: Building2,
  },
];

const steps = [
  { number: 1, label: "Service", subtitle: "Select service" },
  { number: 2, label: "Details", subtitle: "Requirement" },
  { number: 3, label: "Contact", subtitle: "Your info" },
  { number: 4, label: "Review", subtitle: "Submit query" },
];

const EnquiryForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const formRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleCountryChange = (option) => {
    setSelectedCountry(option ? option.label : "");
    setCountryCode(option ? option.code : "");
    if (error) setError("");
  };

  const validateStep = (stepNumber) => {
    setError("");

    if (stepNumber === 1) {
      if (!formData.service) {
        setError("Please select a service to proceed.");
        return false;
      }
      return true;
    }

    if (stepNumber === 2) {
      if (!formData.message.trim()) {
        setError("Please describe your property requirement or query.");
        return false;
      }
      if (formData.message.trim().length < 8) {
        setError("Please provide a little more detail (at least 8 characters).");
        return false;
      }
      return true;
    }

    if (stepNumber === 3) {
      if (!formData.name.trim()) {
        setError("Please enter your name.");
        return false;
      }
      if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
        setError("Name can only contain letters, spaces, hyphens and apostrophes.");
        return false;
      }

      if (!formData.email.trim()) {
        setError("Please enter your email.");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError("Please enter a valid email address.");
        return false;
      }

      if (!selectedCountry) {
        setError("Please select your country.");
        return false;
      }
      if (!countryCode) {
        setError("Please select a valid country to get country code.");
        return false;
      }

      if (!formData.phone.trim()) {
        setError("Please enter your phone number.");
        return false;
      }
      if (!/^\d+$/.test(formData.phone)) {
        setError("Phone number can only contain digits (0-9).");
        return false;
      }
      if (formData.phone.length < 8 || formData.phone.length > 15) {
        setError("Phone number must be between 8 and 15 digits.");
        return false;
      }
      return true;
    }

    if (stepNumber === 4) {
      if (!agree) {
        setError(
          "Please accept the Terms & Conditions, Privacy Policy, and Cookies Policy to proceed."
        );
        return false;
      }
      return true;
    }

    return true;
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (validateStep(currentStep)) {
      setError("");
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = (e) => {
    e?.preventDefault();
    setError("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(1) || !validateStep(2) || !validateStep(3) || !validateStep(4)) {
      return;
    }

    setError("");
    setLoading(true);

    try {
      // 1. Send Email using EmailJS
      await emailjs.send(
        "service_h2ax3kz",
        "template_1kmkzhn",
        {
          name: formData.name,
          email: formData.email,
          country: selectedCountry,
          countryCode,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "pQqSTFuOf-O4iXuH-"
      );

      // 2. Post data to MongoDB backend
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          country: selectedCountry,
          countryCode,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.status !== 200 && response.status !== 201) {
        setError(result.message || "Something went wrong. Please try again.");
        return;
      }

      if (!result.success) {
        setError(result.message || "Something went wrong. Please try again.");
        return;
      }

      // Success Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setSelectedCountry("");
      setCountryCode("");
      setAgree(false);
      setCurrentStep(1);
      formRef.current?.reset();
      navigate("/thankyou");
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="!mb-4 bg-[#f8fafc] w-full !px-3 sm:!px-6 !py-8 sm:!py-10">
      <div className="w-full max-w-4xl !mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm !px-4 sm:!px-8 !py-7 sm:!py-9">
        {/* Header */}
        <div className="!mb-6 text-left">
          <div className="h-1 w-16 bg-[#7a1f2b] rounded-full !mb-3" />
          <div className="inline-flex items-center bg-[#7a1f2b]/10 text-xs font-semibold uppercase tracking-wide !px-3 !py-1 rounded-full text-[#7a1f2b]">
            <span>Free Consultation</span>
          </div>

        </div>

        {/* 4-Step Stepper Progress Bar */}
        <div className="!mb-8">
          <div className="relative flex items-center justify-between">
            {/* Background Connector Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 z-0" />
            {/* Active Colored Connector Line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#7a1f2b] transition-all duration-300 z-0"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />

            {/* Stepper Dots */}
            {steps.map((s) => {
              const isCompleted = currentStep > s.number;
              const isCurrent = currentStep === s.number;

              return (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => {
                    // Allow navigating backwards or to validated steps
                    if (s.number < currentStep) {
                      setCurrentStep(s.number);
                    }
                  }}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200 ${isCompleted
                      ? "bg-[#7a1f2b] text-white shadow-sm ring-2 ring-[#7a1f2b]/20"
                      : isCurrent
                        ? "bg-[#7a1f2b] text-white shadow-md ring-4 ring-[#7a1f2b]/25"
                        : "bg-white text-slate-500 border-2 border-slate-300 group-hover:border-slate-400"
                      }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : s.number}
                  </div>
                  <span
                    className={`text-[11px] sm:text-xs font-semibold !mt-1.5 transition-colors ${isCurrent || isCompleted ? "text-[#7a1f2b]" : "text-slate-500"
                      }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* ================= STEP 1: SERVICE SELECTION ================= */}
          {currentStep === 1 && (
            <div className="flex flex-col gap-y-4 text-left">
              <div className="!mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7a1f2b]">
                  Step 1 of 4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 !mt-0.5">
                  What service do you require?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 !mt-0.5">
                  Select the primary area you need assistance with in India.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 !mt-4">
                {serviceOptions.map((opt) => {
                  const IconComp = opt.icon;
                  const isSelected = formData.service === opt.id;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: opt.id }));
                        setError("");
                      }}
                      className={`text-left !p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${isSelected
                        ? "border-[#7a1f2b] bg-[#7a1f2b]/5 shadow-sm ring-1 ring-[#7a1f2b]"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                        }`}
                    >
                      <div>
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center !mb-3 transition-colors ${isSelected
                            ? "bg-[#7a1f2b] text-white"
                            : "bg-slate-100 text-[#7a1f2b]"
                            }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{opt.title}</h4>

                      </div>

                      <div className="!mt-3 flex items-center gap-1.5 text-xs font-semibold">
                        {isSelected ? (
                          <span className="text-[#7a1f2b] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7a1f2b]" /> Selected
                          </span>
                        ) : (
                          <span className="text-slate-400 group-hover:text-slate-600">
                            Select
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 2: REQUIREMENT DETAILS ================= */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-y-4 text-left">
              <div className="!mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7a1f2b]">
                  Step 2 of 4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 !mt-0.5">
                  Tell us about your requirement
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 !mt-0.5">
                  Share details such as city, property type, or specific legal questions.
                </p>
              </div>

              {/* Selected Service Badge */}
              <div className="flex items-center justify-between !p-3 rounded-lg bg-[#7a1f2b]/10 border border-[#7a1f2b]/20 text-xs text-[#7a1f2b]">
                <span className="font-semibold">
                  Selected Service: <span className="font-bold">{formData.service}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="font-bold underline hover:text-[#9d1c1a] cursor-pointer inline-flex items-center gap-1"
                >
                  <Edit3 className="w-3 h-3" /> Change
                </button>
              </div>

              {/* Message Box */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 !mb-1.5">
                  Describe your property situation or query *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="E.g., I live in London and have a 3BHK apartment in Delhi/NCR that I want to sell. I need assistance with finding buyers, executing Power of Attorney, and repatriating sale proceeds to the UK."
                  rows={6}
                  required
                  className="border border-slate-300 !p-3.5 rounded-xl outline-none w-full focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b] text-sm text-slate-800 placeholder:text-slate-400 leading-relaxed"
                />
                <p className="text-[11px] text-slate-500 !mt-1">
                  The more context you provide, the better our legal & property team can prepare.
                </p>
              </div>
            </div>
          )}

          {/* ================= STEP 3: CONTACT DETAILS ================= */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-y-4 text-left">
              <div className="!mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7a1f2b]">
                  Step 3 of 4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 !mt-0.5">
                  How should we contact you?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 !mt-0.5">
                  Our UK advisor will reach out via call, WhatsApp, or email at your convenience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 !mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="E.g., Harpreet Singh"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z\s'\-]+"
                    title="Name can only contain letters, spaces, hyphens and apostrophes"
                    className="border border-slate-300 !p-3 rounded-lg outline-none w-full text-sm focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 !mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-slate-300 !p-3 rounded-lg outline-none w-full text-sm focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b]"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 !mb-1.5">
                    Your Country of Residence *
                  </label>
                  <div className="h-10 border border-slate-300 rounded-lg">
                    <DeferredCountryDropdown
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      ariaLabel="Select your country"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 !mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="flex h-10 w-full">
                    <input
                      type="text"
                      name="countryCode"
                      value={countryCode ? `+${countryCode}` : "+"}
                      readOnly
                      className="border border-slate-300 border-r-0 !p-2.5 rounded-l-lg outline-none w-20 text-center bg-slate-50 text-xs font-semibold text-slate-700"
                      placeholder="+"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border border-slate-300 !p-2.5 rounded-r-lg outline-none w-full text-sm focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 4: REVIEW & CONFIRM ================= */}
          {currentStep === 4 && (
            <div className="flex flex-col gap-y-4 text-left">
              <div className="!mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7a1f2b]">
                  Step 4 of 4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 !mt-0.5">
                  Review & Confirm Your Query
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 !mt-0.5">
                  Verify your details before submitting to our legal desk.
                </p>
              </div>

              {/* Summary Card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 !p-4 sm:!p-5 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-slate-200 !pb-2.5">
                  <div>
                    <span className="text-slate-500 text-xs">Selected Service:</span>
                    <p className="font-bold text-slate-900">{formData.service}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-[#7a1f2b] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                </div>

                <div className="flex items-start justify-between border-b border-slate-200 !pb-2.5">
                  <div className="max-w-[85%]">
                    <span className="text-slate-500 text-xs">Requirement Details:</span>
                    <p className="text-slate-800 line-clamp-3 leading-relaxed !mt-0.5">
                      {formData.message}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-xs text-[#7a1f2b] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-slate-500 text-xs">Contact Details:</span>
                    <p className="font-semibold text-slate-900">{formData.name}</p>
                    <p className="text-slate-600">{formData.email}</p>
                    <p className="text-slate-600">
                      +{countryCode} {formData.phone} ({selectedCountry})
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="text-xs text-[#7a1f2b] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start gap-2.5 text-left !pt-1">
                <input
                  type="checkbox"
                  id="enquire-agreement-step4"
                  checked={agree}
                  onChange={(e) => {
                    setAgree(e.target.checked);
                    if (error) setError("");
                  }}
                  required
                  className="w-4 h-4 !mt-1 text-[#7a1f2b] border-gray-300 rounded focus:ring-[#7a1f2b]/20 cursor-pointer shrink-0"
                />
                <label
                  htmlFor="enquire-agreement-step4"
                  className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none"
                >
                  I agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a1f2b] hover:underline font-medium"
                  >
                    Terms & Conditions
                  </a>
                  ,{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a1f2b] hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                  , and{" "}
                  <a
                    href="/cookies-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a1f2b] hover:underline font-medium"
                  >
                    Cookies Policy
                  </a>
                  .
                </label>
              </div>

              {/* Security Note */}
              <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg !p-2.5">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  Your information is held under strict client confidentiality and non-disclosure standards.
                </span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm !p-3 rounded-lg text-center font-medium">
              {error}
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 !pt-2 border-t border-slate-100">

            {/* Right Button: Next or Submit */}
            <div className="w-full sm:w-auto flex items-center gap-2">
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-2 !px-6 !py-2.5 rounded-lg bg-[#7a1f2b] hover:bg-[#651823] text-white font-semibold text-xs sm:text-sm shadow-sm active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-emerald-600 hover:bg-emerald-700 text-white !px-6 !py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer ${loading ? "opacity-70 cursor-not-allowed" : "active:scale-95"
                    }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Query</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
            {/* Left Button: Call button or Back */}
            <div className="w-full sm:w-auto flex items-center gap-2">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center justify-center gap-2 !px-4 !py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div className="w-full sm:w-auto">
                  <MakeCallButton />
                </div>
              )}
            </div>


          </div>

          {/* Footer Footnote */}
          <div className="text-center text-xs text-slate-500 !pt-1">
            <p>
              Submitted query before?{" "}
              <Link to="/login" className="text-[#7a1f2b] font-medium underline">
                Client Portal Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
