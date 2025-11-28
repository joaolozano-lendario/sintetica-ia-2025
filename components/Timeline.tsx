import React, { useState, useRef } from 'react';
import { TimelineEvent } from '../types';
import { Brain, Globe, Cpu, Bot, Gavel, Search, ShieldCheck, HelpCircle, Video } from 'lucide-react';

const events: TimelineEvent[] = [
  {
    id: 1,
    month: 'JAN',
    title: 'O Choque do Raciocínio',
    headline: 'DeepSeek R1',
    description: 'A China surpreendeu o mundo com o DeepSeek R1, democratizando o raciocínio "Chain of Thought" via open source. O ano começou provando que "pensar" (System 2) seria a nova commodity acessível a todos.',
    icon: 'chip',
    category: 'Soberania',
    impact: 'Fim da hegemonia absoluta de modelos fechados americanos.'
  },
  {
    id: 2,
    month: 'MAR',
    title: 'A Muralha Energética',
    headline: 'Crise de Gigawatts',
    description: 'Relatórios da Deloitte confirmaram o óbvio: a rede elétrica não suporta a IA. Com demanda projetada para crescer 30x até 2035, iniciou-se a corrida desesperada das Big Techs por energia nuclear de base.',
    icon: 'globe',
    category: 'Infraestrutura',
    impact: 'Energia Nuclear torna-se o ativo mais estratégico do planeta.'
  },
  {
    id: 3,
    month: 'JUL',
    title: 'Epidemia Shadow AI',
    headline: 'Vazamento Allianz',
    description: 'O verão foi marcado pelo colapso de segurança. Funcionários usando IAs não autorizadas ("Shadow AI") na Allianz Life e Workday expuseram milhões de registros. A produtividade virou risco existencial.',
    icon: 'shield',
    category: 'Regulação',
    impact: 'Empresas bloqueiam acesso externo e criam IAs soberanas internas.'
  },
  {
    id: 4,
    month: 'SET',
    title: 'A Era do Vídeo Sintético',
    headline: 'OpenAI Sora 2',
    description: 'Lançamento do Sora 2: vídeo com áudio sincronizado e física realista. Não é mais "CGI óbvio" - é indistinguível de filmagem real. O custo de produção audiovisual colapsou. Hollywood entrou em pânico.',
    icon: 'video',
    category: 'Agentes',
    impact: 'Qualquer pessoa pode criar um comercial de TV em 10 minutos.'
  },
  {
    id: 5,
    month: 'OUT',
    title: 'Robôs no Chão de Fábrica',
    headline: 'BMW & Figure AI',
    description: 'O marco da materialização. A Figure AI concluiu o piloto na fábrica da BMW em Spartanburg. Robôs humanóides Figure 02 trabalharam turnos completos com 99% de sucesso em tarefas de precisão.',
    icon: 'robot',
    category: 'Agentes',
    impact: 'A mão de obra robótica torna-se comercialmente viável.'
  },
  {
    id: 6,
    month: 'NOV',
    title: 'O Novembro Vermelho',
    headline: 'Gemini 3 vs GPT-5.1',
    description: 'Um mês histórico. Google lançou Gemini 3 (memória infinita, líder em exames humanos). OpenAI respondeu com GPT-5.1 (modos Thinking/Instant). Anthropic lançou Claude 4.5. O estado da arte foi redefinido em 30 dias.',
    icon: 'brain',
    category: 'Infraestrutura',
    impact: 'Consolidação de Agentes de Raciocínio (S2) confiáveis.'
  },
  {
    id: 7,
    month: 'NOV',
    title: 'O Crash da Nvidia',
    headline: 'Fragmentação do Mercado',
    description: 'Ações da Nvidia perderam $250 Bi após revelações de que Meta e Google atingiram SOTA com chips próprios (TPUs/ASICs). O monopólio do hardware CUDA começou a ruir diante do "Silício Soberano".',
    icon: 'chip',
    category: 'Infraestrutura',
    impact: 'Hardware torna-se heterogêneo; Google TPU e Huawei ascendem.'
  },
  {
    id: 8,
    month: 'DEZ',
    title: 'O Fim da Verdade',
    headline: 'Eleições & Deepfakes',
    description: 'A campanha "Storm-1516" (Rússia) usou deepfakes perfeitos de áudio/vídeo do chanceler alemão. A justiça foi obrigada a intervir. A "verificação da realidade" tornou-se o tema central da democracia ocidental.',
    icon: 'gavel',
    category: 'Regulação',
    impact: 'Necessidade urgente de identidade digital criptográfica.'
  },
  {
    id: 9,
    month: 'FUTURO',
    title: 'O Horizonte AGI',
    headline: 'Previsão: 2026/2027',
    description: 'Dario Amodei (Anthropic) e Elon Musk alinharam previsões: sistemas superiores aos humanos em TODAS as tarefas econômicas devem surgir em 2026. A contagem regressiva para a singularidade econômica começou.',
    icon: 'search',
    category: 'Futuro',
    impact: 'Preparação para um mundo pós-trabalho tradicional.'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  chip: <Cpu size={20} />,
  robot: <Bot size={20} />,
  globe: <Globe size={20} />,
  brain: <Brain size={20} />,
  shield: <ShieldCheck size={20} />,
  gavel: <Gavel size={20} />,
  search: <Search size={20} />,
  video: <Video size={20} />
};

const Timeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number>(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="mb-16 text-center md:text-left">
          <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">
            Janeiro a Dezembro
          </p>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            12 meses.
            <br />
            <span className="text-white/40">Uma década de mudanças.</span>
          </h3>
          <p className="text-white/50 max-w-2xl text-base leading-relaxed">
            Cada mês de 2025 trouxe um marco que, em outras épocas,
            levaria anos para acontecer. Esta é a cronologia da aceleração.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline Navigation - Vertical Interactive List */}
          <div className="lg:w-1/3 relative">
             {/* Circuit Line */}
             <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-800 hidden lg:block"></div>
             
             <div 
               ref={scrollContainerRef}
               className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 scrollbar-hide snap-x"
             >
              {events.map((event) => {
                const isActive = activeEvent === event.id;
                return (
                  <button
                    key={event.id}
                    onClick={() => setActiveEvent(event.id)}
                    className={`snap-start flex-shrink-0 min-w-[280px] lg:w-full text-left group relative transition-all duration-300 pl-4 lg:pl-0`}
                  >
                    <div className={`flex items-center gap-6 p-4 rounded-xl border transition-all duration-300 ${isActive ? 'bg-white/5 border-cyan-500/30 translate-x-4' : 'border-transparent hover:bg-white/5 hover:translate-x-2'}`}>
                      
                      {/* Dot Connector */}
                      <div className={`absolute left-[-5px] hidden lg:flex items-center justify-center w-4 h-4 rounded-full border-2 transition-all z-10 bg-[#050b14] ${isActive ? 'border-cyan-400 scale-125' : 'border-slate-700'}`}>
                        {isActive && <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>}
                      </div>

                      <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${isActive ? 'bg-cyan-950 text-cyan-400' : 'text-slate-500 bg-slate-900'}`}>
                        {event.month}
                      </span>
                      <div className="flex-1">
                        <span className={`block font-display font-bold text-base leading-tight transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                          {event.title}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
             </div>
          </div>

          {/* Detailed Content View */}
          <div className="lg:w-2/3 min-h-[500px] relative">
            {events.map((event) => (
              <div 
                key={event.id} 
                className={`transition-all duration-700 absolute inset-0 ${activeEvent === event.id ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none'}`}
              >
                <div className="h-full glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col relative overflow-hidden bg-slate-900/60 backdrop-blur-xl">
                  
                  {/* Category Badge */}
                  <div className="absolute top-8 right-8">
                     <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-400 uppercase tracking-widest">
                       {event.category}
                     </span>
                  </div>

                  <div className="mb-8 mt-4">
                    {/* Icon Display */}
                    <div className="mb-4 text-cyan-400 p-3 bg-cyan-950/30 rounded-xl inline-flex border border-cyan-500/20">
                        {iconMap[event.icon] || <HelpCircle size={20} />}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                      {event.headline}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                  </div>
                  
                  <div className="flex-grow space-y-8">
                    <p className="text-xl text-slate-300 leading-relaxed font-light">
                      {event.description}
                    </p>

                    <div className="bg-gradient-to-r from-cyan-950/20 to-blue-950/20 p-6 rounded-xl border border-cyan-500/10">
                      <h4 className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs mb-3">
                        <Globe size={14} />
                        Impacto Global
                      </h4>
                      <p className="text-cyan-100/90 text-lg font-medium italic">
                        "{event.impact}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;