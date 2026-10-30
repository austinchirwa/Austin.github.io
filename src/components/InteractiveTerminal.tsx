"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-gray-300 space-y-1">
          <p className="text-cyan-400 font-bold">
            Austin Mubaya Interactive CLI [v3.0.0 - Documented Portfolio]
          </p>
          <p className="text-xs text-gray-400">
            Type <span className="text-amber-400 font-semibold">&apos;help&apos;</span> to view verified commands, or click any chip below.
          </p>
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const quickCommands = ["help", "about", "credentials", "skills", "projects", "experience", "contact", "hire", "clear"];

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-300 font-semibold mb-1">Available Documented Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono">
              <div><span className="text-emerald-400">about</span> - Background & academic credentials</div>
              <div><span className="text-emerald-400">credentials</span> - ICTAM, Cisco & Google Certifications</div>
              <div><span className="text-emerald-400">skills</span> - Verified technical & business skills</div>
              <div><span className="text-emerald-400">projects</span> - HealthLocator, GIS EduMap & Operations</div>
              <div><span className="text-emerald-400">experience</span> - Graze Local Restaurant & UNIMA timeline</div>
              <div><span className="text-emerald-400">contact</span> - Phone, Email, Location & LinkedIn</div>
              <div><span className="text-emerald-400">hire</span> - Open inquiry form</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal history</div>
            </div>
          </div>
        );
        break;

      case "about":
      case "whoami":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="font-semibold text-white">Austin Mubaya — Information Systems Graduate & Operations Manager</p>
            <p>BSc Information Systems graduate from the University of Malawi (UNIMA) with a final GPA of 3.11/4.00.</p>
            <p>Operations Manager at Graze Local Restaurant, Mzuzu. Active Student Member of the ICT Association of Malawi (ICTAM #IM-2026-2796) and Cisco-certified in Cyber Threat Management & Introduction to Cybersecurity.</p>
            <p className="text-cyan-400">Core Focus: Systems Analysis, Database Management, Cyber Threat Management, GIS Applications, and Operations.</p>
          </div>
        );
        break;

      case "credentials":
      case "certs":
        outputNode = (
          <div className="space-y-1.5 text-xs text-gray-300">
            <p className="text-cyan-400 font-semibold">Official Documented Credentials:</p>
            <div>• <span className="text-amber-300 font-bold">ICTAM Membership:</span> Student Member No. IM-2026-2796 (Valid until 31 Dec 2026) - Verify: mis.ictam.org.mw/certificates/1252</div>
            <div>• <span className="text-cyan-300 font-bold">Cisco Networking Academy:</span> Introduction to Cybersecurity (03 Apr 2026) & Cyber Threat Management (April 2026, UNIMA)</div>
            <div>• <span className="text-rose-300 font-bold">Google:</span> Foundations of Digital Marketing and E-commerce</div>
            <div>• <span className="text-blue-300 font-bold">Microsoft:</span> Ingest Data with Dataflows Gen2 in Microsoft Fabric</div>
            <div>• <span className="text-indigo-300 font-bold">LinkedIn Learning:</span> Creating a Business Plan, Foundations of Raising Capital, Small Business Marketing</div>
            <div>• <span className="text-emerald-300 font-bold">University of Malawi:</span> BSc Information Systems (GPA 3.11 / 4.00)</div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-400 font-semibold">Verified Skills Breakdown:</p>
            <p>• <span className="text-white font-medium">Cybersecurity:</span> Introduction to Cybersecurity, Cyber Threat Management, Incident Response & Mitigation (Cisco Certified)</p>
            <p>• <span className="text-white font-medium">Data & Systems:</span> Microsoft Fabric Dataflows Gen2, Systems Analysis & Design, Database Management & SQL</p>
            <p>• <span className="text-white font-medium">Web & GIS:</span> Web Design, GIS Web Applications (HealthLocator, EduMap), Basic Networking, Project Management</p>
            <p>• <span className="text-white font-medium">Digital Marketing & E-Commerce:</span> Google E-Commerce, Digital Marketing Media, Sales Management, Small Business Marketing</p>
            <p>• <span className="text-white font-medium">Management & Strategy:</span> Operations Management (Graze Local), Business Planning, Capital Raising, Business Acumen</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs text-gray-300">
            <div>
              <p className="text-cyan-300 font-bold">1. HealthLocator WebApp (GIS System)</p>
              <p className="text-gray-400">GIS-enabled web application for locating healthcare facilities and critical service information with spatial queries.</p>
            </div>
            <div>
              <p className="text-indigo-300 font-bold">2. GIS EduMap System (UNIMA Group Project)</p>
              <p className="text-gray-400">Collaborative educational mapping system for institutional asset distribution and accessibility analysis.</p>
            </div>
            <div>
              <p className="text-emerald-300 font-bold">3. Graze Local Restaurant Operations & Inventory</p>
              <p className="text-gray-400">Daily hospitality operational leadership, inventory stock management, staff scheduling, and performance analytics.</p>
            </div>
            <div>
              <p className="text-purple-300 font-bold">4. Venture Creation & Capital Acquisition Model</p>
              <p className="text-gray-400">Strategic business plan, financial forecasting, and investor readiness developed in May 2025.</p>
            </div>
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-1.5 text-xs text-gray-300">
            <div>
              <span className="text-cyan-400 font-bold">Operations Manager — Graze Local Restaurant, Mzuzu</span> (Nov 2025 – Present)
              <p className="text-gray-400">Directing restaurant operations, staff performance, inventory stock control, and supplier procurement.</p>
            </div>
            <div>
              <span className="text-indigo-400 font-bold">BSc Information Systems — University of Malawi (UNIMA)</span> (Graduating Class 2026)
              <p className="text-gray-400">Completed 4-year degree with GPA 3.11/4.00; Active Member of UNIMA Computing Society.</p>
            </div>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-400 font-semibold">Contact Austin Mubaya:</p>
            <p>• Email: <a href="mailto:austinmubaya3@gmail.com" className="text-white underline">austinmubaya3@gmail.com</a></p>
            <p>• Phone: <a href="tel:0993355560" className="text-white underline">+265 993 355 560 (0993355560)</a></p>
            <p>• Location: Mzuzu, Malawi</p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/austin-mubaya-11908029b" target="_blank" rel="noreferrer" className="text-white underline">linkedin.com/in/austin-mubaya-11908029b</a></p>
            <p>• ICTAM Portal: <a href="https://mis.ictam.org.mw/certificates/1252" target="_blank" rel="noreferrer" className="text-white underline">mis.ictam.org.mw/certificates/1252</a></p>
          </div>
        );
        break;

      case "hire":
        outputNode = (
          <div className="text-xs text-emerald-400 font-semibold">
            Opening contact form... You can also email Austin directly at austinmubaya3@gmail.com!
          </div>
        );
        setTimeout(() => {
          onClose();
          window.location.href = "#contact";
        }, 800);
        break;

      default:
        outputNode = (
          <div className="text-xs text-rose-400">
            Command not recognized: &apos;{trimmed}&apos;. Type <span className="underline font-bold text-white">&apos;help&apos;</span> to see verified commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className={`w-full ${
          isMaximized ? "max-w-6xl h-[85vh]" : "max-w-3xl h-[520px]"
        } rounded-2xl bg-gray-950 border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 font-mono`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-gray-900/90 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-emerald-500 cursor-pointer" onClick={() => handleCommand("clear")} />
            <span className="text-xs text-gray-400 font-mono ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              austin@mubaya-systems: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 text-sm font-mono bg-gray-950/90">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs">
                <span className="text-gray-500">guest@austin:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-cyan-500/20">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-gray-900/60 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="text-gray-400 text-[10px] uppercase font-mono mr-1">Chips:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-cyan-300 hover:text-white border border-white/5 transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <div className="p-3 bg-gray-900 border-t border-white/10 flex items-center gap-2">
          <span className="text-cyan-400 text-xs font-bold font-mono pl-2">austin@cli:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (try 'skills' or 'credentials')..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-gray-600"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
