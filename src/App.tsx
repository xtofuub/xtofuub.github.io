import { useState } from 'react';
import { motion } from 'motion/react';
import RippleTrail from './components/RippleTrail';
import StaggeredMenu from './components/StaggeredMenu';
import ProjectsOverlay from './components/ProjectsOverlay';
import AboutOverlay from './components/AboutOverlay';
import ExperienceOverlay from './components/ExperienceOverlay';

const textVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] } },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const isAnyOverlayOpen = isProjectsOpen || isAboutOpen || isExperienceOpen;

  return (
    <div className="relative min-h-screen w-full bg-[#13111C] text-white overflow-hidden font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: isAnyOverlayOpen ? 'blur(12px)' : 'blur(0px)',
            transition: `filter ${isAnyOverlayOpen ? '1.56s' : '1.3s'} cubic-bezier(0.19, 1, 0.22, 1)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Ripple Trail Effect */}
      <RippleTrail />

      {/* Main Content */}
      <div className="relative z-20 h-screen w-full pointer-events-none">
        <motion.div
          className="absolute top-[96px] left-[20px] md:left-[96px] flex flex-col items-start"
          initial="hidden"
          animate={!isAnyOverlayOpen ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
          }}
        >
          <div className="text-[64px] md:text-[140px] font-serif font-normal leading-none drop-shadow-2xl tracking-normal uppercase">
            <div className="overflow-hidden"><motion.div variants={textVariants}>Hello, I'm</motion.div></div>
            <div className="overflow-hidden"><motion.div variants={textVariants} className="italic">Edwin.</motion.div></div>
            <div className="overflow-hidden"><motion.div variants={textVariants}>Cybersecurity</motion.div></div>
            <div className="overflow-hidden"><motion.div variants={textVariants} className="italic">Specialist.</motion.div></div>
          </div>

          <motion.p
            variants={textVariants}
            className="mt-8 ml-0 md:ml-[35%] translate-x-0 md:translate-x-[100px] text-[10px] md:text-xs font-normal w-[260px] text-left md:text-justify leading-relaxed drop-shadow-md tracking-widest uppercase"
          >
            I BUILD SECURE SYSTEMS, BREAK THEM TO MAKE THEM STRONGER, AND ENGINEER TOOLS FROM SCRATCH. PASSIONATE ABOUT RED TEAMING, REVERSE ENGINEERING, AND FULL-STACK DEVELOPMENT.
          </motion.p>
        </motion.div>

        {/* JOIN THE CLUB Button -> VIEW GITHUB */}
        <motion.div
          className={`absolute bottom-8 right-8 z-50 pointer-events-none ${isMenuOpen ? 'hidden md:block' : ''}`}
          initial="hidden"
          animate={!isAnyOverlayOpen ? 'visible' : 'hidden'}
          variants={textVariants}
          style={{
            transform: isMenuOpen ? 'translateX(calc(-1 * clamp(260px, 38vw, 420px)))' : 'translateX(0)',
            transition: 'transform 1.0s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          <a
            href="https://github.com/xtofuub"
            target="_blank"
            rel="noopener noreferrer"
            className={`pointer-events-auto inline-block px-6 py-3 text-[13px] md:px-12 md:py-5 md:text-[18px] font-normal tracking-[0.15em] backdrop-blur-md uppercase transition-colors duration-300 ${
              isMenuOpen
                ? 'bg-[#c4b5fd] text-black hover:bg-white'
                : 'bg-white text-black hover:bg-[#c4b5fd]'
            }`}
          >
            VIEW GITHUB
          </a>
        </motion.div>
      </div>

      {/* Staggered Navigation Menu */}
      <StaggeredMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        onProjectsClick={() => setIsProjectsOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
        onExperienceClick={() => setIsExperienceOpen(true)}
      />

      {/* Overlays */}
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
