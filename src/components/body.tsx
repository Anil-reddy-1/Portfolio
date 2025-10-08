import About from './About';
import Hero from './Hero';
import Projects from './Projects';
import Exp from './Exp';
import Skills from './Skills';
import Footer from './Footer';
import Contact from './contact';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import MyJourney from './My-Journey';
import { createContext, useContext, useState } from 'react';
import React from 'react';
import {  ThemeContext ,ThemeProvider} from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);




function Body() {
  const Theme=useContext(ThemeContext);


  return (

    <div className= {Theme?.theme=='Dark'?"layout dark":"layout "} style={{ position: 'relative', minHeight: '100vh' }}>
      
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header className="wf-header">
          <div className="brand"><img src={undefined} alt="" className='logo' />Anil Reddy</div>
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

export default Body
