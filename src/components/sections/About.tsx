import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/data';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section" ref={ref} style={{ background: 'var(--secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>About Me</h2>
          
          <div className="about-grid">
            <div style={{ background: 'var(--card)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>My Journey</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                I started my programming fundamentals with C and basic problem-solving, moving on to master web development and data structures. Currently holding a {personalInfo.cgpa} CGPA, I've developed robust full-stack applications and integrated advanced AI models.
              </p>
              <p>
                My experience spans across creating custom WebRTC platforms, AI-orchestration routing with Gemini/Claude/OpenAI, and enterprise applications using RAG pipelines.
              </p>
            </div>

            <div className="stats-grid">
              <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  {inView ? <CountUp end={3} duration={2.5} /> : '0'}
                </h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>Major Projects</p>
              </div>
              
              <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  {inView ? <CountUp end={10} duration={2.5} suffix="+" /> : '0+'}
                </h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>Technologies</p>
              </div>

              <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  {personalInfo.cgpa}
                </h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>CGPA</p>
              </div>

              <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  {inView ? <CountUp end={1} duration={2.5} /> : '0'}
                </h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>Internship</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
