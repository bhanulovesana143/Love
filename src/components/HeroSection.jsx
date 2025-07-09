import { ArrowDown } from "lucide-react";
import { InteractiveParticleBackground } from "./InteractiveParticleBackground";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-black text-white overflow-hidden"
    >
      {/* Background Hearts Animation */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground />
      </div>

      {/* Hero Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block animate-slide-in opacity-0 animation-delay-200">
              This is for someone special —
            </span>
           <a
  href="#letters"
  className="block text-pink-400 animate-text-glow animation-delay-400 hover:underline cursor-pointer transition duration-300"
>
  Sana 💖
</a>

          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-700">
            Maybe she’s a little rude, maybe she gets angry… but even through all that,
            I still Love her. Like the sea loves the moonlight 🌙. Sana, you're someone
            incredibly special to me — always have been, always will be. 🩷
          </p>

          {/* Call to Action */}
          <div className="pt-4 animate-fade-in animation-delay-1000">
            <a
              href="#moments"
              className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-fuchsia-600 hover:to-pink-500 transition duration-300 shadow-xl hover:shadow-2xl"
            >
              Made With Love 💌
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll down to feel 💫</span>
        <ArrowDown className="h-6 w-6 text-pink-400" />
      </div>

      {/* Custom Animations */}
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
            text-shadow: 0 0 8px rgba(255, 105, 180, 0.6),
              0 0 16px rgba(255, 105, 180, 0.4);
          }
          50% {
            text-shadow: 0 0 18px rgba(255, 182, 193, 0.9),
              0 0 32px rgba(255, 182, 193, 0.7);
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
