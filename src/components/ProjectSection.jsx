import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Blog App",
    description: "A blog app that allows users to create and manage their own blogs.",
    image: "/projects/blog_app.jpg",
    tags: ["React", "Spring Boot"],
    githubUrl: "https://github.com/bhanu250506/Blog-Application",
  },
  {
    id: 2,
    title: "Group Chat App",
    description: "A real-time chat application using WebSocket and Spring Boot.",
    image: "/projects/chat_app.mp4",
    tags: ["WebSocket", "Spring Boot", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/bhanu250506/Group-Chat",
  },
  {
    id: 3,
    title: "LMS App",
    description: "A complete UI for a Learning Management System built in Flutter.",
    image: "/projects/mobile_project.mp4",
    tags: ["Flutter", "Dart", "MongoDB"],
    githubUrl: "https://github.com/bhanu250506/Lms-Ui",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-background text-foreground">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent works. I focus on performance, clean code, and pixel-perfect UI to build robust and user-centric applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group overflow-hidden animate-fade-in",
                "p-0" // no padding, handled inside
              )}
              style={{ backgroundColor: "hsl(var(--card))", animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
            >
              <div className="relative h-48 overflow-hidden">
                {project.image.endsWith(".mp4") ? (
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-xs text-secondary-foreground px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>

                <div className="mt-3 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit mx-auto flex items-center gap-2"
            target="_blank"
            href="https://github.com/bhanu250506?tab=repositories"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};
