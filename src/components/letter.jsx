import { useState } from "react";
import booksk from "../assets/booksk.pdf";
import Resume from "../assets/Resume.pdf";
import sana from "../assets/Sana.pdf";
import sk1 from "../assets/sk1.jpg";
import sk2 from "../assets/sk2.jpg";
import sk3 from "../assets/sk3.jpg";
import sk4 from "../assets/sk4.jpg";
import sk5 from "../assets/sk5.jpg";
import sk6 from "../assets/sk6.jpg";
import sk23 from "../assets/sk23.pdf";
import sk11 from '../assets/sk11.png'
import sanu from '../assets/sanu.png'
import rk from '../assets/rk.png'
import sk21 from '../assets/23.png'

export default function LettersToSanaPage() {
  const [letters] = useState([
    {
      id: 1,
      title: "This Book Reminds Me of You 📖",
      date: "Feb 2025",
      image: sk1,
      pdf: booksk,
    },
    {
      id: 2,
      title: "My Resume (For My Special one 💼❤️)",
      date: "Mar 2025",
      image: rk,
      pdf: Resume,
    },
    {
      id: 3,
      title: "A Letter from My Heart 💌",
      date: "Apr 2025",
      image: sanu,
      pdf: sana,
    },
    {
      id: 4,
      title: "A Book For her 🌼",
      date: "Apr 2025",
      image: sk21,
      pdf: sk23,
    },
    {
      id: 5,
      title: " Easy for her🌙",
      date: "May 2025",
      image: sk5,
      pdf: sana,
    },
    {
      id: 6,
      title: "When I Saw Her in White Kurta 💫",
      date: "June 2025",
      image: sk11,
      pdf: booksk,
    },
  ]);

  return (
    <section
      id="letters"
      className="min-h-screen bg-black text-white px-6 py-24 relative"
    >
      <div className="container mx-auto max-w-5xl z-10 relative">
        <h1 className="text-4xl font-bold text-center mb-10 text-pink-500">
          This is how special she is to me 💖
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {letters.map((letter) => (
            <div
              key={letter.id}
              className="bg-white/10 border border-white/10 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={letter.image}
                alt={letter.title}
                className="rounded-lg object-cover h-52 w-full mb-4 border border-white/20"
              />
              <h3 className="text-xl font-semibold text-white">
                {letter.title}
              </h3>
              <p className="text-sm text-gray-400">Written: {letter.date}</p>
              <a
                href={letter.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-5 py-2 bg-pink-600 hover:bg-pink-500 rounded-full text-sm transition"
              >
                Read Full Letter 💌
              </a>
            </div>
          ))}
        </div>

        {/* Upload Modal Trigger (Optional feature) */}
        <div className="mt-16 text-center">
         
        </div>
      </div>
    </section>
  );
}
