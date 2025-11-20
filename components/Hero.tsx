import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Transforme <span className="text-brand-blue">Dados</span> em <span className="text-brand-blue">Resultados</span> Reais
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="mt-4 text-lg md:text-xl text-neutral-light max-w-3xl mx-auto">
            CM Consultoria de Dados - Análise de Dados, BI e soluções com Inteligência Artificial para Pequenos e Médios Negócios.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-8 font-semibold text-white">
            Por: Carlos Eduardo Maximino
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contato"
              onClick={handleScrollToContact}
              className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Receba um Diagnóstico Gratuito
            </a>
            <a 
              href="#contato"
              onClick={handleScrollToContact}
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-neutral-dark transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Solicitar Orçamento
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;