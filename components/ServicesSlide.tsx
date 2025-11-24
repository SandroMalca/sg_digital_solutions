import React from 'react';
import SlideContainer from './SlideContainer';
import { ServiceItem } from '../types';
import { Monitor, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Diseño Gráfico para Marcas",
    description: "Identidad visual impactante generada y refinada con herramientas de diseño de vanguardia.",
    iconName: "Monitor"
  },
  {
    id: 2,
    title: "Desarrollo de Apps & Web",
    description: "Software escalable y moderno. Creamos experiencias de usuario fluidas integrando APIs inteligentes.",
    iconName: "Cpu"
  },
  {
    id: 3,
    title: "Asesoría de Negocios",
    description: "Diagnóstico profundo de tus necesidades. Te decimos exactamente qué tecnología impulsará tu crecimiento.",
    iconName: "TrendingUp"
  },
  {
    id: 4,
    title: "Automatización IA",
    description: "Optimización de flujos de trabajo mediante agentes de inteligencia artificial y análisis predictivo.",
    iconName: "ShieldCheck"
  }
];

// Helper para renderizar iconos
const IconRenderer = ({ name }: { name: string }) => {
  const className = "w-10 h-10 mb-4 text-ai-accent";
  switch (name) {
    case 'Monitor': return <Monitor className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    default: return <Monitor className={className} />;
  }
};

const ServicesSlide: React.FC = () => {
  return (
    <SlideContainer id="servicios">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nuestras Soluciones</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Estrategias integrales diseñadas para la era de los datos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default group"
          >
            <div className="p-3 bg-ai-dark/50 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
              <IconRenderer name={service.iconName} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-ai-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};

export default ServicesSlide;