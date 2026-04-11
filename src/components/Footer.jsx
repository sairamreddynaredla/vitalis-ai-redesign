import footerData from "../data/footerData";
import { Mail } from "lucide-react";

const iconMap = {
  facebook: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  instagram: (props) => (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
  twitter: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
    </svg>
  ),
  linkedin: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
};

export default function Footer() {
  if (!footerData) return null;

  return (
    <footer className="bg-[#0b2c3d] text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* CONTACT */}
        <div className="text-center mb-20">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {footerData.contact?.title || "Contact Us"}
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            {footerData.contact?.description || ""}
          </p>

          <div className="flex justify-center">
            <a
              href={`mailto:${footerData.brand?.email || ""}`}
              className="flex items-center gap-3 bg-white text-black px-7 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            >
              <Mail size={18} />
              <span className="font-medium">
                {footerData.brand?.email || "email@example.com"}
              </span>
            </a>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="max-w-3xl mx-auto border border-yellow-500/60 rounded-xl p-7 md:p-8 text-center mb-16">
          <h3 className="text-yellow-400 font-semibold mb-3 text-sm md:text-base tracking-wide">
            ⚠ {footerData.disclaimer?.title || ""}
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {footerData.disclaimer?.text || ""}
          </p>
        </div>

        {/* SOCIAL */}
        <div className="text-center mb-14">
          <h4 className="text-gray-300 tracking-widest text-sm mb-6">
            CONNECT WITH US
          </h4>

          <div className="flex justify-center gap-6">
            {(footerData.socialLinks || []).map((item) => {
              const Icon = iconMap[item.icon];
              if (!Icon) return null;

              return (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#123e56] rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                >
                  <Icon width={18} height={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-600/40 mb-6"></div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-400">

          <p className="mb-4">
            © 2026 Vitalis AI is a product owned and operated by{" "}
            <a
              href="https://www.virtutechsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition underline-offset-4 hover:underline"
            >
              Virtu Tech Solutions
            </a>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {(footerData.legalLinks || []).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
