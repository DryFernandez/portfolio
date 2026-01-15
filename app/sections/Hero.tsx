'use client';

import Button from '../components/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="mb-6">
              <span className="text-gray-400 text-lg">Hola, soy</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Dary Fernández
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Desarrollador de software junior
            </p>
            <p className="text-lg text-gray-500 mb-8 animate-slide-up" style={{animationDelay: '0.15s'}}>
              Full stack web developer enfocado en la creación de aplicaciones web modernas y funcionales
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <span className="px-4 py-2 bg-gray-900 rounded-md text-sm border border-gray-800">React</span>
              <span className="px-4 py-2 bg-gray-900 rounded-md text-sm border border-gray-800">Node.js</span>
              <span className="px-4 py-2 bg-gray-900 rounded-md text-sm border border-gray-800">Express</span>
              <span className="px-4 py-2 bg-gray-900 rounded-md text-sm border border-gray-800">MySQL</span>
              <span className="px-4 py-2 bg-gray-900 rounded-md text-sm border border-gray-800">Tailwind CSS</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{animationDelay: '0.3s'}}>
              <Button href="#contacto">
                Contactarme
              </Button>
              <Button href="#proyectos" variant="secondary">
                Ver Proyectos
              </Button>
            </div>
          </div>

          {/* Sección de imagen */}
          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Placeholder - Aquí puedes colocar tu imagen */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-800 flex items-center justify-center overflow-hidden hover:border-gray-700 transition-all">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Coloca tu imagen aquí</p>
                  <p className="text-gray-600 text-xs mt-2">400x400 px recomendado</p>
                </div>
                <Image 
                  src="/Dry3.jpeg" 
                  alt="Dary Fernández" 
                  fill
                  className="object-cover rounded-2xl"
                  priority

                />
              </div>
              {/* Efecto decorativo */}
              <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-white/5 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-bounce">
          <a href="#sobre-mi" className="inline-block">
            <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
