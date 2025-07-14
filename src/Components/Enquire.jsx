import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MakeCallButton from "./CallBtn";

const EnquiryForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2ax3kz", // ✅ Your Service ID
        "template_1iz83m7", // ✅ Your Template ID
        formRef.current,
        "pQqSTFuOf-O4iXuH-" // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      id="Contact"
      className="bg-white rounded-xl w-full flex justify-center items-center !px-5 !py-8"
    >
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold !mb-8">
          Quick{" "}
          <span className="text-red-600 underline underline-offset-4">
            Enquiry
          </span>
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border !p-3 rounded outline-none"
            pattern="^[A-Za-z\s]+$"
            title="Name should contain only letters and spaces"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border !p-3 rounded outline-none"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <div className="flex w-full">
            <input
              type="text"
              name="countryCode"
              className="border border-r-0 !p-3 rounded-l outline-none bg-white"
              list="countryCodes"
              placeholder="Country Code"
            />
            <datalist id="countryCodes">
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+1">🇺🇸 USA (+1)</option>
            </datalist>

            <input
              type="tel"
              name="phone"
              placeholder="Phone / Mobile"
              className="border !p-3 rounded-r outline-none flex-1"
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

          <div className="md:col-span-2 !mt-4 text-lg font-semibold flex gap-4 flex-col md:flex-row justify-center">
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
  );
};

export default EnquiryForm;
