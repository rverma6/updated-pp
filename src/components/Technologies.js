import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from './BackToHome';
import { Code, Database, Cloud, Brain, Terminal, Globe } from 'lucide-react';

const Technologies = () => {
  const techCategories = {
    "Languages": {
      icon: <Terminal className="w-5 h-5 text-white/70" />,
      items: ["JavaScript", "Python", "C++", "Kotlin", "C", "Java"]
    },
    "Frontend": {
      icon: <Globe className="w-5 h-5 text-white/70" />,
      items: ["React", "TailwindCSS", "Framer Motion", "Next.js"]
    },
    "Backend": {
      icon: <Code className="w-5 h-5 text-white/70" />,
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    "AI/ML": {
      icon: <Brain className="w-5 h-5 text-white/70" />,
      items: ["TensorFlow", "PyTorch", "scikit-learn", "YOLO"]
    },
    "Cloud & DevOps": {
      icon: <Cloud className="w-5 h-5 text-white/70" />,
      items: ["AWS", "Docker", "Firebase", "Supabase"]
    }
  };

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
          Technologies I Work With
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(techCategories).map(([category, { icon, items }], index) => (
            <motion.div
              key={category}
              className="border border-gray-800 rounded-lg p-6 hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                {icon}
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {items.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gray-900/40 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all cursor-default"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Technologies; 