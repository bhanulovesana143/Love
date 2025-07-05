import { Code, Briefcase } from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-background text-foreground relative overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold animate-fade-up-delay">
              A Full-Stack Web & Android Developer
            </h3>

            <p className="text-lg text-muted-foreground animate-fade-up-delay">
              I’m <strong>Bhanu</strong>, a passionate developer skilled in
              building modern Web and Android applications using{" "}
              <strong>React</strong>, <strong>Flutter</strong>,{" "}
              <strong>Node.js</strong>, and <strong>Spring Boot</strong>. I
              focus on clean architecture, responsive design, and
              performance-optimized code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up-delay">
              <a
                href="https://www.linkedin.com/in/bhanupratapsn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>

              <a
                href="https://app.luminpdf.com/viewer/6869119afa86e7d2c5dfd206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Dev */}
            <div className="p-6 rounded-2xl card hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating interactive and responsive websites using modern
                    frameworks like React, Tailwind, and Next.js.
                  </p>
                </div>
              </div>
            </div>

            {/* Android Dev */}
            <div className="p-6 rounded-2xl card hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary text-xl">
                  🤖
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Android Development</h4>
                  <p className="text-muted-foreground">
                    Building mobile apps with Flutter that are fast, scalable,
                    and visually consistent across Android and iOS platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend Dev */}
            <div className="p-6 rounded-2xl card hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Creating scalable backend systems with{" "}
                    <strong>Node.js</strong> and <strong>Spring Boot</strong>,
                    RESTful APIs, and database integrations using MySQL and MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }
        .animate-fade-up-delay {
          animation: fadeUp 1s ease-out both;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};
