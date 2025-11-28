/**
 * PROFISSIONAL ANTI-FRÁGIL 2026
 *
 * "Uma página. Uma decisão. Eu sei o que fazer depois de ler isso." — Jobs
 * "Customer Zero aplicado ao leitor." — Lozano
 *
 * Dados auditados: gap-analysis-audit.md (Seção 5 - Perfil Profissional 2026)
 */

import React from 'react';
import { Brain, Shield, Users, Network, Sparkles, TrendingDown, ArrowRight } from 'lucide-react';

// =============================================================================
// DADOS AUDITADOS (Fonte: gap-analysis-audit.md - Skills da Pesquisa)
// =============================================================================
const ELITE_SKILLS = [
  {
    name: 'Gestão de Agentes',
    score: 10,
    description: 'Orquestrar múltiplos agentes de IA como um maestro conduz uma orquestra',
    icon: Network,
    color: 'emerald',
  },
  {
    name: 'Conexão Humana',
    score: 10,
    description: 'O que a IA não replica: empatia genuína, presença, relacionamento',
    icon: Users,
    color: 'cyan',
  },
  {
    name: 'Curadoria da Verdade',
    score: 9,
    description: 'Verificar, validar, distinguir real de sintético em tempo real',
    icon: Shield,
    color: 'purple',
  },
  {
    name: 'Pensamento Sistêmico',
    score: 8,
    description: 'Ver conexões onde outros veem partes isoladas',
    icon: Brain,
    color: 'amber',
  },
];

const DEPRECATED_SKILLS = [
  'Memorização de informação',
  'Execução manual repetitiva',
  'Sintaxe de código (sem contexto)',
  'Velocidade de digitação',
  'Conhecimento estático',
];

const EMERGING_PROFESSIONS = [
  {
    title: 'Designer de Personalidade de Agentes',
    description: 'Cria personas, tom de voz e comportamentos para agentes de IA corporativos',
    salary: '$150-250k',
    timeline: 'Demanda alta em 2026',
  },
  {
    title: 'Auditor de Viés Algorítmico',
    description: 'Identifica e corrige preconceitos em sistemas de IA antes do deploy',
    salary: '$120-200k',
    timeline: 'Regulação exigirá em 2026',
  },
  {
    title: 'Gerente de Cibersegurança Pessoal',
    description: 'Protege identidade digital de indivíduos contra deepfakes e clones',
    salary: '$100-180k',
    timeline: 'Explosão em 2026',
  },
];

// Função para renderizar a barra de skill
const SkillBar: React.FC<{ score: number; color: string }> = ({ score, color }) => {
  const colorClasses: Record<string, string> = {
    emerald: 'bg-emerald-500',
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
    amber: 'bg-amber-500',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-1000`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className="text-white font-mono font-bold w-8 text-right">{score}</span>
    </div>
  );
};

const AntifragileProfessional: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#050b14] to-[#0a1525]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400/80 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
            O Que Fazer Com Essa Informação
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
            Profissional Anti-Frágil
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> 2026</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não sobrevive quem resiste à mudança.
            <strong className="text-slate-200"> Prospera quem se fortalece com ela.</strong>
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* LEFT: O que importa */}
          <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">O que importa em 2026</h3>
            </div>

            <div className="space-y-6">
              {ELITE_SKILLS.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name}>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`w-5 h-5 text-${skill.color}-400`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <SkillBar score={skill.score} color={skill.color} />
                    <p className="text-slate-500 text-sm mt-2">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: O que NÃO importa mais */}
          <div className="bg-slate-900/40 border border-red-500/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-6 h-6 text-red-400/60" />
              <h3 className="text-xl font-bold text-slate-400">O que perdeu valor</h3>
            </div>

            <div className="space-y-4">
              {DEPRECATED_SKILLS.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 text-slate-500 line-through decoration-red-500/30"
                >
                  <span className="w-6 h-6 rounded-full bg-red-950/50 flex items-center justify-center text-xs text-red-400/50">
                    ✕
                  </span>
                  {skill}
                </div>
              ))}
            </div>

            {/* Insight Box */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <p className="text-slate-300 text-sm">
                <strong className="text-white block mb-1">O padrão:</strong>
                IA substitui quem <span className="text-red-400">vende tempo</span>.
                IA amplifica quem <span className="text-emerald-400">vende julgamento</span>.
              </p>
            </div>
          </div>

        </div>

        {/* Emerging Professions - Jobs: "O que surge" */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ArrowRight className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Profissões Emergentes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EMERGING_PROFESSIONS.map((profession) => (
              <div
                key={profession.title}
                className="group bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {profession.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {profession.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono font-bold">{profession.salary}</span>
                  <span className="text-slate-500">{profession.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Question - Call to Action */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl rounded-3xl" />

          <div className="relative bg-black/60 border border-white/10 rounded-2xl p-8 md:p-10 text-center">
            <p className="text-2xl md:text-3xl text-white font-light mb-4">
              A pergunta não é mais
              <span className="text-slate-500 italic"> "a IA vai me substituir?"</span>
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold">
              A pergunta é:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {' '}"Como uso IA para me tornar insubstituível?"
              </span>
            </p>

            {/* Stats Row */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-display font-bold text-emerald-400">$200k</p>
                <p className="text-slate-500 text-xs">Salário AI Agent Manager</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-cyan-400">41-61%</p>
                <p className="text-slate-500 text-xs">Código gerado por IA</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-purple-400">+152%</p>
                <p className="text-slate-500 text-xs">Produtividade Klarna/pessoa</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AntifragileProfessional;
