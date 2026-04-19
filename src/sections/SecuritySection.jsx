import React from "react";
import {
  Lock,
  ShieldCheck,
  UserCheck,
  Database,
  Server,
  Users,
  CheckCircle,
} from "lucide-react";

const securityData = [
  {
    icon: Lock,
    tag: "DATA ENCRYPTION",
    color: "bg-blue-100 text-blue-700",
    title: "Data Encryption",
    desc: "All patient data is encrypted using AES-256 encryption both in transit and at rest.",
    points: [
      "AES-256 encryption",
      "TLS 1.3 for data in transit",
      "Zero-knowledge architecture",
      "Encrypted backups",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "COMPLIANCE & MONITORING",
    color: "bg-purple-100 text-purple-700",
    title: "Compliance Monitoring",
    desc: "Continuous compliance monitoring ensures we meet healthcare security standards.",
    points: [
      "Automated compliance checks",
      "Third-party audits",
      "Vulnerability assessments",
      "Risk management protocols",
    ],
  },
  {
    icon: UserCheck,
    tag: "ACCESS CONTROL",
    color: "bg-orange-100 text-orange-700",
    title: "Access Control",
    desc: "Only authorized users can access sensitive data with strict control systems.",
    points: [
      "Multi-factor authentication",
      "Role-based access control",
      "Session management",
      "Audit logging",
    ],
  },
  {
    icon: Database,
    tag: "DATA GOVERNANCE",
    color: "bg-green-100 text-green-700",
    title: "Data Governance",
    desc: "Policies ensure data privacy and regulatory compliance.",
    points: [
      "General Data Protection Regulation",
      "Retention policies",
      "Right to deletion",
      "Data portability",
    ],
  },
  {
    icon: Server,
    tag: "INFRASTRUCTURE SECURITY",
    color: "bg-indigo-100 text-indigo-700",
    title: "Infrastructure Security",
    desc: "Secure cloud infrastructure with continuous monitoring.",
    points: [
      "SOC 2 certified hosting",
      "24/7 security monitoring",
      "Intrusion detection",
      "Regular penetration testing",
    ],
  },
  {
    icon: Users,
    tag: "STAFF TRAINING",
    color: "bg-red-100 text-red-700",
    title: "Staff Training",
    desc: "Our team undergoes regular security training and background checks.",
    points: [
      "HIPAA training certification",
      "Security awareness programs",
      "Background checks",
      "Incident response training",
    ],
  },
];

export default function Security() {
  return (
    <section className="w-full py-20 bg-[#f4f7fb]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-16">

        {/* ✅ FIXED BADGE (LIKE FAQ) */}
        <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 
        bg-green-100 text-green-700">
          SECURITY FIRST
        </span>

        {/* ✅ FIXED HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Enterprise-Grade Security at{" "}
          <span className="text-gray-900">Every Layer</span>
        </h2>

        <p className="text-gray-500 text-sm mt-3">
          Vitalis AI is a fully managed, standardized, and externally audited platform
          built with healthcare-grade security at its core.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        {securityData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* Tag */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${item.color}`}
              >
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-2 mb-5">
                {item.desc}
              </p>

              {/* Points */}
              <div className="space-y-3">
                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-4 py-2"
                  >
                    <span className="text-sm text-gray-700">{point}</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}