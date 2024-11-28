import { ArrowUpRight, Twitter, Mail, Github, X, Code } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { allProjects } from './Projects';

export default function Hero() {
  const featuredProjects = allProjects.slice(0, 2);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleProjectClick = (project, e) => {
    e.preventDefault();
    setSelectedProject(selectedProject?.name === project.name ? null : project);
  };

  return (
    <main className="min-h-screen w-full bg-black text-white pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-32 pb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isLoaded ? 1 : 0.8,
              opacity: isLoaded ? 1 : 0,
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
                Rayva Verma
              </span>
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-400 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Building human-centered experiences through code
            </motion.p>
          </motion.div>

          <div className="space-y-6 max-w-2xl">
            <motion.div
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a 
                href="https://github.com/rverma6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Software Engineer
              </motion.a> and current senior at the University of Illinois Urbana-Champaign, 
              focusing on the intersection of statistics, computer science, and machine learning. 
              Currently building solutions that make technology more accessible and intuitive.
            </motion.div>

            

            <motion.div
              className="flex items-center space-x-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="mailto:rayvaverma18@gmail.com"
                className="text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-mono inline-flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </motion.a>
              <Link to="/projects">
                <motion.div
                  className="text-gray-400 border border-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-mono inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code className="w-4 h-4 mr-2" />
                  View work
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="space-y-32 py-32">
          <section id="featured-projects" className="space-y-12">
            <h2 className="text-3xl font-bold relative">
              <span className="text-gray-400 font-mono text-sm absolute -left-8">01.</span>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {featuredProjects.map((project, index) => (
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
                    <div className="flex justify-between items-start gap-8">
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium group-hover:text-white transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 mt-4 text-lg">{project.description}</p>
                      </div>
                      <ArrowUpRight className="h-10 w-10 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors transform group-hover:rotate-45 duration-300" />
                    </div>
                  </motion.a>
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
                        {project.preview && (
                          <div className="mb-6 overflow-hidden rounded-lg">
                            <img 
                              src={project.preview} 
                              alt={project.name}
                              className="w-full h-64 object-cover object-center"
                            />
                          </div>
                        )}
                        <p className="text-gray-400 mb-4">{project.longDescription}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && project.link !== "#" && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            View Project <ArrowUpRight className="h-4 w-4 ml-1" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="space-y-12">
            <h2 className="text-3xl font-bold relative">
              <span className="text-gray-400 font-mono text-sm absolute -left-8">02.</span>
              Experience
            </h2>
            <div className="space-y-12">
              {[
                {
                  company: "10xLabs",
                  role: "Co-Lead",
                  description: "A student-run venture studio that helps technical student founders build venture-backable startups by providing mentorship, resources, and a collaborative environment to scale their ideas.",
                },
                {
                  company: "Symbiosis",
                  role: "Founder",
                  description: "An AI-driven platform focused on revolutionizing hiring by matching applicants with teams for perfect fit, improving team cohesion and driving long-term success.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[6.5px] top-2" />
                  <h3 className="text-xl font-medium">{exp.company}</h3>
                  <p className="text-gray-400 mt-1">{exp.role}</p>
                  <p className="text-gray-500 mt-4">{exp.description}</p>
                </motion.div>
              ))}
              <Link to="/experience" className="mt-8 block">
                <motion.div 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                  whileHover={{ x: 4 }}
                >
                  View all experiences
                  <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors transform group-hover:rotate-45 duration-300" />
                </motion.div>
              </Link>
            </div>
          </section>

          <section id="contact" className="space-y-6">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="flex space-x-6">
              <motion.a
                href="https://twitter.com/vermray"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </motion.a>
              <motion.a
                href="https://github.com/rverma6"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </motion.a>
              <motion.a
                href="https://rayvaverma.substack.com/"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-5 w-5 mr-2 fill-current"
                >
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Substack
              </motion.a>
              <motion.a
                href="mailto:rayvaverma18@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Email
              </motion.a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}