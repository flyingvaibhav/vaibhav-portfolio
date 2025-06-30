import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Database, 
  Terminal, 
  GitBranch,
  Github,
  Server,
  Cloud,
  ListChecks,
  Bug,
  FlaskConical,
  Settings2
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      category: "Frontend"
    },
    {
      name: "React",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      category: "Frontend"
    },
    {
      name: "Node.js",
      icon: <Server className="w-8 h-8 text-green-500" />,
      category: "Backend"
    },
    {
      name: "Express",
      icon: <Settings2 className="w-8 h-8 text-gray-600" />,
      category: "Backend"
    },
    {
      name: "MongoDB",
      icon: <Database className="w-8 h-8 text-green-600" />,
      category: "Database"
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      category: "Database"
    },
    {
      name: "Python",
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
      category: "Programming"
    },
    {
      name: "C++",
      icon: <Code className="w-8 h-8 text-blue-700" />,
      category: "Programming"
    },
    {
      name: "Git",
      icon: <GitBranch className="w-8 h-8 text-orange-600" />,
      category: "Tools"
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8 text-gray-800" />,
      category: "Tools"
    },
    {
      name: "Data Structures",
      icon: <ListChecks className="w-8 h-8 text-purple-600" />,
      category: "Core"
    },
    {
      name: "Algorithms",
      icon: <ListChecks className="w-8 h-8 text-pink-600" />,
      category: "Core"
    },
    {
      name: "REST APIs",
      icon: <FlaskConical className="w-8 h-8 text-green-700" />,
      category: "Backend"
    },
    {
      name: "Testing",
      icon: <Bug className="w-8 h-8 text-red-500" />,
      category: "Tools"
    },
    {
      name: "CI/CD",
      icon: <Settings2 className="w-8 h-8 text-blue-400" />,
      category: "Tools"
    },
    {
      name: "Cloud Basics",
      icon: <Cloud className="w-8 h-8 text-blue-300" />,
      category: "Cloud"
    }
  ];

  const categories = ["Core", "Frontend", "Backend", "Database", "Programming", "Cloud", "Tools"];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6 dark:bg-gradient-to-r dark:from-primary-400 dark:to-purple-400"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            A comprehensive set of skills that enable me to build full-stack applications 
            and implement cutting-edge AI/ML solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              className="skill-icon flex flex-col items-center justify-center space-y-2 group cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skills by Category */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-8 dark:bg-dark-800"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-8 h-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mr-4"></div>
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow dark:bg-dark-700"
                    >
                      <div className="flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-100">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white dark:bg-dark-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">AI/ML Technologies</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• YOLOv8 & Computer Vision</li>
                <li>• OpenAI API Integration</li>
                <li>• Natural Language Processing</li>
                <li>• Deep Learning Models</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Development Tools</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Docker & Containerization</li>
                <li>• RESTful API Design</li>
                <li>• Version Control (Git)</li>
                <li>• CI/CD Pipelines</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Problem Solving</li>
                <li>• Team Collaboration</li>
                <li>• Project Management</li>
                <li>• Technical Documentation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 