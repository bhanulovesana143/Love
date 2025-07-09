
import {
  Clock,
  HeartHandshake,
  Gift,
  MessageCircle,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";
import birthday from '../assets/image.png'


// 💖 Moments Data
const moments = [
  {
    id: 1,
    title: "The Day I First Saw Her",
    description:
      "So that day all it started unintentionally falling for You. And still in love with you.",
    icon: <Sparkles className="h-6 w-6 text-pink-400" />,
  },
  {
    id: 2,
    title: "Our First Fight",
    description:
      "I still remember ,the debate the discussion but some How i still love that momemt Because in that moment I'm  with her ",
    icon: <HeartHandshake className="h-6 w-6 text-pink-400" />,
  },
  {
    id: 3,
    title: "Late Night Conversations",
    description:
      "We’d talk about the  life, silly things — and it always felt like the beautiful part for me",
    icon: <MessageCircle className="h-6 w-6 text-pink-400" />,
  },
  {
    id: 4,
    title: "Outside the Library",
    description:
      "Just standing there and talking for an hour — it felt more peaceful than a vacation. Time slowed down.",
    icon: <BookOpen className="h-6 w-6 text-pink-400" />,
  },
  {
    id: 5,
    title: "12 AM Birthday Wish",
    description:
      "She wished me at midnight, gave me chocolate, and her smile that night was the best gift I could ever get.",
    icon: <Gift className="h-6 w-6 text-pink-400" />,
    image: birthday, // 💖 Add your image in public/images
  },
  {
    id: 6,
    title: "Still Waiting, Still Loving",
    description:
      "Even if she doesn’t feel the same way, I keep Love these moments — they’re part of my soul now.",
    icon: <Clock className="h-6 w-6 text-pink-400" />,
  },
];

export const MomentsSection = () => {
  return (
    <section
      id="moments"
      className="py-24 px-4 relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 animate-fade-in">
          Moments <span className="text-pink-400">with Her</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          These memories are frozen in time — not just in my heart, but now in code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              className="rounded-xl border border-pink-300/20 bg-pink-900/10 p-6 shadow-md backdrop-blur-md transition-transform transform hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-pink-400/10 rounded-full">
                  {moment.icon}
                </div>
                <h3 className="text-xl font-semibold">{moment.title}</h3>
              </div>

              {moment.image && (
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
              )}

              <p className="text-gray-300 text-sm">{moment.description}</p>
            </div>
          ))}
        </div>
      </div>

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

        .animate-fade-in {
          animation: fade-in 0.9s ease-out both;
        }
      `}</style>
    </section>
  );
};
