import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, TrendingUp, Zap, Shield, Brain, Bot, ChevronDown } from 'lucide-react';

// =============================================================================
// CHEATSHEET - Os 5 Pilares do Novo Mundo
// Premium cards com scroll-triggered animations
// =============================================================================

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot size={22} />,
  brain: <Brain size={22} />,
  zap: <Zap size={22} />,
  shield: <Shield size={22} />,
  trending: <TrendingUp size={22} />
};

interface PillarCardProps {
  iconKey: string;
  text: string;
  sub: string;
  color: string;
  index: number;
}

const PillarCard: React.FC<PillarCardProps> = ({ iconKey, text, sub, color, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const colorStyles: Record<string, {
    icon: string;
    iconBg: string;
    border: string;
    glow: string;
    line: string;
  }> = {
    cyan: {
      icon: 'text-cyan-400',
      iconBg: 'bg-cyan-950/50 border-cyan-500/30',
      border: 'hover:border-cyan-500/40',
      glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]',
      line: 'via-cyan-500/40'
    },
    purple: {
      icon: 'text-purple-400',
      iconBg: 'bg-purple-950/50 border-purple-500/30',
      border: 'hover:border-purple-500/40',
      glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]',
      line: 'via-purple-500/40'
    },
    emerald: {
      icon: 'text-emerald-400',
      iconBg: 'bg-emerald-950/50 border-emerald-500/30',
      border: 'hover:border-emerald-500/40',
      glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]',
      line: 'via-emerald-500/40'
    },
    blue: {
      icon: 'text-blue-400',
      iconBg: 'bg-blue-950/50 border-blue-500/30',
      border: 'hover:border-blue-500/40',
      glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]',
      line: 'via-blue-500/40'
    },
    orange: {
      icon: 'text-orange-400',
      iconBg: 'bg-orange-950/50 border-orange-500/30',
      border: 'hover:border-orange-500/40',
      glow: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]',
      line: 'via-orange-500/40'
    }
  };

  const styles = colorStyles[color] || colorStyles.cyan;

  return (
    <div
      ref={ref}
      className={`
        group relative p-7 rounded-2xl border border-white/[0.06]
        bg-gradient-to-b from-slate-900/70 to-slate-900/40 backdrop-blur-sm
        transition-all duration-500 hover:-translate-y-1
        ${styles.border} ${styles.glow}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center mb-5
          border ${styles.iconBg} ${styles.icon}
          transition-all duration-300 group-hover:scale-110
        `}>
          {iconMap[iconKey]}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
          {text}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
          {sub}
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className={`
        absolute bottom-0 left-6 right-6 h-px rounded-full
        bg-gradient-to-r from-transparent ${styles.line} to-transparent
        opacity-0 group-hover:opacity-100 transition-all duration-500
      `} />

      {/* Corner accent */}
      <div className={`
        absolute top-0 right-0 w-24 h-24 rounded-tr-2xl
        bg-gradient-to-bl from-white/[0.02] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
      `} />
    </div>
  );
};

const highlights = [
  {
    iconKey: "zap",
    text: "Quando o Código Pediu Urânio",
    sub: "A física venceu o software. Com a demanda projetada para crescer 30x até 2035, Big Techs estão comprando usinas nucleares. Sem energia, não há IA.",
    color: "emerald"
  },
  {
    iconKey: "brain",
    text: "Novembro Vermelho",
    sub: "Gemini 3, GPT-5.1 e Claude 4.5 Opus lançados simultaneamente. O foco mudou de 'gerar texto' para 'raciocínio profundo' e agentes autônomos.",
    color: "purple"
  },
  {
    iconKey: "bot",
    text: "Metal Pensante",
    sub: "Sai o CGI, entra o metal. A BMW validou robôs Figure 02 operando turnos completos com 99% de sucesso. Mão de obra humanoide virou commodity.",
    color: "cyan"
  },
  {
    iconKey: "trending",
    text: "O Funeral do Software por Assento",
    sub: "O modelo 'Service-as-Software' substitui a venda de licenças. Empresas não pagam mais por assento humano, mas pelo resultado do agente.",
    color: "orange"
  },
  {
    iconKey: "shield",
    text: "Silício: O Novo Petróleo",
    sub: "Hegemonia fragmentada. Meta e Google provaram independência com chips próprios, causando crash de $250 bi na Nvidia. Soberania de silício é o novo ouro.",
    color: "blue"
  }
];

const Cheatsheet: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cheatsheet" className="py-20 px-4 bg-[#050b14] relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header - Tom conectado com Hero */}
        <div
          ref={headerRef}
          className={`
            text-center mb-16
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">
            O que mudou em 2025
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            Cinco transformações.
            <br />
            <span className="text-white/40">Nenhuma reversível.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Cada uma dessas mudanças, sozinha, redefiniu indústrias inteiras.
            Em 2025, aconteceram simultaneamente.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <PillarCard
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] mb-3">
            Análise Profunda
          </p>
          <ChevronDown className="text-slate-600 w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Cheatsheet;