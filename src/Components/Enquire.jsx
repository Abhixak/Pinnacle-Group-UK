import { useState } from "react";
import MakeCallButton from "./CallBtn";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Query submitted successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Error submitting query.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div id="Contact" className="bg-white rounded-xl w-full flex justify-center items-center !px-5 !py-8">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold !mb-8">
          Quick{" "}
          <span className="text-red-600 underline underline-offset-4">Enquiry</span>
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border !p-3 rounded outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border !p-3 rounded outline-none"
            required
          />

          <div className="flex w-full">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-r-0 !p-3 rounded-l outline-none bg-white"
            >
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+1">🇺🇸 USA (+1)</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone / Mobile"
              className="border !p-3 rounded-r outline-none flex-1"
              maxLength="10"
              required
            />
          </div>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border !p-3 rounded outline-none bg-white"
            required
          >
            <option value="" disabled hidden>Select a Service</option>
            <option>Buy a Property</option>
            <option>Sell a Property</option>
            <option>Lease a Property</option>
            <option>Loan Consultation</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Leave a Message for us"
            className="border !p-3 rounded outline-none !mt-2 md:col-span-2"
            rows={4}
          ></textarea>

          <div className="md:col-span-2 !mt-4 text-lg font-semibold flex gap-4 flex-col md:flex-row justify-center">
            <button type="submit" className="bg-red-700 text-white !px-6 !py-2 rounded hover:bg-red-800 transition">
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
