export default function WaveIllustration({ className = "w-64 h-64" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Character body */}
      <ellipse cx="100" cy="160" rx="35" ry="25" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Neck */}
      <rect x="92" y="95" width="16" height="20" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Head */}
      <circle cx="100" cy="70" r="35" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Hair */}
      <path d="M65 55 Q70 30, 100 25 Q130 30, 135 55" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="2"/>
      <circle cx="75" cy="45" r="8" fill="#1A1A1A"/>
      <circle cx="125" cy="45" r="8" fill="#1A1A1A"/>
      <circle cx="90" cy="35" r="6" fill="#1A1A1A"/>
      <circle cx="110" cy="35" r="6" fill="#1A1A1A"/>
      
      {/* Eyes */}
      <circle cx="88" cy="65" r="4" fill="#1A1A1A"/>
      <circle cx="112" cy="65" r="4" fill="#1A1A1A"/>
      <circle cx="89" cy="64" r="1.5" fill="#FFFFFF"/>
      <circle cx="113" cy="64" r="1.5" fill="#FFFFFF"/>
      
      {/* Smile */}
      <path d="M90 80 Q100 90, 110 80" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Cheeks */}
      <circle cx="78" cy="75" r="5" fill="#FFE600" opacity="0.5"/>
      <circle cx="122" cy="75" r="5" fill="#FFE600" opacity="0.5"/>
      
      {/* Waving arm */}
      <path d="M135 110 Q160 80, 165 50" stroke="#FAFAF8" strokeWidth="12" strokeLinecap="round"/>
      <path d="M135 110 Q160 80, 165 50" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Hand */}
      <circle cx="165" cy="45" r="12" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Fingers */}
      <line x1="158" y1="35" x2="155" y2="28" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="165" y1="33" x2="165" y2="25" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="172" y1="35" x2="175" y2="28" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Other arm */}
      <path d="M65 115 Q50 130, 55 150" stroke="#FAFAF8" strokeWidth="12" strokeLinecap="round"/>
      <path d="M65 115 Q50 130, 55 150" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Motion lines */}
      <path d="M175 60 L185 55" stroke="#FFE600" strokeWidth="3" strokeLinecap="round"/>
      <path d="M178 70 L190 70" stroke="#FFE600" strokeWidth="3" strokeLinecap="round"/>
      <path d="M175 80 L185 85" stroke="#FFE600" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
