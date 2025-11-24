import React from 'react';
import SlideContainer from './SlideContainer';

const ProfileSlide: React.FC = () => {
  return (
    <SlideContainer id="especialista">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Columna de Texto */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-3 py-1 mb-4 border border-ai-purple text-ai-purple text-xs font-bold rounded uppercase tracking-widest">
            El Especialista
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-accent to-ai-primary">Sandro Malca</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Ingeniero con más de <strong className="text-white">5 años de experiencia</strong> brindando soluciones tecnológicas de alto impacto. He liderado proyectos en sectores críticos como <span className="text-ai-accent">salud</span>, <span className="text-ai-accent">logística</span> y <span className="text-ai-accent">ventas</span>.
          </p>
          <p className="text-lg text-gray-300 mb-8 border-l-4 border-ai-primary pl-4 italic">
            "Mi misión es ayudar a que tu negocio no solo mejore, sino que evolucione y se actualice aprovechando el verdadero potencial de la inteligencia artificial."
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {['Liderazgo Técnico', 'IA Strategy', 'Full Stack', 'Cloud Architecture'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/10 rounded text-sm text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="flex-1 order-1 lg:order-2 flex justify-center relative">
          {/* Elementos decorativos de fondo para la imagen */}
          <div className="absolute top-0 right-10 w-64 h-64 bg-ai-primary/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-ai-purple/20 rounded-full blur-[80px]"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl animate-float">
            {/* 
              NOTA: Usamos una imagen de placeholder profesional tecnológica. 
              En producción, aquí iría la foto 'foto_pintaLaptop' real.
            */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Sandro Malca trabajando en laptop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-bold text-lg">Ing. Sandro Malca</p>
              <p className="text-ai-accent text-sm">CEO & Founder</p>
            </div>
          </div>
        </div>

      </div>
    </SlideContainer>
  );
};

export default ProfileSlide;