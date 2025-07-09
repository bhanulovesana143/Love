import { InteractiveParticleBackground } from "./InteractiveParticleBackground";
import { Heart, Smile, MessageCircle, Sparkles, Flower, Clock } from "lucide-react";

const feelings = [
  {
    icon: <Heart className="h-6 w-6 text-pink-400" />,
    title: "Love That Never Fades",
    description:
      "No matter how time passes, my love for her remains unshaken — it's something I carry in my heart every single day.",
  },
  {
    icon: <Smile className="h-6 w-6 text-pink-400" />,
    title: "Her Smile",
    description:
      "It's the reason behind mine. The most beautiful curve I've ever known. It melts my worries in seconds.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-pink-400" />,
    title: "Every Conversation",
    description:
      "Even her shortest messages, Her anger Her rudeness I love every talk with her",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-pink-400" />,
    title: "Her Presence",
    description:
      "Even without trying, she makes every place warmer, better, and more meaningful — just by being there.",
  },
  {
    icon: <Flower className="h-6 w-6 text-pink-400" />,
    title: "Her Innocence",
    description:
      "The way she blushes, gets angry, or hides her smile — those tiny things make my heart bloom like spring.",
  },
  {
    icon: <Clock className="h-6 w-6 text-pink-400" />,
    title: "Forever Waiting",
    description:
      "Even if she walks away, even if she never turns back — my heart will wait. Quietly. Always.",
  },
];

export const FeelingsSection = () => {
  return (
    <section
      id="feelings"
      className="py-24 px-4 bg-black text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-up">
          My <span className="text-pink-400">Feelings</span> for Her
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feelings.map((item, i) => (
            <div
              key={i}
              className="bg-pink-950/20 border border-pink-400/20 backdrop-blur-md p-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 animate-float"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="flex items-center gap-4 mb-4">{item.icon}
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

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
          animation: fadeUp 1s ease-out both;
        }
      `}</style>
    </section>
  );
};
