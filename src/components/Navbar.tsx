import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Mobile: hamburger (left) */}
        <button
          className="md:hidden p-2 -ml-2 text-gray-700"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Brand logo (left on desktop, center on mobile) */}
        <a href="#home" className="flex items-center gap-2">
          <span className="brand-gradient-bg text-white font-bold text-sm w-8 h-8 rounded-lg flex items-center justify-center">
            DS
          </span>
          <span className="font-bold text-lg">
            Dev <span className="brand-gradient-text">Stack</span>
          </span>
        </a>

        {/* Desktop center links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? "text-pink-600" : "hover:text-gray-900 transition-colors"}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#signin" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Sign In
          </a>
          <a
            href="#signup"
            className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile right: compact auth buttons */}
        <div className="flex md:hidden items-center gap-3">
          <a href="#signin" className="text-xs font-medium text-gray-700">
            Sign In
          </a>
          <a href="#signup" className="brand-gradient-bg text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-4 text-sm font-medium text-gray-600 border-t border-gray-100">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 ${i === 0 ? "text-pink-600" : ""}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
