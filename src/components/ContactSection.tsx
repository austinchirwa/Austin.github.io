"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Systems Analysis & Design",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const emailAddress = "austinmubaya3@gmail.com";
  const phoneNumber = "0993355560";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate responsive sending feedback
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Systems Analysis & Design",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-gray-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let&apos;s Connect & <span className="text-white">Collaborate</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Whether you are looking to hire for an <strong className="text-white">Information Systems</strong> role, need expertise in <strong className="text-white">Systems Analysis & Database Design</strong>, or require operational leadership in <strong className="text-white">Business Systems & GIS</strong>, I welcome new opportunities.
              </p>

              {/* Direct Email Card with 1-Click Copy */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 mb-4">
                <div className="text-xs font-mono text-gray-400 mb-2">Direct Email</div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-gray-300 transition-colors font-mono truncate"
                  >
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-mono border border-white/10 transition-all active:scale-95"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-gray-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Phone Card */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 mb-6">
                <div className="text-xs font-mono text-gray-400 mb-2">Phone / Mobile</div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-gray-300 transition-colors font-mono"
                  >
                    +265 993 355 560
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-mono border border-white/10 transition-all active:scale-95"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-gray-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Meta details */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Location</span>
                    <span className="font-medium text-white">Mzuzu, Malawi</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Timezone & Availability</span>
                    <span className="font-medium text-white">CAT (UTC+2) • Open to In-Person & Remote Roles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400">Professional Profile:</span>
              <a
                href="https://www.linkedin.com/in/austin-mubaya-11908029b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>austin-mubaya-11908029b</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-300" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8">
                Fill out the details below and I&apos;ll get back to you within 24 hours.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-gray-800/80 border border-white/10 text-gray-200 text-sm flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-gray-300 shrink-0" />
                  <span>Message sent successfully! Austin will respond promptly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-2">
                    Inquiry Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors text-sm"
                  >
                    <option value="Employment Opportunity">Full-Time Role / Employment Opportunity</option>
                    <option value="Systems Analysis & Design">Systems Analysis & Business Process Optimization</option>
                    <option value="Database & Dataflows">Database Management & Microsoft Fabric Dataflows</option>
                    <option value="Cybersecurity">Cyber Threat & Security Incident Management</option>
                    <option value="Web Design & GIS">Web Design & GIS Application Development</option>
                    <option value="Operations Consulting">Operations Management & Business Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-2">
                    Project Overview or Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, architecture challenges, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
