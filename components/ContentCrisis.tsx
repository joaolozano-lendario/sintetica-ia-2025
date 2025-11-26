import React from 'react';
import { Ghost, TrendingDown, Search, Users, MessageSquare, Lock, AlertTriangle } from 'lucide-react';

const ContentCrisis: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#0f172a] relative overflow-hidden">

      {/* Eerie Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Ghost size={14} />
            A Crise Silenciosa
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            A <span className="text-red-500">Internet Morta</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light">
            Um estudo da Ahrefs revelou um número que deveria estar em manchetes: quase 3/4 de todo novo conteúdo publicado online é gerado por IA. A web como conhecíamos está morrendo.
          </p>
        </div>

        {/* The Shocking Stat */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-red-950/20 border border-red-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.1)_0%,transparent_60%)]"></div>

            <div className="relative z-10">
              <p className="text-red-400 text-xs font-mono uppercase tracking-widest mb-4">Conteúdo novo na web (2025)</p>
              <p className="text-7xl md:text-9xl font-bold text-white font-display mb-4">74.2%</p>
              <p className="text-slate-300 text-xl">é gerado por Inteligência Artificial</p>

              <div className="mt-8 pt-6 border-t border-red-900/30 text-left max-w-md mx-auto">
                <p className="text-slate-400 text-sm leading-relaxed">
                  <span className="text-red-400">Fonte:</span> Ahrefs analysis of web content, 2025.
                  Artigos, posts, descrições de produtos, reviews — a maioria não foi escrita por humanos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consequences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* SEO Collapse */}
          <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-900/20 rounded-lg flex items-center justify-center text-red-400">
                <TrendingDown size={20} />
              </div>
              <h3 className="text-white font-bold">Colapso do SEO Tradicional</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              O Google não consegue mais distinguir conteúdo "original" de gerado. Sites de conteúdo raso perdem 60-80% do tráfego. A busca está migrando para respostas sintetizadas (AI Overviews).
            </p>
          </div>

          {/* Trust Crisis */}
          <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 hover:border-yellow-500/30 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-900/20 rounded-lg flex items-center justify-center text-yellow-400">
                <AlertTriangle size={20} />
              </div>
              <h3 className="text-white font-bold">Crise de Confiança</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              "Isso foi escrito por humano?" tornou-se a pergunta padrão. Reviews de produtos, artigos científicos, posts de opinião — tudo é suspeito. A verificação manual virou luxo.
            </p>
          </div>

          {/* Search Transformation */}
          <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400">
                <Search size={20} />
              </div>
              <h3 className="text-white font-bold">Morte dos 10 Links Azuis</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Em vez de listar sites, o Google agora sintetiza a resposta diretamente. Os sites perdem cliques. Publishers entram em guerra legal. O modelo de mídia digital está quebrando.
            </p>
          </div>

        </div>

        {/* The Counter-Movement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Splinternet */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Lock size={20} className="text-purple-400" />
              O Retorno das Muralhas
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              A "internet aberta" está se fragmentando. O que está crescendo:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Discords privados com verificação humana</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Newsletters pagas (Substack +40% em 2025)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Comunidades "human-first" com selo de autenticidade</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Podcasts e vídeos longos (difícil de falsificar)</span>
              </li>
            </ul>
          </div>

          {/* Human Premium */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Users size={20} className="text-emerald-400" />
              O Ágio do Humano
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Paradoxalmente, a abundância de conteúdo IA está criando escassez de autenticidade:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span>Eventos presenciais com listas de espera</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span>Artesanato e "feito à mão" viram luxo</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span>Consultoria 1:1 valoriza (não escala, logo é raro)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span>"Certificado humano" como diferencial</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Insight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-purple-900/30 p-3 rounded-xl text-purple-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">A ironia final</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A IA criou tanta abundância de conteúdo que destruiu o valor do conteúdo. Agora, o único diferencial é aquilo que a IA não consegue replicar: presença física, relacionamento genuíno, experiência vivida. O mais "antigo" se tornou o mais valioso.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentCrisis;
