import { useToast } from "../hooks/useToast";

import Section from "../components/ui/Section";
import Wrapper from "../components/ui/Wrapper";

import heroImage from "../assets/hero-ui.webp";

const LINKS = {
  playstore: "https://play.google.com/store/apps/details?id=com.virtu.vitalis",
  appstore: "https://apps.apple.com/in/app/vitalis-ai/id6755359030",
};

export default function Hero() {
  const { showToast } = useToast();

  return (
    <Section className="relative overflow-hidden" bg="gradient">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-40 z-0 pointer-events-none grid-bg" />

      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent)] z-0 pointer-events-none" />

      <Wrapper>
        <div
          id="hero"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh] pt-16 pb-8 relative z-10"
        >
          {/* LEFT */}
          <div>
            {/* Tag */}
            <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-500/10 text-xs mb-6">
              AI Health Platform · 2026
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your Health,
              <br />
              <span className="grad-text">Intelligently</span>
              <br />
              Understood.
            </h1>

            {/* Description */}
            <p className="text-gray-500 mb-6 max-w-md text-base leading-relaxed">
              Vitalis AI analyzes your nutrition, plans your meals, scans your
              groceries, and tracks expiry dates.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap">
              <a href={LINKS.playstore} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12 cursor-pointer transition-all duration-300 
                  hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                />
              </a>

              <a href={LINKS.appstore} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12 cursor-pointer transition-all duration-300 
                  hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-6">

                {/* STAT CARD 1 */}
                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl 
                  bg-white/60 backdrop-blur-md border border-white/40 shadow-md 
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                    bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                    <span className="text-blue-600 text-xl">❤</span>
                  </div>

                  <div>
                    <div className="text-xl font-semibold text-[var(--text)]">
                      +92%
                    </div>
                    <p className="text-sm text-[var(--muted)]">
                      Patient Satisfaction
                    </p>
                  </div>
                </div>

                {/* STAT CARD 2 */}
                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl 
                  bg-white/60 backdrop-blur-md border border-white/40 shadow-md 
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                    bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <span className="text-blue-600 text-xl">⏱</span>
                  </div>

                  <div>
                    <div className="text-xl font-semibold text-[var(--text)]">
                      24/7
                    </div>
                    <p className="text-sm text-[var(--muted)]">
                      Access to Care
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            
            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.25),rgba(168,85,247,0.15),transparent)] blur-[80px] z-0 pointer-events-none" />

            {/* Image FIXED */}
            <img
              src={heroImage}
              alt="Vitalis AI App UI"
              loading="lazy"
              className="relative w-full max-w-[520px] h-auto object-contain rounded-2xl z-10 animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}