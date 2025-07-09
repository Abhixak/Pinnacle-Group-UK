import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MakeCallButton from "./CallBtn";

const EnquiryForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          alert(
            "This Feature is under construction. You can contact Pinnacle Group with given numbers, India: +91-9216399808 || UK: +44-7868143558"
          );
        }
      );
  };

  return (
    <div
      id="Contact"
      className="w-full flex justify-center items-center !px-5 !py-12"
    >
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold !mb-8">
          Quick{" "}
          <span className="text-red-600 underline underline-offset-4">
            Enquiry
          </span>
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border !p-3 rounded outline-none"
            pattern="^[A-Za-z\s]+$"
            title="Name should contain only letters and spaces"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="border !p-3 rounded outline-none"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <div className="flex w-full">
            <select className="border border-r-0 !p-3 flex-shrink-0 w-25 sm:w-40 text-[0.8em] sm:text-[1em] rounded-l outline-none bg-white">
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+1">🇺🇸 USA (+1)</option>
              {/* Add more countries as needed */}
            </select>

            <input
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
            className="border !p-3 rounded outline-none bg-white"
            defaultValue=""
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
            placeholder="Leave a Message for us"
            className="border !p-3 rounded outline-none !mt-2 md:col-span-2"
            rows={4}
          ></textarea>

          <div className="md:col-span-2 !mt-4 text-lg font-semibold flex gap-4 flex-col md:flex-row justify-center">
            <button
              type="submit"
              className="bg-red-700 text-white !px-6 !py-2 rounded hover:bg-red-800 transition"
            >
              Send Message
            </button>
            {/* Make Call is separate and doesn't affect the form */}
            <MakeCallButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
