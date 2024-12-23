import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import About from './components/About';
import ExperiencePage from './components/ExperiencePage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
