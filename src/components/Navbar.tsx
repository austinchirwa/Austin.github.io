"use client";

import React, { useState } from "react";
import { Menu, X, Code2, Mail } from "lucide-react";
import type { PageId } from "@/app/page";

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { name: string; id: PageId }[] = [
    { name: "About", id: "about" },
    { name: "Education & Certs", id: "credentials" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-gray-950/85 backdrop-blur-xl border-b border-white/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNav("about")}
            className="group flex items-center gap-3 text-white transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 border border-white/15 p-[1px] shadow-sm">
              <Code2 className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-lg tracking-tight group-hover:text-gray-300 transition-colors">
                Austin Mubaya
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Information Systems • UNIMA
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-gray-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activePage === link.id
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav("contact")}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-gray-100 text-gray-950 transition-all shadow-sm hover:scale-105 active:scale-95 gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-gray-900" />
              <span>Let&apos;s Talk</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-900 text-gray-300 hover:text-white border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-gray-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2.5 rounded-xl text-base font-medium text-left transition-colors ${
                  activePage === link.id
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => handleNav("contact")}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-950 font-semibold text-sm shadow-sm"
              >
                <Mail className="w-4 h-4 text-gray-950" />
                Contact Austin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
