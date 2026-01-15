export default function WritingIllustration({ className = "w-48 h-48" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desk */}
      <rect x="20" y="150" width="160" height="10" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Paper on desk */}
      <rect x="80" y="120" width="50" height="35" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2" transform="rotate(-5 80 120)"/>
      <line x1="88" y1="130" x2="118" y2="128" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="90" y1="138" x2="115" y2="136" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="92" y1="146" x2="108" y2="144" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round"/>
      
      {/* Character body */}
      <ellipse cx="75" cy="140" rx="28" ry="15" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Neck */}
      <rect x="68" y="85" width="14" height="15" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Head */}
      <circle cx="75" cy="60" r="28" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Hair - side part */}
      <path d="M48 50 Q50 28, 75 25 Q100 28, 102 50" fill="#1A1A1A"/>
      <path d="M48 50 Q45 60, 50 75" fill="#1A1A1A"/>
      <ellipse cx="55" cy="40" rx="8" ry="10" fill="#1A1A1A"/>
      
      {/* Eyes - focused/looking down */}
      <ellipse cx="65" cy="58" rx="4" ry="5" fill="#1A1A1A"/>
      <ellipse cx="85" cy="58" rx="4" ry="5" fill="#1A1A1A"/>
      <circle cx="65" cy="59" r="1.5" fill="#FFFFFF"/>
      <circle cx="85" cy="59" r="1.5" fill="#FFFFFF"/>
      
      {/* Focused mouth */}
      <ellipse cx="75" cy="75" rx="4" ry="2" fill="#1A1A1A"/>
      
      {/* Arm writing */}
      <path d="M103 100 Q130 110, 140 130" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M103 100 Q130 110, 140 130" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      
      {/* Hand holding pencil */}
      <circle cx="142" cy="132" r="8" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Pencil */}
      <rect x="138" y="125" width="25" height="6" rx="1" fill="#FFE600" stroke="#1A1A1A" strokeWidth="2" transform="rotate(30 138 125)"/>
      <polygon points="162,137 170,142 162,147" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="1" transform="rotate(30 162 142)"/>
      <rect x="155" y="135" width="4" height="6" fill="#1A1A1A" transform="rotate(30 155 135)"/>
      
      {/* Other arm on desk */}
      <path d="M47 105 Q30 120, 45 140" stroke="#FAFAF8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M47 105 Q30 120, 45 140" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
      
      {/* Thought bubble */}
      <circle cx="130" cy="35" r="15" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      <circle cx="115" cy="50" r="5" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      <circle cx="105" cy="58" r="3" fill="#FAFAF8" stroke="#1A1A1A" strokeWidth="2"/>
      
      {/* Lightbulb in thought */}
      <path d="M125 30 Q125 25, 130 25 Q135 25, 135 30 Q135 35, 132 38 L128 38 Q125 35, 125 30" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1.5"/>
      <line x1="128" y1="38" x2="128" y2="42" stroke="#1A1A1A" strokeWidth="1.5"/>
      <line x1="132" y1="38" x2="132" y2="42" stroke="#1A1A1A" strokeWidth="1.5"/>
      <line x1="127" y1="43" x2="133" y2="43" stroke="#1A1A1A" strokeWidth="1.5"/>
      
      {/* Sparkle */}
      <circle cx="155" cy="20" r="3" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
      <circle cx="170" cy="45" r="2" fill="#FFE600" stroke="#1A1A1A" strokeWidth="1"/>
    </svg>
  );
}
