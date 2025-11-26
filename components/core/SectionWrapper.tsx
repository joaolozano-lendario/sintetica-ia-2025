/**
 * SectionWrapper Component
 *
 * Wrapper padronizado para todas as seções do dossiê.
 * Garante consistência e permite controle de temperatura por seção.
 *
 * "37 botões diferentes = caos. 1 sistema = sanidade." — Frost
 */

import React from 'react';
import { ThemeTemperature, temperatures } from '../../lib/theme';

interface SectionWrapperProps {
  id: string;
  theme?: ThemeTemperature;
  className?: string;
  noPadding?: boolean;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  theme,
  className = '',
  noPadding = false,
  children
}) => {
  // Se theme não for especificado, herda do parent (via CSS variable ou padrão)
  const themeConfig = theme ? temperatures[theme] : null;

  return (
    <section
      id={id}
      className={`
        relative
        ${themeConfig?.bg || ''}
        ${noPadding ? '' : 'py-24 px-4'}
        ${className}
      `}
      data-section={id}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
