import React, { useState, useEffect } from "react";
import { ArrowUpRight, Building2, GraduationCap } from "lucide-react";
import BackToHome from "./BackToHome";

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [activeSection, setActiveSection] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const experiences = [
    {
      type: "work",
      role: "Co-Lead",
      company: "10xLabs",
      period: "2023 — Present",
      location: "Champaign, IL",
      description: "A student-run venture studio that helps technical student founders build venture-backable startups by providing mentorship, resources, and a collaborative environment to scale their ideas.",
      achievements: [
        "Built a community of 50+ technical founders",
        "Launched 3 successful startups",
        "Established partnerships with venture capital firms"
      ],
    },
    {
      type: "work",
      role: "Founder",
      company: "Symbiosis",
      period: "2023 — Present",
      location: "Champaign, IL",
      description: "An AI-driven platform focused on revolutionizing hiring by matching applicants with teams for perfect fit, improving team cohesion and driving long-term success.",
      achievements: [
        "Developed proprietary AI matching algorithm",
        "Built end-to-end hiring platform",
        "Conducted extensive user research with HR professionals"
      ],
    },
    {
      type: "education",
      role: "ML Researcher",
      company: "University of Illinois at Urbana-Champaign",
      period: "2022 — Present",
      location: "Champaign, IL",
      description: "Researching fairness in machine learning, focusing on developing equitable algorithms and addressing biases in predictive models to ensure inclusivity and trustworthiness in AI systems.",
      achievements: [
        "Published research on algorithmic fairness",
        "Developed novel bias mitigation techniques",
        "Collaborated with interdisciplinary research teams"
      ],
    },
    {
      type: "work",
      role: "Head of Research and Development",
      company: "Illinois Founders",
      period: "2022 — 2023",
      location: "Champaign, IL",
      description: "Led a team of 13 developers to support non-technical founders in creating their MVPs, managing three distinct teams working on diverse projects to bring ideas to life.",
      achievements: [
        "Managed 3 development teams simultaneously",
        "Launched 5 successful MVPs",
        "Mentored junior developers"
      ],
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden cursor-none">
      <div
        className={`fixed w-8 h-8 rounded-full border border-white mix-blend-difference pointer-events-none z-50 transition-transform duration-100 ease-out ${activeSection ? "scale-150 opacity-50" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="absolute right-[15%] top-1/4 w-64 h-64 border border-neutral-800 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <BackToHome />
        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-neutral-400" />
            <p className="text-neutral-400 text-sm tracking-[0.2em] uppercase">
              Experience
            </p>
          </div>
          <h2 className="text-white text-4xl font-light tracking-wide mb-8">
            Professional Journey
          </h2>
          
        </div>

        <div className="relative space-y-32">
          {displayedExperiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveSection(`exp-${index}`)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="grid lg:grid-cols-[300px,1fr] gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral-400">
                    {exp.type === "work" ? (
                      <Building2 className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                    <span className="text-sm tracking-wider">{exp.period}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white text-2xl font-light">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-400">{exp.company}</p>
                    <p className="text-neutral-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-white text-sm tracking-wider uppercase">
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="group flex items-baseline gap-3"
                        >
                          <span className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-neutral-400 transition-colors" />
                          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index !== displayedExperiences.length - 1 && (
                <div className="absolute left-[150px] bottom-[-96px] w-px h-16 bg-gradient-to-b from-neutral-800 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {!showAll && experiences.length > 3 && (
          <div className="mt-32 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] hover:gap-4"
            >
              See More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}