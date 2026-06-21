import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:anilreddy5251@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success('Opening mail client...');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <Toaster position="bottom-right" />
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Get In Touch</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--muted-foreground)' }}>
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--card)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border)', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--foreground)' }}>Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none', transition: 'border-color 0.2s' }}
                placeholder="John Doe"
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--foreground)' }}>Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none', transition: 'border-color 0.2s' }}
                placeholder="john@example.com"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--foreground)' }}>Message</label>
              <textarea 
                id="message" 
                rows={5}
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '1rem', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '0.5rem', fontWeight: 600, marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1, transition: 'opacity 0.2s' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
