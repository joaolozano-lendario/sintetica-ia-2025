
import React from 'react';
import { ShieldAlert, Key, Lock, Fingerprint } from 'lucide-react';

const DefenseProtocol: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="bg-red-950/10 border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Background Alarm Effect */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/50 border border-red-500/30 text-red-400 rounded text-xs font-mono uppercase tracking-widest animate-pulse">
              <ShieldAlert size={14} />
              Protocolo Civil 2025
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
              Defesa Pessoal <br/> <span className="text-red-500">Obrigatória</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              O relatório detectou uma epidemia de 28 milhões de fraudes. Sua voz pode ser clonada em 3 segundos. <strong className="text-white">Procedimentos padrão de 2024 não funcionam mais.</strong>
            </p>
            <div className="mt-4 border-l-2 border-red-500/40 pl-3 py-1">
              <p className="text-xs text-red-300/70 italic">
                "Clareza é poder. Confusão é prisão."
              </p>
              <p className="text-[10px] text-red-400/40 mt-1 font-mono">
                — Academia Lendár[IA]
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Protocol 1: Safe Word */}
            <div className="bg-[#0f0505] p-6 rounded-2xl border border-red-900/30 flex gap-4 hover:border-red-500/40 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center text-red-500">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Palavra de Segurança</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Combine uma senha verbal com sua família. Se alguém ligar pedindo dinheiro com a voz do seu filho, <strong className="text-red-400">peça a palavra</strong>. Se não souberem, é IA.
                </p>
              </div>
            </div>

            {/* Protocol 2: Hardware Key */}
            <div className="bg-[#0f0505] p-6 rounded-2xl border border-red-900/30 flex gap-4 hover:border-red-500/40 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center text-red-500">
                <Key size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">MFA Físico (YubiKey)</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  SMS não é seguro (SIM Swap). Use autenticadores por app ou, idealmente, chaves físicas de hardware para contas críticas.
                </p>
              </div>
            </div>

             {/* Protocol 3: Liveness Check */}
             <div className="md:col-span-2 bg-[#0f0505] p-6 rounded-2xl border border-red-900/30 flex gap-4 hover:border-red-500/40 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center text-red-500">
                <Fingerprint size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Ataque à Biometria</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deepfakes já burlam "prova de vida" simples em apps bancários. Evite expor vídeos de rosto em alta resolução publicamente se possível, ou ative camadas extras de verificação bancária.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DefenseProtocol;
