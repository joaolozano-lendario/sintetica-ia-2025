/**
 * ToolsDrawer - Drawer lateral com ferramentas
 *
 * Movido do fluxo principal para drawer acessível.
 * "O Codex - Todo conteúdo cortado deve ir para um Codex acessível" — Da Vinci
 */

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Sparkles, Code, Image, Music, Video, FileText, Bot, Zap } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  url: string;
  category: 'chat' | 'code' | 'image' | 'audio' | 'video' | 'writing' | 'agent' | 'productivity';
  highlight?: boolean;
}

const TOOLS: Tool[] = [
  { name: 'ChatGPT', description: 'O chat de IA mais popular do mundo', url: 'https://chat.openai.com', category: 'chat', highlight: true },
  { name: 'Claude', description: 'IA conversacional da Anthropic, foco em segurança', url: 'https://claude.ai', category: 'chat', highlight: true },
  { name: 'Gemini', description: 'IA multimodal do Google', url: 'https://gemini.google.com', category: 'chat' },
  { name: 'Perplexity', description: 'Motor de busca com IA', url: 'https://perplexity.ai', category: 'chat' },
  { name: 'GitHub Copilot', description: 'Assistente de código da Microsoft/GitHub', url: 'https://github.com/features/copilot', category: 'code', highlight: true },
  { name: 'Cursor', description: 'Editor de código com IA integrada', url: 'https://cursor.sh', category: 'code' },
  { name: 'Replit', description: 'IDE online com assistente IA', url: 'https://replit.com', category: 'code' },
  { name: 'Midjourney', description: 'Geração de imagens artísticas', url: 'https://midjourney.com', category: 'image', highlight: true },
  { name: 'DALL-E 3', description: 'Geração de imagens da OpenAI', url: 'https://openai.com/dall-e-3', category: 'image' },
  { name: 'Stable Diffusion', description: 'Modelo open-source de geração de imagens', url: 'https://stability.ai', category: 'image' },
  { name: 'ElevenLabs', description: 'Clonagem e síntese de voz', url: 'https://elevenlabs.io', category: 'audio', highlight: true },
  { name: 'Suno', description: 'Geração de música com IA', url: 'https://suno.ai', category: 'audio' },
  { name: 'Runway', description: 'Edição e geração de vídeo com IA', url: 'https://runway.ml', category: 'video', highlight: true },
  { name: 'Pika', description: 'Geração de vídeo text-to-video', url: 'https://pika.art', category: 'video' },
  { name: 'Jasper', description: 'Assistente de escrita para marketing', url: 'https://jasper.ai', category: 'writing' },
  { name: 'Copy.ai', description: 'Geração de copy e conteúdo', url: 'https://copy.ai', category: 'writing' },
  { name: 'Notion AI', description: 'IA integrada ao Notion', url: 'https://notion.so/ai', category: 'productivity' },
  { name: 'Zapier AI', description: 'Automações inteligentes', url: 'https://zapier.com/ai', category: 'agent' },
];

const CATEGORY_CONFIG = {
  chat: { icon: Sparkles, label: 'Chat', color: 'cyan' },
  code: { icon: Code, label: 'Código', color: 'purple' },
  image: { icon: Image, label: 'Imagem', color: 'pink' },
  audio: { icon: Music, label: 'Áudio', color: 'orange' },
  video: { icon: Video, label: 'Vídeo', color: 'red' },
  writing: { icon: FileText, label: 'Escrita', color: 'emerald' },
  agent: { icon: Bot, label: 'Agentes', color: 'yellow' },
  productivity: { icon: Zap, label: 'Produtividade', color: 'blue' },
};

interface ToolsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToolsDrawer: React.FC<ToolsDrawerProps> = ({ isOpen, onClose }) => {
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

  const filteredTools = selectedCategory
    ? TOOLS.filter(t => t.category === selectedCategory)
    : TOOLS;

  const categories = Object.entries(CATEGORY_CONFIG);

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
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div>
            <h2 className="text-xl font-bold text-white">Ferramentas IA</h2>
            <p className="text-xs text-slate-500 mt-1">Seu arsenal para 2025</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category filters */}
        <div className="p-4 border-b border-white/5 overflow-x-auto">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                !selectedCategory
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-white/5 text-slate-400 border border-transparent hover:bg-white/10'
              }`}
            >
              Todos
            </button>
            {categories.map(([key, config]) => {
              const Icon = config.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key === selectedCategory ? null : key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedCategory === key
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-white/5 text-slate-400 border border-transparent hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {config.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {filteredTools.map((tool) => {
            const config = CATEGORY_CONFIG[tool.category];
            const Icon = config.icon;

            return (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block p-4 rounded-xl border transition-all group
                  ${tool.highlight
                    ? 'bg-white/[0.07] border-white/10 hover:border-white/20'
                    : 'bg-white/[0.03] border-white/5 hover:border-white/10'
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                    bg-${config.color}-950/50 border border-${config.color}-500/20
                  `}>
                    <Icon className={`w-5 h-5 text-${config.color}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-white truncate">{tool.name}</h3>
                      {tool.highlight && (
                        <span className="px-1.5 py-0.5 rounded bg-cyan-950/50 text-cyan-400 text-[9px] font-bold uppercase">
                          Top
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{tool.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500">
            {filteredTools.length} ferramentas disponíveis
          </p>
        </div>
      </div>
    </>
  );
};

export default ToolsDrawer;
