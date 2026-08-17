// File: src/layout/MainLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
   <div style={{ 
  display: 'flex', 
  direction: 'rtl',
  flexDirection: 'column', 
  minHeight: '100vh',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  overflowX: 'hidden'
}}>
      <Navbar />
      <main style={{ flex: 1, width: '100%', margin: 0, padding: 0 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;