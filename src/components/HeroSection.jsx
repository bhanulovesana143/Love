import { ArrowDown } from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      {/* Content Container */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block animate-slide-in opacity-0 animation-delay-200">
              Hi, my name is
            </span>
            <span className="block text-primary animate-text-glow animation-delay-400">
              Bhanu Pratap Singh
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-700">
            I'm Bhanu — a full-stack Android and web developer proficient in
            Flutter, React, Spring Boot, and Node.js. I specialize in building
            efficient, scalable applications with clean code and engaging user
            experiences.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in animation-delay-1000">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition duration-300 shadow-md hover:shadow-lg"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes text-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(99, 102, 241, 0.5),
              0 0 20px rgba(99, 102, 241, 0.4);
          }
          50% {
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.8),
              0 0 40px rgba(139, 92, 246, 0.6);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }

        .animate-slide-in {
          animation: slide-in 1s ease forwards;
        }

        .animate-text-glow {
          animation: text-glow 2.5s ease-in-out infinite alternate;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};
