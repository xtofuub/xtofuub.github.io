import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  FolderGit2,
  ShieldCheck,
  Smartphone,
  BarChart3,
  Wrench,
} from 'lucide-react';

interface ProjectsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const featuredProjects = [
  {
    name: 'NyxRepost',
    theme: 'TikTok repost insight workspace',
    language: 'JavaScript',
    link: 'https://github.com/xtofuub/NyxRepost',
    icon: <BarChart3 size={20} />,
    description:
      'Advanced repost analytics dashboard with a replayable history feed, thumbnails, creator stats, monthly and yearly trends, word-cloud signals, profile comparison, and deploy-ready Vercel support.',
    proves: 'Turns messy API output into a usable investigation workspace.',
    evidence: ['Repost history first', 'Playable previews', 'Charts and comparison'],
  },
  {
    name: 'Repostify',
    theme: 'Read-only repost viewer',
    language: 'TypeScript',
    link: 'https://github.com/xtofuub/Repostify',
    icon: <BarChart3 size={20} />,
    description:
      'A focused TikTok repost viewer: paste a handle, inspect the amplified videos, and move through a clean playable grid without losing context.',
    proves: 'Shows the same product instinct in a smaller, faster viewer.',
    evidence: ['2-up video grid', 'Creator lookup', 'Fast inspection flow'],
  },
  {
    name: 'mailsploit',
    theme: 'Email authentication audit platform',
    language: 'Python',
    link: 'https://github.com/xtofuub/mailsploit',
    icon: <ShieldCheck size={20} />,
    description:
      'Defensive mail-security platform for controlled email-authentication testing, SPF/DKIM/DMARC review, header parsing, DNSBL checks, and domain-risk analysis.',
    proves: 'Applies offensive awareness to authorized infrastructure validation and hardening.',
    evidence: ['SPF / DKIM / DMARC', 'Header analysis', 'Domain risk review'],
  },
  {
    name: 'Crackability',
    theme: 'iOS app hardening assessor',
    language: 'Python',
    link: 'https://github.com/xtofuub/Crackability',
    icon: <Smartphone size={20} />,
    description:
      'Static security-assessment engine for decrypted iOS apps. It scores piracy, patching, subscription-bypass, anti-tamper, TLS, secrets, and hardening signals, then exports clear reports.',
    proves: 'Turns mobile reverse-engineering knowledge into a defensive scoring and reporting tool.',
    evidence: ['IPA analysis', 'Hardening score', 'SARIF / MCP output'],
  },
  {
    name: 'iOS Research Tooling',
    theme: 'Frida, SSH, and dynamic analysis',
    language: 'Python / TypeScript',
    link: 'https://github.com/xtofuub/frida-mcp-server',
    icon: <Smartphone size={20} />,
    description:
      'Public iOS research utilities for jailbroken-device workflows, Frida control, runtime inspection, and safe local file access through MCP-style tooling.',
    proves: 'Connects reverse engineering practice with repeatable analyst automation.',
    evidence: ['Frida hooks', 'Jailbroken iOS', 'MCP automation'],
  },
  {
    name: 'Hashtrace',
    theme: 'Hash reputation extension',
    language: 'JavaScript',
    link: 'https://github.com/xtofuub/Hashtrace',
    icon: <ShieldCheck size={20} />,
    description:
      'Chromium extension that detects hashes on web pages and pulls VirusTotal reputation so analysts can triage suspicious indicators faster.',
    proves: 'Brings IOC context directly into the browser workflow.',
    evidence: ['IOC triage', 'VirusTotal lookup', 'Browser workflow'],
  },
  {
    name: 'Fitsec Internal Tools',
    theme: 'Dashboards and operational software',
    language: 'TypeScript',
    link: 'https://github.com/xtofuub/RevOps-Dashboard',
    icon: <Wrench size={20} />,
    description:
      'Operational dashboards and employee tools built during Fitsec work: weekly metric tracking, signal detection, work-session monitoring, and executive summaries.',
    proves: 'Security-adjacent engineering with real operational users.',
    evidence: ['RevOps signals', 'Focus tracking', 'Production UI'],
  },
];

const supportingProjects = [
  {
    name: 'SMBitan',
    language: 'JavaScript',
    link: 'https://github.com/xtofuub/SMBitan',
    description: 'Dark web UI for browsing, searching, and previewing files on SMB/UNC shares.',
  },
  {
    name: 'Sentinel-VOIP',
    language: 'JavaScript',
    link: 'https://github.com/xtofuub/Sentinel-VOIP',
    description: 'Protocol reverse-engineering notes and rebuilt signaling flows from iOS dynamic analysis.',
  },
  {
    name: 'Melani-AI',
    language: 'JavaScript',
    link: 'https://github.com/xtofuub/Melani-AI',
    description: 'Reverse-engineering platform concept for turning binaries into evidence-backed analysis.',
  },
  {
    name: 'suomi-shopping-mcp',
    language: 'Python',
    link: 'https://github.com/xtofuub/suomi-shopping-mcp',
    description: 'MCP server for Finnish retail and used-market price search.',
  },
  {
    name: 'PysilonDecoder',
    language: 'Python',
    link: 'https://github.com/xtofuub/PysilonDecoder',
    description: 'Malware-analysis utility for extracting encoded tokens and rebuilding payload context.',
  },
  {
    name: 'HackerOne-MCP',
    language: 'TypeScript',
    link: 'https://github.com/xtofuub/HackerOne-MCP',
    description: 'Security workflow experiment connecting AI clients to bug bounty context.',
  },
];

