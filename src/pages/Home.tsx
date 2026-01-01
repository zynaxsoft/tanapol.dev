import React from "react";
import { motion, type Variants } from "framer-motion";
import BentoCard from "../components/ui/BentoCard";
import TerminalCard from "../components/ui/TerminalCard";
import ProjectCard from "../components/ui/ProjectCard";
import SocialLinksCard from "../components/ui/SocialLinksCard";

const Home: React.FC = () => {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Content data - structured TOML for capabilities
  const skillsTomlContent = `programming = ["Rust", "Python", "Kotlin", "TypeScript"]
cloud_infrastructure = ["AWS", "Terraform", "Docker", "NGINX"]
specializations = ["SaaS Development", "Machine Learning", "Robotics"]

[full_stack]
backend = ["REST APIs", "Microservices"]
frontend = ["React", "Recoil", "Styled-Components"]
database = ["PostgreSQL"]`;

  const projects = [
    {
      title: "Game of Life (WASM)",
      desc: "Conway's Game of Life implemented in Rust & WebAssembly.",
      link: "https://static.tanapol.dev/game-of-life",
      tech: ["Rust", "WASM", "JS"],
    },
    {
      title: "Snake Game (WASM)",
      desc: "Classic Snake game running in the browser via WASM.",
      link: "https://static.tanapol.dev/snake",
      tech: ["Rust", "WASM"],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Neumorphism container - single column layout */}
      <div className="neuro-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-0"
        >
          {/* Hero Card: Name, Title, Status */}
          <motion.div variants={cardVariants}>
            <div className="flex flex-col gap-4 mx-3 my-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-text mb-3">
                  Tanapol Prucksakorn
                </h1>
                <p className="text-xl md:text-2xl text-subtext font-light">
                  Full-Stack Engineer & Ph.D. in Robotics
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile + Bio Card */}
          <motion.div variants={cardVariants}>
            <BentoCard>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="relative group w-32 h-32 md:w-40 md:h-40">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 rounded-lg"></div>
                    <img
                      src="/me.png"
                      alt="Tanapol Prucksakorn"
                      className="relative w-full h-full rounded-lg object-cover filter transition-all duration-500 border-2 border-surface"
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="flex-1 space-y-4">
                  <p className="text-text leading-relaxed">
                    Hi! I am Tanapol Prucksakorn, a full-stack engineer and
                    Ph.D. holder who is deeply passionate about software
                    development. I absolutely love exploring and building with
                    new technologies, and I find genuine joy in crafting
                    innovative solutions.
                  </p>

                  <p className="text-subtext leading-relaxed">
                    After completing my{" "}
                    <span className="text-primary font-semibold">
                      Ph.D. in Robotics
                    </span>
                    , I worked at{" "}
                    <span className="text-secondary font-semibold">
                      QBIT Robotics
                    </span>{" "}
                    on the Omotenashi System, then at{" "}
                    <span className="text-secondary font-semibold">
                      Dynamic Map Platform
                    </span>{" "}
                    on mapping software. Currently, I am at{" "}
                    <span className="text-accent font-semibold">
                      Exawizards
                    </span>
                    , challenging myself by building SaaS and AI products.
                  </p>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Terminal Skills Card */}
          <motion.div variants={cardVariants}>
            <BentoCard>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Skills
              </h2>
              <TerminalCard
                command="cat skills.toml"
                content={skillsTomlContent}
              />
            </BentoCard>
          </motion.div>

          {/* Projects Card */}
          <motion.div variants={cardVariants}>
            <BentoCard>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Projects
              </h2>
              <p className="text-subtext mb-6">
                Here are some small Rust projects that might interest you:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, i) => (
                  <ProjectCard key={i} {...project} />
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Social Links Card */}
          <motion.div variants={cardVariants}>
            <BentoCard>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Connect
              </h2>
              <SocialLinksCard />
            </BentoCard>
          </motion.div>

          {/* Site Info Card */}
          <motion.div variants={cardVariants}>
            <BentoCard>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                About This Site
              </h2>
              <div className="space-y-3 text-subtext">
                <p>
                  I created this website with{" "}
                  <span className="text-text font-mono">React</span>,{" "}
                  <span className="text-text font-mono">Vite</span>, and{" "}
                  <span className="text-text font-mono">TailwindCSS</span>. The
                  color theme I use is the famous{" "}
                  <span className="text-primary font-semibold">Catppuccin</span>{" "}
                  color palette.
                </p>
                <p className="text-sm opacity-80">
                  If you haven't tried pressing the "Palette" button in the
                  navbar yet, please try it to see different color themes.
                </p>
                <div className="pt-4 border-t border-overlay/20">
                  <a
                    href="https://github.com/zynaxsoft/tanapol.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
                  >
                    <span>[View Source Code]</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
