export default function ChecklistIllustration({ className = "w-48 h-48" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Character body */}
      <ellipse cx="70" cy="170" rx="30" ry="20" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Neck */}
      <rect x="62" y="105" width="16" height="18" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Head */}
      <circle cx="70" cy="80" r="30" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Hair - bun style */}
      <circle cx="70" cy="45" r="15" fill="#1A1A1A"/>
      <path d="M45 70 Q40 50, 55 45" fill="#1A1A1A"/>
      <path d="M95 70 Q100 50, 85 45" fill="#1A1A1A"/>
      
      {/* Eyes - looking at checklist */}
      <circle cx="78" cy="75" r="4" fill="#1A1A1A"/>
      <circle cx="62" cy="75" r="4" fill="#1A1A1A"/>
      <circle cx="79" cy="74" r="1.5" fill="#FFFFFF"/>
      <circle cx="63" cy="74" r="1.5" fill="#FFFFFF"/>
      
      {/* Smile */}
      <path d="M60 92 Q70 100, 80 92" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Arm holding clipboard */}
      <path d="M100 120 Q130 100, 140 80" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M100 120 Q130 100, 140 80" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      
      {/* Hand */}
      <circle cx="140" cy="78" r="8" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Clipboard */}
      <rect x="120" y="50" width="60" height="80" rx="4" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      <rect x="140" y="42" width="20" height="12" rx="2" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Checklist items */}
      {/* Item 1 - checked */}
      <rect x="128" y="60" width="12" height="12" rx="2" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      <path d="M131 66 L134 69 L139 62" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="145" y1="66" x2="170" y2="66" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Item 2 - checked */}
      <rect x="128" y="80" width="12" height="12" rx="2" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      <path d="M131 86 L134 89 L139 82" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="145" y1="86" x2="165" y2="86" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Item 3 - unchecked */}
      <rect x="128" y="100" width="12" height="12" rx="2" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      <line x1="145" y1="106" x2="172" y2="106" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Other arm */}
      <path d="M40 125 Q25 145, 30 160" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M40 125 Q25 145, 30 160" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      
      {/* Sparkles */}
      <g fill="#FFE600">
        <path d="M175 40 L178 48 L186 48 L180 53 L182 61 L175 56 L168 61 L170 53 L164 48 L172 48 Z" stroke="#1A1A1A" strokeWidth="1"/>
      </g>
      <circle cx="115" cy="35" r="3" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
      <circle cx="185" cy="70" r="2" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
    </svg>
  );
}
