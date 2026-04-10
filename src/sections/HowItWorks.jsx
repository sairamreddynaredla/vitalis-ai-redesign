import { motion } from "framer-motion";
import { Brain, FileText, Bell, Shield, HeartPulse, Sparkles } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Create Your Health Profile",
    desc: "Set up your secure health profile by adding basic details, medical history, and preferences.",
    icon: Brain,
  },
  {
    num: "02",
    title: "AI-Powered Report Analysis",
    desc: "Upload reports and get instant AI-driven summaries with actionable insights.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Smart Reminders",
    desc: "Get daily notifications for medications, appointments, and follow-ups.",
    icon: Bell,
  },
  {
    num: "04",
    title: "Health Vault",
    desc: "Securely store medical reports for yourself and your family.",
    icon: Shield,
  },
  {
    num: "05",
    title: "Personalized Fasting Plans",
    desc: "AI creates plans tailored to your body, lifestyle, and goals.",
    icon: HeartPulse,
  },
  {
    num: "06",
    title: "MediBuddy AI Assistant",
    desc: "Ask questions, understand reports, and get daily health summaries instantly.",
    icon: Sparkles,
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 px-4 md:px-8 bg-[var(--bg)]">

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="section-label mb-3">How It Works</div>

          <h2 className="font-head text-3xl md:text-4xl mb-4">
            From Data to <span className="grad-text">Clinical Intelligence</span>
          </h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Vitalis AI transforms your health data into actionable insights — seamlessly and intelligently.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >

                  {/* CARD */}
                  <motion.div
                    variants={cardVariants}
                    initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04 }}
                    className="w-full md:w-[46%] p-6 md:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-xl"
                  >

                    {/* ICON */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-indigo-500/15 border border-indigo-500/30">
                      <Icon size={22} />
                    </div>

                    {/* STEP */}
                    <div className="text-xs text-indigo-500 font-bold tracking-wider mb-1">
                      STEP {step.num}
                    </div>

                    {/* TITLE */}
                    <h3 className="font-head text-lg mb-2">
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* DOT */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.6)]" />

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}