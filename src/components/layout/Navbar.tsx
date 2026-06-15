import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        ...(isScrolled && {
          background: 'rgba(var(--background), 0.7)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)'
        })
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
          Anil<span style={{ color: 'var(--muted-foreground)' }}>Reddy</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-flex">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--muted-foreground)' }}
                   onMouseOver={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                   onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button onClick={toggleTheme} style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center' }}>
                {theme === 'Dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="md-hidden">
          <button onClick={toggleTheme} style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center' }}>
            {theme === 'Dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: 'var(--foreground)' }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--background)',
              borderBottom: '1px solid var(--border)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1rem', fontWeight: 500, padding: '0.5rem 0' }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
