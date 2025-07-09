import { Heart } from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";
import photoTogether from "../assets/image.png"; 
// your image path

const memories = [
  {
    title: "First Conversation",
    time: "When it all began 🌸",
    place: "Outside the Library",
    description:
      "Our first conversation was simple, but it felt like magic. Something about your voice, your presence — it stayed with me. Still does.",
  },
  {
    title: "The Midnight Wish 🎂",
    time: "12:00 AM · My Birthday",
    place: "Online & My Heart 💝",
    description:
      "That night you wished me exactly at 12, and your Message meant more than anything. That moment — etched forever.",
  },
  {
    title: "Late Night Talks",
    time: "At Nights 🌙",
    place: "WhatsApp",
    description:
      "Talking about everything and nothing till late night or even if it just a short conversation I still love that ",
  },
  {
    title: "The Chocolate Gift 🍫",
    time: "One Sweet Morning",
    place: "Library",
    description:
      "You gave me chocolate with a smile. Simple moment. But that made my day — probably my entire Year. Still smiling thinking about it.",
  },
];

export const ForeverWithHerSection = () => {
  return (
    <section id="forever" className="py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-up">
          Forever With <span className="text-pink-500">Sana 💗</span>
        </h2>

        <div className="grid gap-10">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="relative border border-pink-500/20 bg-pink-50/5 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-pink-500/20 text-pink-400">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{memory.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {memory.time} • {memory.place}
                  </p>
                  <p className="mt-3 text-gray-200">{memory.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Special Image */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">
              One of My Most Special Moments 💝
            </h3>
            <img
              src={photoTogether}
              alt="Birthday Chocolate from Sana"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg border-2 border-pink-400"
            />
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
          animation: fadeUp 1s ease-out both;
        }
      `}</style>
    </section>
  );
};
