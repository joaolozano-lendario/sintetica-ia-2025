import React from 'react';
import { Brain, Quote, Sparkles } from 'lucide-react';

interface ExpertOpinion {
  name: string;
  title: string;
  perspective: string;
  keyInsight: string;
  tone: 'optimist' | 'pragmatist' | 'skeptic' | 'builder';
}

const experts: ExpertOpinion[] = [
  {
    name: "Ray Kurzweil",
    title: "Futurista & Diretor de Engenharia, Google",
    perspective: "Os dados confirmam a Lei dos Retornos Acelerados. DeepSeek em janeiro, GPT-5.1 em novembro, Claude 4.5 Opus - não é coincidência, é a curva exponencial se materializando. A previsão de AGI para 2026/2027 converge com o que antecipei há décadas. Geoffrey Hinton admitiu que eu estava certo. A Muralha Energética prova que a IA deixou de ser software - compete agora com a infraestrutura física do planeta.",
    keyInsight: "O exponencial sempre parece impossível até que se torna inevitável.",
    tone: "optimist"
  },
  {
    name: "Sam Altman",
    title: "CEO, OpenAI",
    perspective: "O caso Klarna é prova de conceito: 5.500 para 2.900 funcionários com +152% de receita por pessoa. Isso não é teoria - é Service-as-Software funcionando. O crash da Nvidia de $250B não é sobre chips, é sobre o fim do monopólio de paradigma. A barreira de entrada para construir software caiu a zero. 'The days are long but the decades are short.'",
    keyInsight: "Não construa SaaS tradicional. Construa resultados.",
    tone: "builder"
  },
  {
    name: "Andrej Karpathy",
    title: "Ex-Diretor de IA, Tesla | Fundador, Eureka Labs",
    perspective: "41-61% do código novo é gerado por IA. O que isso significa? Prompts são o novo código. A BMW usando Figure 02 com 99% de precisão não é mágica - é feedback loop + redundância + supervisão humana. O dado mais subestimado: DeepSeek R1 rodando localmente. Democratização real. Você não precisa da OpenAI para ter Chain of Thought.",
    keyInsight: "O modelo não está quebrado. Seu processo provavelmente está.",
    tone: "pragmatist"
  },
  {
    name: "Daniel Kahneman",
    title: "Nobel de Economia | Autor de 'Rápido e Devagar'",
    perspective: "Este dossiê exemplifica WYSIATI - What You See Is All There Is. A narrativa de 'aceleração exponencial' é coerente, mas o que falta? Os fracassos. As previsões erradas. 'AGI 2026/2027' apresentado como dado, não como probabilidade. Qual é o intervalo de confiança? Especialistas em domínios de baixa previsibilidade frequentemente erram mais que o acaso.",
    keyInsight: "Pre-mortem: imagine que em 2027 este dossiê estava errado. O que falhou?",
    tone: "skeptic"
  }
];

const toneColors = {
  optimist: { bg: 'bg-emerald-950/20', border: 'border-emerald-500/20', text: 'text-emerald-400', label: 'Otimista' },
  pragmatist: { bg: 'bg-blue-950/20', border: 'border-blue-500/20', text: 'text-blue-400', label: 'Pragmático' },
  skeptic: { bg: 'bg-yellow-950/20', border: 'border-yellow-500/20', text: 'text-yellow-400', label: 'Cético' },
  builder: { bg: 'bg-purple-950/20', border: 'border-purple-500/20', text: 'text-purple-400', label: 'Construtor' }
};

const ExpertPanel: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050b14] relative overflow-hidden">

      {/* Background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Brain size={14} />
            Meta-Análise
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            O Painel dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Especialistas</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light mb-8">
            O que as mentes mais influentes na revolução da IA pensariam sobre estes dados? Perspectivas geradas através de modelagem cognitiva avançada.
          </p>

          {/* Meta-disclosure box */}
          <div className="max-w-2xl mx-auto bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 text-left">
            <div className="flex items-start gap-3">
              <Sparkles size={18} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-purple-300">Nota de transparência:</strong> Estas perspectivas foram sintetizadas por inteligência artificial, modelando padrões cognitivos e comunicacionais documentados de cada especialista. Não são citações diretas - são simulações de como cada mente provavelmente interpretaria estes dados, baseado em décadas de trabalho público.
                </p>
                <p className="text-slate-500 text-xs mt-2 italic">
                  A ironia é intencional: IA analisando IA através de modelos de mentes humanas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((expert, index) => {
            const colors = toneColors[expert.tone];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={64} />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{expert.name}</h3>
                    <span className={`text-xs font-mono uppercase tracking-wider ${colors.text} ${colors.bg} px-2 py-1 rounded border ${colors.border}`}>
                      {colors.label}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm">{expert.title}</p>
                </div>

                {/* Perspective */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "{expert.perspective}"
                </p>

                {/* Key Insight */}
                <div className={`${colors.bg} border ${colors.border} rounded-xl p-4`}>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">Insight-Chave</p>
                  <p className={`${colors.text} font-medium text-sm italic`}>
                    "{expert.keyInsight}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom synthesis */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-950/30 via-slate-900/50 to-cyan-950/30 border border-white/10 rounded-2xl p-8">
            <h4 className="text-white font-bold text-lg mb-4">Convergência e Divergência</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              <strong className="text-white">Onde concordam:</strong> A aceleração é real, os dados de mercado são sólidos, a transformação do trabalho já começou.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-white">Onde divergem:</strong> Velocidade da AGI (otimistas vs céticos), sustentabilidade da curva exponencial, e se os dados mostram o quadro completo ou apenas a metade conveniente.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpertPanel;
