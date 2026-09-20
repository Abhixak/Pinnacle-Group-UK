import { Link } from "react-router-dom";
import Footer from "./Footer";
import SEO from "./SEO";

export default function PageNotFound() {
  return (
    <>
    <SEO
      title="404 | Page Not Found"
      description="The requested page could not be found."
      path="/404"
      noIndex
    />
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-black !px-6">
      
      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Card */}
      <div className="relative z-10 max-w-xl w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl !p-10 text-center">
        
        {/* Floating Icon */}
        <div className="!mx-auto !mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-4xl animate-bounce">
          🏡
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent !mb-3">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white !mb-4">
          Looks like this page not found
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed !mb-8">
          Your Indian property journey doesn’t need a flight ticket.
NRIs can buy and manage properties in India remotely, with complete trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="!px-7 !py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 transition-transform"
          >
            Explore
          </Link>

          <Link
            to="/contact"
            className="!px-7 !py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
          >
            Talk to an Expert
          </Link>
        </div>

        {/* Footer */}
        <p className="!mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} nriproperty.uk · Trusted Property Services for NRIs
        </p>
        
      </div>
    </div>
    <Footer />
    </>
  );
}
