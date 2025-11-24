import React from 'react';
import SlideContainer from './SlideContainer';
import { BrainCircuit, Database, PenTool, BarChart3, Binary, Palette } from 'lucide-react';

const HeroSlide: React.FC = () => {
  return (
    <SlideContainer className="bg-gradient-to-b from-transparent to-black/30 relative overflow-hidden">
      
      {/* --- CAPA DE ANIMACIONES DE FONDO (IA, DATOS, DISEÑO) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        
        {/* 1. Área de DISEÑO: Gradientes orgánicos y herramienta de diseño */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-ai-purple/20 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob"></div>
        <div className="absolute top-[20%] left-[10%] opacity-10 animate-float">
            <Palette size={120} className="text-ai-purple transform rotate-12" />
        </div>
        <div className="absolute top-[15%] left-[5%] opacity-10 animate-float-delayed">
            <PenTool size={80} className="text-pink-500 transform -rotate-45" />
        </div>

        {/* 2. Área de IA: Cerebro central y conexiones */}
        <div className="absolute top-[10%] right-[15%] w-72 h-72 bg-ai-primary/20 rounded-full mix-blend-screen filter blur-[60px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[15%] right-[10%] opacity-10 animate-pulse-slow">
            <BrainCircuit size={180} className="text-ai-primary" />
        </div>

        {/* 3. Área de ANÁLISIS DE DATOS: Gráficos y Binarios */}
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-ai-accent/20 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Gráfico flotante */}
        <div className="absolute bottom-[20%] right-[20%] opacity-10 animate-float">
            <BarChart3 size={140} className="text-ai-accent" />
        </div>
        
        {/* Cadena binaria decorativa */}
        <div className="absolute bottom-[10%] left-[20%] text-ai-accent/10 font-mono text-xl animate-pulse hidden md:block">
           01001001 01000001 <br/>
           01000100 01000001 01010100 01000001
        </div>
        
        {/* Icono de base de datos rotando lentamente */}
        <div className="absolute bottom-[30%] left-[10%] opacity-5 animate-spin-slow">
            <Database size={100} className="text-emerald-400" />
        </div>
        
        {/* Partículas de código binario flotando */}
        <div className="absolute top-1/2 right-[5%] opacity-20 animate-float-delayed">
            <Binary size={60} className="text-ai-primary" />
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-ai-accent/30 bg-ai-accent/10 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <span className="text-ai-accent text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
            <BrainCircuit size={16} /> Innovación Digital & IA
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-ai-accent drop-shadow-lg">
          SG DIGITAL SOLUTIONS
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Transformamos el futuro de tu negocio brindando <span className="text-ai-primary font-bold">soluciones digitales</span> potenciadas por el poder de la <span className="text-ai-purple font-bold">Inteligencia Artificial</span> y el <span className="text-ai-accent font-bold">Análisis de Datos</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#servicios" 
            className="px-8 py-3 rounded-lg bg-ai-primary hover:bg-blue-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] flex items-center justify-center gap-2"
          >
            Explorar Soluciones
          </a>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7-7-7"></path>
        </svg>
      </div>
    </SlideContainer>
  );
};

export default HeroSlide;