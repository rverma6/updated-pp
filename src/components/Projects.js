import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import BackToHome from './BackToHome';

export const allProjects = [
  {
    name: "GNN-Driven Drug Interaction Predictor",
    description: "A comprehensive platform leveraging Graph Neural Networks to predict drug-drug interactions and potential side effects, helping researchers streamline the drug discovery process.",
    longDescription: "This platform leverages Graph Neural Networks (GNNs) to predict drug-drug interactions and potential side effects, transforming the drug discovery process. By representing drugs as graphs—where atoms are nodes and bonds are edges—the GNN learns complex molecular patterns to identify interactions with high accuracy. It processes molecular data from SMILES strings and uses advanced modeling techniques to streamline drug development, reducing costs and risks.",
    technologies: ["Python", "PyTorch", "NetworkX", "scikit-learn", "RDKit", "Docker"],
    link: "https://github.com/rverma6/drug-interaction-gnn.git",
    preview: "/images/gnn-preview.svg"
  },
  {
    name: "How Can I Relate This Back to Hardware?",
    description: "A fun project inspired by my meche friend who relates everything to hardware. Give it a topic, and it'll find a way to bring it back to hardware engineering! Shoutout Rahul!",
    longDescription: "Created an entertaining AI-powered application that mimics my mechanical engineering friend's unique ability to connect any topic back to hardware engineering. Users can input any subject, and the system generates creative, often humorous explanations drawing parallels to mechanical engineering concepts and hardware design principles.",
    technologies: ["Python", "OpenAI API", "Flask", "React", "MongoDB", "Docker"],
    link: "#",
    preview: "/images/hardware-preview.svg"
  },
  {
    name: "Recidivism Prediction with Fairness Assessment",
    description: "Built machine learning models to predict recidivism while evaluating and mitigating algorithmic bias across demographic groups.",
    longDescription: "Developed neural networks and random forest models to predict recidivism using demographic and criminal data, with a focus on fairness metrics. Implemented both baseline and adversarial models to assess and mitigate potential biases related to race and gender. Used SMOTE for class imbalance and achieved 70.64% accuracy while reducing demographic parity difference from 0.5751 to 0.4866.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "SMOTE", "Pandas", "NumPy"],
    link: "https://github.com/rverma6/recidivism-prediction-champaign",
    preview: "/images/recidivism-preview.svg"
  },
  {
    name: "Fake Schema Generator",
    description: "AI-powered platform that generates realistic test data based on user-defined database schemas with real-time editing capabilities.",
    longDescription: "Built a dynamic schema generation tool that creates and populates database tables with realistic test data. Users can input queries to generate skeleton schemas, which are then populated with customizable test data. Integrated OpenAI for intelligent data generation and Redis for caching, with a Supabase backend for real-time collaboration.",
    technologies: ["JavaScript", "OpenAI API", "Redis", "Supabase", "React", "Node.js"],
    link: "#",
    preview: "/images/schema-preview.svg"
  },
  {
    name: "Smart Room Cleanup Assistant",
    description: "Computer vision application that analyzes room photos to create personalized, step-by-step cleaning guides.",
    longDescription: "Developed an AI-powered application that uses YOLO object detection to analyze photos of messy rooms and generate prioritized cleaning instructions. The system identifies objects, assesses clutter patterns, and creates customized cleaning plans to help users tackle organization without feeling overwhelmed.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Flask", "React"],
    link: "#",
    preview: "/images/smart-room-cleanup-assistant-preview.svg"
  },
  {
    name: "Destination Wedding Travel Platform",
    description: "Comprehensive travel coordination platform for destination wedding planning, streamlining guest travel arrangements.",
    longDescription: "Created an all-in-one platform that simplifies destination wedding travel coordination. The system enables wedding planners to communicate with guests efficiently while providing integrated booking capabilities for flights and accommodations. Features real-time updates and collaborative planning tools.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Stripe API"],
    link: "#",
    preview: "/images/destination-wedding-travel-platform-preview.svg"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleProjectClick = (project, e) => {
    e.preventDefault();
    setSelectedProject(selectedProject?.name === project.name ? null : project);
  };

  return (
    <main className="min-h-screen w-full bg-black text-white pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHome />
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h1>
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Click the arrow to learn more about each project
        </motion.p>
        
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
                      <div className="mt-4">
                        {project.link && project.link !== "#" && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            View Repository <ArrowUpRight className="h-4 w-4" />
                          </motion.a>
                        )}
                      </div>
                      {project.preview && (
                        <motion.div 
                          className="mt-6 mb-6 overflow-hidden rounded-lg relative group cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setSelectedImage(project.preview)}
                        >
                          <img 
                            src={project.preview} 
                            alt={project.name}
                            className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Click to expand
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
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