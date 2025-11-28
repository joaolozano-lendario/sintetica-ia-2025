/**
 * FOOTER - O Fechamento Assinado
 *
 * ROUNDTABLE EDITION - Obra Autoral
 *
 * "O último pixel importa tanto quanto o primeiro." — Jobs
 * "O documento assina sua autenticidade." — Lozano
 * "Uma obra assinada pelos três." — Da Vinci
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 bg-[#030810] text-center relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-white/[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Marca temporal */}
        <p className="text-white/20 text-xs font-mono uppercase tracking-[0.3em] mb-8">
          Novembro 2025
        </p>

        {/* A conclusão */}
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white/80 leading-relaxed mb-8">
          "A IA deixou de ser código.
          <br />
          Agora é concreto, urânio e decisão."
        </h2>

        {/* Linha divisória */}
        <div className="w-16 h-px bg-white/10 mx-auto mb-10" />

        {/* ═══════════════════════════════════════════════════════════════
            ASSINATURA DO CONSELHO
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-6">
            Conselho Editorial
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Jobs */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                ⚫
              </div>
              <p className="text-white/80 font-medium text-sm">Steve Jobs</p>
              <p className="text-white/30 text-xs">Product Vision</p>
            </div>

            {/* Lozano */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-xl">
                🧠
              </div>
              <p className="text-white/80 font-medium text-sm">João Lozano</p>
              <p className="text-white/30 text-xs">Cognitive Architecture</p>
            </div>

            {/* Da Vinci */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-950/30 border border-purple-500/20 flex items-center justify-center text-xl">
                🎨
              </div>
              <p className="text-white/80 font-medium text-sm">Leonardo da Vinci</p>
              <p className="text-white/30 text-xs">Form & Proportion</p>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="pt-8 border-t border-white/5 space-y-3">
          <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
            SINTÉTICA 2025 • 30 anos em 36 meses
          </p>
          <p className="text-white/10 text-xs font-mono leading-relaxed">
            Este documento foi co-criado com IA em 72 horas.
            <br />
            Pesquisa, escrita, design, código — tudo com Claude como copiloto.
          </p>

          {/* Build signature */}
          <div className="pt-4">
            <p className="text-white/5 text-[10px] font-mono">
              v4.0 · Roundtable Edition · {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
