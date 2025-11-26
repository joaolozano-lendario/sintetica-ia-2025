
import React from 'react';
import { User, Bot, GitMerge, Music } from 'lucide-react';

const MultiAgentOrg: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#080f1d] border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">Estrutura Organizacional 2026</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
          A Orquestração <span className="text-cyan-500">Híbrida</span>
        </h3>
        <p className="text-slate-400 mt-4 text-lg">
          O organograma mudou. O humano deixa de ser o "operário que aperta parafuso" para se tornar o "maestro".
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        
        {/* Narrative Analogy Box */}
        <div className="absolute top-0 right-0 md:-right-24 hidden md:block w-48 bg-slate-800/50 p-4 rounded-xl border border-white/10 backdrop-blur-md text-left z-20">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Music size={16} />
                <span className="text-xs font-bold uppercase">A Analogia</span>
            </div>
            <p className="text-[10px] text-slate-300 leading-relaxed">
                Pense em uma orquestra. Antes, você tocava o violino, o piano e a bateria sozinho (multitarefa ruim). Agora, você segura a batuta. Os agentes são os músicos virtuosos. Seu trabalho é garantir que eles toquem no mesmo ritmo.
            </p>
        </div>

        {/* Connector Lines */}
        <div className="absolute top-20 left-1/2 -translate-x-px w-0.5 h-24 bg-gradient-to-b from-cyan-500 to-slate-700"></div>
        <div className="absolute top-[176px] left-1/4 right-1/4 h-0.5 bg-slate-700"></div>
        <div className="absolute top-[176px] left-1/4 w-0.5 h-8 bg-slate-700"></div>
        <div className="absolute top-[176px] right-1/4 w-0.5 h-8 bg-slate-700"></div>
        <div className="absolute top-[176px] left-1/2 -translate-x-px w-0.5 h-8 bg-slate-700"></div>

        {/* Level 1: Human */}
        <div className="relative z-10 flex justify-center mb-24">
          <div className="bg-cyan-950/80 border border-cyan-500 p-6 rounded-2xl w-64 text-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <div className="w-12 h-12 bg-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center text-black shadow-lg">
              <User size={24} />
            </div>
            <h4 className="text-white font-bold text-lg">Líder Estratégico (Você)</h4>
            <p className="text-cyan-200 text-xs mt-1 font-mono uppercase">O Maestro</p>
            <p className="text-slate-300 text-sm mt-2 italic">"Define o Objetivo e Audita o Resultado"</p>
          </div>
        </div>

        {/* Level 2: Agents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Agent 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center group hover:border-purple-500/50 transition-all">
            <div className="w-10 h-10 bg-purple-900/50 rounded-full mx-auto mb-3 flex items-center justify-center text-purple-400 border border-purple-500/30">
              <Bot size={20} />
            </div>
            <h4 className="text-white font-bold">Agente Pesquisador</h4>
            <p className="text-slate-500 text-xs mt-2">
              Lê 10.000 páginas, analisa concorrentes e sintetiza dados em segundos.
            </p>
          </div>

          {/* Agent 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center group hover:border-emerald-500/50 transition-all">
            <div className="w-10 h-10 bg-emerald-900/50 rounded-full mx-auto mb-3 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
              <Bot size={20} />
            </div>
            <h4 className="text-white font-bold">Agente Coder</h4>
            <p className="text-slate-500 text-xs mt-2">
              Escreve, testa e faz deploy de funcionalidades completas (Vibe Coding).
            </p>
          </div>

          {/* Agent 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center group hover:border-orange-500/50 transition-all">
            <div className="w-10 h-10 bg-orange-900/50 rounded-full mx-auto mb-3 flex items-center justify-center text-orange-400 border border-orange-500/30">
              <Bot size={20} />
            </div>
            <h4 className="text-white font-bold">Agente Crítico</h4>
            <p className="text-slate-500 text-xs mt-2">
              O "Chato" do time. Audita o trabalho dos outros agentes buscando alucinações.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-slate-400 text-sm border border-white/5">
                <GitMerge size={14} />
                <span>O resultado final é sintetizado para aprovação humana</span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default MultiAgentOrg;
