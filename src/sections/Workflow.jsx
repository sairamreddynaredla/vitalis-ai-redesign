import React from "react";
import {
  ClipboardList,
  Brain,
  FileText,
  Users,
  Settings,
} from "lucide-react";

// ✅ IMAGE IMPORT
import workflowImg from "../assets/workflow-center.jpg";

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Clinical Documentation",
    desc: "Automatically capture and structure medical data during consultations, including patient history, vitals, assessments, and treatment plans in real-time.",
  },
  {
    id: 2,
    icon: Brain,
    title: "Medibuddy AI Assistant",
    desc: "Get answers to your questions, including patient updates, appointments, and profile details.",
  },
  {
    id: 3,
    icon: FileText,
    title: "Consultation Transcripts",
    desc: "Record consultations, generate transcripts, and export them as PDFs for clinical documentation.",
  },
  {
    id: 4,
    icon: Users,
    title: "Active Patient Management",
    desc: "Doctors can check active patients, confirm consultations, and manage cases efficiently.",
  },
  {
    id: 5,
    icon: Settings,
    title: "Profile Management",
    desc: "Edit clinic name, contact email, specialization, and related profile settings anytime.",
  },
];

// CARD
function Card({ step }) {
  const Icon = step.icon;

  return (
    <div className="w-full bg-white border border-gray-200 p-6 rounded-2xl 
    shadow-md hover:shadow-lg transition-all duration-300">

      <div className="flex items-start gap-4">
        <div className="w-11 h-11 flex items-center justify-center rounded-lg 
        bg-emerald-50 text-emerald-600 border border-emerald-100">
          <Icon size={22} />
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Workflow() {
  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Clinical intelligence designed to simplify doctor's workflows
          </h2>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {steps.map((step) => (
            <Card key={step.id} step={step} />
          ))}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">

          {/* ROW 1 */}
          <Card step={steps[0]} />

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center">
              <img
                src={workflowImg}
                alt="workflow"
                className="w-28 h-28 object-contain"
              />
            </div>
          </div>

          <Card step={steps[1]} />

          {/* ROW 2 */}
          <Card step={steps[2]} />
          <Card step={steps[4]} />
          <Card step={steps[3]} />

        </div>

      </div>
    </section>
  );
}