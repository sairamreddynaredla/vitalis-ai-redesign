import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6 md:px-10 py-10 md:py-12 border-t border-gray-200">

      {/* MEDICAL DISCLAIMER */}
      <div className="max-w-2xl mx-auto mb-10 border border-yellow-400 bg-[#1a2535] rounded-xl px-5 py-5 text-center">
        <p className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
          ⚠ Important Medical Disclaimer
        </p>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          Vitalis AI is an information and management platform and is not a
          substitute for professional healthcare providers or doctors. Always
          consult qualified medical professionals for personal medical advice,
          diagnosis, or treatment plans.
        </p>
      </div>

      {/* CONNECT WITH US */}
      <div className="text-center mb-8">
        <p className="text-gray-800 font-semibold text-xs tracking-widest uppercase mb-4">
          Connect With Us
        </p>
        <div className="flex justify-center gap-4 text-gray-600">
          <a href="https://www.facebook.com/people/Vitalis-Global/61586147249989/" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition">
            <FaFacebook size={16} />
          </a>
          <a href="https://www.instagram.com/vitalisglobal/" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition">
            <FaInstagram size={16} />
          </a>
          <a href="https://x.com/vitalisglobal" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition">
            <FaXTwitter size={16} />
          </a>
          <a href="https://www.linkedin.com/company/vitalis-ai-global/" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition">
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-5 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-600 gap-3">
        <p className="text-center leading-relaxed px-2">
          © {new Date().getFullYear()} Vitalis AI is a product owned and operated by{" "}
          <a href="https://www.virtutechsolutions.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-gray-900 hover:text-gray-700">
            Virtu Tech Solutions
          </a>
          . All rights reserved.
        </p>
        <div className="flex gap-4 font-medium text-gray-700">
          <Link to="/terms" className="hover:text-gray-900 transition">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-gray-900 transition">
            Privacy Policy
          </Link>
        </div>
      </div>

    </footer>
  );
}