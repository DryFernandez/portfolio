'use client';

import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de citas",
    description: "Sistema completo de agendamiento de citas con roles de usuario (Vendedor, Secretario, Admin) desarrollado con Flask y React. Incluye autenticación JWT, notificaciones por email con código de verificación de 6 dígitos, y dashboard con estadísticas y calendario.",
    technologies: ['Web', "React", "Flask", "Python", "MySQL", "TypeScript", "JWT", "Vite"],
    github: "https://github.com/DryFernandez/Citas",
    image: "/projects/citas-dealer.png"
  },
    {
    id: 2,
    title: "E-Comerce",
    description: "Plataforma de administración para e-commerce desarrollada con Next.js, React y TypeScript. Incluye dashboards para vendedor y cliente, gestión de ventas, pedidos, inventario, categorías y usuarios, con interfaz responsiva y preparada para integrarse con backend, autenticación y pagos.",
    technologies: ['Web', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    github: "https://github.com/DryFernandez/E-comerce",
    image: "/projects/ecomerce.png"
  },
      {
    id: 3,
    title: "Chatbot motivacional (Whatsapp)",
    description: "Automatización de WhatsApp desarrollada con n8n y Evolution API que envía diariamente a las 8:00 a.m. un mensaje motivacional de buenos días junto con un video motivacional de YouTube, utilizando flujos programados y envío automático de contenido multimedia.",
    technologies: ['Web', 'n8n', 'Docker', 'Evolution-api', 'Gemini'],
    image: "/projects/Chat.png"
  },
  {
    id: 4,
    title: "Asignador automático de letras a partituras MusicXML",
    description: "Sistema en Python para asignar letras automáticamente a partituras MusicXML exportadas desde MuseScore. Detecta voces, cuenta notas cantables de forma inteligente (manejo de ties y silencios), valida la correspondencia letra-nota y exporta archivos compatibles usando la librería music21.",
    technologies: ['Desktop', 'Python', 'MuseScore'],
    github: "https://github.com/DryFernandez/Asignar_letras",
    image: "/projects/Muse.png"
  },
  {
      id: 6,
    title: "Buscador de vehiculos",
    description: "Herramienta de scraping desarrollada en Python para extraer anuncios de supercarros.com. Incluye interfaz gráfica con Tkinter, extracción selectiva basada en filtros, obtención de datos completos del vehículo y vendedor, y exportación de resultados a Excel.",
    technologies: ['Terminal', 'Desktop', 'Python'],
    github: "https://github.com/DryFernandez/Scraper-supercarros",
    image: "/projects/scraper.jpeg"
  },
  {
      id: 7,
    title: "DryDB",
    description: "Aplicación de escritorio desarrollada con Electron, React y TypeScript para explorar y ejecutar consultas en bases de datos relacionales. Soporta MySQL, PostgreSQL, SQL Server y SQLite, incluye constructor de Querys, historial de consultas y exportación de resultados a Excel.",
    technologies: ['Desktop', "Electron", "React", "MySQL", "TypeScript", "Vite"],
    github: "https://github.com/DryFernandez/DryDB",
    image: "/projects/Drydb.png"
  },
    {
      id: 8,
    title: "Chat personal en Telegram",
    description: "Chat personal automatizado en Telegram desarrollado con n8n y Docker, integrado con Gemini como motor de IA. Utiliza webhooks expuestos con ngrok para procesar mensajes en tiempo real y generar respuestas inteligentes dentro del chat.",
    technologies: ['n8n', "Telegram", "Gemini", "Docker", "Negrok"],
    image: "/projects/Chat-personal.png"
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Proyectos" 
          subtitle="Una muestra de mis trabajos más destacados y soluciones desarrolladas"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden hover-lift hover:border-gray-700 transition-all group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-600 text-xs">Imagen del proyecto</p>
                    </div>
                  </div>
                )}
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-900 text-xs rounded border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
