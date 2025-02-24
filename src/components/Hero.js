import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { heroContent } from '../data/content';

export default function Hero() {
  return (
    <main className="relative flex items-center w-full min-h-screen bg-black overflow-hidden">
      <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-40">
        <ul className="flex items-center gap-20">
          <li>
            <Link 
              to="/about" 
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Experience
            </Link>
          </li>
        </ul>
      </nav>

      <div className="relative w-full max-w-[85%] mx-auto mt-12">
        <div className="relative">
          <div className="w-full">
            <div className="animate-[fadeIn_1s_ease-out]">
              <h1 className="text-white font-[350] leading-[1.15] tracking-[-0.02em] max-w-full">
                <div className="text-[5rem]">Hi, I'm <span className="font-[500] relative inline-block animate-[fadeIn_1s_ease-out_0.3s] text-pink-300 after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-px after:bg-pink-300/20">Rayva</span>.</div>
                <div className="text-[2.5rem]">I build technology designed to make a meaningful difference.</div>
              </h1>
            </div>

            <Link 
              to="/projects"
              className="mt-12 inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[15px] hover:bg-neutral-100 transition-colors duration-300"
            >
              VIEW PORTFOLIO
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="https://github.com/rverma6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rayvaverma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/vermray"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                href="mailto:rayvaverma18@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      <div className="absolute right-[15%] top-1/4 w-64 h-64 border border-neutral-800 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />

      <div className="absolute left-12 top-1/4 flex flex-col gap-4">
        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse [animation-delay:200ms]" />
        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse [animation-delay:400ms]" />
      </div>
    </main>
  );
}
