
import React from 'react';
import { ChartBarIcon, CpuChipIcon, LightBulbIcon } from './IconComponents';
import ScrollReveal from './ScrollReveal';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-neutral-medium p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 h-full group">
        <div className="flex items-center justify-center w-12 h-12 bg-brand-blue rounded-full mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-blue/50">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-light">{children}</p>
    </div>
);

const ValueProposition: React.FC = () => {
  return (
    <section id="valor" className="py-20 bg-neutral-medium">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sua Empresa Guiada por Dados</h2>
            <p className="mt-4 text-lg text-neutral-light max-w-2xl mx-auto">
              Decisões mais rápidas e inteligentes, sem complicação. Entregamos clareza e automação para você focar no que realmente importa: crescer.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={200} className="h-full">
              <ValueCard icon={<ChartBarIcon className="w-6 h-6 text-white" />} title="Aumente suas Vendas">
                Descubra oportunidades ocultas nos seus dados. Identifique seus melhores produtos, clientes e canais de venda para criar estratégias que funcionam.
              </ValueCard>
            </ScrollReveal>
            
            <ScrollReveal delay={400} className="h-full">
              <ValueCard icon={<CpuChipIcon className="w-6 h-6 text-white" />} title="Análise Avançada com IA">
                Vá além do óbvio. Utilizamos algoritmos inteligentes para identificar padrões ocultos de comportamento e oportunidades de crescimento que passariam despercebidas.
              </ValueCard>
            </ScrollReveal>
            
            <ScrollReveal delay={600} className="h-full">
              <ValueCard icon={<LightBulbIcon className="w-6 h-6 text-white" />} title="Insights Imediatos com IA">
                Receba relatórios e dashboards interativos que mostram, em linguagem simples, exatamente o que você precisa fazer para melhorar seus resultados.
              </ValueCard>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;