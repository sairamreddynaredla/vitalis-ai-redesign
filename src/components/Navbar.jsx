import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // ✅ logo import

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
            : "bg-[#eaf2ff]/80 backdrop-blur-sm"
        }`}
      >
        {/* ✅ LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Vitalis AI"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
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

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 md:hidden">
          <span
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            About Us
          </span>

          <span
            onClick={() => scrollToSection("features")}
            className="cursor-pointer"
          >
            Features
          </span>

          <span
            onClick={() => scrollToSection("how")}
            className="cursor-pointer"
          >
            How It Works
          </span>
        </div>
      )}
    </header>
  );
}