import React from 'react';
import { TrendingUp, TrendingDown, Zap, UserCheck, BarChart3, Database } from 'lucide-react';

const ImpactStats: React.FC = () => {
  return (
    <section id="stats" className="py-24 px-4 max-w-7xl mx-auto relative">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 relative z-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">
            <BarChart3 size={16} />
            Economia da Materialização
          </div>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-white leading-[0.95]">
            A Realidade em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Números Brutos</span>.
          </h3>
        </div>
        <div className="flex flex-col justify-end lg:text-right">
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs ml-auto">
            Dados auditados do Relatório "Grande Ponto de Inflexão" (Novembro 2025). Fontes: Deloitte, GitHub, Mercado Financeiro.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        
        {/* Card 1 - Energy */}
        <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-yellow-500/50 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-yellow-950/30 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">Energia</span>
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">30x</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Crescimento projetado da demanda de energia para Data Centers nos EUA até 2035. (Deloitte)
          </p>
        </div>

        {/* Card 2 - Nvidia Crash */}
        <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-red-500/50 transition-all duration-300 group">
           <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-red-950/30 rounded-lg text-red-400 group-hover:scale-110 transition-transform">
              <TrendingDown size={24} />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">Nvidia Crash</span>
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">-$250 Bi</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Valor de mercado evaporado da Nvidia após Meta anunciar migração para Google TPUs e chips proprietários.
          </p>
        </div>

        {/* Card 3 - Agent Manager Salary */}
        <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-all duration-300 group">
           <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-emerald-950/30 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
              <UserCheck size={24} />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">Novo Salário</span>
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">$200k</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Teto salarial médio para "AI Agent Managers" nos EUA. A nova elite que orquestra enxames, não escreve código.
          </p>
        </div>

        {/* Card 4 - Code Gen */}
        <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 group">
           <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-purple-950/30 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
              <Database size={24} />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">Código Sintético</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">61% Java</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Porcentagem de código Java no GitHub gerado inteiramente por IA em 2025. O humano virou apenas auditor.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImpactStats;