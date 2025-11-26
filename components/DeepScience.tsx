import React from 'react';
import { Dna, Atom, CloudRain, Microscope, FlaskConical, Heart } from 'lucide-react';

const DeepScience: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050b14] relative overflow-hidden">

      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-900/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Microscope size={14} />
            O Lado Luminoso
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Deep Science: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Salvando Vidas</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light">
            Enquanto o mundo debate empregos e deepfakes, a IA está silenciosamente revolucionando a medicina, descobrindo novos materiais e prevendo desastres naturais. Esta é a história que menos se conta.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* AlphaFold 3 - The Big One */}
          <div className="lg:col-span-2 bg-blue-950/20 border border-blue-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full"></div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Dna size={40} />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display">AlphaFold 3</h3>
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-blue-900/50 text-blue-300 rounded border border-blue-500/30">Google DeepMind</span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  O AlphaFold 2 revolucionou a biologia ao prever estruturas de proteínas. O <strong className="text-white">AlphaFold 3</strong> foi além: agora prevê a estrutura e interação de <em>todas</em> as moléculas da vida — DNA, RNA e ligantes (as pequenas moléculas que formam a maioria dos medicamentos).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <p className="text-blue-400 text-2xl font-bold font-display">Novartis</p>
                    <p className="text-slate-500 text-xs">Parceria para descoberta de fármacos</p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <p className="text-blue-400 text-2xl font-bold font-display">Eli Lilly</p>
                    <p className="text-slate-500 text-xs">Simulação droga-alvo in silico</p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <p className="text-blue-400 text-2xl font-bold font-display">Anos → Meses</p>
                    <p className="text-slate-500 text-xs">Redução no tempo de P&D</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4">
                  <p className="text-slate-400 text-sm italic">
                    <Heart size={14} className="inline text-red-400 mr-1" />
                    Impacto: Medicamentos que levariam uma década para desenvolver agora podem ser simulados e otimizados em meses. A próxima cura para o câncer pode vir de um modelo, não de um acaso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GNoME - Materials */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Atom size={120} />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-900/40 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                <Atom size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">GNoME</h3>
                <p className="text-emerald-400 text-xs font-mono">Graph Networks for Materials</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-sm">
                A IA descobriu teoricamente <strong className="text-white">2.2 milhões de novos cristais estáveis</strong> — um volume que levaria 800 anos pelos métodos tradicionais de laboratório.
              </p>

              <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                <p className="text-3xl font-bold text-emerald-400 font-display">800 anos</p>
                <p className="text-slate-500 text-xs">de trabalho humano comprimidos em meses</p>
              </div>

              <p className="text-slate-400 text-xs">
                <FlaskConical size={12} className="inline mr-1" />
                Laboratórios autônomos (A-Lab) já estão sintetizando esses materiais sem intervenção humana, buscando baterias melhores e supercondutores.
              </p>
            </div>
          </div>

          {/* Flood Hub Brazil */}
          <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-green-900/50 text-green-300 rounded border border-green-500/30">
                Caso Brasil
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-cyan-900/40 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                <CloudRain size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Flood Hub</h3>
                <p className="text-cyan-400 text-xs font-mono">Google + Serviço Geológico BR</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-sm">
                Em um ano marcado por extremos climáticos (estiagem recorde no Pantanal e Amazônia), a IA fornece previsões de cheias fluviais com até <strong className="text-white">7 dias de antecedência</strong> para comunidades ribeirinhas.
              </p>

              <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                <p className="text-2xl font-bold text-cyan-400 font-display">7 dias</p>
                <p className="text-slate-500 text-xs">de antecedência para evacuação</p>
              </div>

              <p className="text-slate-400 text-xs">
                Resultado: evacuações antecipadas, redução de mortes e custos médicos em áreas vulneráveis. A IA literalmente salvando vidas brasileiras.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Insight */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 bg-blue-900/30 p-3 rounded-xl text-blue-400">
              <Microscope size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Por que isso importa mais que chatbots?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                O ChatGPT é a face visível da IA. Mas o impacto real está nos laboratórios: proteínas sendo desvendadas, materiais sendo descobertos, desastres sendo previstos. Quando seu neto perguntar "o que a IA fez de bom?", a resposta não será "escreveu e-mails" — será "acelerou a cura de doenças e nos ajudou a sobreviver às mudanças climáticas".
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeepScience;
