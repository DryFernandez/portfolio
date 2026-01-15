'use client';

import SectionTitle from '../components/SectionTitle';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo web",
    description: "Sitios web modernos, responsivos y optimizados. Landing pages, portafolios y aplicaciones web con las últimas tecnologías.",
    icon: "🌐"
  },
  {
    id: 2,
    title: "Sistemas web completos",
    description: "Sistemas de gestión empresarial, CRM, ERP y plataformas personalizadas con paneles de administración completos.",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "APIs y backend",
    description: "Desarrollo de APIs RESTful y GraphQL robustas, escalables y bien documentadas. Integración de servicios y microservicios.",
    icon: "🔌"
  },
  {
    id: 4,
    title: "Automatizaciones",
    description: "Creación de flujos de trabajo automatizados con n8n, integración de procesos empresariales y automatización de tareas repetitivas.",
    icon: "🤖"
  },
  {
    id: 5,
    title: "Integración de inteligencia artificial",
    description: "Implementación de soluciones con IA, chatbots inteligentes, análisis de datos y automatización con machine learning.",
    icon: "🧠"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Servicios" 
          subtitle="Soluciones que desarrollo para impulsar tu proyecto"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-black border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
