import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code, Globe, Mail } from 'lucide-react';
import { personalInfo } from '../../data/data';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '2rem' }}>
      <div className="container hero-grid">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--muted-foreground)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 style={{ fontWeight: 800, lineHeight: 1.1 }}>
            Hi, I'm <br />
            <span style={{ color: 'var(--foreground)' }}>{personalInfo.name}</span>
          </h1>

          <div style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: 'var(--muted-foreground)', height: '2.5rem' }}>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 1000,
                'Building Scalable Web Applications', 1000,
                'Exploring Generative AI', 1000,
                'Crafting Meaningful User Experiences', 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p style={{ fontSize: '1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            {personalInfo.summary}
          </p>

          <div className="action-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              style={{ padding: '0.75rem 2rem', background: 'var(--foreground)', color: 'var(--background)', borderRadius: 'var(--radius)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              style={{ padding: '0.75rem 2rem', background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              View Projects
            </motion.a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <a href="https://github.com/Anil-reddy-1" target="_blank" rel="noreferrer" style={{ color: 'var(--muted-foreground)' }}>
              <Code size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anil-reddy-li/" target="_blank" rel="noreferrer" style={{ color: 'var(--muted-foreground)' }}>
              <Globe size={24} />
            </a>
            <a href="mailto:anilreddy5251@gmail.com" style={{ color: 'var(--muted-foreground)' }}>
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Optional Image or Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}
        >
          {/* Abstract glowing background effect */}
          <div style={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(100,100,250,0.1) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: 0
          }}></div>

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '350px',
              aspectRatio: '1/1',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--secondary) 0%, var(--background) 100%)',
              border: '1px solid var(--border)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/Profile.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
