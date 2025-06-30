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

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-4 text-text-secondary text-lg">
          <p>
            Hello! I'm Vaibhav, a software developer with a passion for creating things that live on the internet. My interest in web development started back when I decided to build a custom blog — turns out hacking together a dynamic website taught me a lot about HTML, CSS & JavaScript!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working on several projects, honing my skills in both front-end and back-end development. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-text-secondary">
          {skills.map((skill, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-accent">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default About; 