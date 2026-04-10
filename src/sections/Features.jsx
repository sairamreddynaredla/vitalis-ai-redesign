import { Activity, BarChart3, Calendar, Clock, FileText, ScanLine } from "lucide-react";
import Section from "../components/ui/Section";
import Wrapper from "../components/ui/Wrapper";

const FEATURES = [
  {
    icon: Activity,
    title: "AI Nutrition Analysis",
    desc: "Upload a photo or report and our AI instantly identifies nutrients, vitamins, minerals, and health scores with 98.4% accuracy.",
    tag: "Core AI",
    color: "#3B82F6",
  },
  {
    icon: Calendar,
    title: "Smart Meal Planner",
    desc: "AI-generated weekly meal plans tailored to your goals, dietary restrictions, and taste preferences.",
    tag: "New",
    color: "#8B5CF6",
  },
  {
    icon: ScanLine,
    title: "Grocery Scanner",
    desc: "Scan any barcode or food package. Get instant nutritional breakdown and smarter alternatives.",
    tag: "New",
    color: "#34D399",
  },
  {
    icon: Clock,
    title: "Expiry Tracker",
    desc: "AI reads expiry dates and alerts you before food goes bad — reducing waste and protecting your health.",
    tag: "New",
    color: "#F59E0B",
  },
  {
    icon: BarChart3,
    title: "Health Dashboard",
    desc: "Track macros, hydration, sleep, and trends with predictive AI insights and weekly summaries.",
    tag: "Core AI",
    color: "#EC4899",
  },
  {
    icon: FileText,
    title: "Lab Report Analyzer",
    desc: "Upload reports and get simple AI explanations with actionable steps in plain language.",
    tag: "Core AI",
    color: "#3B82F6",
  },
];

export default function Features() {
  return (
   <Section id="features" className="relative py-16 md:py-20 scroll-mt-32" bg="transparent">

      {/* Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none grid-bg" />

      <Wrapper>

        {/* TOP */}
        <div className="reveal mb-10 md:mb-12">
          <div className="section-label mb-3">Core Features</div>

          <h2 className="font-head text-3xl md:text-4xl text-[var(--text)] mb-3">
            Everything your health
            <br />
            needs in <span className="grad-text">one place.</span>
          </h2>

          <p className="text-[var(--muted)] max-w-lg leading-relaxed">
            From AI-powered nutrition analysis to smart grocery scanning — Vitalis covers every part of your wellness journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;

            return (
              <div
                key={i}
                className="reveal p-6 rounded-2xl bg-white/5 border border-white/10 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ "--delay": `${i * 80}ms` }}
              >

                {/* TOP GRADIENT LINE */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)`
                  }}
                />

                {/* ICON */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${feat.color}15`,
                    border: `1px solid ${feat.color}30`
                  }}
                >
                  <Icon size={20} color={feat.color} />
                </div>

                {/* TITLE */}
                <h3 className="font-head text-lg text-[var(--text)] mb-2">
                  {feat.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                  {feat.desc}
                </p>

                {/* TAG */}
                <span
                  className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full"
                  style={{
                    color: feat.color,
                    background: `${feat.color}15`,
                    border: `1px solid ${feat.color}30`
                  }}
                >
                  {feat.tag}
                </span>
              </div>
            );
          })}
        </div>

      </Wrapper>
    </Section>
  );
}