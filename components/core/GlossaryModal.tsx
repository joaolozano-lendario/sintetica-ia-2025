/**
 * GlossaryModal - Modal de Glossário Acessível
 *
 * Movido do fluxo principal para modal acessível de qualquer ponto.
 * "O Codex - Todo conteúdo cortado deve ir para um Codex acessível" — Da Vinci
 */

import React, { useState, useEffect } from 'react';
import { X, Search, BookOpen } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'conceito' | 'tecnologia' | 'empresa' | 'metrica';
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  { term: 'AGI', definition: 'Artificial General Intelligence - IA com capacidade cognitiva equivalente ou superior à humana em todas as tarefas.', category: 'conceito' },
  { term: 'LLM', definition: 'Large Language Model - Modelos de linguagem treinados em vastos datasets de texto.', category: 'tecnologia' },
  { term: 'Tokens', definition: 'Unidades de texto processadas por LLMs. ~750 palavras = 1000 tokens.', category: 'conceito' },
  { term: 'Fine-tuning', definition: 'Processo de adaptar um modelo pré-treinado para tarefas específicas.', category: 'tecnologia' },
  { term: 'RAG', definition: 'Retrieval-Augmented Generation - Técnica que combina busca em documentos com geração de texto.', category: 'tecnologia' },
  { term: 'Agentic AI', definition: 'IAs que agem autonomamente para completar tarefas complexas, tomando decisões sequenciais.', category: 'conceito' },
  { term: 'Multimodal', definition: 'Modelos capazes de processar múltiplos tipos de input (texto, imagem, áudio, vídeo).', category: 'conceito' },
  { term: 'Hallucination', definition: 'Quando um modelo gera informações plausíveis mas factualmente incorretas.', category: 'conceito' },
  { term: 'Context Window', definition: 'Quantidade máxima de tokens que um modelo pode processar em uma única interação.', category: 'metrica' },
  { term: 'Inference', definition: 'Processo de usar um modelo treinado para gerar outputs a partir de novos inputs.', category: 'tecnologia' },
  { term: 'OpenAI', definition: 'Criadora do ChatGPT e GPT-4. Líder de mercado em IA generativa.', category: 'empresa' },
  { term: 'Anthropic', definition: 'Criadora do Claude. Foco em IA segura e alinhada.', category: 'empresa' },
  { term: 'Google DeepMind', definition: 'Divisão de IA do Google. Criadora do Gemini.', category: 'empresa' },
  { term: 'Prompt Engineering', definition: 'Arte de estruturar instruções para obter melhores resultados de LLMs.', category: 'conceito' },
  { term: 'Synthetic Data', definition: 'Dados gerados artificialmente para treinar modelos de IA.', category: 'conceito' },
  { term: 'Model Collapse', definition: 'Degradação de qualidade quando modelos são treinados em outputs de outros modelos.', category: 'conceito' },
  { term: 'RLHF', definition: 'Reinforcement Learning from Human Feedback - Técnica de alinhamento usando feedback humano.', category: 'tecnologia' },
  { term: 'Transformer', definition: 'Arquitetura neural base dos LLMs modernos, introduzida em 2017.', category: 'tecnologia' },
  { term: 'GPU', definition: 'Graphics Processing Unit - Hardware essencial para treinar e executar modelos de IA.', category: 'tecnologia' },
  { term: 'TPU', definition: 'Tensor Processing Unit - Chip proprietário do Google otimizado para IA.', category: 'tecnologia' },
];

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'conceito', label: 'Conceitos', color: 'cyan' },
    { id: 'tecnologia', label: 'Tecnologias', color: 'purple' },
    { id: 'empresa', label: 'Empresas', color: 'emerald' },
    { id: 'metrica', label: 'Métricas', color: 'orange' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Glossário</h2>
              <p className="text-xs text-slate-500">Termos essenciais do universo IA</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-4 border-b border-white/5 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar termo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                !selectedCategory
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-white/5 text-slate-400 border border-transparent hover:bg-white/10'
              }`}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? `bg-${cat.color}-950/50 text-${cat.color}-400 border border-${cat.color}-500/30`
                    : 'bg-white/5 text-slate-400 border border-transparent hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Terms list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              Nenhum termo encontrado
            </div>
          ) : (
            filteredTerms.map((item, index) => (
              <div
                key={item.term}
                className="p-4 bg-white/5 hover:bg-white/[0.07] border border-white/5 rounded-xl transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{item.term}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.definition}</p>
                  </div>
                  <span className={`
                    px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider shrink-0
                    ${item.category === 'conceito' ? 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/20' : ''}
                    ${item.category === 'tecnologia' ? 'bg-purple-950/50 text-purple-400 border border-purple-500/20' : ''}
                    ${item.category === 'empresa' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/20' : ''}
                    ${item.category === 'metrica' ? 'bg-orange-950/50 text-orange-400 border border-orange-500/20' : ''}
                  `}>
                    {item.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500">
            {filteredTerms.length} de {GLOSSARY_TERMS.length} termos
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryModal;
