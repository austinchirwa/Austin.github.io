"use client";

import React, { useState } from "react";
import {
  Code,
  Database,
  ShieldCheck,
  Layers,
  Workflow,
  Sparkles,
  CheckCircle2,
  Compass,
  Briefcase,
  Users,
  Globe,
  ShoppingCart,
  TrendingUp,
  Landmark,
  Target,
  Award,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: "Certified" | "Advanced" | "Proficient";
  source: string;
  sourceType: "Cisco" | "Google" | "Microsoft" | "LinkedIn" | "UNIMA" | "Experience";
  description: string;
  tags: string[];
  featured?: boolean;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: SkillCategory[] = [
    {
      id: "cybersecurity",
      title: "Cybersecurity & Incident Defense",
      icon: ShieldCheck,
      skills: [
        {
          name: "Cybersecurity Incident Management",
          level: "Certified",
          source: "Cisco Networking Academy",
          sourceType: "Cisco",
          description:
            "Managing security incidents across IT infrastructure: triage, classification, containment procedures, and post-incident forensic reviews.",
          tags: ["Cisco Certified", "Incident Management", "Threat Containment", "Security Protocols"],
          featured: true,
        },
        {
          name: "Cybersecurity Incident Response",
          level: "Certified",
          source: "Cisco Networking Academy",
          sourceType: "Cisco",
          description:
            "Executing active incident response plans, identifying compromised systems, isolating attack surfaces, and restoring operational continuity.",
          tags: ["Incident Response", "Threat Mitigation", "System Recovery", "Cisco Defense"],
          featured: true,
        },
        {
          name: "Cybersecurity Law & Compliance",
          level: "Certified",
          source: "Cisco Networking Academy",
          sourceType: "Cisco",
          description:
            "Understanding regulatory frameworks, privacy legislation, data governance mandates, and organizational security policies.",
          tags: ["Security Law", "Data Privacy", "Compliance Standards", "Risk Governance"],
          featured: true,
        },
        {
          name: "Introduction to Cybersecurity",
          level: "Certified",
          source: "Cisco Networking Academy",
          sourceType: "Cisco",
          description:
            "Foundational cybersecurity credential validated by Cisco: online safety principles, attack vectors, threat analysis, and organizational risk mitigation.",
          tags: ["Cisco Verified", "Online Safety", "Threat Vectors", "Vulnerability Defense"],
          featured: true,
        },
        {
          name: "Cyber Threat Management",
          level: "Certified",
          source: "Cisco Networking Academy",
          sourceType: "Cisco",
          description:
            "Comprehensive credential covering threat modeling, vulnerability scanning, network traffic anomalies, and proactive defense architectures.",
          tags: ["Threat Intelligence", "Vulnerability Scanning", "Network Security", "UNIMA Partner"],
          featured: true,
        },
      ],
    },
    {
      id: "data-systems",
      title: "Data Engineering & Systems Analysis",
      icon: Database,
      skills: [
        {
          name: "Ingest Data with Dataflows Gen2 in Microsoft Fabric",
          level: "Certified",
          source: "Microsoft Fabric",
          sourceType: "Microsoft",
          description:
            "Building low-code ETL/ELT ingestion pipelines using Dataflows Gen2 in Microsoft Fabric to clean, transform, and load diverse datasets.",
          tags: ["Microsoft Fabric", "Dataflows Gen2", "ETL Pipelines", "Cloud Analytics"],
          featured: true,
        },
        {
          name: "Systems Analysis & Design",
          level: "Advanced",
          source: "University of Malawi (UNIMA)",
          sourceType: "UNIMA",
          description:
            "SDLC lifecycle management, functional requirements analysis, UML modeling (use cases, activity diagrams), and technical system specifications.",
          tags: ["SDLC", "UML", "Requirements Engineering", "System Scoping"],
          featured: true,
        },
        {
          name: "Database Management & SQL",
          level: "Advanced",
          source: "University of Malawi (UNIMA)",
          sourceType: "UNIMA",
          description:
            "Relational database design, normalization (1NF–3NF), SQL queries, table joins, indexing strategies, and database integrity constraints.",
          tags: ["Relational Schema", "SQL Queries", "Data Normalization", "ERD Modeling"],
          featured: true,
        },
        {
          name: "Business Process Analysis & Data Analysis",
          level: "Advanced",
          source: "UNIMA & Operations Manager",
          sourceType: "Experience",
          description:
            "Mapping business workflows (DFDs), assessing operational metrics, and analyzing performance data for strategic decision-making.",
          tags: ["Process Mapping", "Data Analysis", "KPI Tracking", "Workflow Optimization"],
        },
      ],
    },
    {
      id: "web-gis",
      title: "Web Design, GIS & Projects",
      icon: Globe,
      skills: [
        {
          name: "Web Design",
          level: "Advanced",
          source: "Applied Systems & Portfolio",
          sourceType: "Experience",
          description:
            "Designing modern, accessible, and responsive user interfaces with contemporary design systems, clean layouts, and mobile-friendly usability.",
          tags: ["UI/UX Design", "Responsive Layouts", "Modern CSS", "Accessibility"],
          featured: true,
        },
        {
          name: "GIS Web Application Development",
          level: "Advanced",
          source: "HealthLocator & EduMap Systems",
          sourceType: "Experience",
          description:
            "Engineering GIS-enabled spatial systems (HealthLocator WebApp & GIS EduMap System) combining interactive mapping and geographic databases.",
          tags: ["Web GIS", "Spatial Data", "Interactive Maps", "Geospatial Queries"],
          featured: true,
        },
        {
          name: "Project Management",
          level: "Advanced",
          source: "UNIMA & Restaurant Operations",
          sourceType: "Experience",
          description:
            "Coordinating cross-functional project teams, tracking deliverables, managing timelines, and executing structured project milestones.",
          tags: ["Project Scoping", "Milestone Tracking", "Team Coordination", "Resource Planning"],
          featured: true,
        },
        {
          name: "Basic Networking & Infrastructure",
          level: "Proficient",
          source: "University of Malawi (UNIMA)",
          sourceType: "UNIMA",
          description:
            "Foundational understanding of TCP/IP networking, IP addressing, routing fundamentals, switches, and network hardware configurations.",
          tags: ["TCP/IP", "Subnetting", "Network Architecture", "Hardware Config"],
        },
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & E-Commerce",
      icon: ShoppingCart,
      skills: [
        {
          name: "E-Commerce",
          level: "Certified",
          source: "Google • Foundations of Digital Marketing & E-commerce",
          sourceType: "Google",
          description:
            "Certified in foundational e-commerce store architecture, conversion funnels, catalog management, customer journey optimization, and online sales.",
          tags: ["Google Certified", "E-Commerce Storefronts", "Online Sales Funnels", "Customer Journey"],
          featured: true,
        },
        {
          name: "Digital Marketing & Digital Marketing Media",
          level: "Certified",
          source: "Google & Operations Manager at Graze Local",
          sourceType: "Google",
          description:
            "Strategic omnichannel digital campaigns, social media management, brand visibility, and content-driven promotional outreach.",
          tags: ["Digital Media", "Campaign Strategy", "Social Media Marketing", "Brand Positioning"],
          featured: true,
        },
        {
          name: "Small Business Marketing",
          level: "Certified",
          source: "LinkedIn Learning • Small Business Marketing",
          sourceType: "LinkedIn",
          description:
            "Targeted marketing strategies for local businesses: customer retention, local search presence, promotional merchandising, and word-of-mouth growth.",
          tags: ["Local Marketing", "Customer Retention", "LinkedIn Learning", "Promotions"],
        },
        {
          name: "Sales Management",
          level: "Advanced",
          source: "Operations Manager at Graze Local Restaurant",
          sourceType: "Experience",
          description:
            "Driving revenue, managing sales targets, supervising customer dining experiences, and optimizing service delivery to maximize turnover.",
          tags: ["Revenue Growth", "Sales Targets", "Hospitality Sales", "Customer Service"],
        },
      ],
    },
    {
      id: "business-management",
      title: "Business Management & Capital Raising",
      icon: Landmark,
      skills: [
        {
          name: "Small Business Management",
          level: "Advanced",
          source: "Operations Manager at Graze Local & Entrepreneurship Pathway",
          sourceType: "Experience",
          description:
            "Supervising daily operations, staff performance reviews, supply chains, stock audits, customer service, and commercial profitability.",
          tags: ["Operations Leadership", "Staff Management", "Inventory Control", "Procurement"],
          featured: true,
        },
        {
          name: "Business Planning",
          level: "Certified",
          source: "LinkedIn Learning • Creating a Business Plan",
          sourceType: "LinkedIn",
          description:
            "Drafting structured business plans, operational frameworks, risk assessment matrices, and strategic milestones for venture viability.",
          tags: ["Business Plan", "Strategic Feasibility", "Operating Model", "LinkedIn Learning"],
          featured: true,
        },
        {
          name: "Capital Raising",
          level: "Certified",
          source: "LinkedIn Learning • Foundations of Raising Capital",
          sourceType: "LinkedIn",
          description:
            "Structuring venture financing, capital requirements analysis, investor-ready pitch materials, and debt/equity acquisition strategies.",
          tags: ["Capital Acquisition", "Investor Pitch", "Venture Financing", "Valuation Basics"],
          featured: true,
        },
        {
          name: "Business Acumen & Entrepreneurship",
          level: "Certified",
          source: "LinkedIn Learning • Understanding Business",
          sourceType: "LinkedIn",
          description:
            "Holistic understanding of business fundamentals: organizational dynamics, market positioning, unit economics, and competitive advantage.",
          tags: ["Business Acumen", "Entrepreneurship", "Unit Economics", "Market Strategy"],
        },
      ],
    },
  ];

  const allSkills = categories.flatMap((c) => c.skills);
  const displayedSkills =
    activeCategory === "all"
      ? allSkills
      : categories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gray-400" />
            <span>Documented Skills Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-white">Verified Competencies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every skill below is backed by official credentials from Cisco Networking Academy, Google, Microsoft Fabric, LinkedIn Learning, University of Malawi coursework, and active operations leadership.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-white text-gray-950 shadow-sm"
                : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-white/5"
            }`}
          >
            All Verified Skills ({allSkills.length})
          </button>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-white text-gray-950 shadow-sm"
                    : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header: Name and Level badge */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="font-bold text-white text-base leading-snug">
                    {skill.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium shrink-0 bg-gray-800/90 text-gray-200 border border-white/10 flex items-center gap-1.5">
                    {skill.level === "Certified" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    )}
                    {skill.level}
                  </span>
                </div>

                {/* Source Credential Tag */}
                <div className="mb-3.5">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">
                    {skill.source}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
