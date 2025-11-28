/**
 * THE COMPRESSION - Uma Timeline da Vida Humana
 *
 * "Não é um gráfico. É uma perspectiva." — Jobs
 * "Arqueologia Cognitiva: conectar dados com marcos de vida." — Lozano
 *
 * Este componente será visto por gerações futuras.
 * Cada pixel tem peso histórico.
 */

import React, { useEffect, useRef, useState } from 'react';

// =============================================================================
// DADOS AUDITADOS + CONTEXTO HUMANO
// =============================================================================
const HUMAN_TIMELINE = [
  {
    year: 1879,
    tech: 'Eletricidade',
    yearsToAdopt: 46,
    milestone: '25% dos lares',
    humanMoment: 'Uma vida inteira.',
    reflection: 'Quem viu Edison acender a primeira lâmpada morreu antes da luz chegar em metade das casas.',
  },
  {
    year: 1991,
    tech: 'Internet',
    yearsToAdopt: 7,
    milestone: '25% dos lares',
    humanMoment: 'Uma infância.',
    reflection: 'Uma criança que nasceu com a Web já navegava sozinha quando entrou na escola.',
  },
  {
    year: 2022,
    tech: 'IA Generativa',
    yearsToAdopt: 2.5,
    milestone: '39% dos trabalhadores',
    humanMoment: 'Um piscar de olhos.',
    reflection: 'Não houve tempo de se preparar. Quando percebemos, já havia acontecido.',
    highlight: true,
  },
];

const MAX_YEARS = 50; // Escala visual: 50 anos = 100%

const TheCompression: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4 bg-[#030810]"
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* Header - Minimalista */}
        <div
          className={`
            text-center mb-20 transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            A Compressão do Tempo
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            Três tecnologias. Três gerações. Uma aceleração impossível.
          </p>
        </div>

        {/* A Linha do Tempo - Uma única linha horizontal */}
        <div className="relative mb-16">
          {/* Linha base - representa 50 anos */}
          <div className="relative h-1 bg-white/10 rounded-full overflow-visible">

            {/* Marcadores proporcionais */}
            {HUMAN_TIMELINE.map((item, index) => {
              const widthPercent = (item.yearsToAdopt / MAX_YEARS) * 100;
              const isActive = activeIndex === index;
              const isHighlight = item.highlight;

              return (
                <div
                  key={item.year}
                  className={`
                    absolute top-0 left-0 h-full rounded-full cursor-pointer
                    transition-all duration-700
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                    ${isHighlight ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]' : 'bg-white/40'}
                    ${isActive ? 'shadow-[0_0_30px_rgba(255,255,255,0.8)]' : ''}
                  `}
                  style={{
                    width: `${widthPercent}%`,
                    transitionDelay: `${index * 300 + 500}ms`,
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Ponto final da barra */}
                  <div
                    className={`
                      absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                      w-3 h-3 rounded-full border-2 bg-[#030810]
                      transition-all duration-300
                      ${isHighlight ? 'border-white scale-125' : 'border-white/60'}
                      ${isActive ? 'scale-150 border-white' : ''}
                    `}
                  />
                </div>
              );
            })}
          </div>

          {/* Labels abaixo da linha */}
          <div className="flex justify-between mt-6 text-xs font-mono text-slate-600">
            <span>0</span>
            <span>25 anos</span>
            <span>50 anos</span>
          </div>
        </div>

        {/* Cards - Três marcos da vida humana */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {HUMAN_TIMELINE.map((item, index) => {
            const isActive = activeIndex === index;
            const isHighlight = item.highlight;

            return (
              <div
                key={item.year}
                className={`
                  relative p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-default
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${isHighlight
                    ? 'bg-white/5 border-white/20'
                    : 'bg-transparent border-white/5 hover:border-white/10'
                  }
                  ${isActive ? 'border-white/30 bg-white/5' : ''}
                `}
                style={{ transitionDelay: `${index * 200 + 800}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Ano */}
                <p className={`
                  text-5xl md:text-6xl font-display font-bold mb-4 transition-colors duration-300
                  ${isHighlight ? 'text-white' : 'text-white/30'}
                  ${isActive ? 'text-white/80' : ''}
                `}>
                  {item.year}
                </p>

                {/* Tecnologia */}
                <p className={`
                  text-sm font-mono uppercase tracking-wider mb-6 transition-colors duration-300
                  ${isHighlight ? 'text-white/80' : 'text-white/40'}
                `}>
                  {item.tech}
                </p>

                {/* O Número - Tempo de adoção */}
                <div className="mb-6">
                  <p className={`
                    text-3xl md:text-4xl font-bold transition-colors duration-300
                    ${isHighlight ? 'text-white' : 'text-white/50'}
                  `}>
                    {item.yearsToAdopt} <span className="text-lg font-normal text-white/40">anos</span>
                  </p>
                  <p className="text-xs text-white/30 mt-1">
                    para {item.milestone}
                  </p>
                </div>

                {/* Contexto Humano - A alma do componente */}
                <div className={`
                  pt-6 border-t transition-colors duration-300
                  ${isHighlight ? 'border-white/20' : 'border-white/5'}
                `}>
                  <p className={`
                    text-base md:text-lg font-medium mb-2 transition-colors duration-300
                    ${isHighlight ? 'text-white' : 'text-white/60'}
                  `}>
                    {item.humanMoment}
                  </p>
                  <p className={`
                    text-sm leading-relaxed transition-colors duration-300
                    ${isHighlight ? 'text-white/70' : 'text-white/30'}
                  `}>
                    {item.reflection}
                  </p>
                </div>

                {/* Indicador visual para o highlight */}
                {isHighlight && (
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* A Frase Final - O peso da realização */}
        <div
          className={`
            mt-20 text-center transition-all duration-1000 delay-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            <span className="text-white font-medium">30 anos de transformação industrial</span>
            <br />
            <span className="text-white/50">comprimidos em 36 meses.</span>
          </p>

          {/* Dado adicional - auditado */}
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10">
            <span className="text-2xl font-bold text-white">39,4%</span>
            <span className="text-sm text-white/50">dos trabalhadores americanos usam IA diariamente</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TheCompression;
