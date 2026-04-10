import { useToast } from "../hooks/useToast";

const LINKS = {
  playstore: "https://play.google.com/store/apps/details?id=com.virtu.vitalis",
  appstore: "https://apps.apple.com/in/app/vitalis-ai/id6755359030",
};

export default function CTA() {
  const { showToast } = useToast();

  return (
    <section
      id="cta"
      className="py-24 px-4 md:px-8 text-center bg-[var(--bg2)]"
    >
      <div className="max-w-xl mx-auto reveal">

        {/* Label */}
        <div className="section-label justify-center mb-4">
          Get Started
        </div>

        {/* Heading */}
        <h2 className="font-head text-3xl md:text-4xl font-bold tracking-tight">
          Start your health<br />
          <span className="grad-text">journey today.</span>
        </h2>

        {/* Description */}
        <p className="mt-4 mb-8 text-[var(--muted)] max-w-md mx-auto leading-relaxed">
          Join thousands of people who use Vitalis AI to eat smarter, feel better, and live longer.
        </p>

        {/* ✅ DOWNLOAD BUTTONS (REPLACED INPUT) */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a href={LINKS.playstore} target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            />
          </a>

          <a href={LINKS.appstore} target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}