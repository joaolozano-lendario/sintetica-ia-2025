/**
 * ToolsDrawer - Arsenal Curado: 5 Ferramentas que Usamos
 *
 * ROUNDTABLE EDITION - Autoral
 *
 * "Não 18 ferramentas. 5 categorias com 1 recomendação cada.
 *  E uma nota: estas são as ferramentas que usamos para criar este relatório."
 *  — Steve Jobs
 *
 * Escolhas autorais. Com justificativa.
 */

import React, { useEffect } from 'react';
import { X, ExternalLink, MessageSquare, Code, Image, Music, Video, Check } from 'lucide-react';

interface Tool {
  category: string;
  categoryIcon: React.ReactNode;
  name: string;
  tagline: string;
  url: string;
  whyWeChose: string;
  usedInThisReport: boolean;
}

// 5 FERRAMENTAS CURADAS - Escolhidas pelo Conselho
const TOOLS: Tool[] = [
  {
    category: 'Chat & Raciocínio',
    categoryIcon: <MessageSquare className="w-5 h-5" />,
    name: 'Claude',
    tagline: 'Anthropic',
    url: 'https://claude.ai',
    whyWeChose: 'Contexto de 200K tokens. Raciocínio superior em tarefas complexas. Menos alucinações que GPT-4. Respostas mais nuançadas.',
    usedInThisReport: true
  },
  {
    category: 'Código',
    categoryIcon: <Code className="w-5 h-5" />,
    name: 'Cursor',
    tagline: 'The AI Code Editor',
    url: 'https://cursor.sh',
    whyWeChose: 'VS Code com IA nativa. Entende o contexto do projeto inteiro. Autocomplete que realmente funciona. Refatoração em segundos.',
    usedInThisReport: true
  },
  {
    category: 'Imagem',
    categoryIcon: <Image className="w-5 h-5" />,
    name: 'Midjourney',
    tagline: 'v6.1',
    url: 'https://midjourney.com',
    whyWeChose: 'Qualidade estética incomparável. Consistência de estilo. Entende referências visuais. O padrão da indústria criativa.',
    usedInThisReport: false
  },
  {
    category: 'Áudio & Voz',
    categoryIcon: <Music className="w-5 h-5" />,
    name: 'ElevenLabs',
    tagline: 'Voice AI',
    url: 'https://elevenlabs.io',
    whyWeChose: 'Clonagem de voz realista. Multilíngue. Latência baixa para real-time. O futuro do conteúdo falado.',
    usedInThisReport: false
  },
  {
    category: 'Vídeo',
    categoryIcon: <Video className="w-5 h-5" />,
    name: 'Runway',
    tagline: 'Gen-3 Alpha',
    url: 'https://runway.ml',
    whyWeChose: 'Text-to-video mais avançado disponível. Consistência temporal. Interface profissional. Hollywood já usa.',
    usedInThisReport: false
  }
];

interface ToolsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToolsDrawer: React.FC<ToolsDrawerProps> = ({ isOpen, onClose }) => {
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

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`
          fixed right-0 top-0 bottom-0 z-[95] w-full max-w-md bg-slate-900/98 border-l border-white/10
          transform transition-transform duration-300 ease-out flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div>
            <h2 className="text-xl font-bold text-white">Arsenal 2025</h2>
            <p className="text-xs text-slate-500 mt-1">5 ferramentas. Escolhas autorais.</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note */}
        <div className="px-6 py-4 bg-cyan-950/20 border-b border-cyan-500/10">
          <p className="text-sm text-cyan-300/90">
            Estas são as ferramentas que <span className="font-bold text-cyan-200">usamos para criar este relatório</span>.
          </p>
        </div>

        {/* Tools list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {TOOLS.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-white/5 hover:bg-white/[0.08] border border-white/5 hover:border-white/10 rounded-2xl transition-all group"
            >
              {/* Category & Used badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-400">
                  {tool.categoryIcon}
                  <span className="text-xs font-mono uppercase tracking-wider">{tool.category}</span>
                </div>
                {tool.usedInThisReport && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-950/50 border border-emerald-500/20 rounded-full">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Usado aqui</span>
                  </div>
                )}
              </div>

              {/* Name & Link */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-xs text-slate-500">{tool.tagline}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </div>

              {/* Why we chose */}
              <div className="pt-3 border-t border-white/5">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Por que escolhemos</p>
                <p className="text-sm text-slate-300 leading-relaxed">{tool.whyWeChose}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <p className="text-xs text-slate-500 text-center">
            Curadoria: Jobs · Lozano · Da Vinci
          </p>
          <p className="text-[10px] text-slate-600 text-center mt-1">
            Sem afiliação. Sem patrocínio. Opinião genuína.
          </p>
        </div>
      </div>
    </>
  );
};

export default ToolsDrawer;
