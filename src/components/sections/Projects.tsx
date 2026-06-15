import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Code, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../../data/data';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="section" ref={ref} style={{ background: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Featured Projects</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={scrollPrev} 
              disabled={!prevBtnEnabled}
              style={{ padding: '0.5rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '50%', color: prevBtnEnabled ? 'var(--foreground)' : 'var(--muted-foreground)', cursor: prevBtnEnabled ? 'pointer' : 'not-allowed' }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext} 
              disabled={!nextBtnEnabled}
              style={{ padding: '0.5rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '50%', color: nextBtnEnabled ? 'var(--foreground)' : 'var(--muted-foreground)', cursor: nextBtnEnabled ? 'pointer' : 'not-allowed' }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="embla" 
          ref={emblaRef} 
          style={{ overflow: 'hidden' }}
        >
          <div className="embla__container" style={{ display: 'flex', gap: '2rem' }}>
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="embla__slide project-slide" 
              >
                <div style={{ 
                  background: 'var(--card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '1.5rem', 
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ height: '200px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'var(--muted-foreground)', fontWeight: 500 }}>Project Image</span>
                  </div>
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>{project.title}</h3>
                    <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem', flex: 1 }}>{project.shortDescription}</p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.tech.map(tech => (
                        <span key={tech} style={{ padding: '0.25rem 0.75rem', background: 'var(--secondary)', color: 'var(--secondary-foreground)', fontSize: '0.8rem', borderRadius: '1rem', fontWeight: 500 }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>
                        <Code size={18} /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
