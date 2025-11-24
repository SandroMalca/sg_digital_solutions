import React from 'react';
import NeuralBackground from './components/NeuralBackground';
import HeroSlide from './components/HeroSlide';
import ServicesSlide from './components/ServicesSlide';
import ProfileSlide from './components/ProfileSlide';
import ContactSlide from './components/ContactSlide';

const App: React.FC = () => {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-ai-dark">
      {/* Fondo Interactivo Global */}
      <NeuralBackground />

      {/* 
        Contenedor de Scroll Snap. 
        'snap-y' habilita el snap vertical.
        'snap-mandatory' fuerza a que el scroll siempre termine alineado a un hijo.
        'scroll-smooth' da una transición suave.
      */}
      <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
        <HeroSlide />
        <ServicesSlide />
        <ProfileSlide />
        <ContactSlide />
      </div>

      {/* Navegación fija lateral (Dots) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {['#', '#servicios', '#especialista', '#contacto'].map((hash, index) => (
          <a
            key={index}
            href={hash}
            className="w-3 h-3 rounded-full bg-white/20 hover:bg-ai-accent transition-all duration-300 backdrop-blur-sm border border-white/10"
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default App;