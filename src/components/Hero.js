import React, { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Cursor from './Cursor';

export default function Hero() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <main className="relative flex items-center w-full min-h-screen bg-black overflow-hidden cursor-none">
      <Cursor isActive={activeSection !== null} />

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

      <div className="fixed md:right-12 md:top-1/2 md:-translate-y-1/2 right-0 bottom-0 w-full md:w-auto bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none z-40 animate-[fadeInLeft_0.8s_ease-out_0.2s_both]">
        <ul className="flex md:flex-col items-center justify-center gap-8 py-4 md:py-0">
          <li className="group">
            <a
              href="https://github.com/rverma6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 block p-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <div className="absolute md:right-full md:top-1/2 md:-translate-y-1/2 md:mr-4 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Github
            </div>
          </li>
          <li className="group">
            <a
              href="https://linkedin.com/in/rayvaverma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 block p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-neutral-900 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              LinkedIn
            </div>
          </li>
          <li className="group">
            <a
              href="https://twitter.com/vermray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 block p-2"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-neutral-900 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Twitter
            </div>
          </li>
          <li className="group">
            <a
              href="mailto:rayvaverma18@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors duration-300 block p-2"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-neutral-900 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Email
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      <div className="absolute right-[15%] top-1/4 w-64 h-64 border border-neutral-800 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />

      <div className="absolute left-12 top-1/4 flex flex-col gap-4">
        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse [animation-delay:200ms]" />
        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse [animation-delay:400ms]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative" onMouseEnter={() => setActiveSection("intro")}>
          <div className="max-w-2xl">
            <div className="animate-[fadeIn_1s_ease-out]">
              <span className="block text-neutral-400 text-2xl font-light tracking-wide mb-2 animate-[slideIn_0.8s_ease-out] relative group">
                Hey, I'm
                <span className="absolute -right-8 top-0 font-serif italic text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                  ✨
                </span>
              </span>
              <h1 className="text-white text-6xl font-light tracking-[0.02em] lg:text-7xl animate-[slideIn_0.8s_ease-out_0.2s_both]">
                Rayva
                <br />
                <span className="inline-block mt-2 relative group">
                  Verma
                  <span className="absolute -bottom-4 left-0 w-12 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
              </h1>
            </div>

            <div className="mt-12 space-y-6 text-neutral-400 animate-[fadeIn_1s_ease-out_0.3s_both]">
              <div className="group flex items-baseline gap-3">
                <span className="w-8 h-px bg-neutral-800 translate-y-3 group-hover:bg-neutral-600 transition-colors duration-300" />
                <span className="text-sm tracking-wide group-hover:text-white transition-colors flex items-center gap-2">
                  Stats + CS @ UIUC
                </span>
              </div>
              <div className="group flex items-baseline gap-3">
                <span className="w-8 h-px bg-neutral-800 translate-y-3 group-hover:bg-neutral-600 transition-colors duration-300" />
                <span className="text-sm tracking-wide group-hover:text-white transition-colors flex items-center gap-2">
                  Co-Lead @<a href="https://10xLabs.tech" target="_blank" rel="noopener noreferrer">10xLabs</a>
                </span>
              </div>
            </div>

            <p className="mt-16 text-neutral-400 text-lg max-w-lg leading-relaxed animate-[fadeIn_1s_ease-out_0.4s_both] hover:text-neutral-300 transition-colors duration-300">
              Obsessed with improving the human experience through code. Researching equitable AI systems and fostering innovation in student entrepreneurship. Jeopardy enthusiast.
            </p>

            <Link to="/projects" className="group mt-16 inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] hover:gap-4 animate-[fadeIn_1s_ease-out_0.6s_both] relative overflow-hidden">
              <span className="relative z-10">View Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-neutral-800 via-white/20 to-neutral-800" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        ::selection {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
      `}</style>
    </main>
  );
}
