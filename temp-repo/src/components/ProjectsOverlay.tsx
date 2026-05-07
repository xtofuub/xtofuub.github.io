import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, FolderGit2 } from 'lucide-react';

interface ProjectsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectsData = [
  {
    category: "Offensive Security & Red Teaming",
    items: [
      {
        name: "Mailsploit",
        language: "Python",
        description: "Security-focused platform for email that demonstrates advanced spoofing techniques while analyzing domain authentication protocols like SPF and DMARC.",
        link: "https://github.com/xtofuub/mailsploit"
      },
      {
        name: "SpoofMail",
        language: "PHP / CSS",
        description: "A modern, responsive email spoofer built with simple PHP, HTML, CSS, and JavaScript. Includes file attachment support and email previews.",
        link: "https://github.com/xtofuub/SpoofMail"
      },
      {
        name: "PacketStorm",
        language: "Python",
        description: "Semi-Automated Python Deauther For Kali Linux. Deauthenticates clients from wireless networks.",
        link: "https://github.com/xtofuub/PacketStorm"
      },
      {
        name: "PS-CredentialPhisher",
        language: "PowerShell",
        description: "PowerShell utility for testing Windows Credential UI (CredUI) behavior and UAC prompt simulations. Captured credentials sent to Discord.",
        link: "https://github.com/xtofuub/PS-CredentialPhisher"
      },
      {
        name: "RavenC2",
        language: "PowerShell",
        description: "A PowerShell-based remote control tool for managing a Windows machine via Telegram, intended for learning and automation experiments.",
        link: "https://github.com/xtofuub/RavenC2"
      },
      {
        name: "wilma-phish",
        language: "HTML",
        description: "Wilma phishing clone with Discord webhook logging for authorized security testing.",
        link: "https://github.com/xtofuub/wilma-phish"
      }
    ]
  },
  {
    category: "Security Research & Malware Analysis",
    items: [
      {
        name: "Sentinel-VOIP",
        language: "JavaScript",
        description: "Reverse-engineering of the Juasapp VoIP protocol using a jailbroken iOS device. Unlimited signaling flows extracted through dynamic runtime analysis.",
        link: "https://github.com/xtofuub/Sentinel-VOIP"
      },
      {
        name: "PysilonDecoder",
        language: "Python",
        description: "Python-based tool designed to analyze and decode Pysilon malware tokens. Automates token extraction and reconstructs payloads.",
        link: "https://github.com/xtofuub/PysilonDecoder"
      },
      {
        name: "Hashtrace",
        language: "JavaScript",
        description: "Lightweight Chromium extension for cybersecurity researchers. Highlights cryptographic hashes on web pages and fetches VirusTotal reputation.",
        link: "https://github.com/xtofuub/Hashtrace"
      },
      {
        name: "Cyber-Resources",
        language: "Markdown",
        description: "A curated collection of cybersecurity, OSINT, malware analysis, reconnaissance, and threat-intel resources.",
        link: "https://github.com/xtofuub/Cyber-Resources"
      }
    ]
  },
  {
    category: "Web Applications & Dashboards",
    items: [
      {
        name: "RevOps-Dashboard",
        language: "TypeScript",
        description: "Weekly RevOps metric tracking with analytics, critical signal detection, and executive summaries. Built with Next.js 14, Shadcn, and Supabase.",
        link: "https://github.com/xtofuub/RevOps-Dashboard"
      },
      {
        name: "fitsec-focus-coach",
        language: "TypeScript",
        description: "Internal employee management platform built for FitSec to monitor work sessions, manage break times, and improve daily productivity.",
        link: "https://github.com/xtofuub/fitsec-focus-coach"
      },
      {
        name: "fitsec-usbguard",
        language: "TypeScript",
        description: "USBGuard UI/UX Revamp: A sleek, modern frontend project built with Framer and Liquid Glass effects. Focused on high-performance animations.",
        link: "https://github.com/xtofuub/fitsec-usbguard"
      },
      {
        name: "NyxRepost",
        language: "HTML / API",
        description: "Advanced TikTok repost analytics dashboard with charts, word clouds, creator stats, and profile comparison. Tiktok API scraper.",
        link: "https://github.com/xtofuub/NyxRepost"
      },
      {
        name: "SMBitan",
        language: "JavaScript",
        description: "A network file browser. Browse, search, and preview files on SMB/UNC shares with a dark-themed web UI.",
        link: "https://github.com/xtofuub/SMBitan"
      }
    ]
  },
  {
    category: "Browser Extensions & Utilities",
    items: [
      {
        name: "Solveify",
        language: "JavaScript",
        description: "Browser extension that simplifies question answering using the Gemini API. Highlights questions and retrieves accurate answers.",
        link: "https://github.com/xtofuub/Solveify"
      },
      {
        name: "XSwitch",
        language: "TypeScript",
        description: "Firefox ↔ Chrome extension converter. Easily port extensions between browsers.",
        link: "https://github.com/xtofuub/XSwitch"
      }
    ]
  }
];

export default function ProjectsOverlay({ isOpen, onClose }: ProjectsOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[110] bg-[#13111C]/40 backdrop-blur-sm overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="fixed top-6 right-6 md:top-8 md:right-8 z-[120] flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] text-white hover:bg-white/20 hover:border-white/30 hover:shadow-[0_6px_32px_-4px_rgba(0,0,0,0.6)] transition-all duration-300 text-xs md:text-sm tracking-widest uppercase group"
          >
            Close <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="min-h-screen p-8 md:p-24 max-w-7xl mx-auto">
            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl md:text-8xl font-serif uppercase mb-16"
            >
              Projects
            </motion.h2>
            
            <div className="space-y-20 pb-24">
              {projectsData.map((category, catIdx) => (
                <motion.div 
                  key={category.category}
                  initial={{ y: 50, opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-[#c4b5fd] font-sans tracking-widest uppercase text-sm mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                    <FolderGit2 size={18} />
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((project) => (
                      <a 
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-6 bg-white/5 border border-white/10 hover:border-[#c4b5fd]/50 hover:bg-white/10 transition-all duration-300 rounded-lg flex flex-col h-full"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-serif uppercase tracking-wide group-hover:text-[#c4b5fd] transition-colors">{project.name}</h4>
                          <Github size={20} className="text-white/50 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-sm font-sans text-white/70 mb-6 flex-grow leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-xs font-mono text-[#c4b5fd]/80">{project.language}</span>
                          <ExternalLink size={14} className="text-white/30 group-hover:text-[#c4b5fd] transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
