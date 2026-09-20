import { useRef, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MakeCallButton from "./CallBtn";
import DeferredCountryDropdown from "./DeferredCountryDropdown";
import emailjs from "@emailjs/browser";
import { API_BASE_URL } from "../config";

const PopUpEnquiry = () => {
  const formRef = useRef();
  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);
  const serviceSelectRef = useRef(null);
  const lastActiveElementRef = useRef(null);
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
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

  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("dismissedEnquiryPopup");
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPopup) return;

    lastActiveElementRef.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusTarget = step === 1 ? nameInputRef.current : serviceSelectRef.current;
    setTimeout(() => {
      focusTarget?.focus();
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
        return;
      }
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      lastActiveElementRef.current?.focus?.();
    };
  }, [showPopup, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (option) => {
    setSelectedCountry(option ? option.label : "");
    setCountryCode(option ? option.code : "");
  };

  const handleNext = () => {
    if (!formData.name.trim()) return setError("Please enter your name");
    if (!/^[a-zA-Z\s'-]+$/.test(formData.name))
      return setError("Name can only contain letters, spaces, hyphens and apostrophes");

    if (!formData.email.trim()) return setError("Please enter your email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return setError("Please enter a valid email address");

    if (!selectedCountry) return setError("Please select a country");
    if (!countryCode) return setError("Please select a country to get country code");

    if (!formData.phone.trim()) return setError("Please enter your phone number");
    if (!/^\d+$/.test(formData.phone))
      return setError("Phone number can only contain digits (0-9)");
    if (formData.phone.length < 8 || formData.phone.length > 15)
      return setError("Phone number must be between 8 and 15 digits");

    setError("");
    setStep(2);
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.service) return setError("Please select a service");
    if (!formData.message.trim()) return setError("Please enter your message");
    if (!agree) return setError("Please accept the Terms & Conditions, Privacy Policy, and Cookies Policy to proceed");

    setError("");
    setLoading(true);

    try {
      // 1️⃣ EmailJS
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

      // 2️⃣ Backend Save
      const response = await fetch(
        `${API_BASE_URL}/register`,
        {
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
        }
      );

      const result = await response.json();

      console.log("STATUS:", response.status);
      console.log("RESULT:", result);

      if (response.status !== 200 && response.status !== 201) {
        setError(result.message || "Something went wrong");
        return;
      }

      if (!result.success) {
        setError(result.message || "Something went wrong");
        return;
      }

      // ✅ Reset + Close + Redirect
      sessionStorage.setItem("dismissedEnquiryPopup", "true");
      setShowPopup(false);
      setStep(1);
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
      formRef.current?.reset();

      navigate("/thankyou");

    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    sessionStorage.setItem("dismissedEnquiryPopup", "true");
    setShowPopup(false);
    setStep(1);
    setError("");
    setAgree(false);
  };

  if (!showPopup) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-slate-900/50 backdrop-blur-sm z-40"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl !px-5 !py-10">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          aria-describedby={error ? "popup-error" : undefined}
          className="bg-white rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200"
        >
          <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 text-xl"
            aria-label="Close consultation form"
          >
            <FaTimes />
          </button>

          <div className="!p-5 sm:!p-6">
            <div className="!mb-3">
              <div className="inline-flex items-center bg-amber-50 text-xs font-semibold uppercase tracking-wide !px-3 !py-1 rounded-full">
                <span className="animate-highlight">Free Consultation</span>
              </div>
              <h2 id="popup-title" className="text-xl sm:text-2xl font-semibold text-slate-900 !mt-2">
                Book Your NRI Property Consultation
              </h2>
              <p className="text-sm text-slate-600 !mt-1">
                Verified guidance for UK NRIs.
              </p>
            </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center justify-between text-xs text-amber-700 uppercase tracking-wide">
              <span>Step {step} of 2</span>
              <span>Private & Secure</span>
            </div>

            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="popup-name" className="text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    id="popup-name"
                    ref={nameInputRef}
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-slate-300 !p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(error) && step === 1}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="popup-email" className="text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-slate-300 !p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(error) && step === 1}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="popup-country" className="text-sm font-medium text-slate-700">
                    Country
                  </label>
                  <DeferredCountryDropdown
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    inputId="popup-country"
                    ariaLabel="Select your country"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="popup-phone" className="text-sm font-medium text-slate-700">
                    Phone number
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={countryCode}
                      readOnly
                      className="border border-slate-300 border-r-0 !p-2.5 w-20 text-center bg-slate-50 rounded-l-md"
                      aria-label="Country code"
                    />
                    <input
                      id="popup-phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border border-slate-300 !p-2.5 w-full rounded-r-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                      autoComplete="tel"
                      inputMode="numeric"
                      required
                      aria-invalid={Boolean(error) && step === 1}
                    />
                  </div>
                  <p className="text-xs text-slate-500">Digits only.</p>
                </div>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="popup-service" className="text-sm font-medium text-slate-700">
                    Service needed
                  </label>
                  <select
                    id="popup-service"
                    ref={serviceSelectRef}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="border border-slate-300 !p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    required
                    aria-invalid={Boolean(error) && step === 2}
                  >
                    <option value="">Select Service</option>
                    <option>Sell Property</option>
                    <option>Buy Property</option>
                    <option>Legal Documentation</option>
                    <option>Title Clearing</option>
                    <option>Tax and Finance</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="popup-message" className="text-sm font-medium text-slate-700">
                    Briefly describe your requirement
                  </label>
                  <textarea
                    id="popup-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Property location, timeline, and any legal concerns."
                    className="border border-slate-300 !p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    required
                    aria-invalid={Boolean(error) && step === 2}
                  />
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-2.5 text-left !mt-1">
                  <input
                    type="checkbox"
                    id="popup-agreement"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required
                    className="w-4 h-4 !mt-1 text-[#7a1f2b] border-gray-300 rounded focus:ring-[#7a1f2b]/20 cursor-pointer"
                  />
                  <label htmlFor="popup-agreement" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                    I agree to the{" "}
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] hover:underline font-medium">Terms & Conditions</a>
                    ,{" "}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] hover:underline font-medium">Privacy Policy</a>
                    , and{" "}
                    <a href="/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] hover:underline font-medium">Cookies Policy</a>.
                  </label>
                </div>
              </>
            )}

            {error && (
              <p
                id="popup-error"
                className="text-red-600 text-sm text-center"
                aria-live="polite"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="w-full sm:w-auto">
                <MakeCallButton />
              </div>

              {step === 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white !px-6 !py-2.5 rounded-md font-semibold shadow-sm hover:shadow-md transition w-full sm:w-auto"
                >
                  Book Free Consultation
                </button>
              ) : (
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-white border border-amber-300 hover:bg-amber-50 text-slate-700 !px-5 !py-2.5 rounded-md font-semibold flex-1 sm:flex-none"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white !px-6 !py-2.5 rounded-md font-semibold shadow-sm hover:shadow-md transition flex items-center justify-center gap-2 flex-1 sm:flex-none ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Sending..." : "Submit Request"}
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-center text-slate-500">
              By submitting, you consent to be contacted regarding your enquiry.
            </p>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpEnquiry;
