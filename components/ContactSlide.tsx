import React, { useState } from 'react';
import SlideContainer from './SlideContainer';
import { Mail, MessageCircle, Send, User, Briefcase } from 'lucide-react';

const ContactSlide: React.FC = () => {
  // Estado unificado para el manejo del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: ''
  });

  // Manejador genérico para inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UX: Redirección a la agenda en una nueva pestaña
    // Se asume que el usuario agenda la cita tras mostrar interés llenando el form.
    window.open('https://calendar.app.google/SH5qgtkoTud1CZ2m9', '_blank');
    
    // Opcional: Resetear el formulario o dar feedback visual
    setFormData({ name: '', email: '', business: '' });
  };

  return (
    <SlideContainer id="contacto" className="bg-gradient-to-t from-black to-ai-dark">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          ¿Listo para el <span className="text-ai-accent">siguiente nivel</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          La tecnología avanza rápido. No dejes que tu negocio se quede atrás. Hablemos hoy mismo sobre cómo podemos potenciar tus resultados.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          
          {/* Formulario Detallado */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contáctanos ahora</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Campo: Nombre Completo */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full bg-black/30 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-ai-primary focus:ring-1 focus:ring-ai-primary transition-all placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Campo: Correo Electrónico */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-black/30 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-ai-primary focus:ring-1 focus:ring-ai-primary transition-all placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Campo: Rubro de Negocio */}
              <div>
                <label htmlFor="business" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
                  Rubro de Negocio
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                  <input 
                    type="text" 
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Ej. Salud, Retail, Logística..."
                    className="w-full bg-black/30 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-ai-primary focus:ring-1 focus:ring-ai-primary transition-all placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Botón de Acción */}
              <button 
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-ai-primary to-ai-purple hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-ai-primary/20"
              >
                Solicitar Asesoría
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Enlaces Directos / Info Adicional */}
          <div className="flex flex-col gap-6 justify-center h-full border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8 mt-4 md:mt-0">
            <div>
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest font-semibold">O escríbenos directamente:</p>          
              
              <a href="#" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group cursor-pointer border border-transparent hover:border-green-500/50">
                <div className="bg-green-500/20 p-3 rounded-full text-green-500 group-hover:text-white group-hover:bg-green-500 transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">WhatsApp Oficial</p>
                  <p className="text-white font-medium">+51 924 428 088</p>
                </div>
              </a>
            </div>

            {/* Pequeño texto de refuerzo UX */}
            <div className="text-left p-4 bg-ai-primary/10 rounded-lg border border-ai-primary/20">
              <p className="text-sm text-gray-300 italic">
                "Agendar una asesoría es el primer paso para descubrir oportunidades ocultas en tu negocio."
              </p>
            </div>
          </div>

        </div>

        <footer className="mt-16 text-gray-500 text-sm">
          © {new Date().getFullYear()} SG Digital Solutions. Todos los derechos reservados.
        </footer>
      </div>
    </SlideContainer>
  );
};

export default ContactSlide;