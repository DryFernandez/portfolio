'use client';

import SectionTitle from '../components/SectionTitle';
import { GitHubRepo } from '../types';

const repos: GitHubRepo[] = [
  {
    id: 1,
    name: "web-app-framework",
    description: "Framework personalizado para desarrollo de aplicaciones web con React y Express",
    url: "https://github.com/usuario/web-app-framework",
    stars: 245,
    language: "TypeScript"
  },
  {
    id: 2,
    name: "api-rest-boilerplate",
    description: "Plantilla completa de API REST con autenticación, validaciones y documentación",
    url: "https://github.com/usuario/api-rest-boilerplate",
    stars: 178,
    language: "Node.js"
  },
  {
    id: 3,
    name: "ui-components-library",
    description: "Librería de componentes UI reutilizables construidos con React y Tailwind",
    url: "https://github.com/usuario/ui-components-library",
    stars: 156,
    language: "React"
  },
  {
    id: 4,
    name: "database-migrations-tool",
    description: "Herramienta CLI para gestionar migraciones de bases de datos SQL",
    url: "https://github.com/usuario/database-migrations-tool",
    stars: 89,
    language: "Python"
  },
  {
    id: 5,
    name: "electron-desktop-app",
    description: "Aplicación de escritorio multiplataforma con Electron y React",
    url: "https://github.com/usuario/electron-desktop-app",
    stars: 67,
    language: "JavaScript"
  },
  {
    id: 6,
    name: "code-snippets-collection",
    description: "Colección de snippets útiles para desarrollo web full stack",
    url: "https://github.com/usuario/code-snippets-collection",
    stars: 134,
    language: "JavaScript"
  }
];

export default function GitHub() {
  return (
    <section id="github" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="GitHub" 
          subtitle="Repositorios destacados y código abierto"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 rounded-lg p-6 hover-lift hover:border-gray-700 transition-all animate-slide-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start justify-between mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {repo.stars}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                {repo.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>
              
              {repo.language && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-xs text-gray-400">{repo.language}</span>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <a 
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-md hover:bg-white hover:text-black transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Ver todos mis repositorios
          </a>
        </div>
      </div>
    </section>
  );
}
