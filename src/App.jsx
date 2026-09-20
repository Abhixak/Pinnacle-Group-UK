import React, { useRef, useEffect, useState, Suspense, lazy } from "react";
import { safeLocalStorage } from "./utils/safeStorage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./Components/Header";
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const NRI_Services = lazy(() => import("./Pages/NRI_Services"));
import ScrollToTop from "./Components/ScrollToTop";
import { loadAnalytics } from "./utils/loadAnalytics";
import CookieConsent from "./Components/CookieConsent";
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const FestivalPopup = lazy(() => import("./Components/Events"));
const ThankYou = lazy(() => import("./Pages/Thankyou"));
const Loader = lazy(() => import("./Components/Loader"));
const Login = lazy(() => import("./Pages/Login"));
const Dashboard = lazy(() => import("./Client/Dashboard"));
const ContractWithSignature = lazy(() => import("./Client/ContractWithSignature"));
const Support = lazy(() => import("./Pages/Support"));
const KeywordLanding = lazy(() => import("./Pages/KeywordLanding"));

const AdminLogin = lazy(() => import("./Admin/AdminAuth"));
const AdminDashboard = lazy(() => import("./Admin/AdminDashboard"));
const AdminUsers = lazy(() => import("./Admin/AdminUsers"));
const AdminChat = lazy(() => import("./Admin/AdminChat"));
const AdminSupport = lazy(() => import("./Admin/AdminSupport"));
const AdminDocuments = lazy(() => import("./Admin/AdminDocuments"));

const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const FAQs = lazy(() => import("./Pages/FAQs"));
const TermsAndConditions = lazy(() => import("./Pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./Pages/CookiesPolicy"));

/* ===========================
   CLIENT PROTECTED ROUTE
   =========================== */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const raw = safeLocalStorage.getItem("clientUser");

    if (!raw) {
      navigate("/login");
      return;
    }

    try {
      const user = JSON.parse(raw);

      // ❌ Not approved or not verified
      if (!user.isApproved || !user.isVerified) {
        navigate("/login");
        return;
      }

      // ✅ All good
      setChecking(false);
    } catch (e) {
      // If parsing fails, clear and redirect
      safeLocalStorage.removeItem("clientUser");
      navigate("/login");
    }
  }, [navigate]);

  if (checking) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Loader />
      </Suspense>
    );
  }

  return children;
}

/* ===========================
   ADMIN PROTECTED ROUTE
   =========================== */
function RequireAdminAuth({ children }) {
  const token = safeLocalStorage.getItem("adminToken");
  const location = useLocation();

  if (!token) {
    // Not logged in → send to Admin Login
    return <Navigate to="/AdminAuth" replace state={{ from: location }} />;
  }

  return children;
}

/* ===========================
   WRAPPER WITH HEADER + ROUTES
   =========================== */
