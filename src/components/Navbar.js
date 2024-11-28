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
      className={`fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center bg-black/85 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-lg' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="text-2xl font-bold text-white">
        R
      </Link>
      <div className="flex items-center space-x-8">
        <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
          <span className="text-white/50 mr-1">01.</span>About
        </Link>
        <Link to="/projects" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
          <span className="text-white/50 mr-1">02.</span>Projects
        </Link>
        <Link to="/experience" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
          <span className="text-white/50 mr-1">03.</span>Experience
        </Link>
        <Link to="/technologies" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
          <span className="text-white/50 mr-1">04.</span>Technologies
        </Link>
        <motion.a 
          href="/resume.pdf" 
          className="text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-mono text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar; 