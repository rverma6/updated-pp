import { ArrowUpRight, Twitter, Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const featuredProjects = [
    {
      name: "Project One",
      description: "A revolutionary app that helps people learn faster",
      link: "/projects",
    },
    {
      name: "Project Two",
      description: "AI-powered tool for productivity enhancement",
      link: "/projects",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-8">
          <motion.span
            className="text-gray-400 font-mono text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">
              Rayva
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-400 font-semibold">
              Software Engineer
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-gray-400 leading-relaxed">
            I'm a software engineer based in [Your Location], specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="mt-8 flex space-x-6">
            <motion.a
              href="mailto:email@example.com"
              className="text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-mono"
              whileHover={{ scale: 1.05 }}
            >
              Get in touch
            </motion.a>
            <Link to="/projects">
              <motion.div
                className="text-gray-400 border border-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-mono"
                whileHover={{ scale: 1.05 }}
              >
                View work
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <div className="space-y-32 py-32">
          <section id="featured-projects" className="space-y-12">
            <h2 className="text-3xl font-bold relative">
              <span className="text-gray-400 font-mono text-sm absolute -left-8">01.</span>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {featuredProjects.map((project, index) => (
                <Link to={project.link} key={index}>
                  <motion.div
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
                  </motion.div>
                </Link>
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
                  company: "Company One",
                  role: "Software Engineer",
                  description: "Built scalable applications serving millions of users",
                },
                {
                  company: "Company Two",
                  role: "Frontend Developer",
                  description: "Led development of company's main product",
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
              <Link to="/experience">
                <motion.div 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                  whileHover={{ x: 4 }}
                >
                  View all experience
                  <ArrowUpRight className="h-5 w-5 ml-2" />
                </motion.div>
              </Link>
            </div>
          </section>

          <section id="contact" className="space-y-6">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="flex space-x-6">
              <motion.a
                href="https://twitter.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </motion.a>
              <motion.a
                href="mailto:email@example.com"
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