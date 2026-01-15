export default function CelebrateIllustration({ className = "w-32 h-32" }) {
  return (
    <svg className={className} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Confetti */}
      <rect x="20" y="20" width="8" height="8" fill="#FFE600" transform="rotate(15 20 20)"/>
      <rect x="120" y="30" width="6" height="6" fill="#FF6B6B" transform="rotate(-20 120 30)"/>
      <rect x="30" y="50" width="5" height="5" fill="#51CF66" transform="rotate(45 30 50)"/>
      <rect x="115" y="70" width="7" height="7" fill="#FFE600" transform="rotate(30 115 70)"/>
      <circle cx="40" cy="35" r="4" fill="#FF6B6B"/>
      <circle cx="110" cy="45" r="3" fill="#51CF66"/>
      
      {/* Character body */}
      <ellipse cx="75" cy="125" rx="25" ry="18" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Neck */}
      <rect x="68" y="80" width="14" height="15" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Head */}
      <circle cx="75" cy="60" r="25" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Hair */}
      <path d="M52 50 Q55 30, 75 25 Q95 30, 98 50" fill="#1A1A1A"/>
      <circle cx="55" cy="42" r="6" fill="#1A1A1A"/>
      <circle cx="95" cy="42" r="6" fill="#1A1A1A"/>
      
      {/* Happy closed eyes */}
      <path d="M62 55 Q67 50, 72 55" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M78 55 Q83 50, 88 55" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Big smile */}
      <path d="M62 70 Q75 82, 88 70" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Blush */}
      <circle cx="58" cy="65" r="5" fill="#FFE600" opacity="0.5"/>
      <circle cx="92" cy="65" r="5" fill="#FFE600" opacity="0.5"/>
      
      {/* Raised arms */}
      <path d="M50 95 Q30 70, 25 45" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M50 95 Q30 70, 25 45" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      <circle cx="25" cy="42" r="8" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      <path d="M100 95 Q120 70, 125 45" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M100 95 Q120 70, 125 45" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      <circle cx="125" cy="42" r="8" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Stars around */}
      <path d="M20 60 L22 66 L28 66 L23 70 L25 76 L20 72 L15 76 L17 70 L12 66 L18 66 Z" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
      <path d="M130 55 L131 59 L135 59 L132 62 L133 66 L130 63 L127 66 L128 62 L125 59 L129 59 Z" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
    </svg>
  );
}
