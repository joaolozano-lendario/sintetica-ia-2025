/**
 * Act Component
 *
 * Wrapper para agrupar seções em atos narrativos.
 * Headers visuais dramáticos que marcam transições.
 *
 * "A estrutura cria liberdade." — Frost
 * "O número gigante no fundo é o ego do ato sussurrando." — Jobs
 */

import React from 'react';
import { ThemeTemperature, temperatures } from '../../lib/theme';

interface ActProps {
  id: string;
  number: number;
  name: string;
  subtitle: string;
  theme: ThemeTemperature;
  showHeader?: boolean;
  children: React.ReactNode;
}

const Act: React.FC<ActProps> = ({
  id,
  number,
  name,
  subtitle,
  theme,
  showHeader = false,
  children
}) => {
  const bgClasses: Record<ThemeTemperature, string> = {
    cold: 'bg-[#030810]',
    cool: 'bg-[#050b14]',
    neutral: 'bg-[#0f172a]',
    warm: 'bg-[#1a1a2e]',
    hot: 'bg-[#1a0a0a]'
  };

  return (
    <div
      id={`act-${id}`}
      className={`relative ${bgClasses[theme]}`}
      data-act={number}
      data-theme={theme}
    >
      {/* Act Header (para atos 1-5) */}
      {showHeader && number > 0 && number < 6 && (
        <ActHeader
          number={number}
          name={name}
          subtitle={subtitle}
          theme={theme}
        />
      )}

      {/* Conteúdo do Ato */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

// =============================================================================
// ACT HEADER - Visual dramático de transição
// =============================================================================

interface ActHeaderProps {
  number: number;
  name: string;
  subtitle: string;
  theme: ThemeTemperature;
}

const ActHeader: React.FC<ActHeaderProps> = ({
  number,
  name,
  subtitle,
  theme
}) => {
  // Configurações por tema (hardcoded para Tailwind)
  const themeStyles: Record<ThemeTemperature, {
    badge: string;
    dot: string;
    line: string;
    glow: string;
  }> = {
    cold: {
      badge: 'bg-cyan-950/50 border-cyan-500/30 text-cyan-400',
      dot: 'bg-cyan-400',
      line: 'from-transparent via-cyan-500/50 to-transparent',
      glow: 'bg-cyan-500/20'
    },
    cool: {
      badge: 'bg-blue-950/50 border-blue-500/30 text-blue-400',
      dot: 'bg-blue-400',
      line: 'from-transparent via-blue-500/50 to-transparent',
      glow: 'bg-blue-500/20'
    },
    neutral: {
      badge: 'bg-slate-800/50 border-slate-500/30 text-slate-400',
      dot: 'bg-slate-400',
      line: 'from-transparent via-slate-500/50 to-transparent',
      glow: 'bg-slate-500/20'
    },
    warm: {
      badge: 'bg-purple-950/50 border-purple-500/30 text-purple-400',
      dot: 'bg-purple-400',
      line: 'from-transparent via-purple-500/50 to-transparent',
      glow: 'bg-purple-500/20'
    },
    hot: {
      badge: 'bg-orange-950/50 border-orange-500/30 text-orange-400',
      dot: 'bg-orange-400',
      line: 'from-transparent via-orange-500/50 to-transparent',
      glow: 'bg-orange-500/20'
    }
  };

  const styles = themeStyles[theme];

  // Subtítulos descritivos por ato
  const actDescriptions: Record<number, string> = {
    1: 'O que aconteceu em 2025',
    2: 'Quando a IA ganhou corpo',
    3: 'O mundo digital transformado',
    4: 'Os riscos que não podemos ignorar',
    5: 'Preparando-se para o que vem'
  };

  return (
    <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">

      {/* Background: Número gigante */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[16rem] md:text-[24rem] lg:text-[32rem] font-display font-black text-white/[0.015] leading-none">
          {number}
        </span>
      </div>

      {/* Glow central */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${styles.glow} blur-[150px] rounded-full opacity-50`} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* Act badge */}
        <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-sm ${styles.badge} mb-8`}>
          <span className={`w-2 h-2 rounded-full animate-pulse ${styles.dot}`} />
          <span className="text-xs font-mono uppercase tracking-[0.2em]">{name}</span>
        </div>

        {/* Subtitle principal */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6">
          {subtitle}
        </h2>

        {/* Descrição do ato */}
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto">
          {actDescriptions[number]}
        </p>

        {/* Decorative line */}
        <div className={`mx-auto mt-12 w-32 h-0.5 rounded-full bg-gradient-to-r ${styles.line}`} />

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-inherit to-transparent pointer-events-none" />
    </div>
  );
};

export default Act;
