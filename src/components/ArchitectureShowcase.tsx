"use client";

import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Building2,
  Copy,
  Check,
  Sparkles,
  Globe,
  Database,
  ShoppingCart,
  Landmark,
  TrendingUp,
  FileCheck,
  Eye,
  X,
} from "lucide-react";

interface CertificateImage {
  title: string;
  src: string;
  desc?: string;
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: "Cybersecurity" | "Cloud & Data" | "Digital Marketing & E-Commerce" | "Business & Finance" | "Academic & Affiliation";
  timeline: string;
  badge: string;
  accentColor: string;
  borderHover: string;
  skillsValidated: string[];
  verificationUrl?: string;
  verificationId?: string;
  verificationLabel?: string;
  certificateImages?: CertificateImage[];
}

export default function ArchitectureShowcase() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [modalCert, setModalCert] = useState<CertificateItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const certificates: CertificateItem[] = [
    {
      id: "ictam",
      title: "Certificate of Membership (Student Member)",
      issuer: "ICT Association of Malawi (ICTAM)",
      category: "Academic & Affiliation",
      timeline: "Valid until 31st December 2026",
      badge: "Official Member #IM-2026-2796",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Advancing excellence, innovation & ethics in Malawi's ICT sector",
        "Active member engaging with industry professionals and tech trends",
        "Verified on ICTAM national certification registry",
      ],
      verificationUrl: "https://mis.ictam.org.mw/certificates/1252",
      verificationId: "IM-2026-2796",
      verificationLabel: "Verify on mis.ictam.org.mw",
    },
    {
      id: "cisco-cyber-intro",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      category: "Cybersecurity",
      timeline: "Completed 03 Apr 2026",
      badge: "Cisco Verified",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Online Safety Foundations & Potential Cyber Impact Analysis",
        "Common Cyber Threats, Attack Vectors & Vulnerability Identification",
        "Enterprise Operational Protection & Risk Defense Strategies",
        "Cybersecurity Career Options, Ethical Standards & Best Practices",
      ],
      verificationUrl: "/images/cisco-intro-cybersecurity.jpg",
      verificationLabel: "View Cisco Certificate",
      certificateImages: [
        {
          title: "Certificate of Completion",
          src: "/images/cisco-intro-cybersecurity.jpg",
          desc: "Awarded to Austin Mubaya on 03 Apr 2026 by Cisco Networking Academy Director Lynn Bloomer.",
        },
        {
          title: "Course Completion & Verified Credential",
          src: "/images/cisco-intro-cybersecurity-completion.jpg",
          desc: "Student level credential validating proficiency in online safety, threat vectors, vulnerabilities, and enterprise protection.",
        },
      ],
    },
    {
      id: "cisco-cyber",
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy • University of Malawi",
      category: "Cybersecurity",
      timeline: "Completed April 2026",
      badge: "Cisco Certified",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Cybersecurity Incident Management & Triage",
        "Cybersecurity Incident Response & Containment",
        "Cybersecurity Law & Compliance Standards",
        "Network Defense & Threat Vulnerability Assessment",
      ],
    },
    {
      id: "google-ecommerce",
      title: "Foundations of Digital Marketing & E-commerce",
      issuer: "Google",
      category: "Digital Marketing & E-Commerce",
      timeline: "Certified Credential",
      badge: "Google Certified",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "E-Commerce Storefront Architecture & Online Sales",
        "Digital Marketing Media & Customer Acquisition",
        "Conversion Funnels & Customer Journey Mapping",
        "Brand Visibility & Digital Outreach Strategy",
      ],
    },
    {
      id: "ms-fabric",
      title: "Ingest Data with Dataflows Gen2 in Microsoft Fabric",
      issuer: "Microsoft Fabric",
      category: "Cloud & Data",
      timeline: "Certified Credential",
      badge: "Microsoft Certified",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Data Ingestion with Dataflows Gen2 in Microsoft Fabric",
        "Low-Code ETL/ELT Pipeline Automation",
        "Cloud Data Transformation & Schema Normalization",
        "Enterprise Analytics & Data Lakehouse Integration",
      ],
    },
    {
      id: "unima-degree",
      title: "BSc in Information Systems",
      issuer: "University of Malawi (UNIMA)",
      category: "Academic & Affiliation",
      timeline: "Expected August 2026",
      badge: "Final GPA: 3.11 / 4.00",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Systems Analysis & Design (SDLC, UML, DFDs)",
        "Database Management & Relational SQL Architecture",
        "Business Information Systems & Data Analytics",
        "Member, Computing Society – University of Malawi",
      ],
    },
    {
      id: "linkedin-capital",
      title: "Foundations of Raising Capital",
      issuer: "LinkedIn Learning",
      category: "Business & Finance",
      timeline: "Completed Pathway",
      badge: "Venture Finance",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Capital Raising Strategies & Investor Readiness",
        "Venture Financing & Capital Requirements Analysis",
        "Valuation Basics & Pitch Preparation",
        "Financial Cash Flow Projections",
      ],
    },
    {
      id: "linkedin-business-plan",
      title: "Creating a Business Plan",
      issuer: "LinkedIn Learning",
      category: "Business & Finance",
      timeline: "Completed Pathway",
      badge: "Strategic Planning",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Comprehensive Business Plan Formulation",
        "Market Feasibility & Competitive Advantage",
        "Operational Milestones & Cost Structures",
        "Business Acumen & Strategic Positioning",
      ],
    },
    {
      id: "linkedin-marketing",
      title: "Small Business Marketing (2020)",
      issuer: "LinkedIn Learning",
      category: "Digital Marketing & E-Commerce",
      timeline: "Completed Pathway",
      badge: "Commercial Marketing",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Local Business Promotion & Search Presence",
        "Customer Retention & Loyalty Programs",
        "Merchandising & Sales Optimization",
        "Social Media Campaign Planning",
      ],
    },
    {
      id: "linkedin-understanding-business",
      title: "Understanding Business",
      issuer: "LinkedIn Learning",
      category: "Business & Finance",
      timeline: "Completed Pathway",
      badge: "Business Acumen",
      accentColor: "text-gray-300 bg-white/5 border-white/10",
      borderHover: "hover:border-white/20",
      skillsValidated: [
        "Organizational Dynamics & Operations",
        "Unit Economics & Financial Statements",
        "Strategic Decision-Making Frameworks",
        "Commercial Sustainability",
      ],
    },
  ];

  const filters = [
    "All",
    "Cybersecurity",
    "Cloud & Data",
    "Digital Marketing & E-Commerce",
    "Business & Finance",
    "Academic & Affiliation",
  ];

  const filteredCerts =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="credentials"
      className="py-24 relative overflow-hidden bg-gray-950/60 border-t border-b border-white/5"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            <span>Documented Qualifications & Verified Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Qualifications & <span className="text-white">Certifications</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every credential below is verified from official academic records, the ICT Association of Malawi (ICTAM), Cisco Networking Academy, Google, Microsoft Fabric, and LinkedIn Learning.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === filter
                  ? "bg-white text-gray-950 shadow-md"
                  : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-white/5"
              }`}
            >
              {filter === "All" ? `All Credentials (${certificates.length})` : filter}
            </button>
          ))}
        </div>

        {/* Certifications Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between transition-all duration-300 ${cert.borderHover}`}
            >
              <div>
                {/* Top Row: Issuer & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider truncate">
                    {cert.issuer}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border shrink-0 ${cert.accentColor}`}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Timeline / Validity */}
                <div className="text-xs font-mono text-gray-400 mb-5 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>{cert.timeline}</span>
                </div>

                {/* Documented Skills Validated */}
                <div className="space-y-2 mb-6">
                  {cert.skillsValidated.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Verification Link or ID */}
              <div className="pt-4 border-t border-white/5">
                {cert.verificationUrl ? (
                  <div className="space-y-2.5">
                    {cert.verificationId && (
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-950/80 border border-white/10 text-xs font-mono">
                        <span className="text-gray-400 text-[11px]">Member ID:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold">{cert.verificationId}</span>
                          <button
                            onClick={() => handleCopy(cert.verificationId!)}
                            className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            title="Copy ID"
                          >
                            {copiedId === cert.verificationId ? (
                              <Check className="w-3.5 h-3.5 text-gray-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                    {cert.certificateImages && cert.certificateImages.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          setModalCert(cert);
                          setActiveImageIdx(0);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-semibold text-xs font-mono shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{cert.verificationLabel || "View Certificate"}</span>
                      </button>
                    ) : (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-semibold text-xs font-mono shadow-md transition-all active:scale-95"
                      >
                        <span>{cert.verificationLabel || "Verify Credential"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Verified Credential</span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Documented</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {modalCert && modalCert.certificateImages && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setModalCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-gray-950 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    {modalCert.issuer}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">
                    {modalCert.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {modalCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalCert(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Tabs */}
            {modalCert.certificateImages.length > 1 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {modalCert.certificateImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIdx(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeImageIdx === idx
                        ? "bg-white text-gray-950 font-bold shadow"
                        : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                    }`}
                  >
                    {img.title}
                  </button>
                ))}
              </div>
            )}

            {/* Certificate Display */}
            <div className="relative flex-1 min-h-[260px] sm:min-h-[400px] my-4 rounded-2xl overflow-auto bg-gray-900/90 border border-white/10 flex items-center justify-center p-3 sm:p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalCert.certificateImages[activeImageIdx]?.src}
                alt={modalCert.certificateImages[activeImageIdx]?.title || modalCert.title}
                className="max-h-[58vh] w-auto max-w-full object-contain rounded-xl shadow-xl"
              />
            </div>

            {/* Footer with Description & Direct Link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs font-mono">
              <p className="text-gray-400 text-[11px] text-center sm:text-left">
                {modalCert.certificateImages[activeImageIdx]?.desc}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={modalCert.certificateImages[activeImageIdx]?.src}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
                >
                  <span>Open Full Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setModalCert(null)}
                  className="px-4 py-2 rounded-xl bg-white text-gray-950 font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
