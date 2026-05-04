import React from "react";
import {
  ClipboardList,
  Brain,
  FileText,
  Users,
  Settings,
} from "lucide-react";

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

function Card({ step }) {
  const Icon = step.icon;

  return (
    <div
      className="w-full bg-white border border-gray-200 p-5 rounded-2xl 
      shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-lg 
          bg-emerald-50 text-emerald-600 border border-emerald-100"
        >
          <Icon size={20} />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            {step.title}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Workflow() {
  return (
    <section className="relative w-full py-32 bg-[#eef7f2]">

      {/* 🔥 TOP GRADIENT SEPARATION */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">

          {/* ROW 1 */}
          <Card step={steps[0]} />

          {/* CENTER IMAGE */}
          <div className="flex justify-center shrink-0">
            <div
              className="w-64 h-64 rounded-full bg-white border border-gray-200 
              shadow-xl flex items-center justify-center"
            >
              <img
                src={workflowImg}
                alt="workflow"
                className="w-44 h-44 object-contain"
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