function ScrollHandlerWrapper() {
  const footerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // List of routes where header should NOT appear
  
  const hideHeaderRoutes = [
    
    "/client/dashboard",
    "/AdminAuth/admin-dashboard",
    "/AdminAuth/admin-users",
    "/AdminAuth/admin-chat",
    "/AdminAuth/support-queries",
    "/AdminAuth/admin-docs",
  ];

  // Scroll to footer when coming from another page
  useEffect(() => {
    if (location.state?.scrollToFooter) {
      setTimeout(() => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleContactClick = () => {
    if (location.pathname === "/") {
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToFooter: true } });
    }
  };

  return (
    <>
      {/* <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 999,
          pointerEvents: "none",
        }}
        snowflakeCount={100}
      /> */}
      {/* Only show Header if current route is not in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Header onContactClick={handleContactClick} />
      )}

      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <div role="main" id="main-content">
          <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home footerRef={footerRef} />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/nri-services" element={<NRI_Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/FAQs" element={<Navigate to="/faqs" replace />} />
        <Route
          path="/buy-property-india-from-uk"
          element={<KeywordLanding pageKey="buy" />}
        />
        <Route
          path="/sell-property-india-from-uk"
          element={<KeywordLanding pageKey="sell" />}
        />
        <Route
          path="/lease-property-india-for-nri"
          element={<KeywordLanding pageKey="lease" />}
        />
        <Route
          path="/nri-property-legal-litigation-india"
          element={<KeywordLanding pageKey="legal" />}
        />
        <Route
          path="/nri-property-documentation-services"
          element={<KeywordLanding pageKey="docs" />}
        />
        <Route
          path="/nri-real-estate-investment-india-from-uk"
          element={<KeywordLanding pageKey="investment" />}
        />
        <Route
          path="/contractwithsignature"
          element={<ContractWithSignature />}
        />

        {/* Client Protected Route */}
        <Route
          path="/client/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Old redirect for service details */}
        <Route
          path="/ServiceDetails/:serviceType"
          element={<Navigate to="/service-details/:serviceType" replace />}
        />
        <Route
          path="/service-details/:serviceType"
          element={<ServiceDetails />}
        />

        {/* Admin Routes */}
        <Route path="/AdminAuth" element={<AdminLogin />} />

        <Route
          path="/AdminAuth/admin-dashboard"
          element={
            <RequireAdminAuth>
              <AdminDashboard />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/AdminAuth/admin-users"
          element={
            <RequireAdminAuth>
              <AdminUsers />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/AdminAuth/admin-chat"
          element={
            <RequireAdminAuth>
              <AdminChat />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/AdminAuth/support-queries"
          element={
            <RequireAdminAuth>
              <AdminSupport />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/AdminAuth/admin-docs"
          element={
            <RequireAdminAuth>
              <AdminDocuments />
            </RequireAdminAuth>
          }
        />

        {/* Legal Routes */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

/* ===========================
   ROOT APP COMPONENT
   =========================== */
function App() {
  const isDev = import.meta.env.DEV;
  const [loading, setLoading] = useState(isDev);
  const [showFestivalPopup, setShowFestivalPopup] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() =>
    safeLocalStorage.getItem("cookieConsent"),
  );

  useEffect(() => {
    if (!isDev) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [isDev]);

  useEffect(() => {
    if (isDev) return;
    if (cookieConsent !== "accepted") return; // block analytics unless accepted

    let triggered = false;

    const triggerLoad = () => {
      if (triggered) return;
      triggered = true;
      loadAnalytics();
      cleanup();
    };

    const events = ["pointerdown", "keydown", "touchstart", "scroll"];
    const onEvent = () => triggerLoad();
    events.forEach((event) =>
      window.addEventListener(event, onEvent, { once: true, passive: true }),
    );

    const idleTimer = setTimeout(triggerLoad, 5000);

    const cleanup = () => {
      events.forEach((event) => window.removeEventListener(event, onEvent));
      clearTimeout(idleTimer);
    };

    return cleanup;
  }, [isDev, cookieConsent]);

  useEffect(() => {
    const schedule = window.requestIdleCallback
      ? (cb) => window.requestIdleCallback(cb)
      : (cb) => setTimeout(cb, 1200);
    schedule(() => setShowFestivalPopup(true));
  }, []);

  const handleCookieAccept = () => {
    safeLocalStorage.setItem("cookieConsent", "accepted");
    setCookieConsent("accepted");
    if (!isDev) {
      loadAnalytics();
    }
  };

  const handleCookieDecline = () => {
    safeLocalStorage.setItem("cookieConsent", "rejected");
    setCookieConsent("rejected");
  };

  return (
    <Router basename="/">
      <ScrollToTop />

      {/* Cookie Consent Banner */}
      <CookieConsent
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />

      {/* Festival Popup - checks date automatically */}
      {showFestivalPopup && (
        <Suspense fallback={null}>
          <FestivalPopup userCountry="India" />
        </Suspense>
      )}

      {/* Loading Overlay */}
      {isDev && (
        <div
          className={`fixed inset-0 bg-white transition-all duration-500 z-[9999] flex items-center justify-center pointer-events-none ${
            loading ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: loading ? "flex" : "none" }}
        >
          <Suspense fallback={null}>
            <Loader />
          </Suspense>
        </div>
      )}

      {/* Main App Content */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <ScrollHandlerWrapper />
      </div>
    </Router>
  );
}

export default App;
