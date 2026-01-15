export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  loading = false,
  className = '',
  ...props 
}) {
  const baseStyles = `
    font-semibold border-2 border-[#1A1A1A] rounded-[12px]
    transition-all duration-150 ease-out
    flex items-center justify-center gap-2
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A]
    active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1A1A1A]
  `;
  
  const variants = {
    primary: 'bg-[#FFE600] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:bg-[#FFD700]',
    secondary: 'bg-white text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#FAFAF8]',
    danger: 'bg-[#FF6B6B] text-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:bg-red-600',
    ghost: 'bg-transparent border-transparent shadow-none hover:bg-[#FFF9DB] hover:shadow-none',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      )}
      {children}
    </button>
  );
}
