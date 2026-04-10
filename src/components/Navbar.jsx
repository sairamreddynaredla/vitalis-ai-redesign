import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ SCROLL FUNCTION (NEW)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu
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
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="bg-white shadow-sm rounded-full px-3 py-1 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              V
            </div>
            <span className="text-blue-600 font-semibold text-sm">
              Vitalis AI
            </span>
          </div>
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
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 md:hidden">
          <span onClick={() => scrollToSection("about")} className="cursor-pointer">
            About Us
          </span>

          <span onClick={() => scrollToSection("features")} className="cursor-pointer">
            Features
          </span>

          <span onClick={() => scrollToSection("how")} className="cursor-pointer">
            How It Works
          </span>
        </div>
      )}
    </header>
  );
}