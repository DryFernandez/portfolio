'use client';

import SectionTitle from '../components/SectionTitle';

const skills = {
  lenguajes: ["JavaScript", "Python", "TypeScript"],
  frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "React Native", "Electron"],
  backend: ["Node.js", "Express", "Django", "Flask", "Nest.js"],
  database: ["MySQL", "SQL Server"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "n8n", "Docker"]
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Habilidades" 
          subtitle="Tecnologías y herramientas que domino"
        />
        
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {/* Lenguajes */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Lenguajes</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.lenguajes.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-black border border-gray-800 rounded-md text-sm hover:border-yellow-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-black border border-gray-800 rounded-md text-sm hover:border-blue-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-black border border-gray-800 rounded-md text-sm hover:border-green-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Bases de Datos</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-black border border-gray-800 rounded-md text-sm hover:border-purple-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Herramientas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-black border border-gray-800 rounded-md text-sm hover:border-orange-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
