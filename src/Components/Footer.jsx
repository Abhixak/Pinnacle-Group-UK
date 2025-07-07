import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] text-white !py-10 !px-6 md:!px-20">

      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 border-t border-gray-600 !pt-8">
        <div>
          <h4 className="text-lg font-semibold !mb-2">Write Us</h4>
          <p className="flex justify-center items-center gap-2 text-sm">
            <FaEnvelope /> info@pinnacleinfra.co.in
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold !mb-2">Call Us</h4>
          <p className="flex justify-center items-center gap-2 text-sm">
            <FaPhoneAlt /> +91-9216399808
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold !mb-2">Address</h4>
          <p className="flex justify-center items-center gap-2 text-sm text-center">
            <FaMapMarkerAlt />
            SCF 124, Level 1 Phase XI, Mohali, Punjab - 160062, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
