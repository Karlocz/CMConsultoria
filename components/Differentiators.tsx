
import React from 'react';
import { StarIcon, UsersIcon, DevicePhoneMobileIcon, ChatBubbleLeftRightIcon, BoltIcon } from './IconComponents';
import ScrollReveal from './ScrollReveal';

const differentiators = [
  {
    icon: <StarIcon className="w-8 h-8 text-white" />,
    title: '10+ Anos de Experiência',
    text: 'Conhecimento prático e real com dados, aplicado para gerar resultados de negócio.'
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-white" />,
    title: 'A Língua do Pequeno Empresário',
    text: 'Comunicação direta e sem jargões técnicos. Foco total na sua realidade.'
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
    title: 'Entregas Rápidas e Visuais',
    text: 'Dashboards prontos em poucos dias, acessíveis de qualquer lugar, direto no seu celular.'
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />,
    title: 'Suporte Direto e Contínuo',
    text: 'Acompanhamento mensal para garantir que você extraia o máximo valor das análises.'
  },
  {
    icon: <BoltIcon className="w-8 h-8 text-white" />,
    title: 'Inteligência Artificial Aplicada',
    text: 'Utilizamos IA para turbinar seus resultados, automatizar tarefas e prever tendências.'
  }
];

const Differentiators: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-brand-navy">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Por que escolher a CM Consultoria?</h2>
            <p className="mt-4 text-lg text-brand-light-blue max-w-2xl mx-auto">
              Vamos além dos gráficos. Somos seu parceiro estratégico na jornada de dados.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-blue/30 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:rotate-3">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-light-blue transition-colors duration-300">{item.title}</h3>
                  <p className="mt-1 text-brand-light-blue/80 group-hover:text-brand-light-blue transition-colors duration-300">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
