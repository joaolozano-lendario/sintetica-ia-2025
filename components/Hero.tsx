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
  // Stages:
  // 0=black
  // 1=academia lendária
  // 2=welcome to the future
  // 3=pergunta
  // 4=electricity
  // 5=internet
  // 6=ai
  // 7=title SINTÉTICA
  // 8=line1 "30 anos..."
  // 9=line2 "36 meses..."
  // 10=line3 "Bem-vindo..."
  // 11=meta "48h..."
  // 12=full (scroll indicator)

  useEffect(() => {
    // Timings for each stage transition (ms)
    const timings = [
      1200,  // 0→1: black → academia
      1000,  // 1→2: academia → welcome
      1200,  // 2→3: welcome → pergunta
      2000,  // 3→4: pergunta → electricity
      1800,  // 4→5: electricity → internet
      1800,  // 5→6: internet → ai
      2200,  // 6→7: ai → title
      1000,  // 7→8: title → line1
      800,   // 8→9: line1 → line2
      800,   // 9→10: line2 → line3
      1000,  // 10→11: line3 → meta
      1500,  // 11→12: meta → full
    ];

    if (stage < 12) {
      const timeout = setTimeout(() => {
        setStage(s => s + 1);
      }, timings[stage] || 1000);

      return () => clearTimeout(timeout);
    }
  }, [stage]);

  // Allow skip on click after stage 1
  const handleSkip = () => {
    if (stage > 0 && stage < 12) {
      setStage(12);
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

        {/* Opening Sequence - Cada elemento separado */}
        <div className="mb-16">
          {/* Stage 1: Academia Lendária */}
          <div className={`transition-all duration-700 ${stage >= 1 && stage < 7 ? 'opacity-100' : 'opacity-0'}`}>
            {stage >= 1 && stage < 7 && (
              <p className="text-xs font-mono text-cyan-500/60 uppercase tracking-[0.3em] mb-6">
                Academia Lendária apresenta
              </p>
            )}
          </div>

          {/* Stage 2: Welcome to the Future */}
          <div className={`transition-all duration-700 ${stage >= 2 && stage < 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 2 && stage < 7 && (
              <p className="text-2xl md:text-3xl text-white/80 font-light mb-8">
                Welcome to the Future.
              </p>
            )}
          </div>

          {/* Stage 3: A Pergunta */}
          <div className={`transition-all duration-700 ${stage >= 3 && stage < 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 3 && stage < 7 && (
              <p className="text-lg md:text-xl text-slate-500 font-light">
                Quanto tempo uma tecnologia leva para mudar o mundo?
              </p>
            )}
          </div>
        </div>

        {/* Stage 4-6: The Numbers - Rosling Style */}
        <div className="space-y-8 mb-16">

          {/* Electricity - Stage 4 */}
          <div className={`transition-all duration-1000 ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 4 && (
              <div className={`${stage >= 7 ? 'scale-75 opacity-50' : ''} transition-all duration-700`}>
                <p className="text-6xl md:text-8xl font-display font-bold text-amber-500/80 mb-2">
                  46 <span className="text-3xl md:text-4xl text-amber-500/60">anos</span>
                </p>
                <p className="text-slate-500 text-sm md:text-base font-mono uppercase tracking-wider">
                  Eletricidade — {COMPRESSION_DATA[0].human}
                </p>
              </div>
            )}
          </div>

          {/* Internet - Stage 5 */}
          <div className={`transition-all duration-1000 ${stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 5 && (
              <div className={`${stage >= 7 ? 'scale-75 opacity-50' : ''} transition-all duration-700`}>
                <p className="text-6xl md:text-8xl font-display font-bold text-blue-500/80 mb-2">
                  7 <span className="text-3xl md:text-4xl text-blue-500/60">anos</span>
                </p>
                <p className="text-slate-500 text-sm md:text-base font-mono uppercase tracking-wider">
                  Internet — {COMPRESSION_DATA[1].human}
                </p>
              </div>
            )}
          </div>

          {/* AI - The Punch - Stage 6 */}
          <div className={`transition-all duration-1000 ${stage >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 6 && (
              <div className={`${stage >= 7 ? 'scale-110' : ''} transition-all duration-700`}>
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

        {/* Stage 7+: The Reveal - Sequência escalonada */}
        <div className="space-y-6">
          {/* Title - Stage 7 */}
          <div className={`transition-all duration-1000 ${stage >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stage >= 7 && (
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-8 tracking-tight">
                SINTÉTICA
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500">
                  2025
                </span>
              </h1>
            )}
          </div>

          {/* Punchline Line 1 - Stage 8 */}
          <div className={`transition-all duration-700 ${stage >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 8 && (
              <p className="text-xl md:text-2xl text-white font-medium">
                30 anos de transformação industrial.
              </p>
            )}
          </div>

          {/* Punchline Line 2 - Stage 9 */}
          <div className={`transition-all duration-700 ${stage >= 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 9 && (
              <p className="text-xl md:text-2xl text-slate-400 font-light">
                36 meses para absorver.
              </p>
            )}
          </div>

          {/* Punchline Line 3 - Stage 10 */}
          <div className={`transition-all duration-700 ${stage >= 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 10 && (
              <p className="text-lg md:text-xl text-white/60 font-light">
                Bem-vindo ao ponto de inflexão.
              </p>
            )}
          </div>

          {/* Meta Statement - Stage 11 */}
          <div className={`transition-all duration-1000 pt-8 ${stage >= 11 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stage >= 11 && (
              <p className="text-sm text-slate-500 max-w-xl mx-auto border-l-2 border-cyan-500/30 pl-4 text-left">
                Este documento foi criado em 48h com IA.
                <span className="text-slate-400"> Uma demonstração prática de que o futuro já chegou.</span>
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Scroll Indicator - Only after full reveal (Stage 12) */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${stage >= 12 ? 'opacity-60' : 'opacity-0'}`}>
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
