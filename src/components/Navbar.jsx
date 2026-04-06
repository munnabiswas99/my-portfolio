import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiDevicesFill } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <PiDevicesFill className="text-2xl text-blue-600" />
          <span className="hidden sm:block">MyPortfolio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          <Link className="hover:text-blue-600 transition" to="/about">About</Link>
          <Link className="hover:text-blue-600 transition" to="/projects">Projects</Link>
          <Link className="hover:text-blue-600 transition" to="/contact">Contact</Link>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-medium">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/projects">Projects</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-full border w-fit"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}