import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About Her", href: "#about" },
  { name: "Feelings", href: "#feelings" },
  { name: "Moments", href: "#moments" },
  { name: "Forever", href: "#forever" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-md shadow-lg"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 select-none">
          <h1
            className="text-2xl md:text-3xl font-bold tracking-wide 
              bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 
              bg-clip-text text-transparent"
          >
            For Sana 💗
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-white font-medium px-1 transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full
                hover:text-pink-400 active:scale-95"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-95"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-pink-400 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
