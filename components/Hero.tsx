/**
 * HERO - SEQUÊNCIA SOCRÁTICA
 *
 * Redesenhado por Steve Jobs + João Lozano
 * "O dado é o drama. Deixa o número falar." — Jobs
 * "Calibração de Gravitação Semântica em sua forma mais pura." — Lozano
 */

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// =============================================================================
// DADOS AUDITADOS (Fonte: gap-analysis-audit.md + SINT-001)
// =============================================================================
const COMPRESSION_DATA = [
  { tech: 'Eletricidade', years: 46, human: 'Uma vida inteira de espera' },
  { tech: 'Internet', years: 7, human: 'Uma geração de adaptação' },
  { tech: 'IA Generativa', years: 2.5, human: 'Um piscar de olhos', highlight: true },
];

// =============================================================================
// HERO COMPONENT - SEQUÊNCIA SOCRÁTICA
// =============================================================================
const Hero: React.FC = () => {
  const [stage, setStage] = useState(0);
  // Stages: 0=black, 1=question, 2=electricity, 3=internet, 4=ai, 5=title, 6=line1, 7=line2, 8=line3, 9=meta, 10=full

  useEffect(() => {
    // Timings for each stage transition
    const timings = [1500, 2500, 2000, 2000, 2000, 1200, 800, 800, 800, 1500];

    if (stage < 10) {
      const timeout = setTimeout(() => {
        setStage(s => s + 1);
      }, timings[stage] || 1000);

      return () => clearTimeout(timeout);
    }
  }, [stage]);

  // Allow skip on click/scroll after stage 1
  const handleSkip = () => {
    if (stage > 0 && stage < 10) {
      setStage(10);
    }
  };

  return (
    <section
      onClick={handleSkip}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#030810] cursor-pointer"
    >
      {/* Minimal Background - Jobs: "Sem parallax, sem noise desnecessário" */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030810] via-[#050b14] to-[#0a1525]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 blur-[200px] rounded-full" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Stage 1: The Question */}
        <div className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          {stage >= 1 && stage < 5 && (
            <div className="mb-16">
              <p className="text-xs font-mono text-cyan-500/60 uppercase tracking-[0.3em] mb-4">
                Academia Lendária apresenta
              </p>
              <p className="text-2xl md:text-3xl text-white/80 font-light mb-6">
                Welcome to the Future.
              </p>
              <p className="text-lg md:text-xl text-slate-500 font-light">
                Quanto tempo uma tecnologia leva para mudar o mundo?
              </p>
            </div>
          )}
        </div>

        {/* Stage 2-4: The Numbers - Rosling Style */}
        <div className="space-y-8 mb-16">

          {/* Electricity */}
          <div className={`transition-all duration-1000 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 2 && (
              <div className={`${stage >= 5 ? 'scale-75 opacity-50' : ''} transition-all duration-700`}>
                <p className="text-6xl md:text-8xl font-display font-bold text-amber-500/80 mb-2">
                  46 <span className="text-3xl md:text-4xl text-amber-500/60">anos</span>
                </p>
                <p className="text-slate-500 text-sm md:text-base font-mono uppercase tracking-wider">
                  Eletricidade — {COMPRESSION_DATA[0].human}
                </p>
              </div>
            )}
          </div>

          {/* Internet */}
          <div className={`transition-all duration-1000 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 3 && (
              <div className={`${stage >= 5 ? 'scale-75 opacity-50' : ''} transition-all duration-700`}>
                <p className="text-6xl md:text-8xl font-display font-bold text-blue-500/80 mb-2">
                  7 <span className="text-3xl md:text-4xl text-blue-500/60">anos</span>
                </p>
                <p className="text-slate-500 text-sm md:text-base font-mono uppercase tracking-wider">
                  Internet — {COMPRESSION_DATA[1].human}
                </p>
              </div>
            )}
          </div>

          {/* AI - The Punch */}
          <div className={`transition-all duration-1000 ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 4 && (
              <div className={`${stage >= 5 ? 'scale-110' : ''} transition-all duration-700`}>
                <p className="text-7xl md:text-9xl font-display font-black text-emerald-400 mb-2">
                  2,5 <span className="text-4xl md:text-5xl text-emerald-400/80">anos</span>
                </p>
                <p className="text-emerald-300/80 text-sm md:text-base font-mono uppercase tracking-wider">
                  IA Generativa — {COMPRESSION_DATA[2].human}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stage 5+: The Reveal - Sequência escalonada */}
        <div className="space-y-6">
          {/* Title - Stage 5 */}
          <div className={`transition-all duration-1000 ${stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 5 && (
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-8 tracking-tight">
                SINTÉTICA
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500">
                  2025
                </span>
              </h1>
            )}
          </div>

          {/* Punchline Line 1 - Stage 6 */}
          <div className={`transition-all duration-700 ${stage >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 6 && (
              <p className="text-xl md:text-2xl text-white font-medium">
                30 anos de transformação industrial.
              </p>
            )}
          </div>

          {/* Punchline Line 2 - Stage 7 */}
          <div className={`transition-all duration-700 ${stage >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 7 && (
              <p className="text-xl md:text-2xl text-slate-400 font-light">
                36 meses para absorver.
              </p>
            )}
          </div>

          {/* Punchline Line 3 - Stage 8 */}
          <div className={`transition-all duration-700 ${stage >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 8 && (
              <p className="text-lg md:text-xl text-white/60 font-light">
                Bem-vindo ao ponto de inflexão.
              </p>
            )}
          </div>

          {/* Meta Statement - Stage 9 */}
          <div className={`transition-all duration-1000 pt-8 ${stage >= 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 9 && (
              <p className="text-sm text-slate-500 max-w-xl mx-auto border-l-2 border-cyan-500/30 pl-4 text-left">
                Este documento foi criado em 48h com IA.
                <span className="text-slate-400"> Uma demonstração prática de que o futuro já chegou.</span>
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Scroll Indicator - Only after full reveal */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${stage >= 10 ? 'opacity-60' : 'opacity-0'}`}>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-slate-500 animate-bounce" />
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
};

export default Hero;
