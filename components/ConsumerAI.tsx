import React from 'react';
import { Smartphone, Glasses, Watch, Cpu, Sparkles, AlertCircle, XCircle } from 'lucide-react';

const ConsumerAI: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#0a0f1a] relative overflow-hidden border-y border-white/5">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Smartphone size={14} />
            IA no Bolso
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            A IA Saiu do <span className="text-purple-400">Navegador</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg font-light">
            2025 foi o ano em que a IA deixou de ser um site que você visita para se tornar uma camada invisível em cada dispositivo. Seu próximo celular não terá IA — ele será IA.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* iPhone 17 */}
          <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:border-purple-500/30 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate-800 text-slate-400 rounded border border-white/10">Apple</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-display">iPhone 17 & Apple Intelligence</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-purple-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Siri reescrita do zero com LLM próprio (pós-parceria OpenAI)</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-purple-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Chip A19 com Neural Engine de 38 TOPS para inferência local</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-purple-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Sumarização de e-mails, reescrita de textos, Genmoji</p>
              </div>
            </div>

            <div className="bg-purple-950/30 border border-purple-500/20 rounded-xl p-4">
              <p className="text-purple-300 text-xs">
                <strong>O shift:</strong> A IA da Apple roda <em>localmente</em>, priorizando privacidade. Seu histórico não vai para a nuvem.
              </p>
            </div>
          </div>

          {/* Samsung Galaxy S25 */}
          <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate-800 text-slate-400 rounded border border-white/10">Samsung</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-display">Galaxy S25 & Galaxy AI</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-blue-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Circle to Search: circule qualquer coisa na tela para pesquisar</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-blue-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Tradução simultânea em chamadas telefônicas (Live Translate)</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-blue-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Android 16 com Gemini integrado nativamente</p>
              </div>
            </div>

            <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4">
              <p className="text-blue-300 text-xs">
                <strong>Parceria:</strong> Google Gemini é o motor. Samsung é a interface. 1 bilhão de dispositivos Android terão acesso.
              </p>
            </div>
          </div>

          {/* Wearables */}
          <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Glasses size={28} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate-800 text-slate-400 rounded border border-white/10">Wearables</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-display">Ray-Ban Meta & Cia</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-cyan-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Óculos com Llama 4 integrado: "olhe e pergunte qualquer coisa"</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-cyan-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Tradução em tempo real do que você vê (cardápios, placas)</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-cyan-400 mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Memória contínua: "quem era aquela pessoa que conheci?"</p>
              </div>
            </div>

            <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4">
              <p className="text-cyan-300 text-xs">
                <strong>A fronteira:</strong> IA sempre-on, sempre-vendo. O limite ético ainda está sendo definido.
              </p>
            </div>
          </div>

        </div>

        {/* Google Jarvis & The Failed Ones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Google Project Jarvis */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-400">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Project Jarvis</h3>
                <p className="text-emerald-400 text-xs font-mono">Google • Em desenvolvimento</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              O "agente de navegador" do Google: uma IA que <strong className="text-white">controla seu Chrome</strong> para realizar tarefas. Comprar passagens, agendar reuniões, preencher formulários — você dá a ordem, o Jarvis executa.
            </p>

            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/70">
              Status: Disponível para testers Gemini Advanced
            </div>
          </div>

          {/* The Failures - Important for honesty */}
          <div className="bg-red-950/10 border border-red-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
              <XCircle size={14} />
              O que não funcionou
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center text-red-400 shrink-0">
                  <Watch size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Humane AI Pin</h4>
                  <p className="text-slate-500 text-xs">
                    O "matador do smartphone" fracassou. Bateria fraca, projetor ilegível sob sol, vendas pífias. A empresa busca comprador.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center text-red-400 shrink-0">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Rabbit R1</h4>
                  <p className="text-slate-500 text-xs">
                    Gadget de $200 que prometia fazer tudo. Entregou quase nada. Reviews devastadoras, retornos em massa.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/30">
              <p className="text-slate-400 text-xs italic">
                Lição: hardware novo perde para software em devices existentes. A IA vencedora está no celular que você já tem.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Stat */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/30 border border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">A escala do consumer AI</p>
            <p className="text-4xl md:text-5xl font-bold text-white font-display mb-2">3.5 Bilhões</p>
            <p className="text-slate-400 text-sm">
              de smartphones terão recursos de IA generativa até o final de 2026 (IDC). <br/>
              Metade da população mundial com um assistente no bolso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsumerAI;
