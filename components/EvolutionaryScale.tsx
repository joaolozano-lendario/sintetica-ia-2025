
import React from 'react';
import { Flame, Wifi, BrainCircuit, Sparkles, MapPin, Database } from 'lucide-react';

const eras = [
  {
    year: "300.000 AC - 1990",
    title: "Era da Ferramenta",
    desc: "O mundo físico. A evolução é biológica e lenta. O humano cria ferramentas (martelo, motor) para amplificar a força muscular. O intelecto permanece 100% biológico.",
    icon: <Flame size={24} />,
    color: "text-slate-500",
    bg: "bg-slate-800",
    active: false,
    lineColor: "bg-slate-700"
  },
  {
    year: "1990 - 2022",
    title: "Era da Informação",
    desc: "A Digitalização. Criamos a Internet, o Mobile e as Redes Sociais. Conectamos 5 bilhões de humanos. A velocidade aumentou, mas a máquina ainda precisava de comando explícito para tudo.",
    icon: <Wifi size={24} />,
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    active: false,
    lineColor: "bg-blue-900"
  },
  {
    year: "2023 - 2025",
    title: "Era da Inteligência",
    desc: "O Grande Ponto de Inflexão. A IA generativa e os Agentes Autônomos. A máquina deixa de processar dados para processar raciocínio. A evolução torna-se 25x mais rápida que na era anterior.",
    icon: <BrainCircuit size={24} />,
    color: "text-cyan-400",
    bg: "bg-cyan-950",
    active: true,
    highlight: "VOCÊ ESTÁ AQUI",
    lineColor: "bg-cyan-500"
  },
  {
    year: "2026 - Futuro",
    title: "Era da Autonomia",
    desc: "A Simbiose. Sistemas AGI (Inteligência Geral) operam a economia física e digital. A distinção entre criador e ferramenta desaparece. O custo da inteligência cai a zero.",
    icon: <Sparkles size={24} />,
    color: "text-purple-400",
    bg: "bg-purple-900/20",
    active: false,
    lineColor: "bg-purple-900"
  }
];

const EvolutionaryScale: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050b14] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-20 text-center">
          <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">
            300.000 anos em perspectiva
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            Milênios para sair da caverna.
            <br />
            <span className="text-white/40">3 anos para criar inteligência.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            A cada era, o tempo acelera. Agora, a aceleração virou o normal.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line Connector - Dynamic Gradient */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-800 via-blue-900 via-cyan-500 to-purple-900 md:-translate-x-1/2 rounded-full opacity-50"></div>

          <div className="space-y-12 md:space-y-24">
            {eras.map((era, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Connector Dot */}
                <div className={`absolute left-[19px] md:left-1/2 top-8 md:top-1/2 w-5 h-5 rounded-full border-4 border-[#050b14] md:-translate-x-1/2 md:-translate-y-1/2 z-20 transition-all duration-500 ${era.active ? 'bg-cyan-400 shadow-[0_0_20px_#22d3ee] scale-125' : 'bg-slate-700'}`}>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                   
                   {era.active && (
                     <div className={`inline-flex items-center gap-2 px-3 py-1 bg-cyan-500 text-black font-bold text-xs uppercase tracking-widest rounded-full mb-4 animate-pulse ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                       <MapPin size={12} /> {era.highlight}
                     </div>
                   )}

                   <div className={`group p-8 rounded-3xl border border-white/5 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${era.bg} ${era.active ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.1)]' : 'opacity-80 hover:opacity-100'}`}>
                      
                      {/* Date Badge */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 rounded-bl-2xl' : 'md:left-0 md:rounded-br-2xl right-0 rounded-bl-2xl md:rounded-bl-none'} p-3 bg-black/30 text-xs font-mono font-bold uppercase tracking-wider ${era.active ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {era.year}
                      </div>

                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110 ${era.active ? 'bg-cyan-500 text-black' : 'bg-white/5'}`}>
                        {era.icon}
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 font-display ${era.active ? 'text-white' : 'text-slate-300'} group-hover:text-white transition-colors`}>
                        {era.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {era.desc}
                      </p>
                   </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em] animate-pulse">
            Próxima Parada: Singularidade Econômica (2027?)
          </p>
        </div>

      </div>
    </section>
  );
};

export default EvolutionaryScale;
