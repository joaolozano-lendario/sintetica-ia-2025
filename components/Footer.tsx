/**
 * FOOTER - O Fechamento
 *
 * "O último pixel importa tanto quanto o primeiro." — Jobs
 * "O documento assina sua autenticidade." — Lozano
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-[#030810] text-center relative overflow-hidden">
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
        <div className="w-16 h-px bg-white/10 mx-auto mb-8" />

        {/* Assinatura */}
        <div className="mb-12">
          <p className="text-white/60 text-sm mb-1">Curadoria & Síntese</p>
          <p className="text-white font-medium">João Lozano</p>
        </div>

        {/* Meta */}
        <div className="pt-8 border-t border-white/5 space-y-2">
          <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
            SINTÉTICA 2025 • 30 anos em 36 meses
          </p>
          <p className="text-white/10 text-xs font-mono">
            Este documento foi co-criado com IA.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
