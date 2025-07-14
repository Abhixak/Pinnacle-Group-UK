import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NRI_Services from "./Pages/NRI_Services";
import ScrollToTop from "./Components/ScrollToTop";
import ServiceDetails from "./Pages/ServiceDetails";
import Footer from "./Components/Footer";

function ScrollHandlerWrapper() {
  const footerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      // Already on home page
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll
      navigate("/", { state: { scrollToFooter: true } });
      setTimeout(() => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay to ensure DOM renders
    }
  };

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <Routes>
        <Route path="/" element={<Home footerRef={footerRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nri-services" element={<NRI_Services />} />
        {/* <Route path="/ServiceDetails" element={<ServiceDetails />} /> */}
        <Route
          path="/ServiceDetails/:serviceType"
          element={<ServiceDetails />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollHandlerWrapper />
    </Router>
  );
}

export default App;
