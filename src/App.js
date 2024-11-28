import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import ExperiencePage from './components/ExperiencePage';
import Technologies from './components/Technologies';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
