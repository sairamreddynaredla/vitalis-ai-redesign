import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let ticking = false;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setWidth(pct);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[2000] transition-[width] duration-100"
      style={{ width: `${width}%` }}
    >
      <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-300" />
    </div>
  );
}