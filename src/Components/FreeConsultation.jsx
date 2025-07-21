import React, { useState } from "react";

const contactList = [
  { label: "UK", number: "+44-7868143558", href: "tel:+447868143558" },
  { label: "IN", number: "+91-9216399808", href: "tel:+919216399808" },
  { label: "CA", number: "+1-613-295-6385", href: "tel:+16132956385" },
  { label: "US", number: "+1-414-690-6435", href: "tel:+14146906435" },
];

const FreeConsultation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed cursor-pointer bottom-6 right-6 bg-gradient-to-r from-blue-500 to-red-600 text-white font-bold !px-5 !py-3 !rounded-full shadow-xl animate-bounce hover:animate-none transition-all duration-300 z-50"
      >
        Free Consultation
      </button>

      {/* Dialog Box */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl !p-6 shadow-lg w-11/12 max-w-sm !m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-center !mb-4">Contact Us</h2>
            <ul className="space-y-3">
              {contactList.map((contact) => (
                <li key={contact.label} className="flex justify-between items-center">
                  <span className="font-medium">{contact.label}:</span>
                  <a
                    href={contact.href}
                    className="text-blue-600 font-semibold underline hover:text-blue-800"
                  >
                    {contact.number}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="!mt-6 w-full bg-red-500 text-white !py-2 rounded-full hover:bg-red-600 transition"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FreeConsultation;
