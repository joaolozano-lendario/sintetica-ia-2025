import React from 'react';
import { Cpu, UserCheck, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-[#050b14] text-center relative overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
          <Cpu size={20} />
          <span className="font-mono text-xs uppercase tracking-widest">Relatório Final • Nov 2025</span>
        </div>

        <div className="space-y-4">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            "A IA deixou de ser código.<br/>
            Ela agora é <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Concreto e Energia</span>."
          </h2>
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
            — Conclusão Estratégica
          </p>
        </div>
        
        <div className="max-w-lg mx-auto p-6 bg-white/5 rounded-2xl border border-white/10 mt-8 hover:border-cyan-500/30 transition-colors group">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#02040a] p-2 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <Zap size={16} className="text-slate-500 group-hover:text-cyan-400" />
           </div>
           <p className="text-slate-400 text-sm leading-relaxed italic">
            "O ano de 2025 foi o ano em que construímos o corpo da máquina e conectamos seus nervos. 2026 será o ano em que ela abrirá os olhos."
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-500/20 mb-1">
                <UserCheck size={14} />
            </div>
            <p className="text-white font-bold text-sm">João Lozano</p>
            <p className="text-cyan-500 text-xs uppercase tracking-widest font-mono">Curadoria & Inteligência</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 font-mono uppercase tracking-widest">
          <p>VERSION: INFLECTION_POINT_V4.0</p>
          <p>© 2025 The Great Inflection Report</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;