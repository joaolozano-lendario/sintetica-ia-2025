import React from 'react';
import { MapPin, Building2, GraduationCap, ShieldAlert, Briefcase, BookOpen, Wheat, Landmark, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const BrazilFocus: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a1120] to-[#050b14] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-green-500 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin size={14} />
            Cenário Nacional
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Brasil na <span className="text-green-400">Corrida da IA</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-xl font-light">
            A maior economia da América Latina não está de fora. Com 9 milhões de empresas usando IA e investimentos bilionários, o país vive sua própria revolução.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* Card 1 - Adoção Corporativa */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-green-500/50 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-green-950/30 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Adoção</span>
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">72%</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Das empresas brasileiras já utilizam IA em algum processo. São mais de 9 milhões de empresas.
            </p>
          </div>

          {/* Card 2 - Investimento Microsoft */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-950/30 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Investimento</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">R$14.7 Bi</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Microsoft investe no Brasil com meta de treinar 5 milhões de brasileiros em IA até 2028.
            </p>
          </div>

          {/* Card 3 - Golpes Pix */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-red-500/50 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-red-950/30 rounded-lg text-red-400 group-hover:scale-110 transition-transform">
                <ShieldAlert size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Fraude</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">28 Mi</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Casos de golpes via Pix usando IA para clonagem de voz e deepfakes em 2025. Epidemia nacional.
            </p>
          </div>

          {/* Card 4 - Salário Engenheiro IA */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-yellow-950/30 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Salário BR</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight">R$19k-27k</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Faixa salarial mensal para Engenheiros de IA no Brasil. Posições sênior ultrapassam R$35k.
            </p>
          </div>

        </div>

        {/* Educação: Entre o Caos e a Inovação */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2 font-mono flex items-center justify-center gap-2">
              <BookOpen size={14} />
              Educação & Trabalho
            </h3>
            <h4 className="text-2xl md:text-3xl font-display font-bold text-white">
              Entre o <span className="text-red-400">Caos</span> e a <span className="text-emerald-400">Inovação</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MEC */}
            <div className="bg-red-950/10 border border-red-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-900/30 rounded-lg text-red-400">
                  <AlertTriangle size={20} />
                </div>
                <span className="text-red-400 text-xs font-mono uppercase tracking-wider">MEC</span>
              </div>
              <h5 className="text-white font-bold mb-2">Sem Diretrizes Claras</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                O ministério ainda luta para lançar orientações oficiais sobre uso de IA nas escolas. Vácuo de política pública.
              </p>
            </div>

            {/* Rede Pública */}
            <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-900/30 rounded-lg text-emerald-400">
                  <CheckCircle size={20} />
                </div>
                <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider">Rede Pública</span>
              </div>
              <h5 className="text-white font-bold mb-2">Adaptando na Prática</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                Professores já usam IA via WhatsApp (Nova Escola) para criar planos de aula em segundos. Inovação vem da base.
              </p>
            </div>

            {/* USP & FGV */}
            <div className="bg-blue-950/10 border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-900/30 rounded-lg text-blue-400">
                  <GraduationCap size={20} />
                </div>
                <span className="text-blue-400 text-xs font-mono uppercase tracking-wider">USP & FGV</span>
              </div>
              <h5 className="text-white font-bold mb-2">Pioneiras em Letramento</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                "Letramento em IA" agora é compulsório. Nova regra: trabalhos escritos exigem defesa oral para validar autoria.
              </p>
            </div>
          </div>
        </div>

        {/* Setores Beneficiados */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2 font-mono">Oportunidades Nacionais</h3>
            <h4 className="text-2xl md:text-3xl font-display font-bold text-white">
              Setores Mais <span className="text-green-400">Beneficiados</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Agronegócio */}
            <div className="bg-green-950/20 border border-green-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-green-500/40 transition-colors">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Wheat size={80} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-900/30 rounded-xl text-green-400">
                  <Wheat size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">Agronegócio</h5>
                  <span className="text-green-400 text-xs font-mono">Maior PIB do Brasil</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                IA para prever safras, otimizar irrigação, combater pragas e personalizar insumos. O campo brasileiro está se tornando um laboratório de precisão.
              </p>
            </div>

            {/* Sistema Financeiro */}
            <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-yellow-500/40 transition-colors">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Landmark size={80} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-900/30 rounded-xl text-yellow-400">
                  <Landmark size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">Sistema Financeiro</h5>
                  <span className="text-yellow-400 text-xs font-mono">Pix + Open Finance</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Crédito personalizado em tempo real. O Pix processa 800+ milhões de transações/mês. Open Finance + IA = revolução no acesso a crédito.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Context Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 bg-yellow-900/30 p-4 rounded-full text-yellow-400">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Marco Regulatório: PL 2338/2023</h4>
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                O Brasil debate sua própria regulação de IA. O PL 2338/2023 propõe classificação de risco, transparência obrigatória e direitos do cidadão frente a decisões automatizadas. Inspirado no AI Act europeu, mas adaptado à realidade brasileira.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-yellow-900/40 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/20">Em Tramitação</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-600">Senado Federal</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-600">2025-2026</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrazilFocus;
