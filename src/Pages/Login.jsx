import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Mail,
  Lock,
  Clock,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  House,
} from "lucide-react";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { API_BASE_URL } from "../config";

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e) => {
    e?.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log("🔍 Checking email in database:", email);

      // Check if email exists
      const checkResponse = await axios.post(
        `${API_BASE_URL}/check-email`,
        { email: email.toLowerCase() }
      );

      console.log("✅ Email check response:", checkResponse.data);

      if (checkResponse.data.success) {
        const { isVerified, isApproved, user } = checkResponse.data;

        // ✅ Validate user object exists
        if (!user || !user.email) {
          throw new Error("Invalid user data received from server");
        }

        // Send OTP
        console.log("📤 Sending OTP to:", email);
        const otpResponse = await axios.post(
          `${API_BASE_URL}/auth/send-otp`,
          { email: email.toLowerCase() }
        );

        console.log("✅ OTP sent:", otpResponse.data);
        localStorage.setItem("userEmail", email.toLowerCase());

        if (otpResponse.data.success) {
          // Store user info and verification status in state
          setUserData({
            email: user.email,
            name: user.name || "User",
            isVerified: isVerified,
            isApproved: isApproved,
          });

          setStep("otp");
          setResendTimer(60);
          setError("");
          setSuccess("OTP sent successfully! Check your email.");
        } else {
          setError(otpResponse.data.message || "Failed to send OTP");
        }
      }
    } catch (error) {
      console.error("❌ Error:", error);

      if (error.response?.status === 404) {
        setError(
          "No account found with this email. Please submit a query first."
        );
      } else if (error.response?.status === 403) {
        setError(
          error.response?.data?.message || "Your account is pending approval."
        );
      } else if (error.message.includes("Invalid user data")) {
        setError("Server error: Invalid user data. Please contact support.");
      } else {
        setError(
          error.response?.data?.message ||
            "Failed to process request. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOTPSubmit = async (e) => {
    e?.preventDefault();

    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    if (!userData || !userData.email) {
      setError("Session expired. Please start again.");
      handleBackToEmail();
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log("🔐 Verifying OTP...");

      const verifyResponse = await axios.post(
        `${API_BASE_URL}/auth/verify-otp`,
        { email: email.toLowerCase(), otp: otpString }
      );

      console.log("✅ OTP verification response:", verifyResponse.data);

      if (!verifyResponse.data.success) {
        setError(
          verifyResponse.data.message || "Invalid OTP. Please try again."
        );
        return;
      }

      // ✅ Save token
      localStorage.setItem("authToken", verifyResponse.data.token);

      // ✅ Save user details
      localStorage.setItem(
        "clientUser",
        JSON.stringify({
          email: verifyResponse.data.user.email,
          name: verifyResponse.data.user.name,
          isApproved: verifyResponse.data.user.isApproved,
          isVerified: verifyResponse.data.user.isVerified,
        })
      );

      const { isApproved, isVerified } = verifyResponse.data.user;

      // ✅ Redirect logic
      if (isApproved && isVerified) {
        console.log("✅ Fully verified user - redirecting to dashboard");
        navigate("/client/dashboard");
      } else if (isApproved && !isVerified) {
        console.log("📝 Needs contract signature - redirecting to contract");
        navigate("/contractwithsignature");
      } else {
        console.log("⏳ Account pending approval");
        setError("Your account is pending approval.");
      }
    } catch (error) {
      console.error("❌ OTP verification error:", error);
      setError(
        error.response?.data?.message ||
          "Failed to verify OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const storedEmail = localStorage.getItem("userEmail");

      const response = await axios.post(
        `${API_BASE_URL}/auth/send-otp`,
        { email: storedEmail?.toLowerCase() }
      );

      if (response.data.success) {
        setSuccess("OTP resent successfully! Check your email.");
        setResendTimer(60);
        setOtp(["", "", "", "", "", ""]);
        document.getElementById("otp-0")?.focus();
      } else {
        setError(response.data.message || "Failed to resend OTP");
      }
    } catch (error) {
      console.error("❌ Error resending OTP:", error);
      setError(
        error.response?.data?.message ||
          "Failed to resend OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setStep("email");
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setSuccess("");
    setResendTimer(0);
    setUserData(null);
  };

  return (
    <>
      <SEO
        title="Client Login | NRI Property Services"
        description="Secure client login for approved users."
        path="/login"
        noIndex
      />
      <div className="relative flex flex-col justify-center items-center !p-4">
        <div
          className="absolute inset-0 -z-10 blur-[8px]"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/LoginBG.png?updatedAt=1769753358368)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <a
          href="/"
          className="flex gap-2 justify-center absolute font-semibold top-4 left-10 md:text-blue-600 text-blue-100 !mt-2 hover:underline"
        >
          <span>
            <House size={20} />
          </span>
          Home
        </a>

        <div className="max-w-md w-full !mt-12 md:!mt-20">
          <div
            className="bg-white rounded-2xl !p-8"
            style={{
              boxShadow: "0 0 100px 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="text-center !mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full !mb-4">
                <Lock className="text-blue-600" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 !mb-2">
                Client Login
              </h1>
              <p className="text-gray-600">
                {step === "email"
                  ? "Enter your email to receive OTP"
                  : "Enter the OTP sent to your email"}
              </p>
            </div>

            {error && (
              <div className="!mb-6 !p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle
                  className="text-red-600 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div className="flex-1">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              </div>
            )}

            {success && (
              <div className="!mb-6 !p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 flex-shrink-0 !mt-0.5"
                  size={20}
                />
                <p className="text-green-800 text-sm">{success}</p>
              </div>
            )}

            {step === "email" && (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 !mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.trim())}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleEmailSubmit()
                      }
                      className="w-full !pl-10 !pr-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                      disabled={loading}
                    />
                  </div>
                  <p className="!mt-2 text-xs text-gray-500">
                    We'll send a 6-digit OTP to your email
                  </p>
                </div>

                <button
                  onClick={handleEmailSubmit}
                  disabled={loading || !email}
                  className="w-full bg-blue-600 text-white !py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending OTP...
                    </span>
                  ) : (
                    "Send OTP"
                  )}
                </button>

                <div className="text-center">
                  <Link to="/contact">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                        Submit Query
                      </button>
                    </p>
                  </Link>
                </div>
              </div>
            )}

            {step === "otp" && (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 !mb-4 text-center">
                    Enter 6-Digit OTP
                  </label>
                  <div className="flex gap-2 justify-center !mb-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        disabled={loading}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    OTP sent to <span className="font-semibold">{email}</span>
                  </p>
                </div>

                <button
                  onClick={handleOTPSubmit}
                  disabled={loading || otp.join("").length !== 6}
                  className="w-full bg-blue-600 text-white !py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "Verify OTP"
                  )}
                </button>

                <div className="text-center">
                  {resendTimer > 0 ? (
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm">
                        Resend OTP in {resendTimer}s
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={handleResendOtp}
                      disabled={loading}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline disabled:opacity-50"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <button
                  onClick={handleBackToEmail}
                  disabled={loading}
                  className="w-full text-gray-600 hover:text-gray-800 text-sm font-medium transition disabled:opacity-50"
                >
                  ← Change Email
                </button>
              </div>
            )}
          </div>

          <div className="!mt-6 text-center">
            <button
              onClick={() =>
                window.open("mailto:info@nriproperty.uk", "_blank")
              }
              className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition"
            >
              <HelpCircle size={20} />
              <span className="font-medium">Need Help?</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
