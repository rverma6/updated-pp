import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackToHome = () => {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
        <ArrowLeft className="h-5 w-5 mr-2 transform transition-transform duration-300 group-hover:-rotate-45" />
        Back to Home
      </Link>
    </motion.div>
  );
};

export default BackToHome; 