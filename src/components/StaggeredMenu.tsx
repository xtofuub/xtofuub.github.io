import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import './StaggeredMenu.css';

interface StaggeredMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onExperienceClick: () => void;
}

const menuItems = [
  { label: 'Home', action: 'close' },
  { label: 'Projects', action: 'projects' },
  { label: 'About', action: 'about' },
  { label: 'Experience', action: 'experience' },
  { label: 'GitHub', action: 'github' },
  { label: 'Contact', action: 'close' },
];

const socialItems = [
  { name: 'GitHub', url: 'https://github.com/xtofuub' },
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter', url: '#' }
];

export default function StaggeredMenu({ isOpen, setIsOpen, onProjectsClick, onAboutClick, onExperienceClick }: StaggeredMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const socialsTitleRef = useRef<HTMLDivElement>(null);
  const socialsLinksRef = useRef<HTMLDivElement>(null);
  const textMenuRef = useRef<HTMLDivElement>(null);
  const textCloseRef = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initialize GSAP properties to avoid CSS transform conflicts
    gsap.set([prelayer1Ref.current, prelayer2Ref.current, panelRef.current], { xPercent: 100 });
    gsap.set(linksRef.current, { yPercent: 140, rotation: 10 });
    gsap.set([socialsTitleRef.current, socialsLinksRef.current], { yPercent: 100 });

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to([prelayer1Ref.current, prelayer2Ref.current, panelRef.current], {
        xPercent: 0,
        duration: 0.8,
        ease: 'power4.inOut',
        stagger: 0.1,
      })
      .to(
        linksRef.current,
        {
          yPercent: 0,
          rotation: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.05,
        },
        '-=0.4'
      )
      .to(
        [socialsTitleRef.current, socialsLinksRef.current],
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
        },
        '-=0.8'
      );

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
      gsap.to(textMenuRef.current, { yPercent: -100, duration: 0.5, ease: 'power3.inOut' });
      gsap.to(textCloseRef.current, { yPercent: -100, duration: 0.5, ease: 'power3.inOut' });
    } else {
      tl.current?.reverse();
      gsap.to(textMenuRef.current, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' });
      gsap.to(textCloseRef.current, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  const handleItemClick = (action: string) => {
    if (action === 'projects') {
      onProjectsClick();
      setIsOpen(false);
    } else if (action === 'about') {
      onAboutClick();
      setIsOpen(false);
    } else if (action === 'experience') {
      onExperienceClick();
      setIsOpen(false);
    } else if (action === 'github') {
      window.open('https://github.com/xtofuub', '_blank');
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`menu-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <button
        className={`menu-toggle-btn ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="menu-toggle-text-wrapper">
          <div ref={textMenuRef} className="menu-toggle-text">Menu</div>
          <div ref={textCloseRef} className="menu-toggle-text">Close</div>
        </div>
        <Plus className="menu-toggle-icon" size={20} />
      </button>

      <div className="staggered-menu-container" ref={containerRef}>
        <div className="staggered-menu-prelayer staggered-menu-prelayer-1" ref={prelayer1Ref} />
        <div className="staggered-menu-prelayer staggered-menu-prelayer-2" ref={prelayer2Ref} />
        <div className="staggered-menu-panel" ref={panelRef}>
          <ul className="menu-items-list">
            {menuItems.map((item, index) => (
              <li key={item.label} className="menu-item">
                <a
                  href="#"
                  ref={(el) => { linksRef.current[index] = el; }}
                  className="menu-item-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.action);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="menu-socials">
            <div className="menu-socials-title" ref={socialsTitleRef}>
              Socials
            </div>
            <div className="menu-socials-links" ref={socialsLinksRef}>
              {socialItems.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="menu-social-link">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
