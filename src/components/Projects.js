import React from 'react';
import { motion } from 'framer-motion';
import Github from 'lucide-react/dist/esm/icons/github';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';

const projects = [
  {
    title: 'Fire Detection Model Optimization',
    duration: 'Dec 2024 – Feb 2025',
    description: 'YOLOv8-based fire detection trained on public and custom datasets. Integrated with CCTV systems and optimized for edge deployment. Features: auto-checkpoint save/resume, Docker packaging, secure model execution.',
    tech: ['Python', 'OpenCV', 'Google Colab', 'Ultralytics', 'YOLOv8'],
  },
  {
    title: 'AI Virtual Assistant',
    duration: 'Jan 2025 – Feb 2025',
    description: 'MERN-stack AI assistant with OpenAI integration and voice commands. Used Web Speech API, secured RESTful APIs, encrypted authentication. Cloud-friendly design (modular, stateless). Real-time NLP integration and result feedback.',
    tech: ['MERN', 'OpenAI', 'Web Speech API', 'RESTful APIs', 'NLP'],
  },
];

const Projects = () => {
  return (
    <motion.section 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-2 text-text-primary text-center">
        <span className="text-accent">03.</span> Things I've Built
      </h2>
      <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-card dark:bg-card-dark p-8 rounded-xl shadow-lg hover:shadow-accent/30 transition-shadow duration-300 flex flex-col gap-4 animate-fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-primary-400 mb-2 flex items-center gap-2">
              {index === 0 ? '🔥' : '🤖'} {project.title}
            </h3>
            <span className="text-sm text-accent dark:text-accent-400 font-semibold mb-2">{project.duration}</span>
            <p className="text-text-secondary dark:text-text-secondary-dark mb-2">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, i) => (
                <li key={i} className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 rounded-full text-xs font-semibold">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects; 