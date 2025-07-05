import { useState } from "react";
import {
  BarChart2,
  Code,
  Database,
  Settings,
  Layers,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";


const skills = [
  // Languages
  { name: "Java", level: 80, category: "Language", icon: "☕️" },
  { name: "C/C++", level: 55, category: "Language", icon: "💻" },
  { name: "Python", level: 65, category: "Language", icon: "🐍" },
  { name: "Kotlin", level: 60, category: "Language", icon: "🧩" },
  { name: "Dart", level: 65, category: "Language", icon: "💻" },
  { name: "JavaScript", level: 50, category: "Language", icon: <Code className="h-5 w-5" /> },
  { name: "HTML/CSS", level: 65, category: "Language", icon: "🔧" },
  { name: "SQL", level: 60, category: "Language", icon: "🗄️" },

  // Frontend
  { name: "React", level: 60, category: "Frontend", icon: <Layers className="h-5 w-5" /> },
  { name: "Flutter", level: 85, category: "Frontend", icon: "📱" },
  { name: "Jetpack Compose", level: 60, category: "Frontend", icon: "🎨" },

  // Backend
  { name: "Spring Boot", level: 70, category: "Backend", icon: <Settings className="h-5 w-5" /> },
  { name: "Node.js", level: 80, category: "Backend", icon: <Terminal className="h-5 w-5" /> },
  { name: "Express.js", level: 75, category: "Backend", icon: <Terminal className="h-5 w-5" /> },

  // Databases
  { name: "MySQL", level: 80, category: "Database", icon: <Database className="h-5 w-5" /> },
  { name: "MongoDB", level: 75, category: "Database", icon: <Database className="h-5 w-5" /> },
  { name: "SQLite", level: 65, category: "Database", icon: "🗄️" },
  { name: "Firebase Firestore", level: 50, category: "Database", icon: "🔥" },

  // Tools & Tech
  { name: "Git/GitHub", level: 90, category: "Tools", icon: <BarChart2 className="h-5 w-5" /> },
  { name: "Postman", level: 70, category: "Tools", icon: "📬" },
  { name: "Android Studio", level: 75, category: "Tools", icon: "🤖" },
  { name: "VS Code", level: 95, category: "Tools", icon: "📝" },
  { name: "JDBC", level: 65, category: "Tools", icon: "🔌" },
  { name: "REST APIs", level: 75, category: "Tools", icon: "🌐" },
  { name: "WebSockets", level: 60, category: "Tools", icon: "📡" },
  { name: "API Integration", level: 70, category: "Tools", icon: "🔗" },
  { name: "Firebase", level: 50, category: "Tools", icon: "🔥" },
  { name: "ZegoCloud", level: 50, category: "Tools", icon: "☁️" },
  { name: "Google Gemini API", level: 50, category: "Tools", icon: "🤖" },
  { name: "Docker", level: 70, category: "Tools", icon: "🐳" },
  { name: "Figma", level: 85, category: "Tools", icon: "🎨" },
];


const categories = ["all", "Frontend", "Backend", "Database", "Language", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-background text-foreground"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-lg card-hover transition-colors duration-300"
              style={{ backgroundColor: "hsl(var(--card))" }} // dynamic card bg from CSS var
            >
              <div className="flex items-center gap-4 mb-4 text-primary">
                <div>{skill.icon}</div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-[width] duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
