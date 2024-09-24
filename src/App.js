import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <main className="main-content">
        <div className="profile-section">
          <img
            src="./assets/images/rayva.jpg" // Update with your profile image path
            alt="Rayva Verma"
            className="profile-img"
          />
          <h2 className="greeting-text">Hi, I'm Rayva Verma.</h2>
        </div>
        <ul className="nav-links">
        <li><Link to="/About">About</Link></li>
        <li><a href="/Projects">Projects</a></li>
          <li><a href="/Talks">Resume</a></li>
          <li><a href="https://substack.com/@rayvaverma" target="_blank" rel="noopener noreferrer">Blogs</a></li>
          <li><a href="https://github.com/rverma6">GitHub</a></li>
        </ul>
        <div className="description">
          <p>
            I'm a senior at the University of Illinois at Urbana-Champaign studying computer science, statistics, and math.
            I build stuff in my free time. Currently, I'm working on <a href="https://10xLabs.tech" target="_blank" rel="noopener noreferrer">10xLabs</a>
            , a student focused venture studio at the University of Illinois. 
            I'm also building Synergy, a platform to match job applicants with their perfect team fit. Feel free to reach out to me at <a href="https://hi@rayvaverma.com">hi@rayvaverma.com</a>.
          </p>
        </div>
      </main>
    </div>
    </Router>
  );
}

export default App;
