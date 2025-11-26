import React from 'react';
import { Code, Users, Briefcase, TrendingUp, TrendingDown, Bot, DollarSign, Sparkles, Scale, ShieldCheck } from 'lucide-react';
import { ProfessionGuide } from '../types';

const guides: ProfessionGuide[] = [
  {
    area: "Tecnologia & Dev",
    icon: <Code size={24} />,
    atRisk: "Programador Júnior",
    onRise: "Arquiteto de Agentes",
    keySkill: "Orquestração de Fluxo",
    description: "41-61% de todo código novo é gerado por IA - sendo Java com 61% (GitHub Octoverse 2025). O valor migrou de 'escrever sintaxe' para 'arquitetar sistemas' onde agentes programam."
  },
  {
    area: "Gestão & Estratégia",
    icon: <Bot size={24} />,
    atRisk: "Middle Management",
    onRise: "AI Agent Manager",
    keySkill: "Governança de IA",
    description: "A nova elite corporativa. Não gerenciam pessoas, gerenciam frotas de agentes autônomos. Definem metas, auditam outputs e corrigem alucinações."
  },
  {
    area: "Criação & Freelance",
    icon: <Users size={24} />,
    atRisk: "Copywriter/Tradutor",
    onRise: "Editor Estratégico",
    keySkill: "Curadoria & Verdade",
    description: "O mercado de freelancers para tarefas simples (texto, tradução) colapsou. O valor está na edição de alto nível e verificação de fatos em um mundo de conteúdo sintético."
  }
];

// Profissões Emergentes 2026 (da pesquisa)
const emergingProfessions = [
  {
    title: "Designer de Personalidade de Agentes",
    icon: <Sparkles size={24} />,
    description: "Cria a 'alma' e o tom de voz da IA corporativa. Define como o agente se comunica, suas limitações éticas e sua persona.",
    keySkill: "Psicologia + Prompt Engineering",
    color: "purple"
  },
  {
    title: "Auditor de Viés Algorítmico",
    icon: <Scale size={24} />,
    description: "O 'compliance' que garante que a IA não está sendo racista, sexista ou alucinando dados críticos. Essencial para regulação.",
    keySkill: "Ética + Data Science",
    color: "blue"
  },
  {
    title: "Gerente de Cibersegurança Pessoal",
    icon: <ShieldCheck size={24} />,
    description: "Protege famílias e executivos de sequestros virtuais, deepfakes e clonagem de voz. O 'guarda-costas' digital de alto padrão.",
    keySkill: "Segurança + Gestão de Crise",
    color: "red"
  }
];

const ProfessionsGuide: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#050b14] to-[#0a1120]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">Carreiras 2026</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              A Ascensão do <span className="text-cyan-500">Agent Manager</span>
            </h3>
            <p className="text-slate-400 mt-6 max-w-xl text-lg font-light">
              A classe média criativa sofre erosão massiva, enquanto gestores de frotas digitais tornam-se a nova elite econômica.
            </p>
          </div>
          
          {/* Salary Stat Highlight */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:bg-emerald-900/30 transition-colors">
             <div className="absolute top-0 right-0 p-2 text-emerald-800 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform">
               <DollarSign size={64} />
             </div>
             <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Salário Médio (EUA)</p>
             <p className="text-4xl font-display font-bold text-white">$128k - $300k</p>
             <p className="text-emerald-200/60 text-xs mt-2 max-w-[200px]">Para AI Agent Managers. Média $200k-$260k, posições sênior em Big Tech no topo do range.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-all hover:-translate-y-2 duration-500">
              
              <div className="absolute top-0 right-0 p-4 bg-white/5 rounded-bl-2xl border-b border-l border-white/5 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                {guide.icon}
              </div>

              <h4 className="text-xl font-bold text-white mb-6 font-display pr-12">{guide.area}</h4>

              <div className="space-y-6">
                <div className="bg-red-950/10 p-4 rounded-xl border border-red-900/20 group-hover:border-red-900/40 transition-colors">
                  <div className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <TrendingDown size={12} /> Colapso
                  </div>
                  <p className="text-red-200/80 font-medium text-sm">{guide.atRisk}</p>
                </div>

                <div className="bg-emerald-950/10 p-4 rounded-xl border border-emerald-900/20 group-hover:border-emerald-900/40 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <TrendingUp size={12} /> Explosão
                  </div>
                  <p className="text-emerald-100 font-bold text-lg">{guide.onRise}</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 rounded text-[10px] text-cyan-300 font-mono uppercase tracking-wide">
                    Skill: {guide.keySkill}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Profissões Emergentes 2026 */}
        <div className="mt-20 pt-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2 font-mono">Novíssimas Carreiras</h3>
            <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Profissões <span className="text-purple-400">Emergentes</span> 2026
            </h4>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Carreiras que não existiam há 2 anos e agora pagam salários de 6 dígitos. Confirmadas pelo mercado em 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergingProfessions.map((prof, index) => {
              const colorClasses: Record<string, { bg: string; border: string; iconBg: string; text: string }> = {
                purple: { bg: 'bg-purple-950/20', border: 'border-purple-500/30', iconBg: 'bg-purple-900/30', text: 'text-purple-400' },
                blue: { bg: 'bg-blue-950/20', border: 'border-blue-500/30', iconBg: 'bg-blue-900/30', text: 'text-blue-400' },
                red: { bg: 'bg-red-950/20', border: 'border-red-500/30', iconBg: 'bg-red-900/30', text: 'text-red-400' }
              };
              const colors = colorClasses[prof.color];

              return (
                <div key={index} className={`${colors.bg} ${colors.border} border rounded-2xl p-6 hover:scale-105 transition-transform`}>
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.text} mb-4`}>
                    {prof.icon}
                  </div>
                  <h5 className="text-white font-bold text-lg mb-3">{prof.title}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{prof.description}</p>
                  <div className={`inline-block px-3 py-1 ${colors.bg} border ${colors.border} rounded text-[10px] ${colors.text} font-mono uppercase tracking-wide`}>
                    {prof.keySkill}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionsGuide;