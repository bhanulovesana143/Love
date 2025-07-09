import { Heart, Sparkles, Smile } from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-black text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-up">
          About <span className="text-pink-400">Her</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Block About Her */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-pink-300 animate-fade-up-delay">
              Sana – The Girl Who Lights Up My World 💫
            </h3>

            <p className="text-lg text-gray-300 animate-fade-up-delay">
              She’s not just a someone. But She’s someone i Love the most from bottom of my Heart <strong>Sana</strong> She's someone .
              who i admire the most Someone i love to talk someone whom i want to send
              my future.
            </p>

            <div className="pt-4 animate-fade-up-delay">
              <span className="text-sm text-pink-200 italic">
                {" "}
                SSana if u are reading this so I Love you So much
                that i am so crazy about you.
              </span>
            </div>
          </div>

          {/* Cards for Things You Love About Her */}
          <div className="grid grid-cols-1 gap-6">
            {/* Her Smile */}
            <div className="p-6 rounded-2xl bg-pink-950/30 border border-pink-400/30 shadow-lg hover:scale-105 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-pink-400/20 group-hover:bg-pink-400/30 transition">
                  <Smile className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">
                    Her Smile 😊
                  </h4>
                  <p className="text-gray-300">
                   She wear the most beautiful smile a smile that fix my 
                   day. I could see it
                    a million times and still be mesmerized.
                  </p>
                </div>
              </div>
            </div>

            {/* Her Vibe */}
            <div className="p-6 rounded-2xl bg-pink-950/30 border border-pink-400/30 shadow-lg hover:scale-105 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-pink-400/20 group-hover:bg-pink-400/30 transition">
                  <Sparkles className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">
                    Her Vibe ✨
                  </h4>
                  <p className="text-gray-300">
                    She doesn't even try — but still she is the most
                    beautiful girl for me that I can’t help falling for.
                  </p>
                </div>
              </div>
            </div>

            {/* My Love for Her */}
            <div className="p-6 rounded-2xl bg-pink-950/30 border border-pink-400/30 shadow-lg hover:scale-105 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-pink-400/20 group-hover:bg-pink-400/30 transition">
                  <Heart className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">
                    The Way I Feel ❤️
                  </h4>
                  <p className="text-gray-300">
                    It’s not just a crush. It’s deep, real, and I’d choose her
                    in every lifetime. Even if she never knows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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
