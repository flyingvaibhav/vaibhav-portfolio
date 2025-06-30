import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ResumeButton from './components/ResumeButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 transition-colors duration-500`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-800/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              VP
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors">Contact</a>
            </div>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.93l-.71-.71" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ResumeButton />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-dark-800 text-white py-8 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Vaibhav Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 