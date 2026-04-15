import { motion, AnimatePresence } from 'motion/react';
import { X, User, Shield, Terminal, Wrench, GraduationCap, Globe } from 'lucide-react';

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const skills = [
  {
    category: "Security & Analysis",
    icon: <Shield size={18} />,
    items: ["Malware Analysis", "Reverse Engineering", "OSINT", "Vulnerability Scanning", "Penetration Testing", "CTI"]
  },
  {
    category: "Development",
    icon: <Terminal size={18} />,
    items: ["Python", "PowerShell", "PHP", "JavaScript", "HTML/CSS"]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={18} />,
    items: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "Triage", "Maltego", "Shodan"]
  },
  {
    category: "Systems & Networks",
    icon: <Globe size={18} />,
    items: ["Kali Linux", "Windows Server", "Active Directory", "Azure", "DNS", "HTTPS", "Firewalls"]
  }
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
              About Me
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-24">
              {/* Bio Section */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="lg:col-span-2 space-y-8"
              >
                <h3 className="text-[#c4b5fd] font-sans tracking-widest uppercase text-sm mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                  <User size={18} />
                  Profile
                </h3>
                <div className="text-white/80 font-sans text-lg leading-relaxed space-y-6">
                  <p className="text-2xl md:text-3xl font-serif text-white leading-snug">
                    Hey, I'm Edwin - a Computer Engineering student who thrives on building things, breaking them apart, and understanding exactly how they work under the hood.
                  </p>
                  <p>
                    While I'm currently navigating the challenges of academia, my true passion lies at the intersection of offensive security and software engineering. I specialize in security research, focusing heavily on penetration testing, red team concepts, and adversary simulation to uncover vulnerabilities before they can be exploited. When I'm not simulating attacks, I'm deep into reverse engineering - analyzing malware and decoding the unknown to unravel complex, compiled puzzles.
                  </p>
                  <p>
                    Beyond breaking things, I'm a builder at heart. I engineer full-stack web applications using PHP, JavaScript, and modern databases, architecting seamless digital experiences from the ground up. And if a specific tool doesn't exist to solve a problem I'm facing? I simply build it from scratch.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h3 className="text-[#c4b5fd] font-sans tracking-widest uppercase text-sm mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                      <GraduationCap size={18} />
                      Education
                    </h3>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h4 className="text-xl font-serif uppercase tracking-wide mb-2">Business College Helsinki</h4>
                      <p className="text-[#c4b5fd]/80 font-mono text-xs mb-4">08/2023 – 06/2026</p>
                      <p className="text-white/70 font-sans text-sm">Cybersecurity, ICT Degree (Kyberturvallisuus, TVT-tutkinto)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#c4b5fd] font-sans tracking-widest uppercase text-sm mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                      <Globe size={18} />
                      Languages
                    </h3>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-white/80 font-sans text-sm">English</span>
                        <span className="text-[#c4b5fd]/80 font-mono text-xs">Fluent</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-white/80 font-sans text-sm">Finnish</span>
                        <span className="text-[#c4b5fd]/80 font-mono text-xs">Fluent</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-white/80 font-sans text-sm">Mandarin & Cantonese</span>
                        <span className="text-[#c4b5fd]/80 font-mono text-xs">Fluent</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 font-sans text-sm">Swedish</span>
                        <span className="text-[#c4b5fd]/80 font-mono text-xs">Moderate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Skills Section */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="space-y-8"
              >
                <h3 className="text-[#c4b5fd] font-sans tracking-widest uppercase text-sm mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                  <Terminal size={18} />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#c4b5fd]/50 transition-colors duration-300">
                      <h4 className="text-lg font-serif uppercase tracking-wide mb-4 flex items-center gap-2 text-white/90">
                        {skillGroup.icon}
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item) => (
                          <span key={item} className="px-3 py-1 bg-white/10 rounded-full text-xs font-sans text-white/80">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
