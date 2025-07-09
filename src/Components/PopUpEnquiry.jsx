import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const PopUpEnquiry = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        () => {
          alert(
            "This Feature is under construction. You can contact Pinnacle Group with given numbers, India: +91-9216399808 || UK: +44-7892170550"
          );
        }
      );
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Blur Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-40" />

      {/* Popup */}
      <div
        id="Contact"
        className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl !px-5 !py-10"
      >
        <div className="bg-white rounded border-2 border-gray-500 relative !p-5 !m-0">
          {/* Close Button */}
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
                <option value="+49">🇩🇪 Germany (+49)</option>
                <option value="+61">🇦🇺 Australia (+61)</option>
                <option value="+81">🇯🇵 Japan (+81)</option>
                <option value="+33">🇫🇷 France (+33)</option>
                <option value="+39">🇮🇹 Italy (+39)</option>
                <option value="+86">🇨🇳 China (+86)</option>
                <option value="+7">🇷🇺 Russia (+7)</option>
                <option value="+971">🇦🇪 UAE (+971)</option>
                <option value="+92">🇵🇰 Pakistan (+92)</option>
                <option value="+880">🇧🇩 Bangladesh (+880)</option>
                <option value="+94">🇱🇰 Sri Lanka (+94)</option>
                <option value="+977">🇳🇵 Nepal (+977)</option>
                <option value="+60">🇲🇾 Malaysia (+60)</option>
                <option value="+63">🇵🇭 Philippines (+63)</option>
                <option value="+66">🇹🇭 Thailand (+66)</option>
                <option value="+62">🇮🇩 Indonesia (+62)</option>
                <option value="+20">🇪🇬 Egypt (+20)</option>
                <option value="+27">🇿🇦 South Africa (+27)</option>
                <option value="+234">🇳🇬 Nigeria (+234)</option>
                <option value="+254">🇰🇪 Kenya (+254)</option>
                <option value="+213">🇩🇿 Algeria (+213)</option>
                <option value="+598">🇺🇾 Uruguay (+598)</option>
                <option value="+55">🇧🇷 Brazil (+55)</option>
                <option value="+56">🇨🇱 Chile (+56)</option>
                <option value="+57">🇨🇴 Colombia (+57)</option>
                <option value="+52">🇲🇽 Mexico (+52)</option>
                <option value="+34">🇪🇸 Spain (+34)</option>
                <option value="+46">🇸🇪 Sweden (+46)</option>
                <option value="+47">🇳🇴 Norway (+47)</option>
                <option value="+48">🇵🇱 Poland (+48)</option>
                <option value="+31">🇳🇱 Netherlands (+31)</option>
                <option value="+358">🇫🇮 Finland (+358)</option>
                <option value="+41">🇨🇭 Switzerland (+41)</option>
                <option value="+43">🇦🇹 Austria (+43)</option>
                <option value="+353">🇮🇪 Ireland (+353)</option>
                <option value="+32">🇧🇪 Belgium (+32)</option>
                <option value="+420">🇨🇿 Czech Republic (+420)</option>
                <option value="+48">🇵🇱 Poland (+48)</option>
                <option value="+351">🇵🇹 Portugal (+351)</option>
                <option value="+90">🇹🇷 Turkey (+90)</option>
                <option value="+82">🇰🇷 South Korea (+82)</option>
                <option value="+84">🇻🇳 Vietnam (+84)</option>
                <option value="+855">🇰🇭 Cambodia (+855)</option>
                <option value="+95">🇲🇲 Myanmar (+95)</option>
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

            <div className="md:col-span-2 !mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-red-700 text-white !px-6 !py-2 rounded hover:bg-red-800 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUpEnquiry;
