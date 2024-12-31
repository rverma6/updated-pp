import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { heroContent } from '../data/content';

export default function Hero() {
  return (
    <main className="relative flex items-center w-full min-h-screen bg-black overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative">
          <div className="max-w-2xl">
            <div className="animate-[fadeIn_1s_ease-out]">
              <span className="block text-neutral-300 text-3xl font-normal tracking-wide mb-3 animate-[slideIn_0.8s_ease-out] relative group">
                Hey, I'm
                <span className="absolute -right-8 top-0 font-serif italic text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                  ✨
                </span>
              </span>
              <h1 className="text-white text-7xl font-normal tracking-[0.02em] lg:text-8xl animate-[slideIn_0.8s_ease-out_0.2s_both]">
                <span className="inline-block relative group">
                  Rayva
                  <br />
                  <span className="inline-block mt-2 relative">
                    Verma
                    <span className="absolute -bottom-4 left-0 w-12 h-px bg-white/30 group-hover:w-full transition-all duration-700" />
                  </span>
                </span>
              </h1>
            </div>

            <div className="animate-[fadeIn_1s_ease-out_0.4s_both]">
              <p className="mt-16 text-neutral-400 text-lg leading-relaxed hover:text-neutral-300 transition-colors duration-300">
                Stats + CS @ UIUC. Co-Lead @ <a href="https://10xLabs.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 transition-colors duration-300">10xLabs</a>.
              </p>
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed hover:text-neutral-300 transition-colors duration-300" style={{ maxWidth: '400px' }}>
                Obsessed with improving the human experience through code. Also, Jeopardy enthusiast.
              </p>
            </div>

            <Link 
              to="/projects"
              className="group mt-16 inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] hover:gap-4 animate-[fadeIn_1s_ease-out_0.6s_both] relative overflow-hidden"
            >
              <span className="relative z-10 pointer-events-none">View Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          </div>

          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-neutral-800 via-white/20 to-neutral-800" />
          
          <nav className="absolute top-1/2 -translate-y-1/2 -right-[12rem] h-[40vh] flex items-center z-50">
            <div className="relative h-full">
              <ul className="relative flex flex-col justify-between h-full py-0">
                <li className="translate-y-12">
                  <Link 
                    to="/about" 
                    className="relative group flex items-center text-neutral-400 hover:text-white transition-all duration-500"
                  >
                    <span className="absolute left-0 w-0 h-full bg-gradient-to-r from-white/[0.07] to-transparent -z-10 group-hover:w-full transition-all duration-500 rounded-lg pointer-events-none" />
                    <span className="text-xl tracking-wide font-light uppercase">About</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/projects" 
                    className="relative group flex items-center text-neutral-400 hover:text-white transition-all duration-500"
                  >
                    <span className="absolute left-0 w-0 h-full bg-gradient-to-r from-white/[0.07] to-transparent -z-10 group-hover:w-full transition-all duration-500 rounded-lg pointer-events-none" />
                    <span className="text-xl tracking-wide font-light uppercase">Projects</span>
                  </Link>
                </li>
                <li className="-translate-y-12">
                  <Link 
                    to="/experience" 
                    className="relative group flex items-center text-neutral-400 hover:text-white transition-all duration-500"
                  >
                    <span className="absolute left-0 w-0 h-full bg-gradient-to-r from-white/[0.07] to-transparent -z-10 group-hover:w-full transition-all duration-500 rounded-lg pointer-events-none" />
                    <span className="text-xl tracking-wide font-light uppercase">Experience</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/[0.05] shadow-[0_0_40px_rgba(0,0,0,0.2)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-50 rounded-2xl" />
          <ul className="relative flex items-center gap-8 py-4 px-8">
            <li className="group">
              <a
                href="https://github.com/rverma6"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-2 text-neutral-400 hover:text-white transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />
                <Github className="relative w-5 h-5" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/[0.05] backdrop-blur-md rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Github</span>
              </a>
            </li>
            <li className="group">
              <a
                href="https://linkedin.com/in/rayvaverma"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-2 text-neutral-400 hover:text-white transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />
                <Linkedin className="relative w-5 h-5" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/[0.05] backdrop-blur-md rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">LinkedIn</span>
              </a>
            </li>
            <li className="group">
              <a
                href="https://twitter.com/vermray"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-2 text-neutral-400 hover:text-white transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />
                <Twitter className="relative w-5 h-5" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/[0.05] backdrop-blur-md rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Twitter</span>
              </a>
            </li>
            <li className="group">
              <a
                href="mailto:rayvaverma18@gmail.com"
                className="relative block p-2 text-neutral-400 hover:text-white transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />
                <Mail className="relative w-5 h-5" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/[0.05] backdrop-blur-md rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Email</span>
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
