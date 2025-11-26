
import React from 'react';
import { Telescope, TrendingUp, Anchor, AlertTriangle, Sparkles, Globe } from 'lucide-react';

const FuturePredictions: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#02040a] relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
           <div className="space-y-4">
             <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-widest">
               <Telescope size={16} />
               <span>Visão 2026</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
               O Que Vem <span className="text-purple-500">A Seguir?</span>
             </h2>
           </div>
           <p className="text-slate-400 max-w-md text-sm md:text-right">
             Baseado na trajetória atual de infraestrutura e modelos, estas são as projeções de alta probabilidade para os próximos 12 meses.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: The Opportunity */}
          <div className="group relative bg-gradient-to-b from-emerald-950/20 to-[#050b14] p-8 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            
            <span className="block text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">A Grande Oportunidade</span>
            <h3 className="text-2xl font-bold text-white mb-4">A Empresa de 1 Pessoa e $10M</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Em 2026, veremos a primeira empresa unicórnio (ou quase) operada por uma única pessoa orquestrando 500 agentes. O "Founder" não contrata staff, ele contrata compute.
            </p>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-emerald-200/80 text-xs italic">
                "O custo marginal de escalar operações complexas está caindo a zero."
              </p>
            </div>
          </div>

          {/* Card 2: The Counter-Trend */}
          <div className="group relative bg-gradient-to-b from-orange-950/20 to-[#050b14] p-8 rounded-[2rem] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
             <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>

            <div className="w-14 h-14 rounded-2xl bg-orange-900/30 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">
              <Anchor size={28} />
            </div>
            
            <span className="block text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">A Contratendência</span>
            <h3 className="text-2xl font-bold text-white mb-4">O Retorno do "Local & Humano"</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Em um mundo inundado por conteúdo sintético e golpes digitais, a confiança migra para o físico. Eventos presenciais, comunidades locais e serviços "olho no olho" terão ágio premium.
            </p>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-orange-200/80 text-xs italic">
                "Se é digital, assumo que é fake até prova em contrário."
              </p>
            </div>
          </div>

          {/* Card 3: The Danger */}
          <div className="group relative bg-gradient-to-b from-red-950/20 to-[#050b14] p-8 rounded-[2rem] border border-white/5 hover:border-red-500/30 transition-all duration-500">
             <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>

            <div className="w-14 h-14 rounded-2xl bg-red-900/30 flex items-center justify-center text-red-400 mb-6 border border-red-500/20 group-hover:scale-110 transition-transform">
              <AlertTriangle size={28} />
            </div>

            <span className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">O Maior Desafio</span>
            <h3 className="text-2xl font-bold text-white mb-4">A Crise de Significado</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Quando a IA faz arte, código e estratégia melhor que nós, "para que servimos?" será a pergunta de 2026. Profissionais precisarão redefinir seu valor além da "utilidade técnica".
            </p>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-red-200/80 text-xs italic">
                "A competência técnica deixou de ser o diferencial humano."
              </p>
            </div>
          </div>

          {/* Card 4: Splinternet */}
          <div className="group relative bg-gradient-to-b from-blue-950/20 to-[#050b14] p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500">
             <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>

            <div className="w-14 h-14 rounded-2xl bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Globe size={28} />
            </div>

            <span className="block text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">A Fragmentação</span>
            <h3 className="text-2xl font-bold text-white mb-4">A Splinternet</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A "Internet Aberta" está morrendo. Voltaremos a valorizar comunidades fechadas, Discords privados e newsletters verificadas. A busca do Google mudará: em vez de 10 links azuis, uma resposta sintetizada.
            </p>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-blue-200/80 text-xs italic">
                "Sites de conteúdo raso serão extintos. Só sobrevive quem tem profundidade."
              </p>
            </div>
          </div>

        </div>

        {/* Visionary Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer group">
            <Sparkles size={16} className="text-purple-400 group-hover:rotate-12 transition-transform" />
            <span className="text-sm text-slate-300">Previsão de AGI (Inteligência Geral): <strong className="text-white">Late 2026 / Early 2027</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FuturePredictions;
