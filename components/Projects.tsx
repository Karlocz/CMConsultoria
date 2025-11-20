
import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

// --- Mini Chart Components for Visualization ---

const ProgressBar: React.FC<{ label: string; value: number; suffix?: string; color?: string }> = ({ label, value, suffix = '', color = 'bg-brand-blue' }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setTimeout(() => setWidth(value), 300);
  }, [value]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-neutral-light">{label}</span>
        <span className="text-sm font-bold text-white">{value}{suffix}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`${color} h-2.5 rounded-full transition-all duration-1000 ease-out`} 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const DonutChart: React.FC<{ percentage: number; label: string }> = ({ percentage, label }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progress = percentage / 100;
    const dashoffset = circumference * (1 - progress);
    setTimeout(() => setOffset(dashoffset), 300);
  }, [percentage, circumference]);

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-brand-blue transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <span className="text-xs text-center mt-2 text-neutral-light">{label}</span>
    </div>
  );
};

const TrendChart: React.FC<{ data: number[]; label: string }> = ({ data, label }) => {
  // Normalize data for SVG
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 80 - 10; // 10% padding
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full">
      <div className="text-sm text-neutral-light mb-2">{label}</div>
      <svg viewBox="0 0 100 50" className="w-full h-16 overflow-visible">
        <polyline
          fill="none"
          stroke="#00B4D8"
          strokeWidth="2"
          points={points}
          className="drop-shadow-[0_0_4px_rgba(0,180,216,0.5)]"
        />
        {data.map((val, i) => {
           const x = (i / (data.length - 1)) * 100;
           const y = 100 - ((val - min) / range) * 80 - 10;
           return <circle key={i} cx={x} cy={y} r="2" fill="#fff" className="animate-ping opacity-75" style={{animationDuration: '2s', animationDelay: `${i * 0.1}s`}} />
        })}
      </svg>
    </div>
  );
};

// --- Project Data ---

type ProjectCategory = 'loja' | 'clinica' | 'industria';

interface ChartData {
  type: 'bar' | 'donut' | 'trend';
  label: string;
  value?: number;
  data?: number[];
  suffix?: string;
  color?: string;
}

interface Project {
  id: ProjectCategory;
  name: string;
  title: string;
  description: string;
  charts: ChartData[];
  image: string;
}

const projectsData: Project[] = [
  {
    id: 'loja',
    name: 'Varejo / Loja',
    title: 'Dashboard de Vendas & Estoque',
    description: 'Identificamos que 20% dos produtos geravam 80% do lucro, enquanto 30% do estoque estava parado há mais de 90 dias.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    charts: [
      { type: 'trend', label: 'Crescimento de Vendas (Últimos 6 meses)', data: [12, 19, 15, 25, 32, 45] },
      { type: 'donut', label: 'Meta Batida', value: 85 },
      { type: 'bar', label: 'Redução de Estoque Parado', value: 40, suffix: '%' }
    ]
  },
  {
    id: 'clinica',
    name: 'Clínica Médica',
    title: 'Gestão de Pacientes & Agenda',
    description: 'Reduzimos as faltas (No-Show) em 45% com análises preditivas e otimizamos a agenda dos médicos para maximizar o faturamento.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    charts: [
      { type: 'donut', label: 'Ocupação Agenda', value: 92 },
      { type: 'bar', label: 'Retenção de Pacientes', value: 78, suffix: '%' },
      { type: 'bar', label: 'Redução de No-Show', value: 45, suffix: '%', color: 'bg-green-500' }
    ]
  },
  {
    id: 'industria',
    name: 'Pequena Indústria',
    title: 'OEE & Eficiência Fabril',
    description: 'Monitoramento em tempo real da linha de produção. Identificamos o gargalo principal que aumentou a produção em 22% sem comprar novas máquinas.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    charts: [
      { type: 'bar', label: 'Eficiência Global (OEE)', value: 82, suffix: '%' },
      { type: 'trend', label: 'Produção Diária (Unidades)', data: [210, 205, 240, 235, 280, 310] },
      { type: 'donut', label: 'Redução de Perdas', value: 65 }
    ]
  }
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('loja');
  const activeProject = projectsData.find(p => p.id === activeTab);

  return (
    <section id="projetos" className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Resultados Visualizados</h2>
            <p className="mt-4 text-lg text-neutral-light max-w-2xl mx-auto">
              Navegue pelos exemplos abaixo e veja o tipo de inteligência que entregamos para o seu setor.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center mb-10 gap-4">
            {projectsData.map(project => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 border-2 ${
                  activeTab === project.id 
                    ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/30'
                    : 'bg-transparent border-gray-700 text-neutral-light hover:border-white hover:text-white'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {activeProject && (
          <div key={activeTab} className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left: Description & Context */}
            <ScrollReveal className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeProject.title}</h3>
              <div className="w-20 h-1 bg-brand-blue mb-6"></div>
              <p className="text-lg text-neutral-light leading-relaxed mb-8">
                {activeProject.description}
              </p>
              <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-all duration-500"></div>
                <img 
                    src={activeProject.image} 
                    alt={activeProject.name} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-4 left-4 bg-neutral-dark/90 px-4 py-2 rounded text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Case Real
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Interactive Infographic Panel (Mock Dashboard) */}
            <ScrollReveal delay={200} className="order-1 lg:order-2">
              <div className="bg-neutral-medium border border-gray-700 rounded-2xl p-6 shadow-2xl relative">
                {/* Header of Mock Dashboard */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">DASHBOARD - {activeProject.name.toUpperCase()}</div>
                </div>

                {/* Dynamic Charts Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {activeProject.charts.map((chart, index) => (
                        <div key={index} className={`${chart.type === 'trend' ? 'col-span-2' : 'col-span-1'} bg-neutral-dark/50 p-4 rounded-xl`}>
                            {chart.type === 'bar' && (
                                <ProgressBar label={chart.label} value={chart.value || 0} suffix={chart.suffix} color={chart.color} />
                            )}
                            {chart.type === 'donut' && (
                                <DonutChart percentage={chart.value || 0} label={chart.label} />
                            )}
                            {chart.type === 'trend' && (
                                <TrendChart data={chart.data || []} label={chart.label} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Floating Analysis Badge */}
                <div className="absolute -bottom-5 -right-5 bg-brand-blue text-white p-4 rounded-lg shadow-lg max-w-[200px] text-sm animate-bounce-slow hidden md:block">
                    💡 <strong>Insight IA:</strong> Otimização detectada com potencial de +15% de margem.
                </div>
              </div>
            </ScrollReveal>

          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
