export default function Input({ label, error, icon, className = '', ...props }) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block font-medium text-[#1A1A1A] mb-2 text-sm">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`
            sketch-input
            ${icon ? '!pl-12' : ''}
            ${error ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]' : ''}
            ${className}
          `}
          {...props}
        />
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-[#FF6B6B] font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
