/**
 * HeroNumber Component
 *
 * Os 5 números âncora que explicam o novo mundo.
 * Cada um com analogia tangível para "qualquer pessoa".
 *
 * "Um número gigante que para o scroll." — Jobs
 * "A analogia é a ponte entre dados e emoção." — Nicolas
 */

import React, { useEffect, useRef, useState } from 'react';

type HeroNumberVariant = 'cyan' | 'purple' | 'orange' | 'emerald' | 'red';

interface HeroNumberProps {
  number: string;
  label: string;
  analogy: string;
  source?: string;
  variant?: HeroNumberVariant;
  animate?: boolean;
}

const HeroNumber: React.FC<HeroNumberProps> = ({
  number,
  label,
  analogy,
  source,
  variant = 'cyan',
  animate = true
}) => {
  const [isVisible, setIsVisible] = useState(!animate);
  const [displayNumber, setDisplayNumber] = useState(animate ? '0' : number);
  const ref = useRef<HTMLDivElement>(null);

  // Estilos por variante
  const variantStyles: Record<HeroNumberVariant, {
    number: string;
    glow: string;
    border: string;
    badge: string;
  }> = {
    cyan: {
      number: 'text-cyan-400',
      glow: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      badge: 'bg-cyan-950/50 text-cyan-400 border-cyan-500/30'
    },
    purple: {
      number: 'text-purple-400',
      glow: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      badge: 'bg-purple-950/50 text-purple-400 border-purple-500/30'
    },
    orange: {
      number: 'text-orange-400',
      glow: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      badge: 'bg-orange-950/50 text-orange-400 border-orange-500/30'
    },
    emerald: {
      number: 'text-emerald-400',
      glow: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      badge: 'bg-emerald-950/50 text-emerald-400 border-emerald-500/30'
    },
    red: {
      number: 'text-red-400',
      glow: 'bg-red-500/10',
      border: 'border-red-500/20',
      badge: 'bg-red-950/50 text-red-400 border-red-500/30'
    }
  };

  const styles = variantStyles[variant];

  // Intersection Observer para trigger de animação
  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animate, isVisible]);

  // Animação do número
  useEffect(() => {
    if (!animate || !isVisible) return;

    // Extrai parte numérica e sufixo
    const match = number.match(/^([\d.,]+)(.*)$/);
    if (!match) {
      setDisplayNumber(number);
      return;
    }

    const numericPart = parseFloat(match[1].replace(',', '.'));
    const suffix = match[2] || '';
    const isDecimal = match[1].includes(',') || match[1].includes('.');

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (numericPart - start) * eased;

      if (isDecimal) {
        setDisplayNumber(current.toFixed(1).replace('.', ',') + suffix);
      } else {
        setDisplayNumber(Math.floor(current).toLocaleString('pt-BR') + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setDisplayNumber(number);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [animate, isVisible, number]);

  return (
    <div
      ref={ref}
      className={`
        relative p-6 md:p-10 rounded-3xl border backdrop-blur-sm overflow-hidden
        bg-slate-900/30 ${styles.border}
        transition-all duration-700 h-full
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {/* Glow background */}
      <div className={`absolute inset-0 ${styles.glow} blur-3xl rounded-3xl opacity-50`} />

      <div className="relative z-10">
        {/* Número gigante - responsivo para caber no card */}
        <div className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold ${styles.number} leading-none mb-4 break-words`}>
          {displayNumber}
        </div>

        {/* Label */}
        <p className="text-lg md:text-xl text-white font-medium mb-5">
          {label}
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-white/10 mb-5" />

        {/* Analogia */}
        <blockquote className="text-slate-300 text-sm md:text-base leading-relaxed italic">
          "{analogy}"
        </blockquote>

        {/* Fonte */}
        {source && (
          <cite className="block mt-3 text-[10px] md:text-xs text-slate-500 font-mono not-italic">
            Fonte: {source}
          </cite>
        )}
      </div>
    </div>
  );
};

// =============================================================================
// HERO NUMBERS GRID - Layout pré-definido dos 5 números âncora
// =============================================================================

export const HeroNumbersGrid: React.FC = () => {
  const heroNumbers = [
    {
      number: '74,2%',
      label: 'do conteúdo novo da web é gerado por IA',
      analogy: 'De cada 4 coisas que você lê online, 3 não foram escritas por humanos. Essa frase pode ser a exceção.',
      source: 'Ahrefs, 2025',
      variant: 'cyan' as const
    },
    {
      number: '30x',
      label: 'crescimento de demanda energética até 2035',
      analogy: 'Imagine se toda a energia que sua cidade usa hoje precisasse multiplicar por 30 em 10 anos. É o que a IA precisa.',
      source: 'Deloitte, 2025',
      variant: 'emerald' as const
    },
    {
      number: '500ml',
      label: 'de água por 10 minutos de conversa com IA',
      analogy: 'Cada vez que você pede para a IA reescrever um e-mail, uma garrafinha de água evapora em algum data center.',
      source: 'Pesquisa UC Riverside',
      variant: 'purple' as const
    },
    {
      number: '+152%',
      label: 'de receita por funcionário na Klarna',
      analogy: 'A mesma empresa. Metade das pessoas. O dobro do resultado. Não é ficção — já aconteceu.',
      source: 'Klarna Financial Report, 2025',
      variant: 'orange' as const
    },
    {
      number: '1M',
      label: 'robôs humanoides operando até 2028',
      analogy: 'Hoje são 50 mil. Em 3 anos, serão 1 milhão. Não em laboratórios — em fábricas, armazéns, hospitais.',
      source: 'Goldman Sachs Projection',
      variant: 'red' as const
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#050b14]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs font-mono uppercase tracking-widest mb-6">
            Os 5 Números
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Os Dados Que Explicam<br />
            <span className="text-slate-500">o Novo Mundo</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não são 50 estatísticas. São 5 números que, uma vez que você entende,
            não consegue mais ver o mundo da mesma forma.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primeiro número grande */}
          <div className="md:col-span-2 lg:col-span-2">
            <HeroNumber {...heroNumbers[0]} />
          </div>

          {/* Segundo número */}
          <div className="md:col-span-1 lg:col-span-1">
            <HeroNumber {...heroNumbers[1]} />
          </div>

          {/* Terceiro número */}
          <div className="md:col-span-1 lg:col-span-1">
            <HeroNumber {...heroNumbers[2]} />
          </div>

          {/* Quarto número */}
          <div className="md:col-span-1 lg:col-span-1">
            <HeroNumber {...heroNumbers[3]} />
          </div>

          {/* Quinto número */}
          <div className="md:col-span-2 lg:col-span-1">
            <HeroNumber {...heroNumbers[4]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroNumber;
