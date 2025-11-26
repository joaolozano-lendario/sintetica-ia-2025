import React from 'react';
import { Scale, Globe, Flag, Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const GlobalRegulation: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050a12] relative overflow-hidden border-y border-white/5">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-900/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Scale size={14} />
            Governança Global
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            A Corrida <span className="text-blue-400">Regulatória</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light">
            Enquanto a IA acelera, governos correm para criar regras. O problema: a lei anda de bicicleta, a tecnologia vai de foguete.
          </p>
        </div>

        {/* Main Regulations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          {/* EU AI Act */}
          <div className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="absolute top-4 right-4 flex items-center gap-1">
              <CheckCircle size={12} className="text-emerald-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Aprovado</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/30">
                <Flag size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Act</h3>
                <p className="text-blue-400 text-xs font-mono">União Europeia</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                A regulação mais abrangente do mundo. Classifica IAs por <strong className="text-white">nível de risco</strong> (inaceitável, alto, limitado, mínimo) e impõe obrigações proporcionais.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Aprovação</span>
                  <span className="text-slate-300">Março 2024</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Vigor Total</span>
                  <span className="text-blue-400 font-bold">Agosto 2026</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Multas</span>
                  <span className="text-red-400">Até 7% receita global</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/40 border border-blue-500/20 rounded-xl p-3">
              <p className="text-blue-200/80 text-xs">
                <strong>Proibido:</strong> Social scoring, manipulação subliminar, biometria em massa em espaços públicos.
              </p>
            </div>
          </div>

          {/* US Executive Order */}
          <div className="bg-slate-800/30 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-600 transition-all">
            <div className="absolute top-4 right-4 flex items-center gap-1">
              <Clock size={12} className="text-yellow-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-400">Em Revisão</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-slate-300 border border-slate-600">
                <Flag size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Executive Order</h3>
                <p className="text-slate-400 text-xs font-mono">Estados Unidos</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                Biden assinou em Out/2023. Foco em <strong className="text-white">segurança nacional</strong> e testes de modelos "frontier". Empresas devem reportar ao governo antes de treinar modelos grandes.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Assinatura</span>
                  <span className="text-slate-300">Outubro 2023</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Status 2025</span>
                  <span className="text-yellow-400">Sob revisão Trump</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Enforcement</span>
                  <span className="text-slate-400">Voluntário</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-950/30 border border-yellow-500/20 rounded-xl p-3">
              <p className="text-yellow-200/80 text-xs">
                <strong>Incerteza:</strong> Nova administração pode revogar ou modificar significativamente.
              </p>
            </div>
          </div>

          {/* China */}
          <div className="bg-red-950/10 border border-red-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-all">
            <div className="absolute top-4 right-4 flex items-center gap-1">
              <CheckCircle size={12} className="text-emerald-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Em Vigor</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-900/40 rounded-xl flex items-center justify-center text-red-400 border border-red-500/30">
                <Flag size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Regulações CAC</h3>
                <p className="text-red-400 text-xs font-mono">China</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                Múltiplas regras desde 2022. Foco em <strong className="text-white">controle de conteúdo</strong> e "valores socialistas". LLMs precisam de aprovação governamental antes do lançamento.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Deep Synthesis</span>
                  <span className="text-slate-300">Jan 2023</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">GenAI Measures</span>
                  <span className="text-slate-300">Ago 2023</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Enforcement</span>
                  <span className="text-red-400">Rígido</span>
                </div>
              </div>
            </div>

            <div className="bg-red-950/40 border border-red-500/20 rounded-xl p-3">
              <p className="text-red-200/80 text-xs">
                <strong>Na prática:</strong> IAs chinesas são censuradas. Perguntas sobre Tiananmen = resposta bloqueada.
              </p>
            </div>
          </div>

        </div>

        {/* Brazil Section */}
        <div className="bg-gradient-to-r from-green-950/20 to-yellow-950/20 border border-green-500/20 rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-green-900/40 rounded-2xl flex items-center justify-center text-green-400 border border-green-500/30">
                <Globe size={32} />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">PL 2338/2023</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-yellow-900/50 text-yellow-300 rounded border border-yellow-500/30">
                  Em Tramitação
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                O Brasil debate seu próprio Marco Legal da IA. Inspirado no AI Act europeu, mas adaptado à realidade brasileira. Propõe classificação por risco, transparência obrigatória, e direitos do cidadão frente a decisões automatizadas.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                  <p className="text-slate-500 text-[10px] font-mono uppercase">Autor</p>
                  <p className="text-white text-sm font-medium">Senado</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                  <p className="text-slate-500 text-[10px] font-mono uppercase">Status</p>
                  <p className="text-yellow-400 text-sm font-medium">Comissões</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                  <p className="text-slate-500 text-[10px] font-mono uppercase">Previsão</p>
                  <p className="text-white text-sm font-medium">2025-2026</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                  <p className="text-slate-500 text-[10px] font-mono uppercase">Modelo</p>
                  <p className="text-blue-400 text-sm font-medium">EU-inspired</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Reality Check */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-yellow-900/30 p-3 rounded-xl text-yellow-400">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">O Problema Fundamental</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Leis levam anos para serem escritas, debatidas e aprovadas. A IA evolui em meses. Quando o AI Act entrar em vigor total (2026), os modelos que ele regula já serão "tecnologia antiga". É como escrever regras para carros enquanto foguetes decolam.
                </p>
                <p className="text-slate-500 text-xs italic">
                  "Reguladores estão tentando domar um tigre que muda de forma a cada 6 meses." — Analista de Policy, Brookings Institution
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalRegulation;
