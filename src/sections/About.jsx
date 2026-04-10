import aboutImage from "../assets/about-vitalis.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-4 md:px-8 bg-[var(--bg2)]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent)] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT → IMAGE */}
          <div className="reveal">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[60px] rounded-2xl z-0" />

              <img
                src={aboutImage}
                alt="Vitalis AI"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT → TEXT */}
          <div className="reveal space-y-6" style={{ "--delay": "150ms" }}>
            <div className="section-label">About Us</div>

            <h2 className="font-head text-3xl md:text-4xl text-[var(--text)]">
              Transforming Healthcare
              <br />
              with <span className="grad-text">AI Intelligence</span>
            </h2>

            <p className="text-[var(--muted)] leading-relaxed text-base md:text-lg">
              Your comprehensive AI-powered healthcare companion designed to simplify
              health management. We transform complex medical reports into clear
              insights, provide intelligent medication reminders, and deliver
              personalized recommendations to help you stay in control of your
              health journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}