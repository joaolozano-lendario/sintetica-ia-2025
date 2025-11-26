
import React from 'react';
import { Zap, Cpu, Database, Server, Radio, Droplets } from 'lucide-react';

const PhysicalLayer: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#020617] border-y border-white/5 relative overflow-hidden">
      
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:text-center">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Zap size={14} />
            Camada Física 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            A Muralha <span className="text-emerald-400">Energética</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-xl font-light">
            O software colidiu com a termodinâmica. Pela primeira vez na história da computação, o gargalo não é a inteligência do código, é a quantidade de eletricidade que conseguimos extrair da Terra.
          </p>
        </div>

        {/* Narrative Box: The Boiling Ocean Analogy */}
        <div className="max-w-4xl mx-auto mb-16 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
           <div className="shrink-0 bg-emerald-900/40 p-4 rounded-full text-emerald-400">
             <Droplets size={32} />
           </div>
           <div>
             <h4 className="text-white font-bold text-lg mb-2">Para entender a escala:</h4>
             <p className="text-slate-300 leading-relaxed text-sm">
               Cada vez que você conversa com o ChatGPT por 10 minutos, o data center consome o equivalente a <strong>meio litro de água</strong> para resfriamento e eletricidade suficiente para carregar seu celular por dias. Multiplique isso por bilhões de usuários. É por isso que a Microsoft e a Amazon estão reativando usinas nucleares. Não é luxo, é física básica.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Nuclear & Chips Cards */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 bg-emerald-950/30 text-emerald-400 rounded-bl-2xl font-mono text-xs border-l border-b border-emerald-500/20">
                EUA • INFRAESTRUTURA
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <Radio className="text-emerald-500" />
                Renascimento Nuclear
              </h3>
              <p className="text-slate-400 leading-relaxed mt-4">
                Com data centers consumindo gigawatts, a energia eólica/solar tornou-se insuficiente pela intermitência (o sol não brilha à noite, a IA roda 24/7). 
                <br/><br/>
                Em 2025, a Westinghouse emergiu como peça-chave, usando a própria IA (sistema WNEXUS) para projetar reatores nucleares mais rápidos. É a máquina construindo a bateria que a alimenta.
              </p>
              <div className="mt-4 flex gap-2">
                 <span className="text-[10px] bg-emerald-900/40 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20">123 GW até 2035</span>
                 <span className="text-[10px] bg-emerald-900/40 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20">Energia de Base</span>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 bg-yellow-950/30 text-yellow-400 rounded-bl-2xl font-mono text-xs border-l border-b border-yellow-500/20">
                GLOBAL • HARDWARE
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <Cpu className="text-yellow-500" />
                A Fragmentação do Silício
              </h3>
              <div className="flex gap-4 mt-4 mb-4 text-xs font-mono uppercase">
                 <span className="text-slate-500 line-through decoration-red-500 decoration-2">Monopólio Nvidia</span>
                 <span className="text-white font-bold text-emerald-400">→ Chips Soberanos</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Durante anos, a Nvidia foi a única vendedora de "pás" na corrida do ouro. Isso acabou. Meta e Google criaram suas próprias "pás" (TPUs), causando um crash de $250 bi na Nvidia. O hardware agora é fragmentado, especializado e estratégico para cada nação.
              </p>
            </div>
          </div>

          {/* Right: Geopolitics Chart */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full"></div>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-4">
                Geopolítica do Compute 2025
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-2"><Server size={14}/> Estados Unidos</span>
                  <span className="text-emerald-400 font-mono text-xs">Stargate & Nuclear</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[95%]"></div>
                </div>
                <p className="text-[10px] text-slate-500">Projeto Stargate: $500Bi, 10GW de capacidade. Texas, Novo México e Ohio.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-2"><Database size={14}/> China</span>
                  <span className="text-red-400 font-mono text-xs">Autossuficiência Forçada</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[85%]"></div>
                </div>
                <p className="text-[10px] text-slate-500">Huawei Ascend 910C + DeepSeek (Otimização Extrema de Software).</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-2"><Cpu size={14}/> Oriente Médio</span>
                  <span className="text-yellow-400 font-mono text-xs">Soberania Comprada</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[60%]"></div>
                </div>
                 <p className="text-[10px] text-slate-500">Arábia Saudita/EAU (G42) investem bilhões em "Sovereign AI" para não depender do Ocidente.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhysicalLayer;
