
import React from 'react';

const TheGap: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-widest">O Paradoxo Humano</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Medo vs. <br/><span className="text-emerald-400">Eficácia</span>
              </h3>
              <p className="text-slate-300 text-lg">
                O trabalhador brasileiro vive uma dissonância cognitiva. Ele teme a máquina, mas já não consegue viver sem ela.
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
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-200">
                <strong>Aviso Estratégico:</strong> Quem ficar preso no "Workslop" (trabalho lixo gerado por IA) será engolido por quem dominar a orquestração agêntica.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TheGap;
