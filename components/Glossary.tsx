import React from 'react';
import { BookOpen } from 'lucide-react';
import { GlossaryTerm } from '../types';

const terms: GlossaryTerm[] = [
  {
    term: "Muralha Energética",
    definition: "O ponto de ruptura físico onde a rede elétrica não suporta mais a demanda exponencial dos Data Centers de IA, forçando o uso de energia nuclear dedicada."
  },
  {
    term: "Service-as-Software",
    definition: "Novo modelo econômico que substitui o SaaS. Vende-se o 'trabalho realizado' (ex: reunião agendada, código pronto) em vez da licença de uso da ferramenta."
  },
  {
    term: "Shadow AI",
    definition: "O uso não autorizado de IAs por funcionários para aumentar produtividade pessoal, criando riscos massivos de vazamento de dados corporativos (ex: Caso Allianz)."
  },
  {
    term: "Sovereign AI",
    definition: "Estratégia de nações (como Arábia Saudita, EAU e China) de possuir infraestrutura e modelos próprios para não depender da tecnologia e geopolítica dos EUA."
  },
  {
    term: "System 2 Reasoning",
    definition: "Capacidade de modelos como Gemini 3 e DeepSeek R1 de 'pensar deliberadamente' antes de responder (Chain of Thought), reduzindo alucinações em tarefas complexas."
  },
  {
    term: "Alquimia Sintética",
    definition: "O processo de usar dados gerados por IA de alta qualidade para treinar modelos ainda melhores, superando a escassez de dados humanos na internet (Data Wall)."
  },
  {
    term: "Slop",
    definition: "Conteúdo de baixa qualidade gerado em massa por IA. Inunda feeds, resultados de busca e comunicações corporativas, criando ruído informacional e degradando a qualidade geral da internet."
  },
  {
    term: "Workslop",
    definition: "Trabalho lixo gerado por IA no ambiente corporativo - e-mails automáticos ruins, códigos com bugs, relatórios genéricos. A armadilha de gerar volume em vez de valor."
  },
  {
    term: "Arquiteto de Fluxos",
    definition: "O perfil profissional de elite em 2026. Não executa tarefas - orquestra agentes autônomos, cura resultados de IA e conecta sistemas complexos. Vende resultado, não tempo."
  }
];

const Glossary: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050b14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">
            O vocabulário de 2025
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
            9 termos que não existiam.
            <br />
            <span className="text-white/40">Agora definem o mundo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item, index) => (
            <div key={index} className="group p-6 bg-slate-900/50 rounded-xl border border-white/5 hover:bg-white/5 transition-colors cursor-default hover:border-cyan-500/20">
              <h3 className="text-lg font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                {item.term}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glossary;