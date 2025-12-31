
import React, { useState, useEffect } from 'react';
import { PresentationChartLineIcon, Cog6ToothIcon, TableCellsIcon, ClipboardDocumentCheckIcon, CpuChipIcon, LightBulbIcon } from './IconComponents';
import ScrollReveal from './ScrollReveal';

interface SolutionStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
}

const solutionSteps: SolutionStep[] = [
  {
    id: 1,
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />,
    title: 'Diagnóstico',
    shortTitle: 'Diagnóstico',
    description: 'Análise da saúde do negócio.',
    details: 'Mapeamos suas fontes de dados atuais, identificamos lacunas de informação e gargalos nos processos que impedem seu crescimento.',
  },
  {
    id: 2,
    icon: <TableCellsIcon className="w-8 h-8 text-white" />,
    title: 'Organização de Dados',
    shortTitle: 'Estruturação',
    description: 'Limpeza e padronização.',
    details: 'Transformamos planilhas caóticas e sistemas desconexos em uma base de dados confiável, segura e pronta para ser analisada.',
  },
  {
    id: 3,
    icon: <PresentationChartLineIcon className="w-8 h-8 text-white" />,
    title: 'Visualização (BI)',
    shortTitle: 'Dashboards',
    description: 'Gráficos interativos.',
    details: 'Criamos painéis no Power BI ou Looker Studio que mostram seus KPIs em tempo real, permitindo gestão à vista em qualquer dispositivo.',
  },
  {
    id: 4,
    icon: <CpuChipIcon className="w-8 h-8 text-white" />,
    title: 'Inteligência Artificial',
    shortTitle: 'IA',
    description: 'Previsão e eficiência.',
    details: 'Aplicamos algoritmos para prever vendas e gerar insights proativos sobre o comportamento do seu cliente.',
  },
];

const SolutionCardContent: React.FC<{ step: SolutionStep }> = ({ step }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => {
      setProgress(step.id * 25);
    }, 300);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="bg-neutral-dark border border-gray-700 p-8 rounded-2xl shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
         {step.icon}
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <span className="text-6xl font-black text-brand-dark/20 absolute top-4 right-4 text-neutral-800 select-none">0{step.id}</span>
        <div className="p-2 bg-brand-blue/20 rounded-lg">
          {step.icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
      </div>
      
      <h4 className="text-xl text-brand-blue font-semibold mb-4">{step.description}</h4>
      <p className="text-neutral-light text-lg leading-relaxed">
        {step.details}
      </p>

      {/* Interactive Progress Bar simulating data processing */}
      <div className="mt-6 w-full">
        <div className="flex justify-between text-xs text-neutral-500 mb-1 font-mono">
          <span>Processamento</span>
          <span className="text-brand-blue">{progress}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden relative shadow-inner">
          <div 
            className="bg-gradient-to-r from-brand-blue to-cyan-300 h-2 rounded-full relative transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,180,216,0.6)]" 
            style={{ width: `${progress}%` }}
          >
             <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="solucoes" className="py-20 bg-neutral-medium relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-navy rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Jornada da Transformação de Dados</h2>
            <p className="mt-4 text-lg text-neutral-light max-w-2xl mx-auto">
              Entenda como transformamos o caos de informações em estratégia de crescimento passo a passo.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Infographic Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Left: Interactive Process Visualization */}
          <ScrollReveal delay={200} className="w-full lg:w-1/2">
            <div className="relative">
              {/* Connecting Line (Desktop: Horizontal / Mobile: Vertical) */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-700 lg:left-0 lg:right-0 lg:top-1/2 lg:h-1 lg:w-full lg:bottom-auto -z-10"></div>
              
              <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
                {solutionSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`group relative flex lg:flex-col items-center text-left lg:text-center focus:outline-none transition-all duration-300 ${
                      activeStep === step.id ? 'scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* Circle Indicator */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 z-10 ${
                      activeStep === step.id 
                        ? 'bg-brand-blue border-brand-light-blue shadow-[0_0_20px_rgba(0,180,216,0.6)]' 
                        : 'bg-neutral-dark border-gray-600 group-hover:border-brand-blue'
                    }`}>
                      {step.icon}
                    </div>
                    
                    {/* Label (Mobile: Right of icon, Desktop: Below icon) */}
                    <div className="ml-6 lg:ml-0 lg:mt-4 p-2 rounded-lg">
                      <h3 className={`text-lg font-bold transition-colors ${activeStep === step.id ? 'text-brand-blue' : 'text-white'}`}>
                        {step.shortTitle}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Detail Card */}
          <div className="w-full lg:w-1/2 h-[350px]"> {/* Slightly increased height for comfort */}
            {solutionSteps.map((step) => (
              activeStep === step.id && (
                <ScrollReveal key={step.id} className="h-full">
                  <SolutionCardContent step={step} />
                </ScrollReveal>
              )
            ))}
          </div>
        </div>

        {/* Additional Service: Consultoria Contínua */}
        <ScrollReveal delay={600}>
          <div className="mt-16 bg-brand-navy/30 border border-brand-blue/30 rounded-xl p-6 text-center max-w-3xl mx-auto">
             <div className="flex justify-center mb-4">
                <Cog6ToothIcon className="w-10 h-10 text-brand-light-blue animate-spin-slow" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Consultoria Contínua de KPIs</h3>
             <p className="text-neutral-light">
               Não entregamos apenas o projeto. Acompanhamos mensalmente seus indicadores para garantir que a estratégia esteja gerando lucro.
             </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Solutions;
