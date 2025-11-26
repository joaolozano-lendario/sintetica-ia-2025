
import React from 'react';
import { ArrowDown, Terminal, Zap, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-white/5 bg-[#050b14]">
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto space-y-8 z-10 animate-fadeIn pt-12">
        
        {/* System Status Badges - The "Official" feel */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] font-mono tracking-[0.2em] uppercase mb-8 opacity-80">
          <span className="flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-900/50 rounded text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            Status Global: Aceleração Exponencial
          </span>
          <span className="flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-800 rounded text-cyan-400">
            <Terminal size={12} />
            Dossiê Oficial: NOV 2025
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-white">
          SINTÉTICA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 animate-pulse-slow">2025</span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-6 text-left md:text-center mt-8">
          <p className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed border-l-2 md:border-l-0 border-cyan-500 pl-4 md:pl-0">
            "A Internet conectou o mundo em 20 anos. <br className="hidden md:block"/>
            A IA vai reconfigurá-lo em <span className="italic text-cyan-400 font-medium">apenas três</span>."
          </p>
          
          <div className="flex flex-col gap-4 text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto pt-4">
            <p>
              Novembro de 2025 marca o fim da infância digital. A Inteligência Artificial deixou de ser software para se tornar <strong>concreto, energia nuclear e aço</strong>.
            </p>
            <p className="text-slate-500 font-mono text-xs">
              // Este relatório documenta o Grande Ponto de Inflexão, onde a velocidade da evolução tecnológica ultrapassou a capacidade humana de adaptação biológica.
            </p>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById('acceleration')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-300 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-900/50 backdrop-blur-sm tracking-[0.2em] uppercase rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <BookOpen className="mr-2 w-4 h-4 text-cyan-400" />
            Entender a Aceleração
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
