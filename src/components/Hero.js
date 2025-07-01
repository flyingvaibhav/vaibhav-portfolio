import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Twitter from 'lucide-react/dist/esm/icons/twitter';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center text-center md:text-left bg-background dark:bg-background-dark transition-colors duration-500">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/vaibhav.jpg"
            alt="Vaibhav Pandey"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4 items-center md:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-primary-400 animate-fade-in">
            Vaibhav Pandey
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-accent dark:text-accent-400 animate-fade-in">
            Full Stack Developer | AI/ML Enthusiast | B.Tech CSE Student
          </h2>
          <a
            href="/Vaibhav_Pandey_Resume.pdf"
            download
            className="mt-6 btn-primary bg-primary hover:bg-accent text-white font-semibold rounded-lg px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 