"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMatrix from "@/components/SkillsMatrix";
import FeaturedProjects from "@/components/FeaturedProjects";
import ArchitectureShowcase from "@/components/ArchitectureShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export type PageId = "about" | "credentials" | "projects" | "skills" | "experience" | "contact";

export default function Home() {
  const [activePage, setActivePage] = useState<PageId>("about");

  return (
    <div className="relative h-screen overflow-hidden bg-[#030712] text-gray-100 selection:bg-white/10 selection:text-white flex flex-col">
      {/* Subtle ambient background lighting — fixed so it persists across pages */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-slate-800/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-slate-800/10 rounded-full blur-[160px]" />
      </div>

      {/* Navigation — drives active page */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Page View — only the active section is rendered, full height minus navbar */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        {activePage === "about" && (
          <div key="about" className="animate-page-in">
            <Hero onNavigate={setActivePage} />
          </div>
        )}
        {activePage === "credentials" && (
          <div key="credentials" className="animate-page-in">
            <ArchitectureShowcase />
          </div>
        )}
        {activePage === "projects" && (
          <div key="projects" className="animate-page-in">
            <FeaturedProjects />
          </div>
        )}
        {activePage === "skills" && (
          <div key="skills" className="animate-page-in">
            <SkillsMatrix />
          </div>
        )}
        {activePage === "experience" && (
          <div key="experience" className="animate-page-in">
            <ExperienceTimeline />
          </div>
        )}
        {activePage === "contact" && (
          <div key="contact" className="animate-page-in">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer — shown on every page */}
      <Footer />
    </div>
  );
}
