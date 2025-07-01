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
        Feel free to reach out for opportunities, collaborations, or just to connect!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <a href="mailto:vaibhavpandeyhacka@gmail.com" className="text-primary hover:text-accent font-semibold transition-colors">vaibhavpandeyhacka@gmail.com</a>
        <a href="https://www.linkedin.com/in/vaibhavpandey0987654321" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold transition-colors">LinkedIn</a>
        <a href="https://github.com/vaibhavpandey0987" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold transition-colors">GitHub</a>
      </div>
      <form className="max-w-xl mx-auto bg-card dark:bg-card-dark p-8 rounded-xl shadow-lg flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" className="px-4 py-3 rounded-lg border border-primary/30 focus:border-accent outline-none bg-background dark:bg-background-dark text-text-primary dark:text-text-primary-dark transition-colors" required />
        <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-primary/30 focus:border-accent outline-none bg-background dark:bg-background-dark text-text-primary dark:text-text-primary-dark transition-colors" required />
        <textarea name="message" placeholder="Message" rows="4" className="px-4 py-3 rounded-lg border border-primary/30 focus:border-accent outline-none bg-background dark:bg-background-dark text-text-primary dark:text-text-primary-dark transition-colors" required></textarea>
        <button type="submit" className="btn-primary bg-primary hover:bg-accent text-white font-semibold rounded-lg px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact; 