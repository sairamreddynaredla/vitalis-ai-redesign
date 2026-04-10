import React from "react";
import trustImage from "../assets/trust-image.webp";

export default function TrustVisualSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 md:px-8 bg-gradient-to-b from-[#f8fbff] to-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.08),transparent_70%)] blur-[60px] z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT TEXT */}
        <div>
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs mb-5 font-semibold tracking-wider">
            TRUST & RELIABILITY
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-5">
            At Vitalis AI,<br />
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              trust is foundational.
            </span>
          </h2>

          <p className="text-slate-600 mb-3 leading-relaxed text-base">
            We know healthcare providers depend on us to manage sensitive data.
          </p>

          <p className="text-slate-500 leading-relaxed text-base">
            Our platform is secure, compliant, and reliable — ensuring innovation
            without compromising patient safety.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* GLOW */}
          <div className="absolute w-[130%] h-[130%] bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent_70%)] blur-[60px] z-0" />

          <img
            src={trustImage}
            alt="Vitalis AI Trust System"
            className="relative z-10 w-full max-w-xl rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.12),0_10px_30px_rgba(37,99,235,0.15)] translate-y-2"
          />
        </div>

      </div>
    </section>
  );
}