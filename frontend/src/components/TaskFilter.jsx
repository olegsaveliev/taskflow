export default function TaskFilter({ currentFilter, onFilterChange, taskCounts = {} }) {
  const filters = [
    { value: 'all', label: 'All Tasks', icon: '📋' },
    { value: 'pending', label: 'Pending', icon: '⏳' },
    { value: 'completed', label: 'Done', icon: '✅' },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`
            px-4 py-2.5 rounded-[12px] border-2 border-[#1A1A1A]
            font-medium text-sm
            transition-all duration-150
            flex items-center gap-2
            ${currentFilter === filter.value
              ? 'bg-[#FFE600] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] -translate-y-0.5'
              : 'bg-white text-[#1A1A1A] hover:bg-[#FFF9DB] hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1A1A1A]'
            }
          `}
        >
          <span>{filter.icon}</span>
          <span>{filter.label}</span>
          {taskCounts[filter.value] !== undefined && (
            <span className={`
              ml-1 px-2 py-0.5 rounded-full text-xs font-bold
              ${currentFilter === filter.value 
                ? 'bg-[#1A1A1A] text-[#FFE600]' 
                : 'bg-[#FAFAF8] text-[#1A1A1A]'
              }
            `}>
              {taskCounts[filter.value]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
