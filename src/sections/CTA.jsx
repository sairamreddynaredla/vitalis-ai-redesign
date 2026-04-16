import ctaImg from "../assets/cta.jpg";

/**
 * CTA (Call-To-Action) Section
 * Encourages users to download the app with clear value points
 */
export default function CTA() {
  return (
    // Section wrapper with horizontal padding
    <section className="mt-20 px-6">
      
      {/* CTA Container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-100 to-green-50 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side - App Preview Image */}
        <div className="w-48 md:w-64 rotate-[-10deg]">
          <img
            src={ctaImg}
            alt="Vitalis app preview"
            className="w-full drop-shadow-xl"
          />
        </div>
        {/* Right Side - Content */}
        <div className="text-center md:text-left max-w-xl">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Start your healthy journey today
          </h2>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 text-sm text-gray-600">
            <p>✔ Free to download</p>
            <p>✔ No credit card</p>
            <p>✔ Works in 10 seconds</p>
          </div>

          {/* Store Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">

            {/* Apple App Store */}
            <a
              href="https://apps.apple.com/in/app/vitalis-ai/id6755359030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/app-store.jpg"
                alt="Download on the App Store"
                className="h-14 transition duration-200 hover:scale-105"
              />
            </a>

            {/* Google Play Store */}
            <a
              href="https://play.google.com/store/apps/details?id=com.virtu.vitalis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play.jpg"
                alt="Get it on Google Play"
                className="h-14 transition duration-200 hover:scale-105"
              />
            </a>

          </div>
        </div>

        {/* Decorative Element (top-right) */}
        <div className="absolute right-5 top-5 w-12 opacity-60 hidden md:block">
          🌿
        </div>

      </div>
    </section>
  );
}