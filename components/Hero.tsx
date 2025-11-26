
import React from 'react';
import { Terminal, BookOpen, Users, Clock, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-white/5 bg-[#050b14]">

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto space-y-8 z-10 pt-8 md:pt-12">

        {/* System Status Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase mb-4 opacity-80">
          <span className="flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-900/50 rounded text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            Status Global: Ponto de Inflexão
          </span>
          <span className="flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-800 rounded text-cyan-400">
            <Terminal size={12} />
            Data de Corte: 26 Nov 2025
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-white">
          SINTÉTICA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 animate-pulse-slow">2025</span>
        </h1>

        {/* The Hook - The number that stops you */}
        <div className="max-w-4xl mx-auto pt-4">
          <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-6">
            O ano em que a Inteligência Artificial deixou de ser <em className="text-slate-400">software</em> <br className="hidden md:block"/>
            para se tornar <strong className="text-white">concreto, urânio e robôs</strong>.
          </p>
        </div>

        {/* The Shocking Comparison - Rosling Style */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-4">

          {/* Stat 1: Time to 100M */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-left hover:border-cyan-500/30 transition-colors group">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
              <Clock size={14} />
              <span>Tempo até 100M usuários</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Telefone</span>
                <span className="text-slate-500 font-mono text-sm">75 anos</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Internet</span>
                <span className="text-slate-500 font-mono text-sm">7 anos</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white text-sm font-medium">ChatGPT</span>
                <span className="text-cyan-400 font-mono text-sm font-bold">2 meses</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <p className="text-cyan-400 text-2xl font-bold font-display">800M</p>
              <p className="text-slate-500 text-xs">usuários semanais hoje</p>
            </div>
          </div>

          {/* Stat 2: The Physical Cost */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-left hover:border-emerald-500/30 transition-colors group">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu size={14} />
              <span>Custo físico da IA</span>
            </div>
            <p className="text-3xl font-bold text-white font-display mb-1">500ml</p>
            <p className="text-slate-400 text-sm mb-4">de água por conversa de 10 min</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Demanda energia 2024</span>
                <span className="text-slate-400">4 GW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Projeção 2035</span>
                <span className="text-emerald-400 font-bold">123 GW</span>
              </div>
            </div>
            <p className="text-emerald-500/70 text-xs mt-3 font-mono">+30x em 10 anos</p>
          </div>

          {/* Stat 3: The Human Impact */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-left hover:border-purple-500/30 transition-colors group">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
              <Users size={14} />
              <span>Impacto no trabalho</span>
            </div>
            <p className="text-3xl font-bold text-white font-display mb-1">41-61%</p>
            <p className="text-slate-400 text-sm mb-4">do código novo é gerado por IA</p>
            <div className="bg-purple-950/30 border border-purple-500/20 rounded-lg p-3">
              <p className="text-purple-300 text-xs leading-relaxed">
                <strong className="text-purple-200">Caso Klarna:</strong> De 5.500 para 2.900 funcionários. Receita por pessoa: <span className="text-purple-400 font-bold">+152%</span>
              </p>
            </div>
          </div>

        </div>

        {/* The Meta Statement */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 md:p-6">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider block mb-2">// Nota de transparência</span>
              Este dossiê foi co-criado por humano e IA. Você está lendo um documento sobre inteligência artificial, parcialmente escrito por inteligência artificial, documentando o momento em que a inteligência artificial mudou tudo. A ironia é intencional.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            onClick={() => document.getElementById('cheatsheet')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-300 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-900/50 backdrop-blur-sm tracking-[0.2em] uppercase rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <BookOpen className="mr-2 w-4 h-4 text-cyan-400" />
            Entender o Momento
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
