/**
 * AnatomicalMap - Navegação Visual do Documento
 *
 * ROUNDTABLE EDITION - Da Vinci Style
 *
 * "Imaginem: um mapa visual do documento inteiro. Como meus desenhos
 *  onde você vê o corpo todo e pode clicar em qualquer órgão para ir direto."
 *  — Leonardo da Vinci
 *
 * O leitor vê onde está, onde já foi, o que falta.
 * Navegação anatômica.
 */

import React, { useState, useEffect } from 'react';
import { X, Map } from 'lucide-react';
import { acts, getProgressPercentage } from '../../lib/theme';

interface AnatomicalMapProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const AnatomicalMap: React.FC<AnatomicalMapProps> = ({
  currentSection,
  onNavigate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const progress = getProgressPercentage(currentSection);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onNavigate(sectionId);
    setIsOpen(false);
  };

  // Check if section was visited (is before current)
  const allSections = acts.flatMap(act => act.sections.map(s => s.id));
  const currentIndex = allSections.indexOf(currentSection);
  const isSectionVisited = (sectionId: string) => {
    const sectionIndex = allSections.indexOf(sectionId);
    return sectionIndex < currentIndex;
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          fixed bottom-6 left-6 z-50 w-12 h-12 lg:w-14 lg:h-14
          bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-full
          flex items-center justify-center text-white
          shadow-[0_0_30px_rgba(0,0,0,0.5)]
          hover:border-cyan-500/30 hover:bg-slate-800/95
          transition-all duration-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
        `}
        title="Mapa do Documento"
      >
        <Map className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />

        {/* Progress indicator ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="url(#map-progress-gradient)"
            strokeWidth="2"
            strokeDasharray={`${progress * 2.83} 283`}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
          <defs>
            <linearGradient id="map-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Map Container */}
          <div className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center">
                  <Map className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Mapa Anatômico</h2>
                  <p className="text-xs text-slate-500">{progress}% do documento · {allSections.length} seções</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Map Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {acts.map((act, actIndex) => {
                  const isCurrentAct = act.sections.some(s => s.id === currentSection);

                  return (
                    <div key={act.id} className="relative">
                      {/* Connection line to next act */}
                      {actIndex < acts.length - 1 && (
                        <div className="absolute left-[1.375rem] top-full h-6 w-px bg-gradient-to-b from-white/10 to-transparent" />
                      )}

                      {/* Act Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`
                          w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold
                          ${isCurrentAct
                            ? 'bg-cyan-950/50 border border-cyan-500/30 text-cyan-400'
                            : 'bg-white/5 border border-white/10 text-white/40'
                          }
                        `}>
                          {act.number === 0 ? '◆' : act.number === 6 ? '★' : act.number}
                        </div>
                        <div>
                          <h3 className={`font-bold ${isCurrentAct ? 'text-white' : 'text-white/60'}`}>
                            {act.name}
                          </h3>
                          <p className="text-xs text-slate-500">{act.subtitle}</p>
                        </div>
                      </div>

                      {/* Sections Grid */}
                      <div className="ml-14 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {act.sections.map((section) => {
                          const isCurrent = section.id === currentSection;
                          const isVisited = isSectionVisited(section.id);

                          return (
                            <button
                              key={section.id}
                              onClick={() => handleNavigate(section.id)}
                              className={`
                                relative p-3 rounded-xl border text-left transition-all group
                                ${isCurrent
                                  ? 'bg-cyan-950/30 border-cyan-500/30'
                                  : isVisited
                                    ? 'bg-white/5 border-white/10 hover:border-white/20'
                                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                }
                              `}
                            >
                              {/* Status indicator */}
                              <div className={`
                                absolute top-2 right-2 w-2 h-2 rounded-full
                                ${isCurrent
                                  ? 'bg-cyan-400 animate-pulse'
                                  : isVisited
                                    ? 'bg-emerald-500/50'
                                    : 'bg-white/10'
                                }
                              `} />

                              {/* Emoji */}
                              <span className="text-lg mb-1 block">{section.emoji || '📄'}</span>

                              {/* Title */}
                              <span className={`
                                text-sm font-medium block leading-tight
                                ${isCurrent
                                  ? 'text-cyan-300'
                                  : isVisited
                                    ? 'text-white/80 group-hover:text-white'
                                    : 'text-white/40 group-hover:text-white/60'
                                }
                              `}>
                                {section.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Legend */}
            <div className="p-4 border-t border-white/5 flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-400">Você está aqui</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="text-slate-400">Visitado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <span className="text-slate-400">Não visitado</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnatomicalMap;
