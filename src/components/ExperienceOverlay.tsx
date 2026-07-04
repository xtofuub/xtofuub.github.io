import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const experienceData = [
  {
    id: 1,
    role: 'Malware Analyst & CTI Trainee',
    company: 'Fitsec Ltd',
    period: 'Jan 2026 - May 2026',
    location: 'Finland',
    summary:
      'Reverse engineering, malware analysis, CTI reporting, and analyst tooling across iOS and Windows research.',
    details: [
      'Analyzed Mach-O ARM and PE samples with Ghidra, Frida, Python, and sandbox evidence.',
      'Extracted IOCs, TTPs, YARA logic, and analyst notes for defensive reporting.',
      'Built internal full-stack tools for metrics, focus tracking, and operational visibility.',
    ],
  },
  {
    id: 2,
    role: 'IT Support Specialist Intern',
    company: 'Helsinki Public Libraries',
    period: 'Oct 2024 - Dec 2024',
    location: 'Finland',
    summary:
      'Hands-on support across three library branches, helping users and staff solve everyday device and software issues.',
    details: [
      'Troubleshot public workstations, peripherals, accounts, and common software problems.',
      'Guided customers through digital services with clear, patient technical communication.',
      'Maintained reliable branch IT operations across changing daily requests.',
    ],
  },
  {
    id: 3,
    role: 'IT Support',
    company: 'Business College Helsinki',
    period: 'Dec 2023 - Aug 2024',
    location: 'Finland',
    summary:
      'School IT support for students and teachers, covering deployments, installations, and troubleshooting.',
    details: [
      'Assisted with device setup, software installs, classroom issues, and account support.',
      'Practiced clear ticket-style communication and practical root-cause troubleshooting.',
      'Supported day-to-day ICT operations while studying cybersecurity.',
    ],
  },
  {
    id: 4,
    role: 'Early Childhood Assistant',
    company: 'Leikkipuisto Munkki',
    period: 'Jul 2024 - Aug 2024',
    location: 'Finland',
    summary:
      'Short summer role supporting daily activities, communication, and group operations.',
    details: [
      'Helped staff run safe daily routines and activities.',
      'Built communication confidence in a fast-moving public-service environment.',
    ],
  },
];

export default function ExperienceOverlay({ isOpen, onClose }: ExperienceOverlayProps) {
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
                <Briefcase size={17} />
                Work history
              </div>
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:items-end">
                <h2 className="text-5xl md:text-8xl font-serif uppercase leading-[0.92]">
                  Experience
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                  Recent work is weighted toward malware analysis, CTI, iOS research, and practical
                  security tooling, with earlier IT support roles grounding the user-facing side.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 pb-24">
              <motion.aside
                initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="h-fit rounded-lg border border-white/10 bg-white/[0.045] p-5 lg:sticky lg:top-24"
              >
                <div className="text-[10px] uppercase tracking-widest text-[#c4b5fd]/80 mb-3">
                  Current direction
                </div>
                <p className="text-2xl font-serif uppercase leading-none">
                  SOC, DFIR, CTI, and reverse engineering roles.
                </p>
                <div className="mt-6 space-y-3 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#c4b5fd]" />
                    Malware and binary analysis
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#c4b5fd]" />
                    Analyst tooling and dashboards
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#c4b5fd]" />
                    Public-service IT support
                  </div>
                </div>
              </motion.aside>

              <div className="relative space-y-5 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10">
                {experienceData.map((job, index) => (
                  <motion.article
                    key={job.id}
                    initial={{ y: 34, opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: index * 0.04, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-0 top-4 grid h-10 w-10 place-items-center rounded-full border border-[#c4b5fd]/30 bg-[#13111C] text-[#c4b5fd]">
                      <Briefcase size={16} />
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5 md:p-7 transition-colors hover:border-[#c4b5fd]/50 hover:bg-white/[0.08]">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/60">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c4b5fd]/10 px-3 py-1 text-[#c4b5fd]">
                              <Calendar size={12} />
                              {job.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={13} />
                              {job.location}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-4xl font-serif uppercase leading-none text-white">
                            {job.role}
                          </h3>
                          <p className="mt-3 text-[#c4b5fd]/85 text-sm tracking-widest uppercase">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-3xl text-sm md:text-base text-white/70 leading-relaxed">
                        {job.summary}
                      </p>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                        {job.details.map((detail) => (
                          <div key={detail} className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-white/70 leading-relaxed">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
