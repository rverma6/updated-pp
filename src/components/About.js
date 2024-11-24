import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from './BackToHome';

const About = () => {
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
          About Me
        </motion.h1>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-gray-400 leading-relaxed">
            I'm a software engineer based in [Your Location], specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          {/* Add more about content here */}
        </motion.div>
      </div>
    </main>
  );
};

export default About; 