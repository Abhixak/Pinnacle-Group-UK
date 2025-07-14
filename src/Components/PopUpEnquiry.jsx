import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import MakeCallButton from "./CallBtn";

const PopUpEnquiry = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); // 20 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h2ax3kz", // ✅ Your Service ID
        "template_1iz83m7", // ✅ Your Template ID
        form.current,
        "pQqSTFuOf-O4iXuH-" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  if (!showPopup) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-40" />

      <div
        id="Contact"
        className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl !px-5 !py-10"
      >
        <div className="bg-white rounded border-2 border-gray-500 relative !p-5 !m-0">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 cursor-pointer right-3 text-gray-700 hover:text-black text-xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <h2 className="text-3xl font-bold !mb-8 text-center">
            Get in{" "}
            <span className="text-red-600 underline underline-offset-4">
              Touch
            </span>
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="border !p-3 rounded outline-none"
              pattern="^[A-Za-z\s]+$"
              title="Name should contain only letters and spaces"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border !p-3 rounded outline-none"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />

            <div className="flex w-full">
              <input
                type="text"
                name="countryCode"
                className="border border-r-0 !p-3 flex-shrink-0 w-25 sm:w-40 text-[0.8em] sm:text-[1em] rounded-l outline-none bg-white"
                list="countryCodes"
                placeholder="Country Code"
              />
              <datalist id="countryCodes">
                <option value="+91">🇮🇳 India (+91)</option>
                <option value="+44">🇬🇧 UK (+44)</option>
                <option value="+1">🇺🇸 USA (+1)</option>
                {/* Add more country codes if needed */}
              </datalist>

              <input
                name="phone"
                type="tel"
                placeholder="Phone / Mobile"
                className="border !p-3 rounded-r outline-none flex-1 min-w-4"
                pattern="^[0-9]{10}$"
                title="Enter valid mobile number"
                maxLength="10"
                required
              />
            </div>

            <select
              name="service"
              className="border !p-3 rounded outline-none bg-white"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Select a Service
              </option>
              <option>Buy a Property</option>
              <option>Sell a Property</option>
              <option>Lease a Property</option>
              <option>Loan Consultation</option>
            </select>

            <textarea
              name="message"
              placeholder="Leave a Message for us"
              className="border !p-3 rounded outline-none !mt-2 md:col-span-2"
              rows={4}
            ></textarea>

            <div className="md:col-span-2 !mt-4 flex gap-4 flex-col md:flex-row justify-center">
              <button
                type="submit"
                className="bg-red-700 text-white !px-6 !py-2 rounded hover:bg-red-800 transition"
              >
                Send Message
              </button>
              <MakeCallButton />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUpEnquiry;
