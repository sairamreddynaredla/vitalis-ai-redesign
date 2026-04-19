import ctaImg from "../assets/cta.jpg";

/**
 * CTA (Call-To-Action) Section
 */
export default function CTA() {
  return (
    <section className="px-6 py-16">
      
      {/* CTA Container */}
      <div className="relative overflow-hidden rounded-3xl 
        bg-gradient-to-r from-[#dff5e8] via-[#ecfaf1] to-[#f7fdf9]
        p-8 sm:p-10 md:p-14 
        flex flex-col md:flex-row items-center justify-between gap-10
        shadow-lg hover:shadow-xl transition duration-300">

        {/* Glow Effect */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-200 opacity-20 rounded-full blur-3xl"></div>

        {/* Left Side - App Preview Image */}
        <div className="w-48 sm:w-56 md:w-64 rotate-[-10deg] relative z-10">
          <img
            src={ctaImg}
            alt="Vitalis app preview"
            className="w-full drop-shadow-2xl transition duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-center md:text-left max-w-xl relative z-10">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
            Start your healthy journey today
          </h2>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6">

            <a
              href="https://apps.apple.com/in/app/vitalis-ai/id6755359030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/app-store.jpg"
                alt="Download on the App Store"
                className="h-14 transition duration-300 hover:scale-105 hover:shadow-md"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.virtu.vitalis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play.jpg"
                alt="Get it on Google Play"
                className="h-14 transition duration-300 hover:scale-105 hover:shadow-md"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}