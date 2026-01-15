import TaskCard from './TaskCard';
import { WritingIllustration } from './illustrations';

export default function TaskList({ tasks, onStatusToggle, onDelete, emptyMessage }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="sketch-card p-12 text-center page-enter">
        <WritingIllustration className="w-32 h-32 mx-auto mb-4 opacity-50" />
        <p className="text-gray-400 text-lg font-medium">{emptyMessage || 'No tasks yet'}</p>
        <p className="text-gray-300 text-sm mt-1">Time to be productive! ✨</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          index={index}
          onStatusToggle={onStatusToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
