import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  DatabaseZap,
  Fingerprint,
  Github,
  Linkedin,
  Radar,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import RippleTrail from './components/RippleTrail';
import StaggeredMenu from './components/StaggeredMenu';
import ProjectsOverlay from './components/ProjectsOverlay';
import AboutOverlay from './components/AboutOverlay';
import ExperienceOverlay from './components/ExperienceOverlay';

const textVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] } },
};

const heroSignals = [
  { label: 'Current lane', value: 'SOC / DFIR / CTI / RE', icon: <Radar size={16} /> },
  { label: 'Latest work', value: 'Fitsec malware + threat intel', icon: <ShieldCheck size={16} /> },
  { label: 'Public proof', value: 'NyxRepost, Repostify, Frida MCP', icon: <DatabaseZap size={16} /> },
  { label: 'Training signal', value: 'TryHackMe top 5%', icon: <BadgeCheck size={16} /> },
];

const proofTiles = [
  ['Reverse engineering', 'Mach-O ARM, PE, Frida, Ghidra'],
  ['Threat intel', 'IOC extraction, TTP mapping, YARA'],
  ['Security tooling', 'Python, TypeScript, MCP workflows'],
  ['Product sense', 'Dashboards, replayable history, clear UX'],
];

const frontProjects = [
  {
    name: 'NyxRepost',
    eyebrow: 'TikTok repost insight',
    copy: 'Playable repost history, creator stats, charts, comparison, thumbnails, and Vercel-ready deployment.',
    link: 'https://github.com/xtofuub/NyxRepost',
  },
  {
    name: 'iOS Research Stack',
    eyebrow: 'Frida + dynamic analysis',
    copy: 'Jailbroken-device workflows, runtime hooks, local file access, and MCP experiments for analyst automation.',
    link: 'https://github.com/xtofuub/frida-mcp-server',
  },
  {
    name: 'Hashtrace',
    eyebrow: 'IOC triage extension',
    copy: 'Chromium extension that detects hashes in-page and brings reputation checks into the analyst workflow.',
    link: 'https://github.com/xtofuub/Hashtrace',
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const isAnyOverlayOpen = isProjectsOpen || isAboutOpen || isExperienceOpen;

  return (
    <div className="relative min-h-screen w-full bg-[#13111C] text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: isAnyOverlayOpen ? 'blur(12px)' : 'blur(0px)',
            transition: `filter ${isAnyOverlayOpen ? '1.56s' : '1.3s'} cubic-bezier(0.19, 1, 0.22, 1)`,
          }}
        />
        <div className="absolute inset-0 bg-[#090711]/45" />
        <div className="cinematic-vignette" />
        <div className="signal-scan" />
      </div>

      <RippleTrail />

      <motion.main
        className="relative z-20"
        initial="hidden"
        animate={!isAnyOverlayOpen ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          hidden: { opacity: 0, transition: { duration: 0.35 } },
        }}
      >
        <section className="relative flex min-h-screen items-end px-5 pb-10 pt-28 md:px-12 lg:px-24 lg:pb-14">
          <div className="hero-orbit hidden lg:block" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="w-full">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:items-end">
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}>
                <motion.div
                  variants={textVariants}
                  className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#c4b5fd]/25 bg-[#c4b5fd]/10 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d8ceff]"
                >
                  <span className="live-pulse" />
                  Open to junior analyst roles
                </motion.div>

                <div className="hero-title text-[58px] sm:text-[82px] md:text-[128px] lg:text-[148px]">
                  <div className="overflow-hidden"><motion.div variants={textVariants}>Edwin</motion.div></div>
                  <div className="overflow-hidden"><motion.div variants={textVariants} className="italic">Chen.</motion.div></div>
                  <div className="overflow-hidden"><motion.div variants={textVariants}>Cyber</motion.div></div>
                  <div className="overflow-hidden"><motion.div variants={textVariants} className="italic">Specialist.</motion.div></div>
                </div>

                <motion.div variants={textVariants} className="mt-8 flex max-w-3xl flex-col gap-5 md:ml-[28%] md:flex-row md:items-end">
                  <p className="max-w-[520px] text-sm uppercase leading-relaxed tracking-[0.22em] text-white/82 md:text-[13px]">
                    Junior malware analyst and cybersecurity student focused on CTI,
                    reverse engineering, iOS dynamic analysis, and practical security tooling.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setIsProjectsOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs uppercase tracking-widest text-[#13111C] transition-transform hover:-translate-y-0.5"
                    >
                      View work <ArrowUpRight size={14} />
                    </button>
                    <a
                      href="https://github.com/xtofuub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.07] px-4 py-2.5 text-xs uppercase tracking-widest text-white transition-colors hover:border-[#c4b5fd]/55 hover:bg-white/[0.12]"
                    >
                      GitHub <Github size={14} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.aside
                variants={textVariants}
                className="casefile-panel"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#c4b5fd]">Signal dossier</p>
                    <h2 className="mt-2 text-3xl font-serif uppercase leading-none">Analyst Evidence</h2>
                  </div>
                  <Fingerprint size={28} className="text-[#c4b5fd]" />
                </div>

                <div className="mt-5 space-y-3">
                  {heroSignals.map((signal) => (
                    <div key={signal.label} className="signal-row">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#c4b5fd]/12 text-[#c4b5fd]">
                        {signal.icon}
                      </span>
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.22em] text-white/45">{signal.label}</span>
                        <span className="mt-1 block text-sm text-white/84">{signal.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-[#c4b5fd]/20 bg-[#c4b5fd]/10 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d8ceff]">
                    <Activity size={14} />
                    Active profile
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">
                    Defensive framing, public-safe contact, and proof-led project curation for
                    SOC, DFIR, CTI, and reverse engineering interviews.
                  </p>
                </div>
              </motion.aside>
            </div>

            <motion.div
              variants={textVariants}
              className="mt-10 grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] md:grid-cols-4"
            >
              {proofTiles.map(([label, value]) => (
                <div key={label} className="proof-tile">
                  <p>{label}</p>
                  <strong>{value}</strong>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative px-5 pb-24 md:px-12 lg:px-24">
          <motion.div
            initial={false}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="landing-lab"
          >
            <div className="landing-lab-header">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c4b5fd]">Featured case files</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-serif uppercase leading-none md:text-6xl">
                  Repos that show the work, not just the aesthetic.
                </h2>
              </div>
              <button
                onClick={() => setIsProjectsOpen(true)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/16 px-4 py-2.5 text-xs uppercase tracking-widest text-white/76 transition-colors hover:border-[#c4b5fd]/55 hover:text-white"
              >
                Full archive <TerminalSquare size={15} />
              </button>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
              {frontProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`front-project-card ${index === 0 ? 'front-project-card--lead' : ''}`}
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c4b5fd]">{project.eyebrow}</span>
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/62">
                    Open repo <ArrowUpRight size={14} />
                  </span>
                </a>
              ))}
            </div>

            <div className="landing-lab-footer">
              <a href="https://www.linkedin.com/in/edwin-chen-579708263/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="https://tryhackme.com/p/tofuub" target="_blank" rel="noopener noreferrer">
                <ShieldCheck size={16} />
                TryHackMe top 5%
              </a>
              <button onClick={() => setIsAboutOpen(true)}>
                <BadgeCheck size={16} />
                Read profile
              </button>
            </div>
          </motion.div>
        </section>
      </motion.main>

      <StaggeredMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        onProjectsClick={() => setIsProjectsOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
        onExperienceClick={() => setIsExperienceOpen(true)}
      />

      <ProjectsOverlay
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
      />
      <AboutOverlay
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
      <ExperienceOverlay
        isOpen={isExperienceOpen}
        onClose={() => setIsExperienceOpen(false)}
      />
    </div>
  );
}
