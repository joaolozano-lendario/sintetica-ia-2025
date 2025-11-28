
import React from 'react';
import { BadgeCheck, ShieldCheck, Users } from 'lucide-react';

const TheGap: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          {/* Header consistente */}
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">
              O paradoxo de 2025
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              76% temem a máquina.
              <br />
              <span className="text-white/40">90% não vivem sem ela.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">

            <div className="md:w-1/2 space-y-6">
              <p className="text-slate-300 text-lg">
                Essa é a dissonância cognitiva que define nossa era.
                Medo e dependência coexistindo no mesmo cérebro.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-4 border-red-500/50">
                  <span className="text-slate-300 font-medium text-sm">Temem a substituição</span>
                  <span className="text-2xl font-bold text-red-400">76.6%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-4 border-emerald-500/50">
                  <span className="text-slate-300 font-medium text-sm">Acreditam na eficácia</span>
                  <span className="text-2xl font-bold text-emerald-400">90%</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 text-slate-300 leading-relaxed space-y-6">
              <p>
                <strong className="text-white block mb-2 text-xl">O Fenômeno "Workslop"</strong>
                Muitas empresas caíram na armadilha de gerar volume em vez de valor. E-mails automáticos ruins, códigos com bugs e conteúdo genérico inundaram o corporativo.
              </p>
              <p>
                O "GAP" real não é a tecnologia, é a <strong>reengenharia de processos</strong>. As empresas que venceram em 2025 não usaram IA para "ajudar" humanos velhos processos, mas para criar processos novos onde a IA executa e o humano supervisiona.
              </p>
              <div className="border-l-2 border-cyan-500/40 pl-4 py-2">
                <p className="text-sm text-cyan-300/80 italic">
                  "IA não é tecnologia. É espelho. Amplifica clareza ou confusão."
                </p>
                <p className="text-xs text-cyan-400/50 mt-1 font-mono">
                  — Academia Lendár[IA]
                </p>
              </div>
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-200">
                <strong>Aviso Estratégico:</strong> Quem ficar preso no "Workslop" (trabalho lixo gerado por IA) será engolido por quem dominar a orquestração agêntica.
              </div>
            </div>

          </div>
        </div>

        {/* Economia da Autenticidade - Nova Seção */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2 font-mono flex items-center justify-center gap-2">
              <BadgeCheck size={14} />
              A Contratendência
            </h3>
            <h4 className="text-2xl md:text-3xl font-display font-bold text-white">
              A Economia da <span className="text-emerald-400">Autenticidade</span>
            </h4>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Em resposta à saturação de conteúdo sintético ("Slop"), surge uma nova valorização do humano verificável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-xl p-5 text-center">
              <div className="w-10 h-10 bg-emerald-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center text-emerald-400">
                <BadgeCheck size={20} />
              </div>
              <h5 className="text-white font-bold text-sm mb-2">Selo "Feito por Humano"</h5>
              <p className="text-slate-400 text-xs">Artesanato e criações com certificado de origem humana tornam-se premium.</p>
            </div>

            <div className="bg-blue-950/10 border border-blue-500/20 rounded-xl p-5 text-center">
              <div className="w-10 h-10 bg-blue-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center text-blue-400">
                <ShieldCheck size={20} />
              </div>
              <h5 className="text-white font-bold text-sm mb-2">Verificação Biométrica</h5>
              <p className="text-slate-400 text-xs">Conteúdo com prova criptográfica de autoria humana ganha confiança.</p>
            </div>

            <div className="bg-purple-950/10 border border-purple-500/20 rounded-xl p-5 text-center">
              <div className="w-10 h-10 bg-purple-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center text-purple-400">
                <Users size={20} />
              </div>
              <h5 className="text-white font-bold text-sm mb-2">Eventos Presenciais</h5>
              <p className="text-slate-400 text-xs">O "olho no olho" torna-se prova de humanidade. Comunidades físicas valorizam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheGap;
