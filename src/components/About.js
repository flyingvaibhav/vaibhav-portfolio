import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "B.Tech in Computer Science & Engineering"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Focus",
      description: "Passionate about machine learning and AI applications"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Building solutions that make a real impact"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full dark:bg-gradient-to-r dark:from-primary-400 dark:to-purple-400"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-dark-800">
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed mb-6">
                I'm a passionate Software Development Engineer (SDE) with a strong foundation in computer science, coding, and problem-solving. My journey began with a curiosity for how software powers the world, leading me to master core SDE skills and best practices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed mb-6">
                I have completed a 3 months internship, where I contributed to real-world projects involving scalable web applications, RESTful APIs, and cloud-ready solutions. My focus is on writing clean, efficient code and building robust, maintainable systems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                My technical interests include full-stack development, data structures & algorithms, backend engineering, and cloud technologies. I am committed to continuous learning and delivering impactful software as an SDE.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            My <span className="gradient-text">Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-dark-800">
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Innovation</h4>
              <p className="text-blue-800 dark:text-blue-100">
                Constantly exploring new technologies and approaches to solve complex problems.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-dark-800">
              <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">Quality</h4>
              <p className="text-purple-800 dark:text-purple-100">
                Writing clean, maintainable code and following industry best practices.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 dark:bg-dark-800">
              <h4 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">Impact</h4>
              <p className="text-green-800 dark:text-green-100">
                Creating solutions that make a real difference in people's lives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 