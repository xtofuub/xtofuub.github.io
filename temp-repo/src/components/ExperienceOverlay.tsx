import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const experienceData = [
  {
    id: 1,
    role: "Malware Analysis & Cyber Threat Intelligence",
    company: "Fitsec Ltd",
    period: "01/2026 – 05/2026",
    location: "Helsinki, Finland",
    description: "Analyzed malware and cyber threats, produced threat intelligence reports, and supported organizational defense. Participated in incident response and developed recommendations to improve system security."
  },
  {
    id: 2,
    role: "Digital Caretaker / IT Support",
    company: "Kirjasto IT",
    period: "10/2024 – 12/2024",
    location: "Helsinki, Finland",
    description: "Managed versatile IT tasks across three library branches. Guided customers in using technology, maintained hardware and software, and resolved technical issues."
  },
  {
    id: 3,
    role: "IT Support Specialist",
    company: "Business College",
    period: "12/2023 – 08/2024",
    location: "Helsinki, Finland",
    description: "Assisted students and teachers with technical problems, software installations, device deployments, and troubleshooting."
  },
  {
    id: 4,
    role: "Assistant",
    company: "Leikkipuisto Munkki",
    period: "07/2024 – 08/2024",
    location: "Helsinki, Finland",
    description: "Early childhood education assistant, supporting daily activities and group operations."
  },
  {
    id: 5,
    role: "Store Assistant",
    company: "K-Market Myyrmäki",
    period: "08/2021",
    location: "Vantaa, Finland",
    description: "Customer service and store maintenance during TET internship."
  }
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
              Experience
            </motion.h2>
            
            <div className="space-y-8 pb-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {experienceData.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ y: 50, opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#13111C] text-[#c4b5fd] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(196,181,253,0.2)] z-10">
                    <Briefcase size={16} />
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 hover:border-[#c4b5fd]/50 hover:bg-white/10 transition-all duration-300 rounded-lg p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-serif uppercase tracking-wide text-white group-hover:text-[#c4b5fd] transition-colors">
                        {job.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c4b5fd]/10 text-[#c4b5fd] text-xs font-mono whitespace-nowrap">
                        <Calendar size={12} />
                        {job.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm font-sans text-white/60">
                      <span className="font-medium text-white/80">{job.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                    
                    <p className="text-white/70 font-sans text-sm leading-relaxed">
                      {job.description}
                    </p>
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
