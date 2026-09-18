export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-64 sm:w-80 md:w-96 drop-shadow-2xl"
      role="img"
      aria-label="Layered development stack illustration"
    >
      <defs>
        <linearGradient id="hero-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="hero-grad-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <linearGradient id="hero-grad-3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* Base layer */}
      <g opacity="0.95">
        <polygon points="160,190 300,240 160,290 20,240" fill="url(#hero-grad-1)" />
        <rect x="35" y="215" width="30" height="6" rx="2" fill="#ffffff" opacity="0.85" />
        <rect x="75" y="225" width="40" height="6" rx="2" fill="#ffffff" opacity="0.7" />
        <circle cx="230" cy="220" r="8" fill="#ffffff" opacity="0.85" />
        <circle cx="255" cy="230" r="8" fill="#ffffff" opacity="0.6" />
      </g>

      {/* Middle layer */}
      <g opacity="0.97">
        <polygon points="160,110 280,155 160,200 40,155" fill="url(#hero-grad-2)" />
        <rect x="115" y="145" width="60" height="30" rx="6" fill="#ffffff" opacity="0.9" />
        <rect x="125" y="153" width="40" height="6" rx="2" fill="#ec4899" opacity="0.6" />
        <rect x="125" y="163" width="26" height="6" rx="2" fill="#ec4899" opacity="0.4" />
      </g>

      {/* Top layer */}
      <g>
        <polygon points="160,30 260,68 160,106 60,68" fill="url(#hero-grad-3)" />
        <rect x="130" y="46" width="60" height="44" rx="8" fill="#ffffff" opacity="0.95" />
        <text
          x="160"
          y="76"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="26"
          fill="#8b5cf6"
        >
          Aa
        </text>
        <circle cx="215" cy="60" r="5" fill="#ffffff" opacity="0.9" />
        <circle cx="228" cy="66" r="5" fill="#ffffff" opacity="0.7" />
        <circle cx="215" cy="72" r="5" fill="#ffffff" opacity="0.5" />
      </g>
    </svg>
  );
}
