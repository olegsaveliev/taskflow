import { Link } from 'react-router-dom';
import { useState } from 'react';

const priorityStyles = {
  high: {
    badge: 'bg-[#FF6B6B] text-white',
    border: 'border-l-[#FF6B6B]',
    pulse: true,
  },
  medium: {
    badge: 'bg-[#FFE600] text-[#1A1A1A]',
    border: 'border-l-[#FFE600]',
    pulse: false,
  },
  low: {
    badge: 'bg-[#51CF66] text-white',
    border: 'border-l-[#51CF66]',
    pulse: false,
  },
};

export default function TaskCard({ task, onStatusToggle, onDelete, index = 0 }) {
  const [isChecking, setIsChecking] = useState(false);
  const isOverdue = task.due_date && new Date(task.due_date) < new Date() && task.status === 'pending';
  const priority = priorityStyles[task.priority] || priorityStyles.medium;

  const handleStatusToggle = async () => {
    setIsChecking(true);
    await onStatusToggle(task.id);
    setTimeout(() => setIsChecking(false), 300);
  };

  return (
    <div 
      className={`
        sketch-card border-l-4 ${priority.border} p-5
        stagger-item
        ${task.status === 'completed' ? 'opacity-70' : ''}
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Animated Checkbox */}
        <button
          onClick={handleStatusToggle}
          className={`
            mt-1 w-6 h-6 rounded-md border-2 border-[#1A1A1A]
            flex items-center justify-center flex-shrink-0
            transition-all duration-150
            ${task.status === 'completed' 
              ? 'bg-[#FFE600]' 
              : 'bg-white hover:bg-[#FFF9DB]'
            }
          `}
        >
          <svg 
            className={`w-4 h-4 text-[#1A1A1A] ${task.status === 'completed' ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path 
              d="M5 13l4 4L19 7" 
              className={isChecking ? 'check-animation checked' : ''}
              style={{ strokeDasharray: 24, strokeDashoffset: task.status === 'completed' ? 0 : 24 }}
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className={`
              font-semibold text-lg
              ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-[#1A1A1A]'}
            `}>
              {task.title}
            </h3>
            <span className={`
              text-xs px-2.5 py-1 rounded-full font-semibold capitalize
              border border-[#1A1A1A]
              ${priority.badge}
              ${priority.pulse && task.status !== 'completed' ? 'priority-high-pulse' : ''}
            `}>
              {task.priority}
            </span>
          </div>
          
          {task.description && (
            <p className={`
              text-sm mt-1 line-clamp-2
              ${task.status === 'completed' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              {task.description}
            </p>
          )}
          
          {task.due_date && (
            <p className={`
              text-sm mt-2 font-medium flex items-center gap-1
              ${isOverdue ? 'text-[#FF6B6B]' : 'text-gray-400'}
            `}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(task.due_date).toLocaleDateString()}
              {isOverdue && <span className="ml-1">(Overdue!)</span>}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-1">
          <Link
            to={`/tasks/${task.id}/edit`}
            className="p-2 rounded-[12px] border-2 border-transparent hover:border-[#1A1A1A] hover:bg-[#FFF9DB] transition-all"
          >
            <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </Link>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-[12px] border-2 border-transparent hover:border-[#1A1A1A] hover:bg-red-50 transition-all"
          >
            <svg className="w-5 h-5 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
