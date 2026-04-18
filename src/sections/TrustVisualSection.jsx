import { ShieldCheck, CheckCircle, Activity, Lock } from "lucide-react";

import Section from "../components/ui/Section";
import Wrapper from "../components/ui/Wrapper";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Built with Verified Data",
    desc: "Our AI is trained using reliable medical and nutrition datasets to ensure accurate insights.",
  },
  {
    icon: Activity,
    title: "Continuous Accuracy Monitoring",
    desc: "We constantly improve and validate results to maintain consistency and reliability.",
  },
  {
    icon: Lock,
    title: "Privacy First Approach",
    desc: "Your health data is never shared and always protected with strict security measures.",
  },
  {
    icon: CheckCircle,
    title: "Transparent AI Insights",
    desc: "We focus on clarity — helping you understand your health, not confuse you.",
  },
];

export default function TrustSection() {
  return (
    <Section bg="transparent">
      <Wrapper>

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 text-xs rounded-full bg-green-500/10 text-green-600 mb-4 font-semibold tracking-wider">
            TRUST & RELIABILITY
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Built for reliability,
            <br />
            designed for your health.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            As a newly launched platform, our focus is not on numbers — 
            but on delivering accurate, safe, and transparent health insights you can trust.
          </p>
        </div>

        {/* TRUST CARDS */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 sm:gap-6 md:gap-8">

          {trustPoints.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-green-600" />
                </div>

                {/* TITLE */}
                <h3 className="text-md font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100">
            <ShieldCheck size={18} />
            We’re committed to building trust through accuracy, not assumptions
          </div>
        </div>

      </Wrapper>
    </Section>
  );
}