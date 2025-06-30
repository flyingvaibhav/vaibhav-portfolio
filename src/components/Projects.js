import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "🔥 Fire Detection Model Optimization",
      period: "Dec 2024 – Feb 2025",
      description: "Real-time fire detection system using YOLOv8, trained on custom/public datasets",
      features: [
        "Real-time fire detection using YOLOv8",
        "Trained on custom and public datasets",
        "Integrated with CCTV systems",
        "Edge-device optimization",
        "Checkpoint resume functionality",
        "Docker-based deployment",
        "Lightweight and scalable solution"
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "Docker", "Computer Vision", "Deep Learning"],
      icon: "🔥",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50"
    },
    {
      id: 2,
      title: "🤖 AI Virtual Assistant",
      period: "Jan 2025 – Feb 2025",
      description: "MERN-based full-stack AI assistant with OpenAI API + Web Speech input",
      features: [
        "MERN stack full-stack application",
        "OpenAI API integration",
        "Web Speech API for voice input",
        "Voice command functionality",
        "RESTful secure APIs",
        "Encrypted authentication",
        "Cloud principles (modular, stateless)",
        "Real-time NLP evaluation"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Web Speech API"],
      icon: "🤖",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Here are some of my recent projects that showcase my skills in AI/ML and full-stack development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-dark-800`}
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-100">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-100">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-white/80 dark:bg-dark-700 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-100 border border-gray-200 hover:bg-white transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 dark:bg-dark-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                        <Cpu className="w-5 h-5 mr-2" />
                        Technical Highlights
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-100">
                        {project.id === 1 && (
                          <>
                            <p>• Optimized YOLOv8 model for real-time inference</p>
                            <p>• Implemented checkpoint resume for training</p>
                            <p>• Docker containerization for easy deployment</p>
                            <p>• Edge device optimization for low-latency</p>
                          </>
                        )}
                        {project.id === 2 && (
                          <>
                            <p>• Secure RESTful API with JWT authentication</p>
                            <p>• Real-time voice processing with Web Speech API</p>
                            <p>• Modular architecture following cloud principles</p>
                            <p>• Encrypted data transmission and storage</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="btn-primary flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Demo</span>
                      </button>
                      <button className="btn-secondary flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white dark:bg-dark-700">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <a
              href="#contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 dark:bg-dark-800 dark:text-primary-300"
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 