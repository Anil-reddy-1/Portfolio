import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
          &copy; {new Date().getFullYear()} Patti Anil Reddy. All rights reserved.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', display: 'flex', gap: '0.5rem' }}>
          Built with <span style={{ color: 'var(--foreground)' }}>React</span> & <span style={{ color: 'var(--foreground)' }}>Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
