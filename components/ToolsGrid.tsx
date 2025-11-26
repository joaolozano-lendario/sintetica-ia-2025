import React from 'react';
import { ToolItem } from '../types';
import { ExternalLink } from 'lucide-react';

const tools: ToolItem[] = [
  { name: 'Gemini 3', category: 'Multimodal', description: 'O novo rei dos benchmarks. Memória infinita e líder no "Humanity\'s Last Exam" (45.8%). Ideal para pesquisa profunda.', access: 'Google' },
  { name: 'Claude 4.5 Opus', category: 'Engenharia', description: 'O favorito dos devs. Lidera benchmarks de codificação (SWE-bench) e mantém foco em tarefas autônomas de 30 horas.', access: 'Anthropic' },
  { name: 'GPT-5.1', category: 'Adaptativo', description: 'Introduziu modos "Instant" e "Thinking". Custo-eficiente para o usuário geral, mas perdeu a coroa absoluta de inteligência.', access: 'OpenAI' },
  { name: 'DeepSeek R1', category: 'Open Source', description: 'A surpresa chinesa de Janeiro. Democratizou o raciocínio "Chain of Thought" rodando localmente, provando que a China está no jogo.', access: 'Open Source' },
  { name: 'Figure 02', category: 'Robótica', description: 'Hardware. O robô humanóide que provou viabilidade comercial nas fábricas da BMW. Não é software, é trabalho braçal substituído.', access: 'Enterprise' },
  { name: 'WNEXUS', category: 'Nuclear', description: 'IA da Westinghouse especializada em desenhar e otimizar reatores nucleares AP1000. A fusão literal de bits e átomos.', access: 'Industrial' },
];

const ToolsGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">O Arsenal de Novembro</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Ferramentas de <span className="text-purple-400">Poder</span></h3>
        </div>
        <p className="text-slate-400 max-w-md text-sm text-right md:text-left">
          O estado da arte foi redefinido em Novembro de 2025. Conheça os modelos e sistemas que lideram o mundo agora.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="glass-panel p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 bg-slate-900 px-2 py-1 rounded uppercase tracking-wider border border-white/5">{tool.category}</span>
              <span className={`text-xs font-bold px-2 py-1 rounded border uppercase tracking-wider ${tool.access === 'Open Source' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-900/10' : 'text-purple-400 border-purple-500/30 bg-purple-900/10'}`}>
                {tool.access}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
              {tool.name}
              <ExternalLink size={14} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsGrid;