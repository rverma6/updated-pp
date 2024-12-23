import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-40">
      <ul className="flex items-center gap-12 text-sm tracking-wider">
        <li>
          <Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-neutral-400 hover:text-white transition-colors duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" className="text-neutral-400 hover:text-white transition-colors duration-300">
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 

