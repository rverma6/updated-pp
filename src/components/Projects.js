import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import BackToHome from './BackToHome';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const allProjects = [
    {
      name: "Project One",
      description: "A revolutionary app that helps people learn faster",
      longDescription: "This project is a comprehensive learning platform that utilizes AI to adapt to each user's learning style. Built with React, Node.js, and TensorFlow.js, it features real-time progress tracking, personalized learning paths, and interactive exercises.",
      technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      link: "#",
    },
    {
      name: "Project Two",
      description: "AI-powered tool for productivity enhancement",
      longDescription: "An innovative productivity tool that leverages machine learning to help users optimize their daily workflows. Features include smart task prioritization, automated scheduling, and performance analytics.",
      technologies: ["Python", "React", "scikit-learn", "PostgreSQL"],
      link: "#",
    },
    {
      name: "Project Three",
      description: "Full-stack web application with real-time features",
      longDescription: "A full-stack web application that utilizes real-time technologies to provide users with a seamless and interactive experience. Built with React, Node.js, and Socket.io, it features real-time chat, notifications, and collaborative features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
    },
    {
      name: "Project Four",
      description: "Mobile app built with React Native",
      longDescription: "A mobile app that utilizes React Native to provide users with a seamless and interactive experience. Built with React Native, it features real-time progress tracking, personalized learning paths, and interactive exercises.",
      technologies: ["React Native", "Node.js", "TensorFlow.js", "MongoDB"],
      link: "#",
    },
  ];

  const handleProjectClick = (project, e) => {
    e.preventDefault();
    setSelectedProject(selectedProject?.name === project.name ? null : project);
  };

  return (
    <main className="min-h-screen w-full bg-black text-white pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHome />
        <motion.h1 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 gap-8">
          {allProjects.map((project, index) => (
            <div key={index}>
              <motion.a
                href={project.link}
                onClick={(e) => handleProjectClick(project, e)}
                className="group block border border-gray-800 p-8 rounded-lg hover:border-white/20 transition-all bg-gray-900/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-medium group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mt-4 text-lg">{project.description}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors transform group-hover:rotate-45 duration-300" />
                </div>
              </motion.a>

              <AnimatePresence>
                {selectedProject?.name === project.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-6 border border-gray-800 rounded-lg bg-gray-900/40">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-medium">Project Details</h4>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-gray-400 mb-4">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects; 