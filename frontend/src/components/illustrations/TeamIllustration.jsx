export default function TeamIllustration({ className = "w-full h-48" }) {
  return (
    <svg className={className} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person 1 - with glasses and cardigan */}
      <g transform="translate(50, 20)">
        {/* Body/Cardigan */}
        <path d="M30 100 Q30 80, 50 75 Q70 80, 70 100 L70 140 L30 140 Z" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Shirt */}
        <rect x="40" y="85" width="20" height="30" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Neck */}
        <rect x="45" y="60" width="10" height="15" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Head */}
        <circle cx="50" cy="45" r="25" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Curly hair */}
        <circle cx="35" cy="30" r="8" fill="#1A1A1A"/>
        <circle cx="50" cy="22" r="8" fill="#1A1A1A"/>
        <circle cx="65" cy="30" r="8" fill="#1A1A1A"/>
        <circle cx="30" cy="40" r="6" fill="#1A1A1A"/>
        <circle cx="70" cy="40" r="6" fill="#1A1A1A"/>
        {/* Glasses */}
        <circle cx="40" cy="45" r="8" fill="none" stroke="#FFE600" strokeWidth="2"/>
        <circle cx="60" cy="45" r="8" fill="none" stroke="#FFE600" strokeWidth="2"/>
        <line x1="48" y1="45" x2="52" y2="45" stroke="#FFE600" strokeWidth="2"/>
        {/* Eyes */}
        <circle cx="40" cy="45" r="3" fill="#1A1A1A"/>
        <circle cx="60" cy="45" r="3" fill="#1A1A1A"/>
        {/* Smile */}
        <path d="M42 55 Q50 62, 58 55" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Legs */}
        <rect x="35" y="140" width="12" height="20" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        <rect x="53" y="140" width="12" height="20" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      </g>

      {/* Person 2 - with roller skates (center, taller) */}
      <g transform="translate(160, 0)">
        {/* Body/Striped top */}
        <path d="M30 90 Q30 70, 50 65 Q70 70, 70 90 L70 120 L30 120 Z" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Stripes */}
        <line x1="32" y1="80" x2="68" y2="80" stroke="#FFE600" strokeWidth="4"/>
        <line x1="32" y1="90" x2="68" y2="90" stroke="#FFE600" strokeWidth="4"/>
        <line x1="32" y1="100" x2="68" y2="100" stroke="#FFE600" strokeWidth="4"/>
        {/* Neck */}
        <rect x="45" y="50" width="10" height="15" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Head */}
        <circle cx="50" cy="35" r="25" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Big curly hair */}
        <circle cx="30" cy="20" r="12" fill="#1A1A1A"/>
        <circle cx="50" cy="10" r="12" fill="#1A1A1A"/>
        <circle cx="70" cy="20" r="12" fill="#1A1A1A"/>
        <circle cx="25" cy="35" r="10" fill="#1A1A1A"/>
        <circle cx="75" cy="35" r="10" fill="#1A1A1A"/>
        {/* Hair clip */}
        <ellipse cx="65" cy="25" rx="4" ry="6" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
        {/* Eyes */}
        <circle cx="42" cy="35" r="3" fill="#1A1A1A"/>
        <circle cx="58" cy="35" r="3" fill="#1A1A1A"/>
        {/* Smile */}
        <path d="M42 45 Q50 52, 58 45" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Legs */}
        <path d="M40 120 L35 150" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
        <path d="M40 120 L35 150" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
        <path d="M60 120 L65 150" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
        <path d="M60 120 L65 150" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
        {/* Roller skates */}
        <rect x="25" y="150" width="20" height="12" rx="3" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        <circle cx="30" cy="165" r="4" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        <circle cx="40" cy="165" r="4" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        <rect x="55" y="150" width="20" height="12" rx="3" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        <circle cx="60" cy="165" r="4" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        <circle cx="70" cy="165" r="4" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Raised arm */}
        <path d="M70 80 Q85 60, 80 40" stroke="#FAFAF8" strokeWidth="8" strokeLinecap="round"/>
        <path d="M70 80 Q85 60, 80 40" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
        <circle cx="80" cy="38" r="6" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      </g>

      {/* Person 3 - in wheelchair */}
      <g transform="translate(280, 30)">
        {/* Wheelchair */}
        <circle cx="50" cy="130" r="25" fill="none" stroke="#1A1A1A" strokeWidth="3"/>
        <circle cx="50" cy="130" r="20" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        <circle cx="50" cy="130" r="5" fill="#1A1A1A"/>
        <circle cx="20" cy="140" r="8" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Wheelchair back */}
        <rect x="65" y="70" width="8" height="60" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Seat */}
        <rect x="25" y="95" width="45" height="10" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Body/Overalls */}
        <path d="M35 60 Q35 50, 50 45 Q65 50, 65 60 L65 95 L35 95 Z" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Shirt under overalls */}
        <rect x="38" y="55" width="24" height="20" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Overalls straps */}
        <line x1="42" y1="55" x2="42" y2="75" stroke="#1A1A1A" strokeWidth="3"/>
        <line x1="58" y1="55" x2="58" y2="75" stroke="#1A1A1A" strokeWidth="3"/>
        {/* Neck */}
        <rect x="45" y="30" width="10" height="12" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Head */}
        <circle cx="50" cy="18" r="18" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Hair */}
        <path d="M35 10 Q50 -5, 65 10" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M65 15 Q75 25, 70 40" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="2"/>
        {/* Hair tie */}
        <circle cx="70" cy="30" r="3" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
        {/* Earring */}
        <ellipse cx="33" cy="20" rx="3" ry="5" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
        {/* Eyes */}
        <circle cx="44" cy="16" r="2.5" fill="#1A1A1A"/>
        <circle cx="56" cy="16" r="2.5" fill="#1A1A1A"/>
        {/* Mouth */}
        <ellipse cx="50" cy="25" rx="3" ry="2" fill="#1A1A1A"/>
        {/* Arm on wheel */}
        <path d="M35 70 Q20 90, 30 110" stroke="#FAFAF8" strokeWidth="8" strokeLinecap="round"/>
        <path d="M35 70 Q20 90, 30 110" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      </g>
    </svg>
  );
}
