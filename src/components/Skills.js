import React from 'react';
import { motion } from 'framer-motion';
import Code from 'lucide-react/dist/esm/icons/code';
import Server from 'lucide-react/dist/esm/icons/server';
import BrainCircuit from 'lucide-react/dist/esm/icons/brain-circuit';
import Wrench from 'lucide-react/dist/esm/icons/wrench';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Code className="w-8 h-8 text-accent" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-8 h-8 text-accent" />,
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB', 'MySQL'],
  },
  {
    category: 'AI/ML',
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
  },
  {
    category: 'Tools & DevOps',
    icon: <Wrench className="w-8 h-8 text-accent" />,
    skills: ['Git & GitHub', 'Docker', 'CI/CD', 'Jest', 'Webpack', 'Vite'],
  },
];

const Skills = () => {
  return (
    <motion.section 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-2 text-text-primary text-center">
        <span className="text-accent">02.</span> My Skills
      </h2>
      <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="text-xl font-bold text-text-primary mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-text-secondary">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills; 