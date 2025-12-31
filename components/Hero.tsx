
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-navy rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Transforme <span className="text-brand-blue">Dados</span> em <span className="text-brand-blue">Resultados</span> Reais
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="mt-4 text-lg md:text-xl text-neutral-light max-w-3xl mx-auto">
            CM Consultoria de Dados - Especialista em gerar lucro e eficiência para Pequenos e Médios Negócios através de Inteligência Artificial.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-8 inline-flex items-center gap-2 bg-neutral-medium/50 border border-gray-700 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-ping"></div>
            <p className="font-semibold text-white text-sm">
              Por: Carlos Eduardo Maximino
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contato"
              onClick={handleScrollToContact}
              className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-brand-blue/20 transform hover:scale-105 w-full sm:w-auto"
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
