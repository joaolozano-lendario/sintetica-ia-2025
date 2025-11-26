
import React from 'react';
import { Clock, Zap, Train, Building, Lightbulb } from 'lucide-react';

const timeData = [
  { name: 'Telefone', time: '75 Anos', width: '100%', color: 'bg-slate-700', icon: '📞' },
  { name: 'Internet', time: '7 Anos', width: '40%', color: 'bg-slate-600', icon: '🌐' },
  { name: 'Facebook', time: '4.5 Anos', width: '30%', color: 'bg-blue-900', icon: '👥' },
  { name: 'TikTok', time: '9 Meses', width: '15%', color: 'bg-purple-900', icon: '📱' },
  { name: 'ChatGPT', time: '2 Meses', width: '8%', color: 'bg-cyan-600', icon: '🤖' },
  { name: 'Threads', time: '2 Dias', width: '2%', color: 'bg-emerald-400', icon: '⚡', highlight: true },
];

const ComparisonChart: React.FC = () => {
  return (
    <section className="py-24 px-4 border-b border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-purple-500"></div>
              <span className="text-purple-400 font-mono text-xs tracking-[0.2em] uppercase">Aceleração Histórica</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              A Compressão <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Temporal</span>
            </h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-md">
              O tempo necessário para uma tecnologia atingir <strong className="text-white font-semibold">100 milhões de usuários</strong> colapsou. 
              <br/><br/>
              O que levava uma vida inteira de nossos avós (Telefone), hoje acontece em um fim de semana. Não é apenas velocidade; é uma mudança na física da adoção humana.
            </p>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-2xl rounded-full"></div>
             <div className="glass-panel p-8 rounded-2xl relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                   <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Tecnologia</span>
                   <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Tempo até 100M</span>
                </div>
                
                <div className="space-y-6">
                  {timeData.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="flex items-center justify-between mb-2 relative z-10">
                        <div className="flex items-center gap-3">
                          <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                          <span className={`font-display font-bold ${item.highlight ? 'text-emerald-400' : 'text-slate-300'}`}>{item.name}</span>
                        </div>
                        <span className={`font-mono text-sm ${item.highlight ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>{item.time}</span>
                      </div>
                      
                      <div className="h-3 w-full bg-slate-800/50 rounded-full overflow-hidden relative">
                        <div 
                          className={`h-full ${item.color} rounded-full relative group-hover:brightness-125 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                          style={{ width: item.width }}
                        >
                          {item.highlight && (
                             <div className="absolute top-0 left-0 w-full h-full bg-white/50 animate-pulse shadow-[0_0_20px_#34d399]"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Curiosity Box - Didactic Layer */}
        <div className="max-w-3xl mx-auto bg-slate-800/30 border border-purple-500/20 rounded-2xl p-6 flex gap-4 items-start relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
           <Lightbulb className="text-purple-400 shrink-0 mt-1" size={24} />
           <div>
             <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2">Curiosidade: O Efeito Exponencial</h4>
             <p className="text-slate-300 text-sm leading-relaxed">
               Se você caminhar 30 passos lineares (1, 2, 3...), você anda 30 metros. Se você caminhar 30 passos exponenciais (1, 2, 4, 8...), no último passo você terá dado a volta na Terra <strong className="text-white">26 vezes</strong>. É exatamente onde estamos com a IA agora: no passo 28 ou 29.
             </p>
           </div>
        </div>

        {/* Analogy Section - Railways vs Cities */}
        <div className="relative pt-12 border-t border-white/5">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050b14] px-4 text-slate-500 font-mono text-xs uppercase tracking-widest border border-white/10 rounded-full py-1">
             Como entender o momento atual?
           </div>

           <div className="grid md:grid-cols-2 gap-8 pt-8">
             {/* Phase 1 */}
             <div className="group glass-panel p-8 rounded-2xl border border-white/5 hover:border-slate-600 transition-colors">
               <div className="flex items-center justify-between mb-6">
                 <h4 className="text-2xl font-display font-bold text-slate-300">Fase 1: Os Trilhos</h4>
                 <Train className="text-slate-500 group-hover:text-slate-300 transition-colors" size={28} />
               </div>
               <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4 uppercase">
                 <span>2022</span>
                 <div className="h-px w-8 bg-slate-700"></div>
                 <span>2024</span>
               </div>
               <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                 Imagine o século 19. Todo o dinheiro estava em construir ferrovias e produzir aço. Quem ganhou dinheiro? Os barões do aço (NVIDIA). O mundo estava sendo preparado, mas a "viagem" ainda era para poucos.
               </p>
               <div className="text-xs bg-slate-800/50 inline-block px-3 py-1 rounded text-slate-400 border border-slate-700 font-mono uppercase tracking-wide">
                 Foco: Infraestrutura & Chips
               </div>
             </div>

             {/* Phase 2 */}
             <div className="group glass-panel p-8 rounded-2xl border border-white/5 border-l-4 border-l-cyan-500 hover:bg-cyan-950/10 transition-colors">
               <div className="flex items-center justify-between mb-6">
                 <h4 className="text-2xl font-display font-bold text-white">Fase 2: As Cidades</h4>
                 <Building className="text-cyan-500" size={28} />
               </div>
               <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/70 mb-4 uppercase">
                 <span>2025</span>
                 <div className="h-px w-8 bg-cyan-500"></div>
                 <span>Futuro</span>
               </div>
               <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                 Agora que os trilhos existem, surgem as cidades ao redor das estações. O valor migra para quem constrói hospitais, escolas e lojas (Apps de IA). Não precisamos de mais trilhos, precisamos de destinos.
               </p>
               <div className="text-xs bg-cyan-950/50 inline-block px-3 py-1 rounded text-cyan-400 border border-cyan-500/30 font-mono uppercase tracking-wide">
                 Foco: Aplicação & Solução Real
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonChart;
