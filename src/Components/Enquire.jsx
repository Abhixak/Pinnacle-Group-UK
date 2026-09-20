import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import MakeCallButton from "./CallBtn";
import DeferredCountryDropdown from "./DeferredCountryDropdown";
import { API_BASE_URL } from "../config";

const EnquiryForm = () => {
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
  };

  const handleCountryChange = (option) => {
    setSelectedCountry(option ? option.label : "");
    setCountryCode(option ? option.code : "");
  };

  // ? MAKE THIS FUNCTION ASYNC
  const handleSubmit = async (e) => {
    e.preventDefault();

    // === VALIDATION ===
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      setError(
        "Name can only contain letters, spaces, hyphens and apostrophes",
      );
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!selectedCountry) {
      setError("Please select a country");
      return;
    }
    if (!countryCode) {
      setError("Please select a country to get country code");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number");
      return;
    }
    if (!/^\d+$/.test(formData.phone)) {
      setError("Phone number can only contain digits (0-9)");
      return;
    }
    if (formData.phone.length < 8 || formData.phone.length > 15) {
      setError("Phone number must be between 8 and 15 digits");
      return;
    }

    if (!formData.service) {
      setError("Please select a service");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }

    if (!agree) {
      setError("Please accept the Terms & Conditions, Privacy Policy, and Cookies Policy to proceed");
      return;
    }

    setError("");
    setLoading(true);
    try {
      // === 1?? SEND EMAIL USING EMAILJS ===
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

      // === 2?? POST DATA TO MONGODB BACKEND
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
        },
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

      // ?? Success - Reset form
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
      formRef.current.reset();
      navigate("/thankyou");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // ?? STOP LOADER
    }
  };

  return (
    <section
      id="Contact"
      className="!mb-4 bg-[#f8fafc] w-full !px-4 sm:!px-6 !py-10"
    >
      <div className="w-full max-w-4xl !mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm !px-5 sm:!px-8 !py-8">
        <div className="!mb-6 text-left">
          <div className="h-1 w-16 bg-[#7a1f2b] rounded-full !mb-3" />
          <div className="inline-flex items-center bg-[#7a1f2b]/10 text-xs font-semibold uppercase tracking-wide !px-3 !py-1 rounded-full">
            <span className="animate-highlight">Free Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold !mt-3 text-[#7a1f2b]">
            NRI Property Consultation
          </h2>
          <p className="text-sm text-slate-600 !mt-1">
            Submit your query and one of our property experts will get in touch
            with you to discuss the right next steps.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              pattern="[a-zA-Z\s'\-]+"
              title="Name can only contain letters, spaces, hyphens and apostrophes"
              className="border border-slate-300 !p-3 rounded-md outline-none w-full focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b]"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-slate-300 !p-3 rounded-md outline-none w-full focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b]"
            />

            {/* Country Dropdown */}
            <div className="h-10 border-1 rounded">
              <DeferredCountryDropdown
                value={selectedCountry}
                onChange={handleCountryChange}
                ariaLabel="Select your country"
              />
            </div>

            {/* Phone Input with Country Code */}
            <div className="flex h-10 w-full">
              <input
                type="text"
                name="countryCode"
                value={countryCode}
                readOnly
                className="border border-slate-300 border-r-0 !p-3 rounded-l-md outline-none w-24 text-center bg-slate-50"
                placeholder="+"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone / Mobile"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-slate-300 !p-3 rounded-r-md outline-none w-full focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b]"
              />
            </div>

            {/* Service Dropdown */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-slate-300 !p-3 rounded-md outline-none w-full focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b] md:col-span-2"
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option>Sell Property</option>
              <option>Buy Property</option>
              <option>Legal Documentation</option>
              <option>Title Clearing</option>
              <option>Tax and Finance</option>
              <option>Others</option>
            </select>

            {/* Message Textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Explain your service requirement"
              rows={5}
              required
              className="border border-slate-300 !p-3 rounded-md outline-none w-full focus:ring-2 focus:ring-[#7a1f2b]/20 focus:border-[#7a1f2b] md:col-span-2"
            ></textarea>

            {/* Agreement Checkbox */}
            <div className="flex items-start gap-2.5 text-left md:col-span-2 !mt-1">
              <input
                type="checkbox"
                id="enquire-agreement"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
                className="w-4 h-4 !mt-1 text-[#7a1f2b] border-gray-300 rounded focus:ring-[#7a1f2b]/20 cursor-pointer"
              />
              <label htmlFor="enquire-agreement" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                I agree to the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] hover:underline font-medium">Terms & Conditions</a>
                ,{" "}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] hover:underline font-medium">Privacy Policy</a>
                , and{" "}
                <a href="/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] hover:underline font-medium">Cookies Policy</a>.
              </label>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center !mt-4">{error}</p>
          )}

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 !mt-2 flex-wrap">
            <div className="w-full sm:w-auto relative">
              <MakeCallButton />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-emerald-600 hover:bg-emerald-700 text-white !px-6 !py-2.5 rounded-md transition w-full sm:w-auto flex items-center justify-center gap-2
  ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit Query"
              )}
            </button>
          </div>
          <p className="text-xs text-center text-slate-500">
            Your details are private and only used to respond to your enquiry.
          </p>
          <p className="!mt-2 text-slate-600 text-center text-sm">
            Submitted query before?{" "}
            <Link to="/login">
              <span className="text-[#7a1f2b] underline">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
