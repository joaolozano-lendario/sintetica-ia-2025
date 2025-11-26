import React from 'react';
import { DollarSign, TrendingUp, Building2, Users, Briefcase, ArrowUpRight } from 'lucide-react';

const MarketPulse: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#02040a] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp size={14} />
            O Dinheiro Fala
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Pulso do <span className="text-emerald-400">Mercado</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg font-light">
            Nunca tanto dinheiro fluiu para uma tecnologia tão rápido. Os números de 2025 reescrevem o que significa "corrida tecnológica".
          </p>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* OpenAI Valuation */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-400">
                <Building2 size={20} />
              </div>
              <ArrowUpRight size={16} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-4xl font-bold text-white font-display mb-1">$300Bi+</p>
            <p className="text-emerald-400 text-sm font-medium mb-2">OpenAI Valuation</p>
            <p className="text-slate-500 text-xs">
              Empresa mais valiosa já criada em menos de 10 anos. Rodada de outubro/2025.
            </p>
          </div>

          {/* Anthropic */}
          <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-900/40 rounded-lg flex items-center justify-center text-purple-400">
                <Building2 size={20} />
              </div>
              <ArrowUpRight size={16} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-4xl font-bold text-white font-display mb-1">$60Bi</p>
            <p className="text-purple-400 text-sm font-medium mb-2">Anthropic Valuation</p>
            <p className="text-slate-500 text-xs">
              Criadora do Claude. Amazon investiu $4Bi. Google também é investidor.
            </p>
          </div>

          {/* xAI Growth */}
          <div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center text-blue-400">
                <TrendingUp size={20} />
              </div>
              <ArrowUpRight size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-4xl font-bold text-white font-display mb-1">5x</p>
            <p className="text-blue-400 text-sm font-medium mb-2">xAI Receita YoY</p>
            <p className="text-slate-500 text-xs">
              De $100M para $500M em 12 meses. Grok integrado ao X (Twitter).
            </p>
          </div>

          {/* Agents Market */}
          <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-cyan-900/40 rounded-lg flex items-center justify-center text-cyan-400">
                <Briefcase size={20} />
              </div>
              <ArrowUpRight size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-4xl font-bold text-white font-display mb-1">$48Bi</p>
            <p className="text-cyan-400 text-sm font-medium mb-2">Mercado Agentes 2030</p>
            <p className="text-slate-500 text-xs">
              De $8Bi (2025) para $48Bi. CAGR de 44%. A nova categoria.
            </p>
          </div>

        </div>

        {/* Adoption Stats */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-10 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display mb-2">
              Adoção Corporativa: <span className="text-yellow-400">O Paradoxo</span>
            </h3>
            <p className="text-slate-400 text-sm">Todos usam, poucos dominam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#1e293b" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#22d3ee" strokeWidth="12"
                    strokeDasharray={`${78 * 3.52} ${100 * 3.52}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">78%</span>
                </div>
              </div>
              <p className="text-white font-medium">Usam IA</p>
              <p className="text-slate-500 text-xs">Alguma forma de IA no workflow</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#1e293b" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#a855f7" strokeWidth="12"
                    strokeDasharray={`${39.4 * 3.52} ${100 * 3.52}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">39%</span>
                </div>
              </div>
              <p className="text-white font-medium">Força de Trabalho EUA</p>
              <p className="text-slate-500 text-xs">Profissionais usando IA diariamente</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#1e293b" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#ef4444" strokeWidth="12"
                    strokeDasharray={`${1 * 3.52} ${100 * 3.52}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-red-400">1%</span>
                </div>
              </div>
              <p className="text-white font-medium">Maturidade Real</p>
              <p className="text-slate-500 text-xs">Implementação estratégica completa</p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">O gap:</strong> 78% experimentam, mas apenas 1% têm governança, métricas e integração real.
              <br />
              <span className="text-yellow-400">Oportunidade gigante para quem profissionaliza.</span>
            </p>
          </div>
        </div>

        {/* Investor Sentiment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <TrendingUp size={14} />
              Bull Case
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                <span>Produtividade: McKinsey projeta $4.4 trilhões/ano em valor adicionado</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                <span>Ciência: AlphaFold, descoberta de drogas, materiais — ROI incalculável</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                <span>Escala: Diferente de outras techs, IA melhora com mais uso (feedback loop)</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-950/10 border border-red-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
              <TrendingUp size={14} className="rotate-180" />
              Bear Case
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></div>
                <span>Custo: $100M+ para treinar modelos frontier. Poucos podem competir.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></div>
                <span>Energia: Muralha física. Se não resolver, crescimento trava.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></div>
                <span>Regulação: AI Act pode frear inovação na Europa. EUA incerto.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketPulse;
