import Wrapper from "../components/ui/Wrapper";
import Section from "../components/ui/Section";
import { Brain, FileText, Users, User, ClipboardList } from "lucide-react";

import workflowImg from "../assets/workflow.webp"; // ✅ FIXED

const WORKFLOW_FEATURES = [
  {
    icon: Brain,
    title: "MEDIBUDDY AI ASSISTANT",
    desc: "Get answers to your questions, including patient updates, appointments, and profile details.",
    color: "#3B82F6",
  },
  {
    icon: FileText,
    title: "CONSULTATION TRANSCRIPTS",
    desc: "Record consultations, generates transcripts, and export them as PDFs for clinical documentation.",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "ACTIVE PATIENT MANAGEMENT",
    desc: "Doctors can check active patients, confirm consultations, and manage cases efficiently.",
    color: "#34D399",
  },
  {
    icon: User,
    title: "PROFILE MANAGEMENT",
    desc: "Edit clinic name, contact email, age specialization, and related profile settings anytime.",
    color: "#F59E0B",
  },
];

export default function Workflow() {
  return (
    <Section id="workflow" bg="transparent">
      <Wrapper>

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

          {/* IMAGE */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[70px] rounded-3xl" />

              <img
                src={workflowImg}
                alt="Workflow"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="reveal space-y-6" style={{ "--delay": "150ms" }}>
            <h2 className="font-head text-3xl md:text-4xl text-[var(--text)]">
              Clinical intelligence designed
              <br />
              to simplify doctor's workflows
            </h2>

            {/* HIGHLIGHT */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-white/10 backdrop-blur">
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList size={18} />
                <span className="font-semibold">
                  Clinical Documentation
                </span>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Automatically capture and structure medical data during consultations,
                including patient history, vitals, assessments, and treatment plans in real-time.
              </p>
            </div>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKFLOW_FEATURES.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title} // ✅ FIXED (no index)
                className="reveal relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ "--delay": `${i * 100}ms` }}
              >

                {/* STEP */}
                <div className="absolute top-4 right-4 text-xs text-white/20 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* ICON */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={22} color={item.color} />
                </div>

                {/* TITLE */}
                <h4 className="text-sm font-semibold mb-2 text-[var(--text)]">
                  {item.title}
                </h4>

                {/* DESC */}
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </Wrapper>
    </Section>
  );
}