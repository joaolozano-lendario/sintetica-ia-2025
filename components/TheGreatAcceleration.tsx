
import React from 'react';
import { Rocket, Wifi, TrendingUp, Clock, Info } from 'lucide-react';

const TheGreatAcceleration: React.FC = () => {
  return (
    <section id="acceleration" className="py-24 px-4 bg-[#080f1e] relative overflow-hidden border-b border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
             <TrendingUp size={14} />
             <span>Análise de Velocidade Comparada</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            A Dobra do <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tempo</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed font-light">
            Especialistas confirmam: A IA está evoluindo <strong className="text-white">25x mais rápido</strong> que a Internet. O que levamos 20 anos para construir na era digital (2000-2020), a IA fará nos próximos 12 meses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-end">
          
          {/* ERA 1: Connectivity */}
          <div className="relative group opacity-60 hover:opacity-100 transition-opacity">
            <div className="absolute inset-x-0 bottom-0 h-px bg-slate-700"></div>
            
            {/* The Curve - Linear */}
            <div className="relative h-64 border-l border-slate-700 pl-4">
               <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-slate-600/20 to-transparent clip-path-curve-linear"></div>
               {/* SVG Curve Representation */}
               <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,256 L400,100" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
               </svg>
               
               <div className="absolute top-[40%] right-0 p-3 bg-slate-800 rounded-xl border border-slate-600 shadow-xl">
                 <p className="text-[10px] text-slate-400 font-mono uppercase">Velocidade</p>
                 <p className="text-xl font-bold text-white">1x (Linear)</p>
               </div>
            </div>

            <div className="mt-6">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-slate-800 rounded-lg text-slate-400"><Wifi size={20} /></div>
                 <h3 className="text-2xl font-bold text-slate-200">Era da Conectividade</h3>
               </div>
               <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4">2000 — 2022</p>
               <ul className="text-slate-400 text-sm space-y-2 list-disc pl-4">
                 <li>Internet discada → Banda Larga</li>
                 <li>Nokia → iPhone</li>
                 <li>Orkut → TikTok</li>
                 <li className="text-slate-500 italic">Tempo de adaptação: ~20 anos</li>
               </ul>
            </div>
          </div>

          {/* ERA 2: Intelligence */}
          <div className="relative group">
            <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-900"></div>
            
            {/* The Curve - Exponential */}
            <div className="relative h-96 border-l border-slate-700 pl-4">
               <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
               {/* SVG Curve Representation - Exponential */}
               <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,384 Q50,380 100,0" fill="none" stroke="#22d3ee" strokeWidth="4" />
               </svg>
               
               <div className="absolute top-0 right-0 p-4 bg-cyan-950 rounded-xl border border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-pulse">
                 <p className="text-[10px] text-cyan-400 font-mono uppercase">Velocidade</p>
                 <p className="text-3xl font-bold text-white">25x (Vertical)</p>
               </div>
            </div>

            <div className="mt-6">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-cyan-950 rounded-lg text-cyan-400"><Rocket size={20} /></div>
                 <h3 className="text-2xl font-bold text-white">Era da Inteligência</h3>
               </div>
               <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-4">2023 — 2026</p>
               <ul className="text-slate-300 text-sm space-y-2 list-disc pl-4">
                 <li>GPT-3 → AGI (Possível)</li>
                 <li>Texto → Robôs Físicos</li>
                 <li>Software → Biologia Digital</li>
                 <li className="text-cyan-400 italic font-bold">Tempo de adaptação: ~3 anos</li>
               </ul>
            </div>
          </div>

        </div>
        
        {/* The Insight Box */}
        <div className="mt-20 max-w-3xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8 flex gap-6 items-start relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
           <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
           <Clock className="text-slate-400 shrink-0 mt-1" size={24} />
           <div>
             <h4 className="text-white font-bold text-lg mb-2">O Paradoxo da Percepção</h4>
             <p className="text-slate-400 leading-relaxed text-sm">
               Nosso cérebro evoluiu para pensar linearmente (1, 2, 3, 4...). Se um leão está a 100 metros, ele leva X segundos para chegar. Mas a IA é exponencial (2, 4, 8, 16...). No passo 30, não estamos a 30 metros, mas a <strong className="text-white">um bilhão de metros</strong> (26 voltas na Terra). É por isso que tudo parece "rápido demais" e "caótico". Não é caos, é matemática.
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default TheGreatAcceleration;
