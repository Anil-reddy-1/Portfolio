import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code, Globe, Mail } from 'lucide-react';
import { personalInfo } from '../../data/data';

export default function Hero() {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--muted-foreground)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            Welcome to my portfolio
          </motion.p>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1 }}>
            Hi, I'm <br/>
            <span style={{ color: 'var(--foreground)' }}>{personalInfo.name}</span>
          </h1>

          <div style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: 'var(--muted-foreground)', height: '2.5rem' }}>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 1000,
                'AI Applications Builder', 1000,
                'Real-Time Systems Engineer', 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            {personalInfo.summary}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              style={{ padding: '0.75rem 2rem', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontWeight: 600 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              style={{ padding: '0.75rem 2rem', background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontWeight: 600 }}
            >
              View Projects
            </motion.a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <a href="https://github.com/Anil-reddy-1" target="_blank" rel="noreferrer" style={{ color: 'var(--muted-foreground)' }}>
              <Code size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--muted-foreground)' }}>
              <Globe size={24} />
            </a>
            <a href="mailto:example@gmail.com" style={{ color: 'var(--muted-foreground)' }}>
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Optional Image or Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ 
            width: '100%', 
            maxWidth: '400px', 
            aspectRatio: '1/1', 
            borderRadius: '2rem', 
            background: 'linear-gradient(45deg, var(--border), var(--background))',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            {/* Replace with actual profile picture */}
             <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)' }}>
                [ Profile Image ]
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
