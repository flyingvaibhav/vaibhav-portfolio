import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/vaibhav.jpg"
            alt="Vaibhav Pandey"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <p className="text-accent text-lg">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold text-text-primary">
            <Typewriter
              words={['Vaibhav Pandey']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-text-secondary">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-text-secondary">
            I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="https://github.com/flyingvaibhav" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-transform duration-300 hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/vaibhavpandey0987654321/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-transform duration-300 hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="https://x.com/Vaibhavp_9" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-transform duration-300 hover:scale-110">
              <Twitter size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 