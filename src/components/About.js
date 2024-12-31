import React from "react";
import { motion } from "framer-motion";
import BackToHome from "./BackToHome";

export default function About() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="absolute right-[15%] top-1/4 w-64 h-64 border border-neutral-800 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <BackToHome />
        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-neutral-400" />
            <p className="text-neutral-400 text-sm tracking-[0.2em] uppercase">
              About
            </p>
          </div>
          <h2 className="text-white text-4xl font-light tracking-wide mb-16">
            My Story
          </h2>

          <div className="grid lg:grid-cols-[1fr,1fr] gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-neutral-300 text-lg leading-relaxed">
                  I'm a software engineer and lifelong Jeopardy enthusiast with a passion for building innovative digital experiences, especially using Kotlin. I'm driven to create technology that makes the world easier to navigate for others like me.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  When I'm not building, I'm reading. I'm currently reading The Brothers Karamazov. I also enjoy playing the french horn.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-white text-xl font-light">
                  Current Focus
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Currently, I'm working on a destination wedding travel coordination platform to help make travel seamless for everyone involved.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-white text-xl font-light">Beyond Code</h3>
                <div className="space-y-4">
                  <div className="group p-4 rounded-lg hover:bg-neutral-900/30 transition-colors duration-300">
                    <h4 className="text-neutral-200 mb-2">Reading</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Currently exploring Russian literature through The Brothers Karamazov
                    </p>
                  </div>
                  <div className="group p-4 rounded-lg hover:bg-neutral-900/30 transition-colors duration-300">
                    <h4 className="text-neutral-200 mb-2">Music</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      French horn player and classical music enthusiast
                    </p>
                  </div>
                  <div className="group p-4 rounded-lg hover:bg-neutral-900/30 transition-colors duration-300">
                    <h4 className="text-neutral-200 mb-2">Trivia</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Jeopardy enthusiast and knowledge seeker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 