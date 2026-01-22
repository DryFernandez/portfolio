'use client';

import SectionTitle from '../components/SectionTitle';
import type { Experience } from '../types';

const experiences: Experience[] = [
  // Experiencia Laboral
  {
    id: 1,
    type: 'work',
    title: "Administrador de base de datos ",
    institution: "Red bajas",
    period: "08/2025 - Presente",
    description: "Manejo de bases de datos, desarrollo de aplicaciones web, integraciones con inteligencia artificial y creación de flujos de trabajo en n8n."
  },
  {
    id: 2,
    type: 'work',
    title: "Pasante de soporte técnico",
    institution: "Color Visión",
    period: "09/2024 - 04/2025",
    description: "Soporte informático a dispositivos, manejo de redes WiFi, instalación de redes y dispositivos, y mantenimiento de equipos."
  },
  
  // Educación
    {
    id: 7,
    type: 'education',
    title: "Técnico superior en desarrollo de software",
    institution: "Instituto Tecnológico de las Américas (ITLA)",
    period: "Actualmente",
    description: "Formación técnica superior orientada al diseño, desarrollo e implementación de aplicaciones de software, incluyendo sistemas web, móviles y de escritorio. Enfoque en programación, bases de datos, arquitectura de software, buenas prácticas, trabajo en equipo y uso de tecnologías modernas aplicadas a entornos empresariales."
  },
  {
    id: 3,
    type: 'education',
    title: "Técnico en desarrollo de software",
    institution: "Instituto Técnico Salesiano",
    period: "09/2022 - 06/2025",
    description: "Formación técnica especializada en desarrollo de aplicaciones web y móviles."
  },
  {
    id: 4,
    type: 'education',
    title: "Inglés",
    institution: "Instituto Cultural Dominico Americano",
    period: "09/2024 - Presente",
    description: "Estudios de inglés en nivel básico."
  },
  
  // Certificaciones
  {
    id: 5,
    type: 'certification',
    title: "Responsive web design",
    institution: "freeCodeCamp",
    period: "12/2024",
    description: "Certificación en diseño web responsivo, HTML5 y CSS3."
  },
  {
    id: 6,
    type: 'certification',
    title: "BackEnd development and APIs",
    institution: "freeCodeCamp",
    period: "07/2025",
    description: "Certificación en desarrollo backend con Node.js, Express y bases de datos."
  }
];

const getIcon = (type: string) => {
  switch(type) {
    case 'work': return '💼';
    case 'education': return '🎓';
    case 'certification': return '📜';
    default: return '📌';
  }
};

const getTitle = (type: string) => {
  switch(type) {
    case 'work': return 'Experiencia laboral';
    case 'education': return 'Educación';
    case 'certification': return 'Certificaciones';
    default: return 'Otros';
  }
};

export default function Experience() {
  const workExperiences = experiences.filter(e => e.type === 'work');
  const education = experiences.filter(e => e.type === 'education');
  const certifications = experiences.filter(e => e.type === 'certification');

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Experiencia & Educación" 
          subtitle="Mi trayectoria profesional y formación académica"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experiencia laboral */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span>💼</span> Experiencia laboral
            </h3>
            <div className="space-y-6">
              {workExperiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="border-l-2 border-gray-800 pl-4 pb-6 hover:border-white transition-colors"
                >
                  <div className="text-gray-400 text-sm mb-1">{exp.period}</div>
                  <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                  <div className="text-gray-400 mb-2">{exp.institution}</div>
                  {exp.description && (
                    <p className="text-gray-500 text-sm">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Educación y Certificaciones */}
          <div className="animate-slide-in-right">
            {/* Educación */}
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span>🎓</span> Educación
            </h3>
            <div className="space-y-6 mb-8">
              {education.map((exp) => (
                <div 
                  key={exp.id}
                  className="border-l-2 border-gray-800 pl-4 pb-6 hover:border-white transition-colors"
                >
                  <div className="text-gray-400 text-sm mb-1">{exp.period}</div>
                  <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                  <div className="text-gray-400 mb-2">{exp.institution}</div>
                  {exp.description && (
                    <p className="text-gray-500 text-sm">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Certificaciones */}
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span>📜</span> Certificaciones
            </h3>
            <div className="space-y-6">
              {certifications.map((exp) => (
                <div 
                  key={exp.id}
                  className="border-l-2 border-gray-800 pl-4 pb-6 hover:border-white transition-colors"
                >
                  <div className="text-gray-400 text-sm mb-1">{exp.period}</div>
                  <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                  <div className="text-gray-400 mb-2">{exp.institution}</div>
                  {exp.description && (
                    <p className="text-gray-500 text-sm">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
