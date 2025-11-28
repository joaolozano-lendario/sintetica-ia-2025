import React from 'react';
import { Factory, AlertTriangle, ShieldAlert, Cpu, CheckCircle, Package, Ghost, Heart, User } from 'lucide-react';
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
      <div className="mb-16 text-center">
        <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">
          O que realmente aconteceu
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
          Robôs validaram o ROI.
          <br />
          <span className="text-white/40">Deepfakes quase derrubaram eleições.</span>
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
          4 casos reais que definiram 2025.
          Do chão de fábrica ao colapso de segurança.
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
                  <div className={`px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold uppercase ${styles.badgeBg} ${styles.badgeBorder} border text-red-400`}>
                    <AlertTriangle size={10} /> Alerta
                  </div>
                ) : (
                  <div className={`px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold uppercase ${styles.badgeBg} ${styles.badgeBorder} border ${styles.text}`}>
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

              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-600 font-mono uppercase">
                 {item.source}
              </div>
            </div>
          );
        })}
      </div>

      {/* Edge Cases - The WTF Moments */}
      <div className="mt-16 pt-12 border-t border-white/5">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
            <Ghost size={14} />
            Casos Bizarros
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            O <span className="text-yellow-400">WTF</span> do Ano
          </h3>
          <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
            Histórias que parecem ficção científica mas aconteceram em 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Doritos */}
          <div className="bg-yellow-950/10 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-900/30 rounded-lg flex items-center justify-center text-yellow-400">
                <Package size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">Caso Doritos</h4>
                <span className="text-yellow-400 text-xs font-mono uppercase">EUA • Varejo</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sistema de visão computacional de supermercado identificou saco de <strong className="text-white">Doritos</strong> como uma potencial <strong className="text-yellow-400">arma de fogo</strong>. A IA viu formato triangular + cor escura do saco e acionou o alarme. Falso positivo absurdo que expõe os limites da visão sem contexto.
            </p>
          </div>

          {/* Dublin Halloween */}
          <div className="bg-purple-950/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400">
                <Ghost size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">Fantasma de Dublin</h4>
                <span className="text-purple-400 text-xs font-mono uppercase">Irlanda • Segurança</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Na noite de Halloween, sistema de vigilância de Dublin reportou <strong className="text-white">"invasor fantasma"</strong> em prédio comercial. Era uma fantasia flutuante deixada perto de um ventilador. A IA não entende o conceito de <strong className="text-purple-400">"fantasia"</strong>.
            </p>
          </div>

          {/* Lu do Magalu */}
          <div className="bg-green-950/10 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center text-green-400">
                <User size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">Lu do Magalu</h4>
                <span className="text-green-400 text-xs font-mono uppercase">Brasil • Marketing</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A influenciadora virtual brasileira atingiu <strong className="text-white">8 milhões de seguidores</strong>. Faz posts, responde comentários, tem "opinião". Muitos seguidores não sabem (ou não se importam) que ela é 100% sintética. O <strong className="text-green-400">primeiro grande caso brasileiro</strong> de persona IA.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealWorldCases;