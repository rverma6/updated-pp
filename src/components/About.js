import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from './BackToHome';
import { User, Target, BookOpen } from 'lucide-react';


const About = () => {
  const sections = {
    "Background": {
      icon: <User className="w-5 h-5 text-white/70" />,
      content: "I'm a software engineer and lifelong Jeopardy enthusiast with a passion for building innovative digital experiences, especially using Kotlin. I'm driven to create technology that makes the world easier to navigate for others like me."
    },
    "Current Focus": {
      icon: <Target className="w-5 h-5 text-white/70" />,
      content: "Currently, I'm working on a destination wedding travel coordination platform to help make travel seamless for everyone involved."
    },
    "Beyond Code": {
      icon: <BookOpen className="w-5 h-5 text-white/70" />,
      content: "When I'm not building, I'm reading. I'm currently reading The Brothers Karamazov. I also enjoy playing the french horn."
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
          About Me
        </motion.h1>

        <div className="space-y-8">
          {Object.entries(sections).map(([title, { icon, content }], index) => (
            <motion.section
              key={title}
              className="border border-gray-800 rounded-lg p-6 hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                {icon}
                {title}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {content}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About; 