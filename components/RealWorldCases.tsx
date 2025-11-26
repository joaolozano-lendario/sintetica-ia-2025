import React from 'react';
import { Factory, AlertTriangle, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    title: "Robôs na BMW",
    metric: "99% Sucesso",
    description: "Piloto da Figure AI na fábrica de Spartanburg. Robôs humanóides (Figure 02) operaram turnos completos manipulando chapa metálica com precisão milimétrica, validando o ROI industrial.",
    icon: <Factory size={24} />,
    color: "emerald",
    source: "Indústria • Robótica"
  },
  {
    title: "Ataque Storm-1516",
    metric: "Crise Eleitoral",
    description: "Deepfakes russos perfeitos de áudio e vídeo de ministros alemães causaram caos político antes das eleições de 2026. A 'verificação de realidade' tornou-se a pauta nº 1 de segurança nacional.",
    icon: <ShieldAlert size={24} />,
    color: "red",
    source: "Alemanha • Política"
  },
  {
    title: "Vazamento Shadow AI",
    metric: "1.4M Registros",
    description: "Allianz Life e Workday sofreram violações massivas. A causa? Funcionários usando ferramentas de IA não autorizadas para processar dados sensíveis. A produtividade virou vetor de ataque.",
    icon: <AlertTriangle size={24} />,
    color: "purple",
    source: "Corporativo • Segurança"
  },
  {
    title: "Meta vs Nvidia",
    metric: "-$250 Bilhões",
    description: "Meta anunciou migração parcial para Google TPUs e chips proprietários, derrubando ações da Nvidia. O evento marcou o fim do monopólio de hardware e o início da era multi-chip.",
    icon: <Cpu size={24} />,
    color: "blue",
    source: "Tech • Hardware"
  }
];

// Explicit interface for style object
interface StyleConfig {
  bg: string;
  border: string;
  text: string;
  iconBg: string;
  badgeBg: string;
  badgeBorder: string;
  bar: string;
}

const defaultStyle: StyleConfig = {
  bg: 'hover:bg-slate-800 hover:border-slate-600',
  border: 'border-white/5',
  text: 'text-slate-400',
  iconBg: 'bg-slate-800 text-slate-400',
  badgeBg: 'bg-slate-800',
  badgeBorder: 'border-slate-700',
  bar: 'bg-slate-600'
};

const colorMap: Record<string, StyleConfig> = {
  emerald: {
    bg: 'hover:bg-emerald-900/10 hover:border-emerald-500/50',
    border: 'border-white/5',
    text: 'text-emerald-400',
    iconBg: 'bg-emerald-900/20 text-emerald-400',
    badgeBg: 'bg-emerald-950/50',
    badgeBorder: 'border-emerald-900/50',
    bar: 'bg-emerald-500'
  },
  blue: {
    bg: 'hover:bg-blue-900/10 hover:border-blue-500/50',
    border: 'border-white/5',
    text: 'text-blue-400',
    iconBg: 'bg-blue-900/20 text-blue-400',
    badgeBg: 'bg-blue-950/50',
    badgeBorder: 'border-blue-900/50',
    bar: 'bg-blue-500'
  },
  red: {
    bg: 'hover:bg-red-900/10 hover:border-red-500/50',
    border: 'border-white/5',
    text: 'text-red-400',
    iconBg: 'bg-red-900/20 text-red-400',
    badgeBg: 'bg-red-950/50',
    badgeBorder: 'border-red-900/50',
    bar: 'bg-red-500'
  },
  purple: {
    bg: 'hover:bg-purple-900/10 hover:border-purple-500/50',
    border: 'border-white/5',
    text: 'text-purple-400',
    iconBg: 'bg-purple-900/20 text-purple-400',
    badgeBg: 'bg-purple-950/50',
    badgeBorder: 'border-purple-900/50',
    bar: 'bg-purple-500'
  }
};

const RealWorldCases: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-slate-900/30 border-y border-white/5">
      <div className="mb-16 md:text-center">
        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">Realidade Aplicada 2025</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
          Do ROI Industrial ao <span className="text-red-500">Risco Existencial</span>
        </h3>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
          Enquanto robôs provam seu valor na linha de montagem, a "Shadow AI" e Deepfakes expõem a fragilidade de empresas e democracias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((item, index) => {
          const styles = colorMap[item.color] || defaultStyle;
          
          return (
            <div key={index} className={`group relative bg-[#0a1120] rounded-3xl p-6 border transition-all duration-300 flex flex-col ${styles.border} ${styles.bg}`}>
              <div className={`absolute top-0 left-0 w-full h-1 ${styles.bar} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${styles.iconBg}`}>
                  {item.icon}
                </div>
                {item.color === 'red' || item.color === 'purple' ? (
                  <div className={`px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold uppercase ${styles.badgeBg} ${styles.badgeBorder} border text-red-400`}>
                    <AlertTriangle size={10} /> Alerta
                  </div>
                ) : (
                  <div className={`px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold uppercase ${styles.badgeBg} ${styles.badgeBorder} border ${styles.text}`}>
                    <CheckCircle size={10} /> Validado
                  </div>
                )}
              </div>

              <div className="mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${styles.text}`}>
                  {item.metric}
                </span>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
              </div>
              
              <p className="text-slate-400 leading-relaxed text-xs flex-grow">
                {item.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-slate-600 font-mono uppercase">
                 {item.source}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RealWorldCases;