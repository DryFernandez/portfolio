import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
