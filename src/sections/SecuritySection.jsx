import {
  Database,
  Lock,
  Server,
  Shield,
  Users,
} from "lucide-react";

import Section from "../components/ui/Section";
import Wrapper from "../components/ui/Wrapper";

const securityData = [
  {
    title: "Data Encryption",
    icon: Lock,
    items: [
      "AES-256 encryption",
      "TLS 1.3 secure transfer",
      "Zero-knowledge architecture",
      "Encrypted backups",
    ],
    color: "#3B82F6",
  },
  {
    title: "Compliance Monitoring",
    icon: Shield,
    items: [
      "Automated compliance checks",
      "Third-party audits",
      "Vulnerability assessments",
      "Risk management protocols",
    ],
    color: "#8B5CF6",
  },
  {
    title: "Access Control",
    icon: Users,
    items: [
      "Multi-factor authentication",
      "Role-based access control",
      "Session management",
      "Audit logging",
    ],
    color: "#34D399",
  },
  {
    title: "Data Governance",
    icon: Database,
    items: [
      "General Data Protection Regulation",
      "Retention policies",
      "Right to deletion",
      "Data portability",
    ],
    color: "#F59E0B",
  },
  {
    title: "Infrastructure Security",
    icon: Server,
    items: [
      "SOC 2 certified hosting",
      "24/7 security monitoring",
      "Intrusion detection",
      "Regular penetration testing",
    ],
    color: "#EC4899",
  },
  {
    title: "Staff Training",
    icon: Shield,
    items: [
      "HIPAA training certification",
      "Security awareness programs",
      "Background checks",
      "Incident response training",
    ],
    color: "#F43F5E",
  },
];

export default function SecuritySection() {
  return (
    <Section bg="transparent">
      <Wrapper>

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 text-xs rounded-full bg-blue-500/10 text-blue-500 mb-4 font-semibold tracking-wider">
            SECURITY FIRST
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
            Healthcare-grade AI security,
            <br />
            <span className="grad-text">built for patient trust.</span>
          </h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Enterprise-level encryption, monitoring, and compliance standards
            designed specifically for healthcare systems.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* LEFT CARD */}
          <div className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-4">
              Security is not a feature.
              <br />
              It’s the foundation of trust.
            </h3>

            <p className="text-[var(--muted)] leading-relaxed mb-6">
              Vitalis AI is engineered to protect sensitive healthcare data
              with strict encryption, access control, and real-time monitoring.
            </p>

            <div className="space-y-2 text-[var(--muted)]">
              <p>✔ End-to-end encryption</p>
              <p>✔ Role-based access</p>
              <p>✔ Continuous monitoring</p>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-5">
            {securityData.slice(0, 3).map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <Icon size={20} color={item.color} />
                    </div>

                    <h4 className="font-semibold text-sm">
                      {item.title}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {item.items.map((text, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-xs text-[var(--muted)]"
                      >
                        <span>{text}</span>
                        <span className="text-green-500">✔</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityData.slice(3).map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={22} color={item.color} />
                </div>

                <h4 className="font-semibold mb-3">
                  {item.title}
                </h4>

                <div className="space-y-2">
                  {item.items.map((text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-xs text-[var(--muted)]"
                    >
                      <span>{text}</span>
                      <span className="text-green-500">✔</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </Wrapper>
    </Section>
  );
}