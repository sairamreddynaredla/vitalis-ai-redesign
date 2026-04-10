import { Brain, Zap, Shield, Activity, FileText, Users, HeartPulse } from "lucide-react";
import Wrapper from "../components/ui/Wrapper";
import Section from "../components/ui/Section";

export default function WhyChoose() {
  const FEATURES = [
    {
      icon: <Zap size={20} />,
      title: "Severity Risk Insights",
      desc: "AI evaluates health metrics instantly and highlights severity levels with clear, actionable indicators.",
      color: "#6366F1",
    },
    {
      icon: <FileText size={20} />,
      title: "Consultation Transcripts",
      desc: "Record consultations, generate transcripts, and export them as PDFs for clinical documentation.",
      color: "#8B5CF6",
    },
    {
      icon: <Brain size={20} />,
      title: "MediBuddy AI Assistant",
      desc: "Instantly answers clinical and workflow questions, retrieving patient data and generating daily summaries.",
      color: "#3B82F6",
    },
    {
      icon: <Users size={20} />,
      title: "Active Patient Management",
      desc: "Doctors can check active patients, confirm consultations, and manage cases efficiently in real time.",
      color: "#10B981",
    },
    {
      icon: <Shield size={20} />,
      title: "HIPAA Compliant",
      desc: "Bank-level encryption keeps your health data completely secure and private.",
      color: "#F59E0B",
    },
    {
      icon: <Activity size={20} />,
      title: "Clinical Documentation",
      desc: "Transform clinical conversations into structured medical notes including symptoms, assessments, and treatment plans.",
      color: "#EC4899",
    },
    {
      icon: <HeartPulse size={20} />,
      title: "Personalized Plans",
      desc: "AI creates personalized diet, fasting, and wellness plans tailored to your body, lifestyle, and goals.",
      color: "#22C55E",
    },
  ];

  return (
    <Section bg="light">
      <Wrapper>

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 text-xs rounded-full bg-purple-100 text-purple-600 font-semibold mb-4 tracking-wide">
            WHY VITALIS AI
          </div>

          <h2 className="font-head text-3xl md:text-4xl leading-tight">
            Here's What Makes Us
            <br />
            <span className="grad-text">Different</span>
          </h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            Vitalis AI transforms complex medical reports into clear, actionable insights using
            advanced AI technology. Unlike traditional health platforms, we focus on making
            medical data accessible and understandable for everyone.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 leading-snug">
              From raw data to
              <br />
              <span className="text-purple-500">
                clinical intelligence in seconds
              </span>
            </h3>

            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              Unlike generic AI tools, Vitalis understands healthcare workflows —
              transforming conversations, reports, and vitals into structured,
              actionable insights instantly.
            </p>

            <div className="space-y-2 text-sm text-[var(--muted)]">
              <p>✔ Real-time AI processing</p>
              <p>✔ Healthcare-specific intelligence</p>
              <p>✔ Designed for doctors, not engineers</p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                <Brain size={26} />
              </div>

              <h4 className="text-lg font-semibold mb-3">
                AI That Understands Healthcare
              </h4>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Purpose-built models trained for clinical environments —
                ensuring accuracy, relevance, and real-world usability.
              </p>
            </div>
          </div>

        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 backdrop-blur border overflow-hidden hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: `${item.color}10`,
                borderColor: `${item.color}30`,
              }}
            >

              {/* TOP LINE */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`
                }}
              />

              {/* ICON */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${item.color}20`,
                  border: `1px solid ${item.color}40`,
                }}
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </Wrapper>
    </Section>
  );
}