"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowUpRight,
  CheckCircle2,
  X,
  Cpu,
  Shield,
  Activity,
  Compass,
  FileSpreadsheet,
  Briefcase,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "GIS & Web Systems" | "Academic Systems" | "Operations & Inventory" | "Business & Strategy";
  icon: React.ElementType;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  inquirySubject: string;
  featured?: boolean;
  architectureDetails: {
    overview: string;
    keyChallenges: string[];
    technicalHighlights: string[];
    stackBreakdown: { frontend: string; backend: string; database: string; methodology: string };
  };
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "healthlocator",
      title: "HealthLocator WebApp",
      subtitle: "GIS-Enabled Healthcare Facility Discovery & Spatial Directory",
      category: "GIS & Web Systems",
      icon: Compass,
      description:
        "Developed a GIS-enabled web application dedicated to locating healthcare facilities and accessing medical information. Features geospatial queries, proximity identification, service directories, and responsive mapping to improve community healthcare accessibility.",
      technologies: [
        "Web GIS",
        "Spatial Mapping",
        "Systems Analysis & Design",
        "Database Management",
        "Healthcare Directory",
        "Responsive UI",
      ],
      metrics: [
        { label: "Application Type", value: "Web GIS" },
        { label: "Focus Domain", value: "Health Navigation" },
        { label: "Mapping Core", value: "Spatial Queries" },
      ],
      inquirySubject: "HealthLocator WebApp Inquiry",
      featured: true,
      architectureDetails: {
        overview:
          "HealthLocator WebApp was developed to address the critical challenge of locating nearby healthcare facilities and medical services. The system structures health facility spatial coordinates, specialized service offerings, emergency contact channels, and operating hours into a unified searchable database.",
        keyChallenges: [
          "Designing an optimized spatial schema for rapid facility proximity searches and category filtering.",
          "Ensuring a high-usability, mobile-friendly interface for citizens accessing critical emergency data on varied network speeds.",
          "Categorizing varied levels of healthcare institutions (clinics, district hospitals, referral centers) with distinct attribute sets.",
        ],
        technicalHighlights: [
          "Geospatial coordinate mapping with interactive location markers and detail popups.",
          "Categorical query engine allowing filtering by medical department, emergency status, and facility level.",
          "Systems analysis and design documentation adhering to formal SDLC principles.",
        ],
        stackBreakdown: {
          frontend: "Modern Web Interface, Responsive Layout, Geospatial Visuals",
          backend: "Spatial Search Engine, Query Handlers, REST Endpoints",
          database: "Relational Healthcare Schema & Spatial Location Tables",
          methodology: "Systems Analysis & Design (SDLC), User-Centric Design",
        },
      },
    },
    {
      id: "edumap-gis",
      title: "GIS EduMap System",
      subtitle: "Educational Mapping & Institutional Asset Distribution Platform",
      category: "Academic Systems",
      icon: Layers,
      description:
        "Designed and developed a GIS-based educational mapping system as part of a collaborative University of Malawi (UNIMA) team project. Enables spatial visualization of educational institutions, resource distribution analysis, and regional schooling accessibility metrics.",
      technologies: [
        "GIS Spatial Analysis",
        "Systems Analysis & Design",
        "Database Management",
        "Data Flow Modeling",
        "Team Collaboration",
      ],
      metrics: [
        { label: "Project Type", value: "UNIMA Team Project" },
        { label: "Academic Partner", value: "Univ. of Malawi" },
        { label: "Scope", value: "Educational GIS" },
      ],
      inquirySubject: "GIS EduMap System Discussion",
      featured: true,
      architectureDetails: {
        overview:
          "Conceived and executed within the University of Malawi Information Systems curriculum, the GIS EduMap System provides educational planners and stakeholders with a spatial perspective of educational infrastructure. Maps school density, teacher-pupil allocations, and institutional access corridors.",
        keyChallenges: [
          "Consolidating fragmented institutional datasets across multiple regional districts into a normalized relational database.",
          "Representing multi-layered geographic indicators clearly for non-technical academic stakeholders.",
          "Collaborating across university team roles to deliver comprehensive requirements specifications, UML diagrams, and software artifacts.",
        ],
        technicalHighlights: [
          "Structured Entity-Relationship Diagrams (ERDs) and Data Flow Diagrams (DFDs) documenting the entire institutional data lifecycle.",
          "Thematic mapping showing educational resource density across target districts.",
          "Successful team presentation and defense of the system architecture to University of Malawi department examiners.",
        ],
        stackBreakdown: {
          frontend: "Interactive Educational Map Views, School Profile Sheets",
          backend: "Geospatial Data Processing, Analytical Aggregation Logic",
          database: "Normalized Institutional Education Database",
          methodology: "Agile Team Sprints, Requirements Engineering, UML Modeling",
        },
      },
    },
    {
      id: "graze-operations",
      title: "Graze Restaurant Operations & Inventory",
      subtitle: "Operations Management, Stock Control & Business Reporting (Mzuzu)",
      category: "Operations & Inventory",
      icon: Briefcase,
      description:
        "Comprehensive operational leadership and business systems management at Graze Local Restaurant in Mzuzu. Overseeing daily restaurant operations, staff coordination and scheduling, inventory stock control, supplier relationships, and business performance analytics.",
      technologies: [
        "Operations Management",
        "Stock & Inventory Control",
        "Business Process Analysis",
        "Performance Reporting",
        "Supplier Procurement",
      ],
      metrics: [
        { label: "Role", value: "Operations Manager" },
        { label: "Location", value: "Mzuzu, Malawi" },
        { label: "Domain", value: "Hospitality Ops" },
      ],
      inquirySubject: "Graze Operations Management",
      featured: false,
      architectureDetails: {
        overview:
          "Serving as Operations Manager at Graze Local Restaurant since November 2025, Austin Mubaya applies Information Systems principles to commercial hospitality workflows. Streamlined inventory procurement, daily reconciliation, staff productivity, and dining satisfaction.",
        keyChallenges: [
          "Minimizing perishable inventory waste and stock discrepancy through disciplined audit routines.",
          "Balancing employee schedules and station assignments to match peak dining demand with operational efficiency.",
          "Transforming raw transaction data into actionable managerial insights for business growth.",
        ],
        technicalHighlights: [
          "Implemented strict stock control logs and supplier re-order trigger thresholds.",
          "Standardized operating procedures (SOPs) ensuring high food quality and customer satisfaction.",
          "Authored recurring business performance and revenue audit reports.",
        ],
        stackBreakdown: {
          frontend: "Managerial Dashboards, Inventory Audit Ledgers",
          backend: "Operational Workflows, Procurement Protocols",
          database: "Stock Master Lists, Supplier Contracts, Daily Sales Logs",
          methodology: "Business Process Optimization, Continuous Operational Improvement",
        },
      },
    },
    {
      id: "business-plan-venture",
      title: "Venture Creation & Capital Acquisition",
      subtitle: "Comprehensive Business Plan & Financial Modeling Pathway",
      category: "Business & Strategy",
      icon: FileSpreadsheet,
      description:
        "Formulated an investor-ready business model and capital acquisition strategy as part of the Entrepreneurship Learning Pathway (completed May 2025). Covered market feasibility, operational cost structures, cash flow projections, and pitch presentation.",
      technologies: [
        "Business Model Canvas",
        "Financial Forecasting",
        "Capital Acquisition",
        "Market Feasibility",
        "Strategic Planning",
      ],
      metrics: [
        { label: "Track", value: "Entrepreneurship" },
        { label: "Completed", value: "May 2025" },
        { label: "Output", value: "Commercial Model" },
      ],
      inquirySubject: "Business Strategy & Planning Discussion",
      featured: false,
      architectureDetails: {
        overview:
          "Completed in May 2025, this curriculum developed end-to-end competencies in transitioning technological concepts into commercially viable ventures. Rigorous examination of capital requirements, return on investment (ROI), and competitive positioning.",
        keyChallenges: [
          "Building conservative, multi-year revenue projections and break-even calculations.",
          "Conducting granular market segmentation to prove unmet customer demand.",
          "Crafting an investor pitch articulating technical defensibility and operational sustainability.",
        ],
        technicalHighlights: [
          "Pro-forma financial statements including revenue forecasts, OPEX, and cash flow schedules.",
          "Strategic risk matrix outlining mitigation plans for regulatory, operational, and financial risks.",
          "Executive presentation deck structured for angel investors and commercial lenders.",
        ],
        stackBreakdown: {
          frontend: "Executive Summaries, Financial Spreadsheets, Pitch Decks",
          backend: "Unit Economic Models, Valuation Formulas",
          database: "Market Research Data, Industry Benchmarks",
          methodology: "Lean Startup Framework, Venture Capital Readiness",
        },
      },
    },
  ];

  const filters = ["All", "GIS & Web Systems", "Academic Systems", "Operations & Inventory", "Business & Strategy"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Documented Portfolio & Applied Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-white">Projects & Systems</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-3 max-w-2xl">
              Real-world academic systems, GIS web applications, and operational management workflows authored by Austin Mubaya.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-white text-gray-950 shadow-md"
                    : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Clean, simplified cards without image preview headers) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel glass-panel-hover border border-white/10 p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Card Header: Icon, Category Badge & LinkedIn Quick Link */}
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-gray-900 text-gray-300 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/austin-mubaya-11908029b"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white border border-white/10 transition-colors"
                      title="Connect on LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-gray-950/70 border border-white/5 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-sm sm:text-base font-bold text-white font-mono">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase font-mono text-gray-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-gray-300 transition-colors font-mono"
                  >
                    <span>View System Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    Inquire About System →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* System Specifications Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gray-950 border border-white/10 shadow-2xl p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-400 font-mono mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <h4 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-gray-400" />
                  <span>System Architecture & Overview</span>
                </h4>
                <p className="leading-relaxed bg-gray-900/60 p-4 rounded-2xl border border-white/5">
                  {selectedProject.architectureDetails.overview}
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Key Analytical & Engineering Challenges Solved</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architectureDetails.keyChallenges.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-900/40 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Methodology & Layer Breakdown</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-gray-900/60 border border-white/5">
                    <span className="text-xs font-mono text-cyan-400 block mb-1">Presentation & UI</span>
                    <span className="text-white font-medium text-xs">
                      {selectedProject.architectureDetails.stackBreakdown.frontend}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-900/60 border border-white/5">
                    <span className="text-xs font-mono text-gray-400 block mb-1">Processing Logic</span>
                    <span className="text-white font-medium text-xs">
                      {selectedProject.architectureDetails.stackBreakdown.backend}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-900/60 border border-white/5">
                    <span className="text-xs font-mono text-emerald-400 block mb-1">Database & Data Layer</span>
                    <span className="text-white font-medium text-xs">
                      {selectedProject.architectureDetails.stackBreakdown.database}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-900/60 border border-white/5">
                    <span className="text-xs font-mono text-purple-400 block mb-1">Methodology & Standards</span>
                    <span className="text-white font-medium text-xs">
                      {selectedProject.architectureDetails.stackBreakdown.methodology}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-medium text-xs shadow-md transition-all"
                >
                  <span>Discuss Project with Austin</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/austin-mubaya-11908029b"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-white/10 text-xs font-mono transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
