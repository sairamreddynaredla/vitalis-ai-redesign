import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ SCROLL FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center">
      <div
        className={`transition-all duration-300 mt-4 w-[92%] md:w-[80%] rounded-full px-6 py-3 flex items-center justify-between 
        ${
          scrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-blue-50/80 backdrop-blur-sm"
        }`}
      >
        {/* ✅ PREMIUM LOGO */}
        <div className="flex items-center gap-2 cursor-pointer group">
          {/* Logo Icon */}
          <img
            src="/logo.png"
            alt="Vitalis AI Logo"
            className="w-9 h-9 object-contain transition-all duration-300 
            group-hover:scale-110 group-hover:rotate-6"
          />

          {/* Logo Text */}
          <h1
            className="relative text-lg font-semibold overflow-hidden 
            group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          >
            <span
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
              bg-clip-text text-transparent transition-all duration-500 
              group-hover:from-purple-500 group-hover:to-blue-500"
            >
              Vitalis AI
            </span>

            {/* Shine Animation */}
            <span
              className="absolute top-0 left-[-120%] w-full h-full 
              bg-gradient-to-r from-transparent via-white/40 to-transparent 
              skew-x-12 group-hover:left-[120%] transition-all duration-700"
            ></span>
          </h1>
        </div>

        {/* ✅ DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <span
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            About Us
          </span>

          <span
            onClick={() => scrollToSection("features")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Features
          </span>

          <span
            onClick={() => scrollToSection("how")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            How It Works
          </span>
        </div>

        {/* ✅ MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 md:hidden">
          <span
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-blue-600"
          >
            About Us
          </span>

          <span
            onClick={() => scrollToSection("features")}
            className="cursor-pointer hover:text-blue-600"
          >
            Features
          </span>

          <span
            onClick={() => scrollToSection("how")}
            className="cursor-pointer hover:text-blue-600"
          >
            How It Works
          </span>
        </div>
      )}
    </header>
  );
}