import React from 'react';
import { AlertCircle, TrendingUp, Zap, Shield, Brain, Bot, MousePointer } from 'lucide-react';

// Color Styles Map
const colorStyles: Record<string, string> = {
  cyan: "bg-cyan-950/30 text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  purple: "bg-purple-950/30 text-purple-400 border-purple-500/20 group-hover:bg-purple-500 group-hover:text-black hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  emerald: "bg-emerald-950/30 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  blue: "bg-blue-950/30 text-blue-400 border-blue-500/20 group-hover:bg-blue-500 group-hover:text-black hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  orange: "bg-orange-950/30 text-orange-400 border-orange-500/20 group-hover:bg-orange-500 group-hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
};

// Decoration Gradients Map
const decorationStyles: Record<string, string> = {
  cyan: "via-cyan-500/50",
  purple: "via-purple-500/50",
  emerald: "via-emerald-500/50",
  blue: "via-blue-500/50",
  orange: "via-orange-500/50"
};

// Icon Mapping
const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot size={24} />,
  brain: <Brain size={24} />,
  zap: <Zap size={24} />,
  shield: <Shield size={24} />,
  trending: <TrendingUp size={24} />
};

const highlights = [
  {
    iconKey: "zap",
    text: "A Muralha Energética",
    sub: "A física venceu o software. Com a demanda projetada para crescer 30x até 2035, Big Techs estão comprando usinas nucleares (Westinghouse). Sem energia, não há IA.",
    color: "emerald"
  },
  {
    iconKey: "brain",
    text: "Novembro Vermelho",
    sub: "Gemini 3, GPT-5.1 e Claude 4.5 Opus lançados simultaneamente. O foco mudou de 'gerar texto' para 'raciocínio profundo' (Sistema 2) e agentes que agem sozinhos.",
    color: "purple"
  },
  {
    iconKey: "bot",
    text: "Materialização Robótica",
    sub: "Sai o CGI, entra o metal. A BMW validou robôs Figure 02 operando turnos completos em Spartanburg com 99% de sucesso. A mão de obra humanoide virou commodity.",
    color: "cyan"
  },
  {
    iconKey: "trending",
    text: "A Morte do SaaS",
    sub: "O modelo 'Service-as-Software' substitui a venda de licenças. Empresas não pagam mais por assento humano, mas pelo resultado entregue pelo agente.",
    color: "orange"
  },
  {
    iconKey: "shield",
    text: "Guerra dos Chips",
    sub: "Hegemonia fragmentada. Meta e Google provaram independência com chips próprios (TPUs), causando um crash de $250 bi na Nvidia. Soberania de silício é o novo ouro.",
    color: "blue"
  }
];

const Cheatsheet: React.FC = () => {
  return (
    <section id="cheatsheet" className="py-24 px-4 bg-[#050b14] border-b border-white/5 relative overflow-hidden">
      
      {/* Top Divider with Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-cyan-400/20 blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
           <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                <AlertCircle size={14} />
                <span>Executive Summary • Nov 2025</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
               Os 5 Pilares do <br /> <span className="text-slate-500">Novo Mundo</span>
             </h2>
           </div>
           <p className="text-slate-400 max-w-sm text-sm md:text-right leading-relaxed border-l-2 border-slate-700 pl-4 md:border-l-0 md:pl-0">
             Síntese tática do relatório "Grande Ponto de Inflexão". O que você precisa saber para não ser obsoleto em 2026.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const isLarge = index === 0 || index === 1;
            const style = colorStyles[item.color];
            const decoration = decorationStyles[item.color];
            
            return (
              <div 
                key={index} 
                className={`group relative p-8 bg-[#0f172a] hover:bg-[#1e293b] rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-1 ${isLarge ? 'md:col-span-1' : ''}`}
              >
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${style}`}>
                    {iconMap[item.iconKey]}
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white mb-3">{item.text}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                   {item.sub}
                 </p>

                 {/* Decorative Line on Hover */}
                 <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${decoration} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center opacity-50">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                Scroll para Análise Profunda
            </p>
            <MousePointer className="text-slate-500 animate-bounce" size={16} />
        </div>
      </div>
    </section>
  );
};

export default Cheatsheet;