/**
 * CALL TO ADVENTURE - O Fechamento + "ONE MORE THING"
 *
 * ROUNDTABLE v4.0 - Jobs-Lozano-DaVinci
 *
 * "O último scroll deve ser tão memorável quanto o primeiro." — Jobs
 * "Espelho do Hero: minimalista, com uma pergunta que ressoa." — Lozano
 * "One More Thing: algo que o leitor não esperava." — Jobs
 *
 * Este é o momento de conclusão. O leitor passou por toda a jornada.
 * Agora é a hora de devolver a responsabilidade + surpreender.
 */

import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Wrench, Download, ArrowRight, Sparkles } from 'lucide-react';

interface CallToAdventureProps {
  onOpenGlossary?: () => void;
  onOpenTools?: () => void;
}

const CallToAdventure: React.FC<CallToAdventureProps> = ({
  onOpenGlossary,
  onOpenTools
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState(0);
  const [showOneMoreThing, setShowOneMoreThing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sequência de revelação após visível
  useEffect(() => {
    if (isVisible && stage < 4) {
      const timeout = setTimeout(() => {
        setStage(s => s + 1);
      }, stage === 0 ? 500 : 1500);
      return () => clearTimeout(timeout);
    }
    // One more thing aparece depois do stage 4
    if (stage === 4) {
      const timeout = setTimeout(() => {
        setShowOneMoreThing(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, stage]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-[#030810] relative overflow-hidden"
    >
      {/* Minimal background - espelho do Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] via-[#030810] to-[#030810]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Stage 1: O que você viu */}
        <div
          className={`
            mb-16 transition-all duration-1000
            ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-white/40 text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8">
            Você acabou de ver
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm">
            <span className="px-3 py-1 border border-white/10 rounded-full">1879 → 2025</span>
            <span className="px-3 py-1 border border-white/10 rounded-full">46 anos → 2.5 anos</span>
            <span className="px-3 py-1 border border-white/10 rounded-full">30 anos em 36 meses</span>
          </div>
        </div>

        {/* Stage 2: A verdade central */}
        <div
          className={`
            mb-16 transition-all duration-1000
            ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            A Revolução Industrial
            <br />
            <span className="text-white/50">foi sobre máquinas.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/80">
            Esta é a <span className="text-white font-medium">Revolução Cognitiva</span>.
          </p>
          <p className="mt-2 text-lg text-white/50">
            É sobre a mente.
          </p>
        </div>

        {/* Stage 3: O insight */}
        <div
          className={`
            mb-16 py-8 border-y border-white/10 transition-all duration-1000
            ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Nunca na história o custo de <span className="text-white">criar</span> e
            <span className="text-white"> resolver problemas</span> foi tão baixo.
          </p>
          <p className="mt-4 text-white/40">
            A barreira em 2026 não será técnica.
            <br />
            Será <span className="text-white/70">curiosidade</span> e <span className="text-white/70">coragem de perguntar</span>.
          </p>
        </div>

        {/* Stage 4: A pergunta final - O espelho do Hero */}
        <div
          className={`
            transition-all duration-1000
            ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-white/30 text-sm font-mono uppercase tracking-widest mb-6">
            A pergunta final
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
            O relatório termina aqui.
          </p>
          <p className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            E você?
          </p>

          {/* Cursor piscando - como o Hero */}
          <div className={`mt-12 flex justify-center transition-opacity duration-500 ${showOneMoreThing ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-4 h-8 bg-white/80 animate-pulse" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            ONE MORE THING - Jobs Style
            Aparece DEPOIS da pergunta final, como surpresa
        ═══════════════════════════════════════════════════════════════ */}
        <div
          className={`
            mt-20 pt-12 border-t border-white/5 transition-all duration-1000
            ${showOneMoreThing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
          `}
        >
          {/* One more thing label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-[0.3em]">
              One more thing
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>

          {/* O reveal: META - O documento como prova viva */}
          <div className="bg-gradient-to-b from-cyan-950/20 to-transparent border border-cyan-500/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold">Este Documento é a Prova</span>
            </div>

            <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              Você acabou de ler <span className="text-white font-bold">17 seções</span> sobre a revolução da IA.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-3xl md:text-4xl font-display font-black text-white">72h</p>
                <p className="text-xs text-white/50 mt-1">para criar este relatório</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-3xl md:text-4xl font-display font-black text-white/30 line-through">3 meses</p>
                <p className="text-xs text-white/50 mt-1">há 2 anos atrás</p>
              </div>
            </div>

            <p className="text-sm text-white/60 max-w-md mx-auto">
              Pesquisa, escrita, design, código — tudo feito com IA como copiloto.
              <br />
              <span className="text-cyan-400/80">Este documento é o argumento.</span>
            </p>
          </div>

          {/* Action buttons - Acesso ao Codex */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* Glossário */}
            <button
              onClick={onOpenGlossary}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all group"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80 group-hover:text-white">Glossário</span>
            </button>

            {/* Ferramentas */}
            <button
              onClick={onOpenTools}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all group"
            >
              <Wrench className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80 group-hover:text-white">Ferramentas</span>
            </button>

            {/* Download/Share */}
            <button
              className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl transition-all group"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 group-hover:text-cyan-200">Salvar PDF</span>
            </button>
          </div>

          {/* CTA Final */}
          <div className="mt-12">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              <span>Reler do início</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Linha final - fecha o ciclo com o Hero */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default CallToAdventure;
