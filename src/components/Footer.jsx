import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    // Footer wrapper
    <footer className="bg-gray-50 mt-20 px-6 py-12">
      
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand + Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">Vitalis AI</h2>

          <p className="text-gray-500 mt-2">
            Smart health tracking powered by AI.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4 text-gray-600">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vitalisglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Vitalis-Global/61586147249989/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/vitalisglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
            >
              <FaXTwitter size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/vitalis-ai-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>

          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Product</h3>

          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#features" className="hover:text-gray-800">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-gray-800">
                How it works
              </a>
            </li>
            <li>
              <span className="cursor-pointer hover:text-gray-800">
                Pricing
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-gray-800">
                Download
              </span>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Company</h3>

          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#about" className="hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <span className="cursor-pointer hover:text-gray-800">
                Blog
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-gray-800">
                Careers
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-gray-800">
                Contact
              </span>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Support</h3>

          <ul className="space-y-2 text-gray-500">
            <li>
              <a
                href="https://www.vitalisglobal.ai/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.vitalisglobal.ai/terms-service"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 border-t pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">

        {/* Copyright */}
        <p className="text-center">
          © {new Date().getFullYear()} Vitalis AI is a product owned and operated by{" "}
          <a
            href="https://www.virtutechsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Virtu Tech Solutions
          </a>
          . All rights reserved.
        </p>

      </div>
    </footer>
  );
}