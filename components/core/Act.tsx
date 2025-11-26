/**
 * Act Component
 *
 * Wrapper para agrupar seções em atos narrativos.
 * Headers visuais dramáticos que marcam transições.
 *
 * "A estrutura cria liberdade." — Frost
 * "O número gigante no fundo é o ego do ato sussurrando." — Jobs
 */

import React, { useEffect, useRef, useState } from 'react';
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
// ACT HEADER - Visual dramático de transição com animações
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
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para trigger de animação
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Configurações por tema (hardcoded para Tailwind)
  const themeStyles: Record<ThemeTemperature, {
    badge: string;
    badgeGlow: string;
    dot: string;
    dotGlow: string;
    line: string;
    glow: string;
    textGlow: string;
  }> = {
    cold: {
      badge: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-400',
      badgeGlow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]',
      dot: 'bg-cyan-400',
      dotGlow: 'shadow-[0_0_10px_rgba(6,182,212,0.8)]',
      line: 'from-transparent via-cyan-500/50 to-transparent',
      glow: 'bg-cyan-500/15',
      textGlow: 'drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]'
    },
    cool: {
      badge: 'bg-blue-950/60 border-blue-500/40 text-blue-400',
      badgeGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
      dot: 'bg-blue-400',
      dotGlow: 'shadow-[0_0_10px_rgba(59,130,246,0.8)]',
      line: 'from-transparent via-blue-500/50 to-transparent',
      glow: 'bg-blue-500/15',
      textGlow: 'drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]'
    },
    neutral: {
      badge: 'bg-slate-800/60 border-slate-500/40 text-slate-300',
      badgeGlow: 'shadow-[0_0_20px_rgba(148,163,184,0.1)]',
      dot: 'bg-slate-400',
      dotGlow: 'shadow-[0_0_10px_rgba(148,163,184,0.5)]',
      line: 'from-transparent via-slate-500/50 to-transparent',
      glow: 'bg-slate-500/10',
      textGlow: 'drop-shadow-[0_0_30px_rgba(148,163,184,0.2)]'
    },
    warm: {
      badge: 'bg-purple-950/60 border-purple-500/40 text-purple-400',
      badgeGlow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]',
      dot: 'bg-purple-400',
      dotGlow: 'shadow-[0_0_10px_rgba(168,85,247,0.8)]',
      line: 'from-transparent via-purple-500/50 to-transparent',
      glow: 'bg-purple-500/15',
      textGlow: 'drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]'
    },
    hot: {
      badge: 'bg-orange-950/60 border-orange-500/40 text-orange-400',
      badgeGlow: 'shadow-[0_0_20px_rgba(249,115,22,0.2)]',
      dot: 'bg-orange-400',
      dotGlow: 'shadow-[0_0_10px_rgba(249,115,22,0.8)]',
      line: 'from-transparent via-orange-500/50 to-transparent',
      glow: 'bg-orange-500/15',
      textGlow: 'drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]'
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
    <div
      ref={headerRef}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background: Número gigante com animação */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className={`
            text-[18rem] md:text-[28rem] lg:text-[36rem] font-display font-black text-white/[0.02] leading-none
            transition-all duration-[1500ms] ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
          `}
          style={{ transitionDelay: '0ms' }}
        >
          {number}
        </span>
      </div>

      {/* Atmospheric glow layers */}
      <div className={`
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px] ${styles.glow} blur-[180px] rounded-full
        transition-opacity duration-[1500ms]
        ${isVisible ? 'opacity-60' : 'opacity-0'}
      `} />
      <div className={`
        absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2
        w-[300px] h-[300px] ${styles.glow} blur-[100px] rounded-full
        transition-opacity duration-[1500ms] delay-300
        ${isVisible ? 'opacity-40' : 'opacity-0'}
      `} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* Act badge */}
        <div
          className={`
            inline-flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-md
            ${styles.badge} ${styles.badgeGlow}
            mb-10 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
          `}
          style={{ transitionDelay: '200ms' }}
        >
          <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${styles.dot} ${styles.dotGlow}`} />
          <span className="text-xs font-mono uppercase tracking-[0.25em] font-medium">{name}</span>
        </div>

        {/* Subtitle principal */}
        <h2
          className={`
            text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[0.9] mb-8
            ${styles.textGlow}
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '400ms' }}
        >
          {subtitle}
        </h2>

        {/* Descrição do ato */}
        <p
          className={`
            text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: '600ms' }}
        >
          {actDescriptions[number]}
        </p>

        {/* Decorative line */}
        <div
          className={`
            mx-auto mt-14 h-px rounded-full bg-gradient-to-r ${styles.line}
            transition-all duration-1000
            ${isVisible ? 'w-40 opacity-100' : 'w-0 opacity-0'}
          `}
          style={{ transitionDelay: '800ms' }}
        />

        {/* Scroll indicator */}
        <div
          className={`
            mt-14 flex flex-col items-center gap-3
            transition-all duration-1000
            ${isVisible ? 'opacity-40' : 'opacity-0'}
          `}
          style={{ transitionDelay: '1000ms' }}
        >
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-500/50 to-transparent" />
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-inherit to-transparent pointer-events-none" />

      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-inherit to-transparent pointer-events-none" />
    </div>
  );
};

export default Act;
