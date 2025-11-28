/**
 * ProgressNav Component
 *
 * Navegação fixa lateral com indicador de progresso.
 * Mostra onde o usuário está na jornada do dossiê.
 *
 * "Se você não sabe onde está, não sabe para onde vai." — Nicolas
 * "A navegação deve ser invisível até que você precise dela." — Frost
 */

import React, { useState, useEffect } from 'react';
import { acts, ActDefinition, getProgressPercentage } from '../../lib/theme';
import { Menu, X } from 'lucide-react';

interface ProgressNavProps {
  currentSection: string;
  onNavigate?: (sectionId: string) => void;
}

const ProgressNav: React.FC<ProgressNavProps> = ({
  currentSection,
  onNavigate
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const progress = getProgressPercentage(currentSection);

  // Show nav after initial scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      if (isMobileOpen) setIsMobileOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onNavigate?.(sectionId);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`
          fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block
          transition-all duration-500
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
        `}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Backdrop when expanded */}
        <div className={`
          absolute -inset-4 -left-48 bg-black/40 backdrop-blur-sm rounded-2xl
          transition-all duration-300
          ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `} />

        <div className="relative">
          {/* Progress bar vertical */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-slate-800/80 rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-700 ease-out"
              style={{ height: `${progress}%` }}
            />
            {/* Glow effect */}
            <div
              className="absolute w-2 h-8 -left-[3px] bg-cyan-400 blur-md rounded-full transition-all duration-700"
              style={{ top: `calc(${progress}% - 16px)` }}
            />
          </div>

          {/* Acts */}
          <div className="relative space-y-5">
            {acts.map((act) => (
              <ActGroup
                key={act.id}
                act={act}
                currentSection={currentSection}
                isExpanded={isExpanded}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </div>

        {/* Progress percentage */}
        <div className={`
          mt-6 text-center transition-all duration-300
          ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          <span className="text-[10px] font-mono text-slate-500 tracking-wider">
            {progress}% completo
          </span>
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileOpen(!isMobileOpen);
        }}
        className={`
          fixed bottom-6 right-6 z-[60] lg:hidden w-14 h-14
          bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-full
          flex items-center justify-center text-white
          shadow-[0_0_30px_rgba(0,0,0,0.5)]
          transition-all duration-500 touch-manipulation
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
        `}
      >
        <div className={`transition-transform duration-300 ${isMobileOpen ? 'rotate-90' : ''}`}>
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </div>
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="25"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          <circle
            cx="28"
            cy="28"
            r="25"
            fill="none"
            stroke="url(#progress-gradient-mobile)"
            strokeWidth="2"
            strokeDasharray={`${progress * 1.57} 157`}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
          <defs>
            <linearGradient id="progress-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Mobile Navigation Panel */}
      <div className={`
        fixed inset-0 z-[55] lg:hidden
        transition-opacity duration-300
        ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileOpen(false);
          }}
        />

        {/* Panel */}
        <div className={`
          absolute bottom-24 right-4 left-4 max-h-[65vh] overflow-y-auto
          bg-slate-900/95 border border-white/10 rounded-2xl p-5
          transition-all duration-300
          ${isMobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
            <span className="text-sm font-medium text-white">Navegação</span>
            <span className="text-xs font-mono text-cyan-400">{progress}%</span>
          </div>

          <div className="space-y-5">
            {acts.map((act) => (
              <div key={act.id}>
                <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] mb-2">
                  {act.name} — {act.subtitle}
                </h3>
                <div className="space-y-1">
                  {act.sections.map((section) => {
                    const isActive = section.id === currentSection;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleNavigate(section.id)}
                        className={`
                          w-full text-left px-4 py-2.5 rounded-xl transition-all duration-300
                          ${isActive
                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                            : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                          }
                        `}
                      >
                        <span className="text-sm">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Sub-component para grupo de ato
interface ActGroupProps {
  act: ActDefinition;
  currentSection: string;
  isExpanded: boolean;
  onNavigate: (sectionId: string) => void;
}

const ActGroup: React.FC<ActGroupProps> = ({
  act,
  currentSection,
  isExpanded,
  onNavigate
}) => {
  const isActActive = act.sections.some(s => s.id === currentSection);

  return (
    <div className="relative pl-6">
      {/* Act label */}
      <div className={`
        absolute -left-20 top-0 text-right w-16 transition-all duration-300
        ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
      `}>
        <span className={`
          text-[10px] font-mono uppercase tracking-wider
          ${isActActive ? 'text-cyan-400' : 'text-slate-600'}
        `}>
          {act.number === 0 ? 'Início' : act.number === 6 ? 'Fim' : `Ato ${act.number}`}
        </span>
      </div>

      {/* Section dots */}
      <div className="space-y-2">
        {act.sections.map((section) => {
          const isActive = section.id === currentSection;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group flex items-center gap-3"
              title={section.title}
            >
              {/* Dot */}
              <div className={`
                relative w-4 h-4 rounded-full border-2 transition-all duration-300
                ${isActive
                  ? 'border-cyan-400 bg-cyan-950 scale-125 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'border-slate-700 bg-slate-900 hover:border-slate-500 hover:scale-110'
                }
              `}>
                {isActive && (
                  <div className="absolute inset-[3px] bg-cyan-400 rounded-full" />
                )}
              </div>

              {/* Label (visible on hover/expand) */}
              <span className={`
                text-xs whitespace-nowrap transition-all duration-300
                ${isExpanded
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2 pointer-events-none'
                }
                ${isActive ? 'text-cyan-400 font-medium' : 'text-slate-500 group-hover:text-slate-300'}
              `}>
                {section.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressNav;
