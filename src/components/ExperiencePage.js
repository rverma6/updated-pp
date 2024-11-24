import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from './BackToHome';

const ExperiencePage = () => {
  const experiences = [
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
    {
      company: "University of Illinois at Urbana-Champaign",
      role: "ML Researcher",
      description: "Researching fairness in machine learning, focusing on developing equitable algorithms and addressing biases in predictive models to ensure inclusivity and trustworthiness in AI systems.",
    },
    {
      company: "Illinois Founders",
      role: "Head of Research and Development",
      description: "Led a team of 13 developers to support non-technical founders in creating their MVPs, managing three distinct teams working on diverse projects to bring ideas to life.",
    },
    {
      company: "Illinois Founders",
      role: "Software Engineer",
      description: "Built a cofounder match platform to help students connect with potential cofounders and developed a Startup Career Fair platform to foster connections between students and startups.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-black text-white pt-32 pb-32">
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