import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ArrowDown } from 'lucide-react';

const ResumeButton = () => {
  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/Vaibhav_Pandey_Resume.pdf';
    link.download = 'Vaibhav_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:bg-dark-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get My <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download my detailed resume to learn more about my experience, 
              education, and technical expertise.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 dark:bg-dark-800"
          >
            <div className="flex flex-col items-center space-y-6">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FileText className="w-10 h-10" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Vaibhav Pandey - Resume
                </h3>
                <p className="text-gray-600">
                  Full Stack Developer | AI/ML Enthusiast | B.Tech CSE Student
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-md">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Collaborations</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Months Internship</div>
                </div>
              </div>

              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-3 shadow-glow"
              >
                <Download className="w-6 h-6" />
                <span>Download Resume</span>
                <ArrowDown className="w-5 h-5" />
              </motion.button>

              <p className="text-sm text-gray-500">
                PDF format • Updated February 2025
              </p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:bg-dark-700">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600">B.Tech in Computer Science & Engineering</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:bg-dark-700">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Focus Areas</h4>
              <p className="text-gray-600">AI/ML, Full-Stack Development, Computer Vision</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:bg-dark-700">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Availability</h4>
              <p className="text-gray-600">Open to new opportunities and collaborations</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeButton; 