const proofPoints = [
  ['Selection rule', 'Useful, current, defensively framed'],
  ['Strongest proof', 'NyxRepost, Repostify, mailsploit, Crackability'],
  ['Training signal', 'TryHackMe top 5% / 114 rooms'],
  ['Technical range', 'Repost insight, email auth, iOS hardening, IOC triage'],
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
          className="fixed inset-0 z-[110] bg-[#13111C]/90 backdrop-blur-sm overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="fixed top-6 right-6 md:top-8 md:right-8 z-[120] flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.55)] text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-xs md:text-sm tracking-widest uppercase group"
          >
            Close <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="min-h-screen px-5 pt-28 pb-8 md:p-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="mb-12 md:mb-16"
            >
              <div className="flex items-center gap-3 text-[#c4b5fd] text-xs tracking-widest uppercase mb-5">
                <FolderGit2 size={17} />
                Curated repository showcase
              </div>
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:items-end">
                <h2 className="text-5xl md:text-8xl font-serif uppercase leading-[0.92]">
                  Public Work
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                  A curated read of the repositories that matter most for analyst, CTI, reverse
                  engineering, and security-tooling roles. Each featured project says what it does
                  and what it proves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 28, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-lg overflow-hidden mb-12"
            >
              {proofPoints.map(([label, value]) => (
                <div key={label} className="p-4 md:p-5 bg-white/[0.045] border-b lg:border-b-0 lg:border-r last:border-r-0 border-white/10">
                  <div className="text-[10px] md:text-xs tracking-widest uppercase text-[#c4b5fd]/85 mb-2">
                    {label}
                  </div>
                  <div className="text-sm md:text-base text-white leading-snug">{value}</div>
                </div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 pb-14">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 34, opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.035, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex min-h-[260px] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.055] p-5 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c4b5fd]/50 hover:bg-white/[0.085] ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-7">
                      <div className="flex items-center gap-3 text-[#c4b5fd]">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c4b5fd]/10 border border-[#c4b5fd]/20">
                          {project.icon}
                        </span>
                        <span className="text-[11px] tracking-widest uppercase text-white/60">
                          {project.language}
                        </span>
                      </div>
                      <Github size={20} className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[#c4b5fd]/90 text-xs md:text-sm tracking-widest uppercase mb-3">
                      {project.theme}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif uppercase leading-none mb-5 group-hover:text-[#d9cffd] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-[62ch]">
                      {project.description}
                    </p>
                    <div className="mt-5 rounded-lg border border-[#c4b5fd]/20 bg-[#c4b5fd]/10 p-4 text-sm leading-relaxed text-white/80">
                      <span className="mr-2 text-[10px] uppercase tracking-widest text-[#c4b5fd]">Proves</span>
                      {project.proves}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                    {project.evidence.map((item) => (
                      <span key={item} className="rounded-full bg-white/[0.08] px-3 py-1.5 text-xs text-white/70">
                        {item}
                      </span>
                    ))}
                    <ExternalLink size={15} className="ml-auto text-white/40 group-hover:text-[#c4b5fd] transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.section
              initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
              whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="pb-24"
            >
              <div className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-3xl md:text-5xl font-serif uppercase">More Useful Builds</h3>
                  <p className="mt-3 max-w-2xl text-sm text-white/60 leading-relaxed">
                    Smaller repos and experiments that support the same story: analysis workflows,
                    security automation, internal tooling, and browser utilities.
                  </p>
                </div>
                <a
                  href="https://github.com/xtofuub?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-white/70 transition-colors hover:border-[#c4b5fd]/50 hover:text-white"
                >
                  All repos <ExternalLink size={14} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {supportingProjects.map((project) => (
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-white/10 bg-black/20 p-4 transition-colors hover:border-[#c4b5fd]/50 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-serif uppercase tracking-wide text-white group-hover:text-[#d9cffd] transition-colors">
                          {project.name}
                        </h4>
                        <p className="mt-1 text-xs font-mono text-[#c4b5fd]/80">{project.language}</p>
                      </div>
                      <ExternalLink size={15} className="mt-1 text-white/30 group-hover:text-[#c4b5fd]" />
                    </div>
                    <p className="mt-4 text-sm text-white/60 leading-relaxed">{project.description}</p>
                  </a>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
