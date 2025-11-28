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
  // Stages: 0=black, 1=question, 2=electricity, 3=internet, 4=ai, 5=reveal, 6=full

  useEffect(() => {
    const timings = [1500, 2500, 2000, 2000, 2000, 2500];

    if (stage < 6) {
      const timeout = setTimeout(() => {
        setStage(s => s + 1);
      }, timings[stage] || 2000);

      return () => clearTimeout(timeout);
    }
  }, [stage]);

  // Allow skip on click/scroll after stage 1
  const handleSkip = () => {
    if (stage > 0 && stage < 6) {
      setStage(6);
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
            <p className="text-xl md:text-2xl text-slate-400 font-light mb-16">
              Quanto tempo uma tecnologia leva para mudar o mundo?
            </p>
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

        {/* Stage 5-6: The Reveal */}
        <div className={`transition-all duration-1000 delay-300 ${stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stage >= 5 && (
            <>
              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 tracking-tight">
                SINTÉTICA
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500">
                  2025
                </span>
              </h1>

              {/* The Punchline - Dado auditado SINT-001 */}
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-8">
                <strong className="text-white font-medium">30 anos de transformação industrial</strong>
                <br />
                <span className="text-slate-400">comprimidos em 36 meses.</span>
              </p>

              {/* Meta Statement - Reformulado por Jobs */}
              <div className={`transition-all duration-1000 delay-500 ${stage >= 6 ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-sm text-slate-500 max-w-xl mx-auto border-l-2 border-cyan-500/30 pl-4 text-left">
                  Este documento foi escrito com IA.
                  <span className="text-slate-400"> Você está lendo o futuro, criado pelo futuro.</span>
                </p>
              </div>
            </>
          )}
        </div>

      </div>

      {/* Scroll Indicator - Only after full reveal */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${stage >= 6 ? 'opacity-60' : 'opacity-0'}`}>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
          {stage < 6 ? 'Clique para pular' : 'Scroll'}
        </span>
        <ChevronDown className="w-5 h-5 text-slate-500 animate-bounce" />
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
};

export default Hero;
