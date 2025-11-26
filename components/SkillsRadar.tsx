import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'AI Literacy', A: 30, B: 100, fullMark: 100 },
  { subject: 'Pensamento Estratégico', A: 60, B: 95, fullMark: 100 },
  { subject: 'Negociação Humana', A: 50, B: 90, fullMark: 100 },
  { subject: 'Coding (Sintaxe)', A: 95, B: 20, fullMark: 100 },
  { subject: 'Arquitetura de Sistemas', A: 40, B: 90, fullMark: 100 },
  { subject: 'Ética & Compliance', A: 20, B: 85, fullMark: 100 },
];

const SkillsRadar: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-slate-900/20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Chart Side */}
        <div className="w-full lg:w-1/2 h-[500px] relative glass-panel rounded-full p-4 border border-white/5">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="#334155" strokeDasharray="3 3" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600, fontFamily: 'Inter' }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Profissional 2023"
                dataKey="A"
                stroke="#64748b"
                strokeWidth={2}
                fill="#64748b"
                fillOpacity={0.1}
              />
              <Radar
                name="Profissional 2026"
                dataKey="B"
                stroke="#00f3ff"
                strokeWidth={3}
                fill="#00f3ff"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 space-y-8">
           <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">O Profissional Centauro</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-6">
              O Fim da <br /><span className="text-purple-500">Média Competência</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              O gráfico mostra a mudança tectônica nas habilidades. O valor migrou da execução técnica (saber codar, saber escrever e-mail) para a orquestração estratégica e a conexão humana.
            </p>
           </div>

           <div className="space-y-6">
             <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/20">1</div>
               <div>
                 <h4 className="text-white font-bold text-lg">Vibe Coding</h4>
                 <p className="text-slate-400 text-sm">O código é gerado pela IA. O humano define a "vibe" e audita a segurança. A barreira de entrada técnica caiu a zero.</p>
               </div>
             </div>

             <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-purple-950/50 flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">2</div>
               <div>
                 <h4 className="text-white font-bold text-lg">Soft Skills Premium</h4>
                 <p className="text-slate-400 text-sm">A IA não resolve conflitos políticos na empresa nem negocia contratos complexos olho-no-olho. O humano torna-se o embaixador da empatia.</p>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsRadar;