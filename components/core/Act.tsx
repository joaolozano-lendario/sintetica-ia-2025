/**
 * Act Component
 *
 * Wrapper para agrupar seções em atos narrativos.
 * Aplica temperatura visual e cria separação semântica.
 *
 * "A estrutura cria liberdade." — Frost
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
  const themeConfig = temperatures[theme];

  return (
    <div
      id={`act-${id}`}
      className={`
        relative
        ${themeConfig.bg}
      `}
      data-act={number}
      data-theme={theme}
    >
      {/* Act Header (opcional, para atos principais) */}
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

// Sub-component: Header do Ato
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
  const themeConfig = temperatures[theme];

  // Mapeia tema para cor de accent
  const accentColors: Record<ThemeTemperature, string> = {
    cold: 'cyan',
    cool: 'blue',
    neutral: 'slate',
    warm: 'purple',
    hot: 'orange'
  };

  const accent = accentColors[theme];

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background number gigante */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className={`
          text-[20rem] md:text-[30rem] font-display font-bold
          text-white/[0.02]
          leading-none
        `}>
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Act badge */}
        <div className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-${accent}-950/30 border border-${accent}-500/20
          text-${accent}-400 text-xs font-mono uppercase tracking-widest
          mb-6
        `}>
          <span className={`w-2 h-2 bg-${accent}-400 rounded-full animate-pulse`} />
          {name}
        </div>

        {/* Subtitle */}
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
          {subtitle}
        </h2>

        {/* Decorative line */}
        <div className={`
          mx-auto mt-8 w-24 h-1 rounded-full
          bg-gradient-to-r from-transparent via-${accent}-500 to-transparent
        `} />
      </div>

      {/* Transition gradient to content */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-32
        bg-gradient-to-t from-${themeConfig.bg.replace('bg-', '')} to-transparent
      `} />
    </div>
  );
};

export default Act;
