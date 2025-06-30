import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const TYPED_NAME = 'Vaibhav Pandey';

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(TYPED_NAME.slice(0, i + 1));
      i++;
      if (i === TYPED_NAME.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 whitespace-nowrap">
                Hi, I'm{' '}
                <span className="gradient-text">
                  {displayed}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Full Stack Developer | AI/ML Enthusiast | B.Tech CSE Student
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              <p>
                Passionate about creating innovative solutions that bridge the gap between 
                cutting-edge AI technology and real-world applications. Currently pursuing 
                my B.Tech in Computer Science while building impactful projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center space-x-6 pt-4"
            >
              <a
                href="https://github.com/flyingvaibhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhavpandey0987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:vaibhavpandeyhacka@gmail.com"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 p-2 shadow-glow-lg">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img
                    src="/vaibhav.jpg"
                    alt="Vaibhav Pandey"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/320x320/3b82f6/ffffff?text=VP';
                    }}
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                🔥
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                🤖
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 