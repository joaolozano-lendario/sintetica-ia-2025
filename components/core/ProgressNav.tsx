/**
 * ProgressNav Component
 *
 * Navegação fixa lateral com indicador de progresso.
 * Mostra onde o usuário está na jornada do dossiê.
 *
 * "Se você não sabe onde está, não sabe para onde vai." — Nicolas
 */

import React, { useState, useEffect } from 'react';
import { acts, ActDefinition, getProgressPercentage } from '../../lib/theme';
import { ChevronRight, Menu, X } from 'lucide-react';

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

  const progress = getProgressPercentage(currentSection);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onNavigate?.(sectionId);
    setIsMobileOpen(false);
  };

  // Fecha menu mobile ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) setIsMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="relative">
          {/* Progress bar vertical */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-slate-800 rounded-full">
            <div
              className="w-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ height: `${progress}%` }}
            />
          </div>

          {/* Acts */}
          <div className="relative space-y-6">
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
          ${isExpanded ? 'opacity-100' : 'opacity-0'}
        `}>
          <span className="text-xs font-mono text-slate-500">
            {progress}%
          </span>
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        {/* Mini progress indicator */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="2"
            strokeDasharray={`${progress * 1.63} 163`}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Mobile Navigation Panel */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Panel */}
          <div className="absolute bottom-24 right-6 left-6 max-h-[60vh] overflow-y-auto bg-slate-900/95 border border-white/10 rounded-2xl p-4">
            <div className="space-y-4">
              {acts.map((act) => (
                <div key={act.id}>
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    {act.name}: {act.subtitle}
                  </h3>
                  <div className="space-y-1">
                    {act.sections.map((section) => {
                      const isActive = section.id === currentSection;
                      return (
                        <button
                          key={section.id}
                          onClick={() => handleNavigate(section.id)}
                          className={`
                            w-full text-left px-3 py-2 rounded-lg transition-all
                            ${isActive
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'text-slate-400 hover:bg-white/5 hover:text-white'
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
      )}
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
    <div className="relative pl-5">
      {/* Act label */}
      <div className={`
        absolute -left-16 top-0 text-right w-14 transition-all duration-300
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
            >
              {/* Dot */}
              <div className={`
                relative w-4 h-4 rounded-full border-2 transition-all duration-300
                ${isActive
                  ? 'border-cyan-400 bg-cyan-400/20 scale-125'
                  : 'border-slate-700 bg-[#050b14] hover:border-slate-500'
                }
              `}>
                {isActive && (
                  <div className="absolute inset-1 bg-cyan-400 rounded-full animate-pulse" />
                )}
              </div>

              {/* Label (visible on hover/expand) */}
              <span className={`
                text-xs whitespace-nowrap transition-all duration-300
                ${isExpanded
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2 pointer-events-none'
                }
                ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}
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
