
import React from 'react';
import { QuestionMarkCircleIcon } from './IconComponents';
import ScrollReveal from './ScrollReveal';

const problems = [
    "Falta de visão clara das métricas do negócio.",
    "Erros recorrentes em estoque, vendas ou caixa.",
    "Dificuldade em acompanhar metas e resultados.",
    "Falta de padronização e confiança nos dados.",
    "Dificuldade em identificar padrões e tendências nos dados.",
    "Incerteza sobre qual decisão tomar para crescer.",
];

const Problems: React.FC = () => {
  return (
    <section id="problemas" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Resolvemos os Desafios do seu Negócio</h2>
            <p className="mt-4 text-lg text-neutral-light max-w-2xl mx-auto">
              Se você se identifica com algum destes pontos, está na hora de transformar seus dados em seu maior aliado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-neutral-medium p-6 rounded-lg flex items-center space-x-4 shadow-md h-full group hover:bg-neutral-800 transition-colors duration-300">
                      <div className="transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                        <QuestionMarkCircleIcon className="w-8 h-8 text-brand-blue flex-shrink-0" />
                      </div>
                      <p className="text-neutral-light group-hover:text-white transition-colors duration-300">{problem}</p>
                  </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;