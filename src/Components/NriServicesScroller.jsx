import React from "react";
import "./nriScroller.css";
import { Briefcase, Home, FileText, Landmark } from "lucide-react";

const services = [
  { title: "Property Management", icon: <Home /> },
  { title: "Buy / Sell Property", icon: <Landmark /> },
  { title: "Property Litigation", icon: <Home /> },
  { title: "Legal Documentation", icon: <FileText /> },
  { title: "Power of Attorney", icon: <FileText /> },
  { title: "Property Verification", icon: <Briefcase /> },
  { title: "Loan Assistance", icon: <Landmark /> },
  { title: "Tax Consultation", icon: <Briefcase /> },
  { title: "Interior & Renovation", icon: <Home /> },
  { title: "Free Property valuation", icon: <Landmark /> },
  { title: "Registry & Mutation", icon: <FileText /> },
  { title: "Investment Advisory", icon: <Briefcase /> },
];

const NriServicesScroller = () => {
  return (
    <div className="nri-wrapper content-auto rounded-xl">
      <div className="scroller-track">
        {[...services, ...services].map((item, index) => (
          <div key={index} className="service-card">
            <div className="icon-box">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NriServicesScroller;
