import React, { useEffect, useRef, useState } from 'react';
import { TrendingDown, UserCheck, BarChart3, Database, Users, Cpu, Building2 } from 'lucide-react';

// =============================================================================
// IMPACT STATS - Dados complementares aos HeroNumbers
// Foco: Mercado, Trabalho, Adoção (não duplicar energia/água/Klarna)
// =============================================================================

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  color: 'red' | 'emerald' | 'purple' | 'cyan' | 'orange' | 'blue';
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, description, color, delay = 0 }) => {
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

  const colorStyles: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
    red: {
      bg: 'bg-red-950/30',
      border: 'hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]',
      icon: 'text-red-400 bg-red-950/50',
      glow: 'bg-red-500/5'
    },
    emerald: {
      bg: 'bg-emerald-950/30',
      border: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]',
      icon: 'text-emerald-400 bg-emerald-950/50',
      glow: 'bg-emerald-500/5'
    },
    purple: {
      bg: 'bg-purple-950/30',
      border: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]',
      icon: 'text-purple-400 bg-purple-950/50',
      glow: 'bg-purple-500/5'
    },
    cyan: {
      bg: 'bg-cyan-950/30',
      border: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]',
      icon: 'text-cyan-400 bg-cyan-950/50',
      glow: 'bg-cyan-500/5'
    },
    orange: {
      bg: 'bg-orange-950/30',
      border: 'hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]',
      icon: 'text-orange-400 bg-orange-950/50',
      glow: 'bg-orange-500/5'
    },
    blue: {
      bg: 'bg-blue-950/30',
      border: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
      icon: 'text-blue-400 bg-blue-950/50',
      glow: 'bg-blue-500/5'
    }
  };

  const styles = colorStyles[color];

  return (
    <div
      ref={ref}
      className={`
        group relative p-6 rounded-2xl border border-white/[0.06] backdrop-blur-sm
        bg-gradient-to-b from-slate-900/60 to-slate-900/30
        transition-all duration-500 ${styles.border}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover glow */}
      <div className={`absolute inset-0 ${styles.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-5">
          <div className={`p-3 rounded-xl ${styles.icon} transition-transform duration-300 group-hover:scale-110`}>
            {icon}
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{label}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight">
          {value}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};

const ImpactStats: React.FC = () => {
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

  const stats = [
    {
      icon: <TrendingDown size={22} />,
      label: 'Nvidia Crash',
      value: '-$250 Bi',
      description: 'Valor evaporado após Meta anunciar migração para TPUs próprias. Guerra dos chips em escalada.',
      color: 'red' as const
    },
    {
      icon: <UserCheck size={22} />,
      label: 'Nova Elite',
      value: '$200k',
      description: 'Salário médio de AI Agent Managers nos EUA. Orquestram enxames, não escrevem código.',
      color: 'emerald' as const
    },
    {
      icon: <Database size={22} />,
      label: 'Código Sintético',
      value: '61%',
      description: 'Do código Java no GitHub é gerado por IA. O humano agora é auditor, não autor.',
      color: 'purple' as const
    },
    {
      icon: <Users size={22} />,
      label: 'Adoção EUA',
      value: '39,4%',
      description: 'Trabalhadores usando IA diariamente. O PC levou 30 anos para esse nível.',
      color: 'cyan' as const
    },
    {
      icon: <Cpu size={22} />,
      label: 'Chips Google',
      value: '2 milhões',
      description: 'TPUs v5 produzidos. Supremacia de silício fragmentada, não mais monopólio.',
      color: 'orange' as const
    },
    {
      icon: <Building2 size={22} />,
      label: 'SaaS Morto',
      value: '-40%',
      description: 'Queda em assinaturas de SaaS tradicional. Service-as-Software é o novo paradigma.',
      color: 'blue' as const
    }
  ];

  return (
    <section id="stats" className="py-20 px-4 relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`
            grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest">
              <BarChart3 size={14} />
              <span>Economia da Materialização</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-[0.95]">
              A Realidade em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Números Brutos</span>
            </h3>
          </div>
          <div className="flex flex-col justify-end lg:text-right">
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs lg:ml-auto">
              Dados do Relatório "Grande Ponto de Inflexão" (Nov 2025). Fontes: Deloitte, GitHub, Mercado.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              delay={index * 100}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactStats;