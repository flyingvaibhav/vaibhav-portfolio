import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Tailwind CSS',
    'Python',
    'Machine Learning',
  ];

  return (
    <motion.section 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-2 text-text-primary text-center">
        <span className="text-accent">01.</span> About Me
      </h2>
      <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

      <div className="grid md:grid-cols-1 gap-16 items-start">
        <div className="space-y-4 text-text-secondary text-lg dark:text-text-secondary-dark">
          <p>
            I am a passionate and self-driven developer pursuing B.Tech in Computer Science. I specialize in full-stack web development and AI/ML-driven solutions. I have experience working with modern technologies like React, Node, Python, and YOLOv8. I love building impactful projects that solve real-world problems.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 