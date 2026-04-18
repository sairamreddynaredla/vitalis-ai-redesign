import {
  Database,
  Lock,
  Server,
  Shield,
  Users,
  Eye,
} from "lucide-react";

import Section from "../components/ui/Section";
import Wrapper from "../components/ui/Wrapper";

const securityData = [
  {
    title: "Data Encryption",
    icon: Lock,
    desc: "AES-256 encryption, TLS 1.3 secure transfer and encrypted backups.",
  },
  {
    title: "Compliance Monitoring",
    icon: Shield,
    desc: "Automated checks, third-party audits and risk management protocols.",
  },
  {
    title: "Access Control",
    icon: Users,
    desc: "Multi-factor authentication, role-based access and audit logs.",
  },
  {
    title: "Data Governance",
    icon: Database,
    desc: "GDPR compliance, retention policies and data portability.",
  },
  {
    title: "Infrastructure Security",
    icon: Server,
    desc: "Secure cloud hosting with continuous monitoring and threat detection.",
  },
  {
    title: "Transparency & Control",
    icon: Eye,
    desc: "You stay in control of your data with clear visibility and privacy-first design.",
  },
];

export default function SecuritySection() {
  return (
    <Section bg="transparent">
      <Wrapper>

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 text-xs rounded-full bg-green-500/10 text-green-600 mb-4 font-semibold tracking-wider">
            SECURITY & PRIVACY
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Your data is protected with
            <br />
            enterprise-grade security
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Vitalis AI ensures your health data stays private, encrypted,
            and protected with strong security practices and modern standards.
          </p>
        </div>

        {/* CARD SECTION */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-green-800/5 to-transparent"></div>

          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 p-6 md:p-10">

            {securityData.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white/80 backdrop-blur border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-green-600" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* HOVER TEXT */}
                  <div className="mt-4 text-green-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                    Learn More →
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </Wrapper>
    </Section>
  );
}