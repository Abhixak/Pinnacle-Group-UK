import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import MakeCallButton from "./CallBtn";
import DeferredCountryDropdown from "./DeferredCountryDropdown";
import { API_BASE_URL } from "../config";

const steps = [
  {
    title: "Your details",
    description: "Tell us who our property expert will be speaking with.",
  },
  {
    title: "Contact details",
    description: "Share the best number to reach you on.",
  },
  {
    title: "Property requirement",
    description: "Help us understand the support you need.",
  },
  {
    title: "Review & submit",
    description: "Confirm your details and submit your query.",
  },
];

const PopUpEnquiry = () => {
  const formRef = useRef();
  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const serviceSelectRef = useRef(null);
  const agreementRef = useRef(null);
  const lastActiveElementRef = useRef(null);
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("dismissedEnquiryPopup");
    if (isDismissed) return undefined;

    const timer = setTimeout(() => setShowPopup(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("dismissedEnquiryPopup", "true");
    setShowPopup(false);
    setStep(1);
    setError("");
    setAgree(false);
  };

  useEffect(() => {
    if (!showPopup) return undefined;

    lastActiveElementRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastActiveElementRef.current?.focus?.();
    };
  }, [showPopup]);

  useEffect(() => {
    if (!showPopup) return undefined;

    const focusTargets = {
      1: nameInputRef.current,
      2: phoneInputRef.current,
      3: serviceSelectRef.current,
      4: agreementRef.current,
    };
    const timer = setTimeout(() => focusTargets[step]?.focus(), 0);
    return () => clearTimeout(timer);
  }, [showPopup, step]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setError("");
  };

  const handleCountryChange = (option) => {
    setSelectedCountry(option ? option.label : "");
    setCountryCode(option ? option.code : "");
    setError("");
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      if (!formData.name.trim()) return "Please enter your name";
      if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
        return "Name can only contain letters, spaces, hyphens and apostrophes";
      }
      if (!formData.email.trim()) return "Please enter your email";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        return "Please enter a valid email address";
      }
    }

    if (currentStep === 2) {
      if (!selectedCountry) return "Please select a country";
      if (!countryCode) return "Please select a country to get country code";
      if (!formData.phone.trim()) return "Please enter your phone number";
      if (!/^\d+$/.test(formData.phone)) {
        return "Phone number can only contain digits (0-9)";
      }
      if (formData.phone.length < 8 || formData.phone.length > 15) {
        return "Phone number must be between 8 and 15 digits";
      }
    }

    if (currentStep === 3) {
      if (!formData.service) return "Please select a service";
      if (!formData.message.trim()) return "Please enter your message";
    }

    return "";
  };

  const handleNext = () => {
    const validationError = validateStep(step);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStep((currentStep) => Math.min(currentStep + 1, steps.length));
  };

  const handleBack = () => {
    setError("");
    setStep((currentStep) => Math.max(currentStep - 1, 1));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (let currentStep = 1; currentStep <= 3; currentStep += 1) {
      const validationError = validateStep(currentStep);
      if (validationError) {
        setStep(currentStep);
        setError(validationError);
        return;
      }
    }

    if (!agree) {
      setError(
        "Please accept the Terms & Conditions, Privacy Policy, and Cookies Policy to proceed",
      );
      return;
    }

    setError("");
    setLoading(true);

    try {
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
        "pQqSTFuOf-O4iXuH-",
      );

      const response = await fetch(API_BASE_URL + "/register", {
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
        setError(result.message || "Something went wrong");
        return;
      }

      if (!result.success) {
        setError(result.message || "Something went wrong");
        return;
      }

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
    } catch (submissionError) {
      console.error(submissionError);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (event) => {
    if (step === steps.length) {
      handleSubmit(event);
      return;
    }

    event.preventDefault();
    handleNext();
  };

  if (!showPopup) return null;

  const currentStep = steps[step - 1];

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-[2px]"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 !px-4">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          aria-describedby={error ? "popup-error" : "popup-description"}
          className="relative max-h-[94vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full !p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close consultation form"
          >
            <FaTimes />
          </button>

          <div className="!p-5 sm:!p-7">
            <div className="!mb-5">
              <div className="inline-flex rounded-full bg-amber-50 !px-3 !py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                Free Consultation
              </div>
              <h2
                id="popup-title"
                className="!mt-2 pr-10 text-xl font-semibold text-slate-900 sm:text-2xl"
              >
                Speak With an NRI Property Expert
              </h2>
              <p id="popup-description" className="!mt-1 text-sm text-slate-600">
                Submit your query and one of our property experts will get in
                touch with you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-5"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
                      Step {step} of {steps.length}
                    </p>
                    <h3 className="!mt-1 text-lg font-semibold text-slate-900">
                      {currentStep.title}
                    </h3>
                    <p className="!mt-0.5 text-sm text-slate-500">
                      {currentStep.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-slate-500">
                    {Math.round((step / steps.length) * 100)}%
                  </span>
                </div>

                <div
                  className="!mt-3 grid grid-cols-4 gap-2"
                  aria-label="Enquiry progress"
                >
                  {steps.map((item, index) => (
                    <div
                      key={item.title}
                      className={
                        "h-1.5 rounded-full transition-colors duration-300 " +
                        (index + 1 <= step ? "bg-amber-500" : "bg-slate-200")
                      }
                    />
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="popup-name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>
                    <input
                      id="popup-name"
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-md border border-slate-300 !p-2.5 outline-none focus:ring-2 focus:ring-amber-200"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="popup-email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email address
                    </label>
                    <input
                      id="popup-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-md border border-slate-300 !p-2.5 outline-none focus:ring-2 focus:ring-amber-200"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="popup-country"
                      className="text-sm font-medium text-slate-700"
                    >
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
                    <label
                      htmlFor="popup-phone"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone number
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={countryCode}
                        readOnly
                        className="w-20 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 !p-2.5 text-center"
                        aria-label="Country code"
                      />
                      <input
                        id="popup-phone"
                        ref={phoneInputRef}
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-r-md border border-slate-300 !p-2.5 outline-none focus:ring-2 focus:ring-amber-200"
                        autoComplete="tel"
                        inputMode="numeric"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="popup-service"
                      className="text-sm font-medium text-slate-700"
                    >
                      Service needed
                    </label>
                    <select
                      id="popup-service"
                      ref={serviceSelectRef}
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="rounded-md border border-slate-300 !p-2.5 outline-none focus:ring-2 focus:ring-amber-200"
                      required
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
                    <label
                      htmlFor="popup-message"
                      className="text-sm font-medium text-slate-700"
                    >
                      Briefly describe your requirement
                    </label>
                    <textarea
                      id="popup-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Property location, timeline, and any legal concerns."
                      className="resize-none rounded-md border border-slate-300 !p-2.5 outline-none focus:ring-2 focus:ring-amber-200"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50 !p-4 text-sm sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Name
                      </p>
                      <p className="!mt-1 font-medium text-slate-800">
                        {formData.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Email
                      </p>
                      <p className="!mt-1 break-all font-medium text-slate-800">
                        {formData.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Phone
                      </p>
                      <p className="!mt-1 font-medium text-slate-800">
                        {countryCode} {formData.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Service
                      </p>
                      <p className="!mt-1 font-medium text-slate-800">
                        {formData.service}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg border border-slate-200 !p-3 text-left">
                    <input
                      ref={agreementRef}
                      type="checkbox"
                      id="popup-agreement"
                      checked={agree}
                      onChange={(event) => setAgree(event.target.checked)}
                      required
                      className="!mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-[#7a1f2b] focus:ring-[#7a1f2b]/20"
                    />
                    <label
                      htmlFor="popup-agreement"
                      className="cursor-pointer select-none text-xs leading-relaxed text-slate-600"
                    >
                      I agree to the{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#7a1f2b] hover:underline"
                      >
                        Terms & Conditions
                      </a>
                      ,{" "}
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#7a1f2b] hover:underline"
                      >
                        Privacy Policy
                      </a>
                      , and{" "}
                      <a
                        href="/cookies-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#7a1f2b] hover:underline"
                      >
                        Cookies Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
              )}

              {error && (
                <p
                  id="popup-error"
                  className="rounded-md bg-red-50 !px-3 !py-2 text-center text-sm text-red-600"
                  aria-live="polite"
                >
                  {error}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 !pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="w-full sm:w-auto">
                  <MakeCallButton />
                </div>

                <div className="flex w-full gap-2 sm:w-auto">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={loading}
                      className="flex-1 rounded-md border border-amber-300 bg-white !px-5 !py-2.5 font-semibold text-slate-700 transition hover:bg-amber-50 sm:flex-none"
                    >
                      Back
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={
                      "flex flex-1 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 !px-6 !py-2.5 font-semibold text-white shadow-sm transition hover:shadow-md sm:flex-none " +
                      (loading ? "cursor-not-allowed opacity-70" : "")
                    }
                  >
                    {step < steps.length
                      ? "Continue"
                      : loading
                        ? "Sending..."
                        : "Submit Query"}
                  </button>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500">
                Your details are private and only used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpEnquiry;
