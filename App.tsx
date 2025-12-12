import React, { useState, useEffect } from 'react';
import { MatrixRain } from './components/MatrixRain';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { InfoSections } from './components/InfoSections';
import { ProductSections } from './components/ProductSections';
import { ContactFooter } from './components/ContactFooter';

// Main App Component
const App: React.FC = () => {
  // Theme State
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Toggle Handler
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply 'dark' class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyber-red selection:text-white">
      {/* Dynamic Background */}
      <MatrixRain darkMode={darkMode} />

      {/* Navigation */}
      <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection darkMode={darkMode} />
        <div className="space-y-24 pb-24">
          <InfoSections />
          <ProductSections />
          <ContactFooter darkMode={darkMode} />
        </div>
      </main>

      {/* Scroll to Top / Floating Elements could go here */}
    </div>
  );
};

export default App;