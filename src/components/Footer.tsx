"use client";

import React, { useState } from "react";
import { ArrowUp, Code2, ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [collapsed, setCollapsed] = useState(true);

  const scrollToTop = () => {
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5 relative text-xs text-gray-400">
      {/* Toggle button — always visible */}
      <div className="flex justify-center">
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="flex items-center gap-1.5 px-3 py-1 -mt-px rounded-b-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-t-0 border-white/10 transition-colors text-[11px] font-mono"
          title={collapsed ? "Expand footer" : "Collapse footer"}
          aria-expanded={!collapsed}
        >
          {collapsed ? (
            <>
              <ChevronDown className="w-3 h-3" />
              Show Footer
            </>
          ) : (
            <>
              <ChevronUp className="w-3 h-3" />
              Hide Footer
            </>
          )}
        </button>
      </div>

      {/* Collapsible body */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: collapsed ? "0px" : "200px", opacity: collapsed ? 0 : 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-800 border border-white/10 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white font-bold text-sm block">Austin Mubaya</span>
                <span className="text-[11px] text-gray-500 font-mono">Information Systems Graduate • Operations Manager</span>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-white/10 text-gray-300 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              <span>ICTAM Member #IM-2026-2796 Verified</span>
            </div>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Credits */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
            <div>&copy; {new Date().getFullYear()} Austin Mubaya. All rights reserved.</div>
            <div className="flex items-center gap-1 font-mono">
              <span>Crafted with</span>
              <span className="font-medium">Next.js 16</span>
              <span>&amp;</span>
              <span className="font-medium">Tailwind CSS v4</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
