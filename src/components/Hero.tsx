"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, ArrowUpRight, Award } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/Icons";
import type { PageId } from "@/app/page";

interface HeroProps {
  onNavigate?: (page: PageId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">


            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Advancing Excellence in <span className="text-white">Information Systems</span> &amp; Technology.
            </h1>

            {/* Supporting Subhead */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8 font-light">
              Hi, I&apos;m <strong className="font-semibold text-white">Austin Mubaya</strong>. An Information Systems graduate from the <span className="text-white font-medium">University of Malawi (UNIMA)</span> with a strong foundation in systems analysis, database management, GIS web applications, and Cisco-certified in <span className="text-white font-medium">Cyber Threat Management</span> and <span className="text-white font-medium">Introduction to Cybersecurity</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onNavigate?.("projects")}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>View Projects &amp; Systems</span>
                <ArrowRight className="w-4 h-4 text-gray-950" />
              </button>

              <button
                onClick={() => onNavigate?.("credentials")}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 font-mono text-xs border border-white/10 hover:border-white/20 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Award className="w-4 h-4 text-gray-300" />
                <span>Certifications &amp; ICTAM</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Connect:</span>
              <a
                href="https://www.linkedin.com/in/austin-mubaya-11908029b"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn: Austin Mubaya"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:austinmubaya3@gmail.com"
                className="p-2.5 rounded-lg bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="Direct Email: austinmubaya3@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/austin_mubaya"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="Instagram: Austin Mubaya"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/austin.mubaya"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="Facebook: Austin Mubaya"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/265099335560"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="WhatsApp: +265 099 335 560"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate?.("contact")}
                className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white ml-auto font-mono transition-colors"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Contact &amp; CV Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Portrait & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-3 shadow-2xl">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900">
                  <Image
                    src="/images/austingraduate.jpg"
                    alt="Austin Mubaya - Information Systems Graduate"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-[center_20%] transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>


              </div>




            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-black text-white font-mono">3.11</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-mono">BSc Final GPA</div>
            <p className="text-[11px] text-gray-500 mt-0.5">University of Malawi (UNIMA)</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-black text-white font-mono">IM-2026</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-mono">ICTAM Membership</div>
            <p className="text-[11px] text-gray-500 mt-0.5">Student Member #IM-2026-2796</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-black text-white font-mono">Cisco</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-mono">Cybersecurity</div>
            <p className="text-[11px] text-gray-500 mt-0.5">Threat Mgmt &amp; Intro to Cyber</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-black text-white font-mono">Mzuzu</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-mono">Restaurant Manager</div>
            <p className="text-[11px] text-gray-500 mt-0.5">Operations &amp; Inventory Control</p>
          </div>
        </div>
      </div>
    </section>
  );
}
