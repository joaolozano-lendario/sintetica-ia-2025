import React from 'react';
import { Bot, Factory, Home, DollarSign, Calendar, TrendingUp, Truck, Heart } from 'lucide-react';

const RoboticsRevolution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0f1a] to-[#050b14] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Bot size={14} />
            A Materialização
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Do Software ao <span className="text-orange-400">Metal</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg font-light">
            2025 foi o ano em que a IA ganhou corpo. Robôs humanoides deixaram de ser ficção científica para se tornarem commodity industrial — com preço de carro popular.
          </p>
        </div>

        {/* Main Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Tesla Optimus */}
          <div className="bg-orange-950/20 border border-orange-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/40 transition-all">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-orange-900/50 text-orange-300 rounded border border-orange-500/30">
                Consumer 2026-2027
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-900/40 rounded-2xl flex items-center justify-center text-orange-400 border border-orange-500/30 group-hover:scale-110 transition-transform">
                <Home size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Tesla Optimus</h3>
                <p className="text-orange-400 text-sm font-mono">O Robô Doméstico</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-300 leading-relaxed">
                Elon Musk confirmou: o Optimus chegará às casas por <strong className="text-white">$20.000 - $30.000</strong> — preço de um carro popular. Promessa: fazer tarefas domésticas, cuidar de idosos, carregar compras.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-orange-400 mb-1">
                    <DollarSign size={14} />
                    <span className="text-xs font-mono uppercase">Preço</span>
                  </div>
                  <p className="text-xl font-bold text-white">$20-30k</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-orange-400 mb-1">
                    <Calendar size={14} />
                    <span className="text-xs font-mono uppercase">Lançamento</span>
                  </div>
                  <p className="text-xl font-bold text-white">2026-2027</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-950/30 border border-orange-500/20 rounded-xl p-4">
              <p className="text-orange-200/80 text-xs italic">
                "Será o produto mais transformador da história da Tesla" — Elon Musk, Q3 2025
              </p>
            </div>
          </div>

          {/* Figure AI Industrial */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-emerald-900/50 text-emerald-300 rounded border border-emerald-500/30">
                Industrial 2025
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-900/40 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <Factory size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Figure 02</h3>
                <p className="text-emerald-400 text-sm font-mono">O Operário de Metal</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-300 leading-relaxed">
                Já validado na BMW Spartanburg com <strong className="text-white">99% de sucesso</strong>. Manipula chapas metálicas, opera em turnos completos, não precisa de pausas. O ROI industrial foi provado.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <TrendingUp size={14} />
                    <span className="text-xs font-mono uppercase">Sucesso</span>
                  </div>
                  <p className="text-xl font-bold text-white">99%</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Factory size={14} />
                    <span className="text-xs font-mono uppercase">Cliente</span>
                  </div>
                  <p className="text-xl font-bold text-white">BMW</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-200/80 text-xs italic">
                Investidores: Microsoft, NVIDIA, OpenAI, Jeff Bezos. Valuation: $2.6Bi+
              </p>
            </div>
          </div>

        </div>

        {/* The Big Picture */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-10 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
              A Projeção: <span className="text-cyan-400">1 Milhão de Robôs</span>
            </h3>
            <p className="text-slate-400 text-sm">Humanoides em operação até 2028 (Goldman Sachs)</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-black/20 rounded-xl border border-white/5">
              <p className="text-slate-500 text-xs font-mono uppercase mb-1">2024</p>
              <p className="text-2xl font-bold text-slate-400">~10k</p>
              <p className="text-slate-600 text-xs">Pilotos</p>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-xl border border-white/5">
              <p className="text-slate-500 text-xs font-mono uppercase mb-1">2025</p>
              <p className="text-2xl font-bold text-white">~50k</p>
              <p className="text-slate-600 text-xs">Validação</p>
            </div>
            <div className="text-center p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/20">
              <p className="text-cyan-400 text-xs font-mono uppercase mb-1">2026</p>
              <p className="text-2xl font-bold text-cyan-400">~250k</p>
              <p className="text-cyan-600 text-xs">Escala</p>
            </div>
            <div className="text-center p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/20">
              <p className="text-cyan-400 text-xs font-mono uppercase mb-1">2028</p>
              <p className="text-2xl font-bold text-cyan-400">1M+</p>
              <p className="text-cyan-600 text-xs">Commodity</p>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-800/30 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-400">
                <Factory size={20} />
              </div>
              <h4 className="text-white font-bold">Manufatura</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Linhas de montagem 24/7. Sem pausas, sem acidentes de trabalho, precisão milimétrica. BMW, Mercedes e Toyota já em testes avançados.
            </p>
          </div>

          <div className="bg-slate-800/30 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400">
                <Truck size={20} />
              </div>
              <h4 className="text-white font-bold">Logística</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Amazon já usa robôs em warehouses. Próximo passo: humanoides para "última milha" — carregar pacotes, subir escadas, tocar campainhas.
            </p>
          </div>

          <div className="bg-slate-800/30 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center text-red-400">
                <Heart size={20} />
              </div>
              <h4 className="text-white font-bold">Cuidado de Idosos</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Japão lidera: população envelhecendo, poucos cuidadores. Robôs para companhia, medicação, emergências. Questão ética em debate.
            </p>
          </div>

        </div>

        {/* Bottom Insight */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="bg-orange-950/20 border border-orange-500/20 rounded-2xl p-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-orange-400">A matemática é simples:</strong> Um operário humano custa ~$50k/ano + benefícios + turnos limitados. Um robô custa $30k uma vez + manutenção, opera 24/7. Em 2-3 anos, o ROI é inevitável. A questão não é "se", é "como a sociedade se adapta".
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoboticsRevolution;
