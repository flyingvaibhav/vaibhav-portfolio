import React from 'react';
import { motion } from 'framer-motion';
import Github from 'lucide-react/dist/esm/icons/github';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';

const projects = [
  {
    title: 'AI-Powered Full-Stack App',
    description: 'A comprehensive web application that leverages state-of-the-art AI models for advanced data processing and user interaction. Features a scalable backend and a responsive frontend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI/ML'],
    github: 'https://github.com/flyingvaibhav/major-project-main',
    live: 'https://major-project-main-gilt.vercel.app/',
    image: '/project1.png'
  },
  {
    title: 'Dynamic Blog Platform',
    description: 'A feature-rich blogging platform that allows users to create, edit, and share articles. Built with a modern tech stack for optimal performance and user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Vercel'],
    github: 'https://github.com/flyingvaibhav/grapghql-blog',
    live: 'https://grapghql-blog.vercel.app/',
    image: '/project2.png'
  },
  {
    title: 'Computer Vision Insights',
    description: 'An application demonstrating the power of computer vision for real-time object detection and analysis. Provides valuable insights from video and image feeds.',
    tags: ['Python', 'OpenCV', 'YOLOv8', 'Flask'],
    github: 'https://github.com/flyingvaibhav/computer-vision-insight',
    live: null,
    image: '/project3.png'
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

      <div className="space-y-28">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="grid md:grid-cols-12 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <a href={project.live || project.github} target="_blank" rel="noreferrer">
                <div className="bg-accent/20 rounded-lg group transition-all duration-300 hover:bg-accent/40">
                   <img src={project.image} alt={project.title} className="rounded-lg transition-transform duration-300 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100" />
                </div>
              </a>
            </div>

            {/* Project Details */}
            <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2 text-right' : 'md:order-1 text-left'}`}>
              <p className="text-accent mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-text-primary mb-4 hover:text-accent transition-colors"><a href={project.live || project.github} target="_blank" rel="noreferrer">{project.title}</a></h3>
              <div className="bg-card p-6 rounded-lg shadow-lg text-left">
                <p className="text-text-secondary">{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-x-4 gap-y-2 mt-4 text-text-secondary ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
              <div className={`flex items-center space-x-4 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-transform duration-300 hover:scale-110">
                  <Github size={24} />
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-transform duration-300 hover:scale-110">
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects; 