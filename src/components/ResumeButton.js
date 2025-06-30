import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Code, Star } from 'lucide-react';

const ResumeButton = () => {
  const stats = [
    { icon: <Users className="text-accent" />, value: '10+', label: 'Collaborations' },
    { icon: <Code className="text-accent" />, value: '20+', label: 'Projects Done' },
    { icon: <Star className="text-accent" />, value: '3 Months', label: 'Internship' },
  ];

  return (
    <motion.section 
      className="py-24 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-text-primary">Download My Resume</h3>
            <p className="text-text-secondary">
              Want a more detailed look at my experience? Download my resume to see my full work history, skills, and accomplishments.
            </p>
            <a
              href="/Vaibhav_Pandey_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent/80 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                {stat.icon}
                <p className="text-2xl font-bold text-text-primary mt-2">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeButton; 