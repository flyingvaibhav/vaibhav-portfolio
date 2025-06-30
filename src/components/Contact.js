import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      className="py-24 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-2 text-accent">04. What's Next?</h2>
      <h3 className="text-5xl font-bold text-text-primary mb-4">Get In Touch</h3>
      <p className="text-text-secondary max-w-xl mx-auto mb-8">
        I'm currently looking for new opportunities, and my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:vaibhavpandeyhacka@gmail.com"
        className="inline-block px-8 py-4 bg-transparent border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
      >
        Say Hello
      </a>
    </motion.section>
  );
};

export default Contact; 