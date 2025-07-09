import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
  "fixed top-5 right-5 z-50 p-3 rounded-full cursor-pointer",
  "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
  "shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-400/60",
  "transition-all duration-500 ease-in-out transform",
  isAnimating ? "animate-spin-slow" : "hover:scale-110"
)}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 drop-shadow-lg" />
      ) : (
        <Moon className="h-6 w-6 text-white drop-shadow-md" />
      )}
    </button>
  );
};