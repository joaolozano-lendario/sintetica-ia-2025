import React from 'react';
import { Rocket } from 'lucide-react';

const CallToAdventure: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#050b14] to-[#0a1525] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-950/30 border border-purple-500/20 rounded-full text-purple-400 text-xs font-mono uppercase tracking-widest mb-8">
          <Rocket size={14} />
          O Convite à Aventura
        </div>

        {/* Main Quote */}
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
          "O computador era uma bicicleta para a mente.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            A IA é um foguete para o espírito."
          </span>
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Estamos no meio de uma <strong className="text-white">Revolução Industrial da Mente</strong>.
          É assustador? Sim. A ansiedade permeia os dados de 2025. Mas a oportunidade é sem precedentes.
        </p>

        {/* Key Insight Box */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 mb-8">
          <p className="text-slate-200 text-xl leading-relaxed">
            Nunca, na história da humanidade, o custo de <strong className="text-cyan-400">criar</strong> e
            <strong className="text-purple-400"> resolver problemas</strong> foi tão baixo.
          </p>
          <p className="text-slate-400 mt-4">
            Em 2026, a barreira não será técnica. Será a sua <em className="text-white">curiosidade</em> e a sua <em className="text-white">coragem de perguntar</em>.
          </p>
        </div>

        {/* Final Question */}
        <p className="text-2xl md:text-3xl font-display font-bold text-white">
          A questão é: <span className="text-cyan-400">para onde você quer ir?</span>
        </p>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAdventure;
