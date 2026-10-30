"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, GraduationCap, Award, ShieldCheck, ExternalLink } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Management" | "Education" | "Certification" | "Affiliation" | "Training";
  summary: string;
  achievements: string[];
  skills: string[];
  icon: React.ElementType;
  credentialUrl?: string;
  credentialLabel?: string;
}

export default function ExperienceTimeline() {
  const timelineItems: ExperienceItem[] = [
    {
      period: "Nov 2025 — Present",
      role: "Manager",
      organization: "Graze Local Restaurant",
      location: "Mzuzu, Malawi",
      type: "Management",
      icon: Briefcase,
      summary:
        "Directing end-to-end commercial operations, staff coordination, and supply chain logistics for a busy local restaurant in Mzuzu.",
      achievements: [
        "Oversee daily restaurant operations and staff coordination across front-of-house and kitchen teams.",
        "Manage employee schedules, productivity performance reviews, and operational efficiency standards.",
        "Handle inventory control, stock management, procurement orders, and supplier relationship negotiations.",
        "Maintain high standards of customer service, guest hospitality, and dining satisfaction.",
        "Prepare recurring business performance and sales reports to drive continuous commercial growth.",
      ],
      skills: ["Operations Leadership", "Inventory Control", "Stock Management", "Supplier Relations", "Performance Reporting"],
    },
    {
      period: "Expected Aug 2026",
      role: "BSc in Information Systems",
      organization: "University of Malawi (UNIMA)",
      location: "Zomba / Malawi",
      type: "Education",
      icon: GraduationCap,
      summary:
        "Completed rigorous curriculum in computer systems, database design, software engineering, and business analytics with a cumulative GPA of 3.11 / 4.00.",
      achievements: [
        "Graduating with cumulative GPA of 3.11 / 4.00 in Bachelor of Science in Information Systems.",
        "Mastered Systems Analysis & Design, Database Management, Business Information Systems, Software Development, and Networking.",
        "Co-developed the GIS EduMap System as part of a collaborative academic group project.",
        "Active member of the University of Malawi Computing Society.",
      ],
      skills: ["Systems Analysis", "Database Design", "Business Analytics", "Software Engineering", "Project Management"],
    },
    {
      period: "03 Apr 2026",
      role: "Introduction to Cybersecurity Certification",
      organization: "Cisco Networking Academy",
      location: "Verified Credential",
      type: "Certification",
      icon: ShieldCheck,
      summary:
        "Earned verified student-level credential from Cisco Networking Academy validating essential competencies in online safety, threat vectors, system vulnerabilities, and organizational defense.",
      achievements: [
        "Officially awarded by Cisco Networking Academy under Director Lynn Bloomer (Completion Date: 03 Apr 2026).",
        "Proficiently demonstrated mastery of online safety fundamentals and the impact of cybersecurity in enterprise environments.",
        "Identified common cyber threat vectors, attack mechanisms, and system vulnerabilities.",
        "Formulated defensive strategies to safeguard personal digital privacy and organizational operational continuity.",
        "Explored cybersecurity industry frameworks, continuous learning pathways, and ethical standards.",
      ],
      skills: ["Cybersecurity Fundamentals", "Threat & Attack Identification", "Vulnerability Defense", "Online Safety Protocols", "Risk Protection"],
      credentialUrl: "/images/cisco-intro-cybersecurity.jpg",
      credentialLabel: "View Verified Cisco Certificate",
    },
    {
      period: "Completed April 2026",
      role: "Cyber Threat Management Certification",
      organization: "Cisco Networking Academy • UNIMA",
      location: "Malawi",
      type: "Certification",
      icon: ShieldCheck,
      summary:
        "Earned formal technical certification in enterprise cybersecurity principles and network defense methodologies.",
      achievements: [
        "Mastered threat identification, threat modeling, and vulnerability classification.",
        "Trained in cyber risk management frameworks and IT infrastructure defense.",
        "Studied packet inspection, network defense architectures, and incident containment best practices.",
      ],
      skills: ["Cyber Threat Management", "Network Security", "Vulnerability Assessment", "Risk Mitigation"],
    },
    {
      period: "Valid Until Dec 2026",
      role: "Student Member (IM-2026-2796)",
      organization: "ICT Association of Malawi (ICTAM)",
      location: "National Body / Malawi",
      type: "Affiliation",
      icon: Award,
      summary:
        "Official student membership in the primary professional ICT body in Malawi, advancing excellence and staying current with industry innovations.",
      achievements: [
        "Recognized with Student Membership ID IM-2026-2796 (verifiable at mis.ictam.org.mw/certificates/1252).",
        "Engaging with industry professionals, technology forums, and national digital transformation policies.",
        "Adhering to professional codes of ethics and continuous professional development.",
      ],
      skills: ["ICT Industry Standards", "Professional Networking", "Digital Transformation", "Ethics in Tech"],
    },
    {
      period: "Completed May 2025",
      role: "Entrepreneurship Learning Pathway & Business Planning",
      organization: "Entrepreneurship Training Initiative",
      location: "Malawi",
      type: "Training",
      icon: Briefcase,
      summary:
        "Specialized training in venture creation, strategic planning, capital acquisition models, and investor readiness.",
      achievements: [
        "Formulated comprehensive business plan, market feasibility analysis, and financial cash flow models.",
        "Gained practical competencies in venture creation and strategic capital acquisition.",
      ],
      skills: ["Business Planning", "Capital Acquisition", "Financial Planning", "Strategic Thinking"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5" />
            <span>Documented Career & Academic Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience & <span className="text-white">Milestones</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Verified timeline detailing managerial leadership at Graze Local Restaurant, academic achievements at the University of Malawi, and professional certifications.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Node Dot / Icon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gray-950 border-2 border-white/20 flex items-center justify-center text-gray-300 shadow-md group-hover:scale-110 group-hover:border-white/40 transition-transform">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Period Badge for Desktop (Floating left) */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className="text-xs font-mono font-bold text-gray-400 block">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                    {item.type}
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10">
                  {/* Mobile Period Badge */}
                  <div className="md:hidden flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-gray-300 font-bold">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-gray-300 font-mono mb-4">
                    {item.organization}
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Documented Achievements */}
                  <div className="space-y-2 mb-6">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Optional Verified Credential Action */}
                  {item.credentialUrl && (
                    <div className="mb-6">
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 text-xs font-mono transition-colors group/btn"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.credentialLabel || "View Certificate"}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover/btn:text-white" />
                      </a>
                    </div>
                  )}

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
