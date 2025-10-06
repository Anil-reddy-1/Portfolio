import { Profiler, useEffect } from 'react';
import About from './components/About';
import './App.css'
import Hero from './components/Hero';
import Projects from './components/Projects';
import Exp from './components/Exp';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/contact';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import MyJourney from './components/My-Journey';


gsap.registerPlugin(ScrollTrigger);
// Basic wireframe section components (can later be replaced with real content)
const Section = ({ id, title, children }) => (
  <section id={id} className="wf-section">
    <h2 className="wf-title">{title}</h2>
    <div className="wf-content">{children}</div>
  </section>
)


function App() {


  return (
    <div className="layout" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* SVG wireframe overlay */}
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header className="wf-header">
          <div className="brand"><img src="" alt="" className='logo' />Anil Reddy</div>
          <nav className="wf-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="wf-main">
          <Hero/>
          
          <About/>
          <Projects/>
          <Exp/>
          <Skills/>
          <Contact/>
          <MyJourney/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App
