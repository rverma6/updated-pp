import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, X } from 'lucide-react';
import BackToHome from './BackToHome';
import { allProjects } from '../data/projects';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projectColors = {
    "GNN-Driven Drug Interaction Predictor": "from-purple-500/20 to-blue-500/20",
    "How Can I Relate This Back to Hardware?": "from-emerald-500/20 to-teal-500/20",
    "Recidivism Prediction with Fairness Assessment": "from-blue-500/20 to-indigo-500/20",
    "Fake Schema Generator": "from-orange-500/20 to-rose-500/20",
    "Smart Room Cleanup Assistant": "from-pink-500/20 to-purple-500/20",
    "Destination Wedding Travel Platform": "from-cyan-500/20 to-blue-500/20"
  };

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="absolute left-1/4 top-0 w-px h-screen bg-gradient-to-b from-neutral-800 via-white/20 to-neutral-800" />

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <BackToHome />
        
        <div className="mb-16 ml-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-neutral-400" />
            <p className="text-neutral-400 text-sm tracking-[0.2em] uppercase">
              Selected Works
            </p>
          </div>
          <h2 className="text-white text-4xl font-light tracking-wide">
            Project Highlights
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 ml-24">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative bg-neutral-900/50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${projectColors[project.name]}`} />

              <div className="relative p-8 lg:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-neutral-400 text-sm tracking-wider mb-2">
                      {project.technologies[0]}
                    </p>
                    <h3 className="text-white text-2xl font-light tracking-wide">
                      {project.name}
                    </h3>
                  </div>
                  <span className="text-neutral-500 text-sm">2024</span>
                </div>

                <p className="text-neutral-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-white text-sm tracking-wider hover:text-neutral-300 transition-colors flex items-center gap-2"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && allProjects.length > 4 && (
          <div className="mt-32 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] hover:gap-4"
            >
              See More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative bg-neutral-900 max-w-3xl rounded-lg p-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h2 className="text-3xl font-light text-white mb-4">{selectedProject.name}</h2>
              <p className="text-neutral-400 mb-6">{selectedProject.longDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.preview && (
                <img 
                  src={selectedProject.preview}
                  alt={selectedProject.name}
                  className="w-full rounded-lg mb-6"
                  onClick={() => setSelectedImage(selectedProject.preview)}
                />
              )}

              {selectedProject.link && selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                >
                  View Repository <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects; 