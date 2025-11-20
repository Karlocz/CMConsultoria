
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ChatBubbleLeftRightIcon } from './IconComponents';

const testimonials = [
  {
    quote: "A consultoria transformou a gestão da minha loja. Hoje, sei exatamente qual produto investir e onde estão minhas maiores margens. As vendas aumentaram 15% em 3 meses.",
    name: "Juliana R.",
    company: "Dona de Loja de Varejo"
  },
  {
    quote: "Finalmente saímos das planilhas manuais que tomavam horas do nosso dia. Os dashboards automáticos nos deram uma visão clara e em tempo real da nossa produção.",
    name: "Marcos L.",
    company: "Sócio de Pequena Indústria"
  },
  {
    quote: "O diagnóstico foi um divisor de águas. Entendi onde estava perdendo dinheiro e, com o plano de ação, conseguimos otimizar nossos custos e melhorar o atendimento.",
    name: "Dr. André S.",
    company: "Gestor de Clínica Médica"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">O que nossos clientes dizem</h2>
            <p className="mt-4 text-lg text-neutral-light max-w-2xl mx-auto">
              Resultados reais para negócios reais.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 200} className="h-full">
              <div className="bg-neutral-medium p-8 rounded-lg shadow-lg flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-110 rotate-12">
                    <ChatBubbleLeftRightIcon className="w-32 h-32 text-brand-blue" />
                </div>
                <div className="relative z-10 flex flex-col flex-grow">
                    <p className="text-neutral-light italic flex-grow group-hover:text-white transition-colors duration-300">"{testimonial.quote}"</p>
                    <div className="mt-6">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-brand-blue">{testimonial.company}</p>
                    </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
