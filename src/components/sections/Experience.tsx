import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../../data/data';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Experience</h2>
        
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'var(--border)' }}></div>

          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ position: 'relative', marginBottom: '3rem' }}
            >
              {/* Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '-2.4rem', 
                top: '0.25rem', 
                width: '1rem', 
                height: '1rem', 
                background: 'var(--primary)', 
                borderRadius: '50%',
                border: '4px solid var(--background)'
              }}></div>

              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)' }}>{exp.role}</h3>
                    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--primary)' }}>{exp.company}</p>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--muted-foreground)', background: 'var(--secondary)', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
                    {exp.duration}
                  </span>
                </div>
                
                <ul style={{ listStylePosition: 'outside', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--muted-foreground)' }}>
                  {exp.description.map((desc, i) => (
                    <li key={i} style={{ lineHeight: 1.6 }}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
