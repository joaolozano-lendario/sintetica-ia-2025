/**
 * GlossaryModal - Glossário Curado: 10 Termos que Definem 2025
 *
 * ROUNDTABLE EDITION - Autoral
 *
 * "Não são 20 termos genéricos. São 10 termos que importam,
 *  com opinião sobre por que importam." — Leonardo da Vinci
 *
 * Cada termo tem:
 * - Definição técnica (1 linha)
 * - Por que importa (1 linha)
 * - O que muda para você (1 linha)
 */

import React, { useState, useEffect } from 'react';
import { X, Search, BookOpen, Lightbulb, User } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  whyItMatters: string;
  whatChangesForYou: string;
  icon: string;
}

// 10 TERMOS CURADOS - Escolhidos pelo Conselho
const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'AGI',
    definition: 'Artificial General Intelligence — IA com capacidade cognitiva equivalente à humana em todas as tarefas.',
    whyItMatters: 'É o "horizonte de eventos" da indústria. Todos os investimentos atuais visam chegar lá primeiro.',
    whatChangesForYou: 'Você não precisa esperar AGI. As ferramentas de hoje já transformam seu trabalho. AGI é distração.',
    icon: '🧠'
  },
  {
    term: 'LLM',
    definition: 'Large Language Model — Modelos treinados em bilhões de textos que "entendem" e geram linguagem.',
    whyItMatters: 'É a tecnologia base de ChatGPT, Claude, Gemini. O motor por trás de tudo que você usa.',
    whatChangesForYou: 'Entender LLMs te ajuda a escrever prompts melhores. Eles não pensam — preveem próximas palavras.',
    icon: '📚'
  },
  {
    term: 'Prompt Engineering',
    definition: 'A arte de estruturar instruções para obter resultados precisos de IAs.',
    whyItMatters: 'A mesma IA dá respostas medíocres ou brilhantes dependendo de como você pergunta.',
    whatChangesForYou: 'Skill mais democrática de 2025. Não precisa de código. Precisa de clareza de pensamento.',
    icon: '🎯'
  },
  {
    term: 'Agentic AI',
    definition: 'IAs que agem autonomamente para completar tarefas complexas, tomando decisões sequenciais.',
    whyItMatters: 'A evolução de "responder perguntas" para "resolver problemas inteiros".',
    whatChangesForYou: 'Em 2025, você delega tarefas completas. Em 2026, você delega projetos.',
    icon: '🤖'
  },
  {
    term: 'Context Window',
    definition: 'Quantidade máxima de texto que um modelo consegue "lembrar" em uma conversa.',
    whyItMatters: 'Era 4K tokens em 2022. Agora é 200K+. Quanto maior, mais complexo o trabalho possível.',
    whatChangesForYou: 'Você pode colar documentos inteiros e pedir análise. O limite prático quase sumiu.',
    icon: '📏'
  },
  {
    term: 'Hallucination',
    definition: 'Quando a IA gera informações plausíveis mas factualmente incorretas, com confiança.',
    whyItMatters: 'O calcanhar de Aquiles dos LLMs. Eles não "sabem" que não sabem.',
    whatChangesForYou: 'NUNCA confie cegamente. Sempre verifique fatos, datas, citações. A IA é copiloto, não piloto.',
    icon: '👻'
  },
  {
    term: 'RAG',
    definition: 'Retrieval-Augmented Generation — Técnica que combina busca em documentos com geração de texto.',
    whyItMatters: 'Resolve o problema de conhecimento desatualizado. A IA consulta seus documentos antes de responder.',
    whatChangesForYou: 'Você pode criar uma IA que "leu" todos os documentos da sua empresa.',
    icon: '🔍'
  },
  {
    term: 'Fine-tuning',
    definition: 'Processo de adaptar um modelo pré-treinado para tarefas ou domínios específicos.',
    whyItMatters: 'A diferença entre IA genérica e IA especialista. Empresas pagam milhões por isso.',
    whatChangesForYou: 'Você provavelmente não precisa. RAG resolve 90% dos casos. Fine-tuning é para escala.',
    icon: '🔧'
  },
  {
    term: 'Multimodal',
    definition: 'Modelos que processam múltiplos tipos de input: texto, imagem, áudio, vídeo.',
    whyItMatters: 'A IA deixou de ser "chatbot". Agora vê, ouve e fala. GPT-4V, Gemini, Claude 3.',
    whatChangesForYou: 'Fotografe um problema e peça solução. Grave uma reunião e peça resumo. O input expandiu.',
    icon: '🎭'
  },
  {
    term: 'Synthetic Data',
    definition: 'Dados gerados artificialmente por IA para treinar outros modelos.',
    whyItMatters: 'A internet está acabando como fonte de dados "limpos". IA treinando IA é o novo paradigma.',
    whatChangesForYou: 'O conteúdo que você cria HOJE será raro amanhã. Autenticidade humana vira diferencial.',
    icon: '🧪'
  }
];

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

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

  const filteredTerms = GLOSSARY_TERMS.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">10 Termos que Definem 2025</h2>
              <p className="text-xs text-slate-500">Glossário curado com opinião</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-white/5">
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
        </div>

        {/* Terms list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              Nenhum termo encontrado
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isExpanded = expandedTerm === item.term;

              return (
                <div
                  key={item.term}
                  className={`
                    rounded-xl border transition-all cursor-pointer
                    ${isExpanded
                      ? 'bg-cyan-950/20 border-cyan-500/20'
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                    }
                  `}
                  onClick={() => setExpandedTerm(isExpanded ? null : item.term)}
                >
                  {/* Header */}
                  <div className="p-4 flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">{item.term}</h3>
                      <p className="text-sm text-slate-400 mt-1">{item.definition}</p>
                    </div>
                    <div className={`
                      w-6 h-6 rounded-full bg-white/5 flex items-center justify-center
                      transition-transform duration-300
                      ${isExpanded ? 'rotate-180' : ''}
                    `}>
                      <span className="text-slate-500 text-xs">▼</span>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-white/5 space-y-3 ml-11">
                      {/* Why it matters */}
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-mono text-yellow-400/80 uppercase tracking-wider">Por que importa</span>
                          <p className="text-sm text-white/80 mt-1">{item.whyItMatters}</p>
                        </div>
                      </div>

                      {/* What changes for you */}
                      <div className="flex items-start gap-2">
                        <User className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-wider">O que muda pra você</span>
                          <p className="text-sm text-white/80 mt-1">{item.whatChangesForYou}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500">
            Curadoria: Jobs · Lozano · Da Vinci
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryModal;
