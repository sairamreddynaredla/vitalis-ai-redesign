export default function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 pt-20 pb-10 bg-gradient-to-b from-green-50 via-white to-green-50 flex flex-col justify-center">
      
      {/* Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          One AI App for Your Complete Health
        </h1>

        {/* Subtext */}
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-md">
          Scan meals, analyze groceries, detect expiry, and get AI-powered insights.
        </p>

        {/* Store Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.virtu.vitalis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download on Google Play"
              className="h-12 sm:h-14 md:h-16 object-contain transition duration-200 hover:scale-105"
            />
          </a>

          {/* App Store */}
          <a
            href="https://apps.apple.com/in/app/vitalis-ai/id6755359030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-12 sm:h-14 md:h-16 object-contain transition duration-200 hover:scale-105"
            />
          </a>

        </div>
      </div>

      {/* Hero Image */}
      <div className="relative flex justify-center mt-8 px-2 sm:px-0">
        
        <img
          src="/hero.png"
          alt="Vitalis AI App Preview"
          className="w-full max-w-md sm:max-w-xl md:max-w-2xl rounded-xl shadow-xl"
        />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -z-10 w-[250px] sm:w-[300px] md:w-[350px] h-[180px] sm:h-[220px] md:h-[250px] bg-green-200 blur-3xl rounded-full"></div>
      </div>

    </section>
  );
}