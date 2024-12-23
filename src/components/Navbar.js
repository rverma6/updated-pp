import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-black/85 backdrop-blur-md border-white/10' : 'bg-transparent border-white/5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-neutral-400 font-mono text-lg font-medium hover:text-white transition-colors duration-300">
            rayva
          </Link>
          <div className="flex space-x-8">
            <Link to="/about" className="text-neutral-400 hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
            </Link>
            <Link to="/projects" className="text-neutral-400 hover:text-white transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
            </Link>
            <Link to="/experience" className="text-neutral-400 hover:text-white transition-colors relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
            </Link>
            <Link to="/technologies" className="text-neutral-400 hover:text-white transition-colors relative group">
              Technologies
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
            </Link>
            <motion.a 
              href="/resume.pdf" 
              className="text-neutral-400 hover:text-white transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 