/**
 * Breather Component
 *
 * Momentos de respiração entre atos do dossiê.
 * Dá tempo ao cérebro de processar informação densa.
 *
 * "A pausa é tão importante quanto a nota." — Jobs
 */

import React from 'react';
import { BreatherConfig } from '../../lib/theme';

interface BreatherProps extends BreatherConfig {
  className?: string;
}

const Breather: React.FC<BreatherProps> = ({
  type,
  content,
  author,
  stat,
  statLabel,
  className = ''
}) => {
  // Quote: Full-width citação dramática
  if (type === 'quote') {
    return (
      <div
        className={`
          relative min-h-[50vh] flex items-center justify-center
          bg-black
          ${className}
        `}
      >
        {/* Gradiente sutil no topo e fundo */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050b14] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050b14] to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl text-white/90 font-light italic leading-relaxed">
            "{content}"
          </blockquote>
          {author && (
            <cite className="block mt-8 text-sm md:text-base text-slate-500 font-mono uppercase tracking-widest not-italic">
              — {author}
            </cite>
          )}
        </div>

        {/* Linha decorativa */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>
    );
  }

  // Stat: Número gigante impactante
  if (type === 'stat') {
    return (
      <div
        className={`
          relative min-h-[60vh] flex flex-col items-center justify-center
          bg-gradient-to-b from-[#050b14] via-black to-[#050b14]
          ${className}
        `}
      >
        {/* Glow effect atrás do número */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 text-center">
          <span className="block text-[8rem] md:text-[12rem] lg:text-[16rem] font-display font-bold text-white/10 leading-none select-none">
            {stat}
          </span>
          {statLabel && (
            <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-8 leading-relaxed">
              {statLabel}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Visual: Gradiente animado / pattern
  if (type === 'visual') {
    return (
      <div
        className={`
          relative h-[40vh] overflow-hidden
          ${className}
        `}
      >
        {/* Gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Orbs flutuantes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Linha central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    );
  }

  // Silence: Espaço vazio intencional
  if (type === 'silence') {
    return (
      <div
        className={`
          relative h-[30vh]
          bg-gradient-to-b from-transparent via-black/50 to-transparent
          ${className}
        `}
      >
        {/* Apenas respiro visual sutil */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white/10 rounded-full" />
        </div>
      </div>
    );
  }

  return null;
};

export default Breather;
