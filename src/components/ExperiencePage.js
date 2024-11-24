import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from './BackToHome';

const ExperiencePage = () => {
  const experiences = [
    {
      company: "Company One",
      role: "Software Engineer",
      description: "Built scalable applications serving millions of users",
    },
    {
      company: "Company Two",
      role: "Frontend Developer",
      description: "Led development of company's main product",
    },
  ];

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
          Experience
        </motion.h1>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
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
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage; 