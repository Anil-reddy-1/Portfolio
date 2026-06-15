import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../../data/data';

const defaultTiltOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            25,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          1000,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Technical Skills</h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <Tilt options={defaultTiltOptions} style={{ height: '100%' }}>
                <div style={{ 
                  background: 'var(--card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '1rem', 
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                    {category}
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {skills.map(skill => (
                      <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)' }}>
                        <span style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
