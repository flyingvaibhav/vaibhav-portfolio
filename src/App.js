import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeButton from './components/ResumeButton';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-background text-text-primary font-sans`}>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-6 md:px-12">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <ResumeButton />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="text-center py-6 text-text-secondary">
        Made with ❤️ by Vaibhav Pandey
      </footer>
    </div>
  );
}

export default App; 