import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tool', href: '#tool' },
    { name: 'CTF', href: '#ctf' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  // Fallback logo URL that matches the theme
  const LOGO_URL = "https://ui-avatars.com/api/?name=Tena+Net&background=0D0D0D&color=FF1A1A&bold=true&size=128";

  return (
    <nav className={`fixed w-full z-50 top-0 transition-colors duration-300 ${darkMode ? 'bg-cyber-dark/80 border-b border-cyber-red/20' : 'bg-white/80 border-b border-gray-200'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2 group">
            <img 
              src="/tenanet.jpg" 
              onError={(e) => {
                e.currentTarget.src = LOGO_URL;
                e.currentTarget.onerror = null;
              }}
              alt="TenaNet" 
              className={`h-9 w-9 rounded-full object-cover border-2 transition-all ${darkMode ? 'border-cyber-red shadow-[0_0_10px_rgba(255,26,26,0.5)]' : 'border-cyber-lightBlue shadow-sm'}`} 
            />
            <span className={`font-display font-bold text-2xl tracking-tighter ${darkMode ? 'text-white' : 'text-cyber-dark'}`}>
              Tena<span className={darkMode ? 'text-cyber-red' : 'text-cyber-lightBlue'}>Net</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-display text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-cyber-red hover:text-glow' 
                      : 'text-gray-600 hover:text-cyber-lightBlue'
                  }`}
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-1">&lt;</span>
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 ml-1">/&gt;</span>
                </a>
              ))}
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-900'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${darkMode ? 'bg-cyber-dark border-b border-cyber-red/30' : 'bg-white border-b border-gray-200'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-bold font-display border-l-4 ${
                    darkMode 
                      ? 'border-transparent text-gray-300 hover:text-white hover:bg-gray-900 hover:border-cyber-red' 
                      : 'border-transparent text-gray-700 hover:text-cyber-lightBlue hover:bg-gray-50 hover:border-cyber-lightBlue'
                  }`}
                >
                   {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};