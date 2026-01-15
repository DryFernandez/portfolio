import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Sobre Mí" 
          subtitle="Conoce más sobre mi trayectoria y enfoque profesional"
        />
        
        <div className="grid md:grid-cols-2 gap-8 animate-slide-in-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Perfil profesional</h3>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador de software junior con formación técnica en desarrollo de aplicaciones 
              y experiencia práctica en proyectos personales. He trabajado en el desarrollo de 
              aplicaciones web full stack utilizando React, Node.js, Express y MySQL, además de 
              proyectos móviles con React Native.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Manejo herramientas de control de versiones y entornos de desarrollo modernos, con 
              gran capacidad de aprendizaje y adaptación a nuevas tecnologías. Actualmente trabajo 
              como Administrador de base de datos en Color Visión, donde desarrollo aplicaciones web 
              e integraciones con inteligencia artificial.
            </p>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h4 className="text-xl font-semibold mb-3">Enfoque de trabajo</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">▹</span>
                  <span>Desarrollo ágil y colaborativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">▹</span>
                  <span>Código limpio y mantenible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">▹</span>
                  <span>Optimización de rendimiento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">▹</span>
                  <span>Diseño responsive y accesible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">▹</span>
                  <span>Documentación clara y detallada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
