import Section from "../components/ui/Section";
import Wrapper from "../components/ui/Wrapper";

import shield from "../assets/shield.png";
import security from "../assets/security.png";

export default function PromiseSection() {
  return (
    <Section bg="transparent">
      <Wrapper>

        <div className="mt-24">
          <div className="bg-gradient-to-r from-[#0d5e8a] to-[#1f7fb3] rounded-[40px] px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-10 text-white">

            {/* LEFT SIDE */}
            <div className="max-w-xl">
              <p className="text-xs tracking-widest uppercase opacity-80 mb-4">
                OUR PROMISE
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Our Unwavering Commitment to Security
              </h2>

              <p className="text-white/80 text-base leading-relaxed">
                We maintain the highest standards of security and compliance to protect your data,
                ensure platform reliability, and build lasting trust with healthcare professionals
                and patients alike.
              </p>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex flex-col gap-6 w-full md:w-[420px]">

              {/* CARD 1 */}
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                <img
                  src={shield}   // ✅ FIXED
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Healthcare Standards Alignment
                  </h4>
                  <p className="text-white/80 text-sm">
                    Aligning with the latest healthcare security standards and best practices
                    across medical industries.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                <img
                  src={security}   // ✅ FIXED
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Proactive Threat Protection & Compliance
                  </h4>
                  <p className="text-white/80 text-sm">
                    Leveraging cutting-edge technology to proactively safeguard against
                    healthcare-specific threats.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </Wrapper>
    </Section>
  );
}