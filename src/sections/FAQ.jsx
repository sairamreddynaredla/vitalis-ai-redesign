import { useState } from "react";

const faqs = [
  {
    q: "What is Vitalis AI?",
    a: "Vitalis AI is a comprehensive AI-powered healthcare platform offering nutrition analysis, medical report insights, smart meal planning, grocery scanning, and health management — all in one place.",
  },
  {
    q: "What services does Vitalis AI offer?",
    a: "It provides AI report analysis, medication reminders, health tracking, grocery scanning, expiry tracking, meal planning, fasting plans, and the MediBuddy AI assistant.",
  },
  {
    q: "How do reminders work?",
    a: "Smart reminders notify users about medications and appointments automatically, adapting to your schedule and preferences with intelligent timing.",
  },
  {
    q: "How secure is my data?",
    a: "Your data is protected using enterprise-grade AES-256 encryption, HIPAA-compliant infrastructure, and zero-knowledge architecture. We never sell your data.",
  },
  {
    q: "Is Vitalis AI a replacement for my doctor?",
    a: "No. Vitalis AI is an information and management platform. It helps you understand and manage your health data, but always consult qualified medical professionals for personal medical advice.",
  },
  {
    q: "What platforms is Vitalis AI available on?",
    a: "Vitalis AI is available on iOS, Android, and as a web platform — fully synced across all your devices.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14 reveal">
          <div className="section-label justify-center mb-3">FAQ</div>

          <h2 className="font-head text-3xl md:text-4xl text-[var(--text)] mb-3">
            Frequently Asked <span className="grad-text">Questions</span>
          </h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Everything you need to know about Vitalis AI.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isActive = active === i;

            return (
              <div key={i} className="reveal" style={{ "--delay": `${i * 50}ms` }}>
                <div
                  onClick={() => setActive(isActive ? null : i)}
                  className={`rounded-xl p-5 cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-blue-500/5 border-blue-500/30"
                      : "bg-white/5 border-[var(--border)] hover:border-white/20"
                  }`}
                >

                  {/* QUESTION */}
                  <div className="flex justify-between items-center gap-4">
                    <h4 className="font-head text-sm text-[var(--text)] leading-snug">
                      {item.q}
                    </h4>

                    {/* ICON */}
                    <div
                      className={`w-7 h-7 flex items-center justify-center rounded-full text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-blue-500/20 text-blue-500 rotate-45"
                          : "bg-white/10 text-[var(--muted)]"
                      }`}
                    >
                      +
                    </div>
                  </div>

                  {/* ANSWER */}
                  {isActive && (
                    <p className="text-sm text-[var(--muted)] mt-4 pt-4 border-t border-[var(--border)] leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}