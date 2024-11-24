import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from './BackToHome';


const About = () => {
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
        
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Background</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a software engineer and lifelong Jeopardy enthusiast with a passion 
              for building innovative digital experiences, especiallly using Kotlin. Being autistic gives me a unique perspective, 
              and I'm driven to create technology that makes the world easier to navigate for others like me.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Current Focus</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Currently, I'm working on a destination wedding travel coordination platform 
              to help make travel seamless for everyone involved.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Fun Stuff</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not building, I'm reading. I'm currently reading The Brothers Karamazov. I also enjoy playing the french horn.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Technologies I Work With</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <ul className="space-y-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>C++</li>
                <li>Kotlin</li>
              </ul>
              <ul className="space-y-2">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>Supabase</li>
                <li>Redis</li>
                <li>Firebase</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default About; 