import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80; // 🔧 slightly adjusted for mobile

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center">
      <div
        className={`transition-all duration-300 mt-2 sm:mt-3 md:mt-4 w-[95%] sm:w-[92%] md:w-[85%] lg:w-[80%] 
        rounded-full px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 flex items-center justify-between 
        ${
          scrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-blue-50/80 backdrop-blur-sm"
        }`}
      >
        {/* ✅ LOGO */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            src="/logo.png"
            alt="Vitalis AI Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain transition-all duration-300 
            group-hover:scale-110 group-hover:rotate-6"
          />

          <h1
            className="relative text-sm sm:text-base md:text-lg font-semibold overflow-hidden 
            group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          >
            <span className="text-gray-800 font-semibold tracking-wide">
  Vitalis AI
</span>

            <span
              className="absolute top-0 left-[-120%] w-full h-full 
              bg-gradient-to-r from-transparent via-white/40 to-transparent 
              skew-x-12 group-hover:left-[120%] transition-all duration-700"
            ></span>
          </h1>
        </div>

        {/* ✅ DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
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

        {/* ✅ MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700 text-xl sm:text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-[65px] sm:top-[75px] md:top-[85px] left-1/2 -translate-x-1/2 
        w-[94%] sm:w-[92%] max-w-sm bg-white shadow-xl rounded-2xl p-5 sm:p-6 
        flex flex-col gap-4 sm:gap-5 md:hidden animate-fadeIn">

          <span
            onClick={() => scrollToSection("about")}
            className="cursor-pointer text-sm sm:text-base font-medium hover:text-blue-600 transition"
          >
            About Us
          </span>

          <span
            onClick={() => scrollToSection("features")}
            className="cursor-pointer text-sm sm:text-base font-medium hover:text-blue-600 transition"
          >
            Features
          </span>

          <span
            onClick={() => scrollToSection("how")}
            className="cursor-pointer text-sm sm:text-base font-medium hover:text-blue-600 transition"
          >
            How It Works
          </span>
        </div>
      )}
    </header>
  );
}