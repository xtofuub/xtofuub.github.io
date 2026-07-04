import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  User,
  Shield,
  Terminal,
  Wrench,
  GraduationCap,
  Globe,
  Award,
  Activity,
} from 'lucide-react';

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const skillGroups = [
  {
    category: 'Reverse Engineering',
    icon: <Activity size={18} />,
    items: ['Mach-O', 'PE', 'ELF', 'x86/x64/ARM', 'Ghidra', 'Frida', 'Obj-C runtime', 'capa'],
  },
  {
    category: 'Malware & CTI',
    icon: <Shield size={18} />,
    items: ['IOC engineering', 'YARA', 'Sigma', 'MITRE ATT&CK', 'TTP mapping', 'Sandbox triage'],
  },
  {
    category: 'Security Testing',
    icon: <Wrench size={18} />,
    items: ['Burp Suite', 'Nmap', 'ffuf', 'Nuclei', 'Wireshark', 'mitmproxy', 'OWASP Top 10'],
  },
  {
    category: 'Programming',
    icon: <Terminal size={18} />,
    items: ['Python', 'TypeScript', 'Node.js', 'React', 'Next.js', 'PowerShell', 'MCP'],
  },
];

const certifications = [
  'TryHackMe top 5% - 114 rooms cleared',
  'Mobile Hacking Lab: iOS Application Security Fundamentals',
  'TryHackMe Pre Security',
  'TryHackMe Cyber Security 101',
  'Junior Penetration Tester path - in progress',
];

const languages = [
  ['English', 'Fluent'],
  ['Finnish', 'Fluent'],
  ['Mandarin', 'Fluent'],
  ['Cantonese', 'Fluent'],
  ['Swedish', 'Conversational'],
];

const roleFit = [
  {
    label: 'SOC / DFIR',
    detail: 'Comfortable turning logs, IOCs, sandbox evidence, and user-facing context into clear next steps.',
  },
  {
    label: 'CTI',
    detail: 'Maps behavior to TTPs, writes concise analyst notes, and keeps defensive usefulness first.',
  },
  {
    label: 'Reverse Engineering',
    detail: 'Hands-on with Mach-O, PE, Frida hooks, runtime inspection, and malware token analysis.',
  },
];

export default function AboutOverlay({ isOpen, onClose }: AboutOverlayProps) {
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
                <User size={17} />
                Analyst profile
              </div>
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:items-end">
                <h2 className="text-5xl md:text-8xl font-serif uppercase leading-[0.92]">
                  About Me
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                  Cybersecurity student and junior malware analyst profile with recent Fitsec work
                  across reverse engineering, cyber threat intelligence, iOS runtime research, and
                  internal security tooling.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 pb-24">
              <motion.section
                initial={{ y: 34, opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5 md:p-8"
              >
                <p className="text-2xl md:text-4xl font-serif text-white leading-tight">
                  I work best where binary analysis, threat context, and practical tooling meet.
                </p>
                <div className="mt-8 space-y-5 text-white/70 leading-relaxed">
                  <p>
                    Most recently, I worked with Fitsec Ltd on malware analysis and cyber threat
                    intelligence. The work included static and dynamic analysis of Mach-O ARM and PE
                    samples, Frida-based runtime inspection, IOC/TTP extraction, YARA rules, and
                    analyst-facing reports.
                  </p>
                  <p>
                    My strongest technical lane is reverse engineering mixed with practical
                    engineering: iOS method hooking, SSL pinning bypass research, sandbox triage,
                    internal dashboards, MCP experiments, and full-stack tools for security
                    workflows.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {roleFit.map((role) => (
                    <div key={role.label} className="rounded-lg border border-white/10 bg-black/20 p-4">
                      <div className="text-[10px] uppercase tracking-widest text-[#c4b5fd]/80 mb-2">
                        Open to
                      </div>
                      <div className="text-white text-sm font-medium">{role.label}</div>
                      <p className="mt-3 text-xs leading-relaxed text-white/60">{role.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.aside
                initial={{ y: 34, opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <section className="rounded-lg border border-white/10 bg-white/[0.045] p-5 md:p-6">
                  <h3 className="mb-5 flex items-center gap-3 text-[#c4b5fd] text-xs tracking-widest uppercase">
                    <GraduationCap size={17} />
                    Education
                  </h3>
                  <h4 className="text-2xl font-serif uppercase leading-none">Business College Helsinki</h4>
                  <p className="mt-3 text-xs font-mono text-[#c4b5fd]/80">Aug 2023 - Jun 2026</p>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    ICT Vocational Qualification, Cyber Security.
                  </p>
                  <div className="mt-5 rounded-lg border border-[#c4b5fd]/20 bg-[#c4b5fd]/10 p-3 text-xs leading-relaxed text-white/70">
                    Public positioning: junior analyst roles where security fundamentals, investigation,
                    and practical engineering matter.
                  </div>
                </section>

                <section className="rounded-lg border border-white/10 bg-white/[0.045] p-5 md:p-6">
                  <h3 className="mb-5 flex items-center gap-3 text-[#c4b5fd] text-xs tracking-widest uppercase">
                    <Award size={17} />
                    Training
                  </h3>
                  <div className="space-y-3">
                    {certifications.map((item) => (
                      <div key={item} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0 text-sm text-white/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              </motion.aside>

              <motion.section
                initial={{ y: 34, opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2"
              >
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <h3 className="text-3xl md:text-5xl font-serif uppercase">Technical Range</h3>
                  <Terminal size={22} className="text-[#c4b5fd]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {skillGroups.map((skillGroup) => (
                    <div key={skillGroup.category} className="rounded-lg border border-white/10 bg-black/20 p-5 transition-colors hover:border-[#c4b5fd]/50">
                      <h4 className="text-lg font-serif uppercase tracking-wide mb-4 flex items-center gap-2 text-white">
                        <span className="text-[#c4b5fd]">{skillGroup.icon}</span>
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item) => (
                          <span key={item} className="px-3 py-1 bg-white/[0.08] rounded-full text-xs text-white/75">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial={{ y: 34, opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2 rounded-lg border border-white/10 bg-white/[0.045] p-5 md:p-6"
              >
                <h3 className="mb-5 flex items-center gap-3 text-[#c4b5fd] text-xs tracking-widest uppercase">
                  <Globe size={17} />
                  Languages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {languages.map(([language, level]) => (
                    <div key={language} className="rounded-lg border border-white/10 bg-black/20 p-4">
                      <div className="text-white text-sm">{language}</div>
                      <div className="mt-1 text-xs font-mono text-[#c4b5fd]/80">{level}</div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
