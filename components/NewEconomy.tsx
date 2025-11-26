import React from 'react';
import { ArrowRight, DollarSign, Users, Briefcase, RefreshCcw } from 'lucide-react';

const NewEconomy: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050b14] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:text-center">
          <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2 font-mono">Business Intelligence</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white">
            A Morte do <span className="text-slate-600 line-through decoration-red-500 decoration-4">SaaS</span>
          </h3>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            O modelo de negócios de software mudou radicalmente em 2025. Se a IA faz o trabalho de 10 pessoas, vender licenças "por cabeça" tornou-se um suicídio econômico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Old Model */}
          <div className="group relative p-8 rounded-3xl border border-white/5 bg-slate-900/20 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="absolute top-4 left-4 text-xs font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded uppercase">
              O Velho Mundo (2010 - 2024)
            </div>
            <h4 className="text-3xl font-bold text-slate-300 mb-6 mt-4">Software as a Service</h4>
            
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg"><Users size={16} /></div>
                <span>Cobrança por <strong>usuário logado</strong> (Seat-based)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg"><Briefcase size={16} /></div>
                <span>Você aluga a <strong>ferramenta</strong> para trabalhar</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg"><RefreshCcw size={16} /></div>
                <span>Foco em <strong>retenção</strong> do usuário</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-slate-800">
              <span className="text-red-500 font-bold text-sm">O Problema:</span>
              <p className="text-slate-500 text-sm mt-1">
                Empresas vão contratar menos humanos. Menos humanos = Menos licenças vendidas = Colapso de receita.
              </p>
            </div>
          </div>

          {/* Arrow for Desktop */}
          <div className="hidden md:flex justify-center text-slate-600">
            <ArrowRight size={48} />
          </div>

          {/* New Model */}
          <div className="group relative p-8 rounded-3xl border border-purple-500/30 bg-purple-900/10 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
             <div className="absolute top-4 left-4 text-xs font-bold text-purple-400 bg-purple-950 px-2 py-1 rounded uppercase border border-purple-500/30">
              O Novo Mundo (2025+)
            </div>
            <h4 className="text-3xl font-bold text-white mb-6 mt-4">Service as Software</h4>
            
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-purple-950 rounded-lg text-purple-400"><DollarSign size={16} /></div>
                <span>Cobrança por <strong>resultado</strong> (Outcome-based)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-purple-950 rounded-lg text-purple-400"><Briefcase size={16} /></div>
                <span>Você aluga o <strong>trabalho feito</strong> pelo agente</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-purple-950 rounded-lg text-purple-400"><RefreshCcw size={16} /></div>
                <span>Foco em <strong>resolução</strong> do problema</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <span className="text-emerald-400 font-bold text-sm">A Revolução:</span>
              <p className="text-slate-300 text-sm mt-1">
                "Não me venda um CRM (Salesforce). Me venda 50 reuniões agendadas." - Essa é a nova economia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewEconomy;