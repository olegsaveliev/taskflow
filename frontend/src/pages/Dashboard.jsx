import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { taskService } from '../services/taskService';
import TaskFilter from '../components/TaskFilter';
import TaskList from '../components/TaskList';
import Button from '../components/Button';
import { ChecklistIllustration, CelebrateIllustration } from '../components/illustrations';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [allTasks, setAllTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      // Always fetch ALL tasks to have accurate counts
      const response = await taskService.getAll();
      setAllTasks(response.data.data.tasks);
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleStatusToggle = async (taskId) => {
    try {
      await taskService.toggleStatus(taskId);
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDelete = async (taskId) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    try {
      await taskService.delete(taskId);
      fetchTasks();
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  // Calculate counts from ALL tasks (always accurate)
  const taskCounts = {
    all: allTasks.length,
    pending: allTasks.filter(t => t.status === 'pending').length,
    completed: allTasks.filter(t => t.status === 'completed').length,
  };

  // Filter tasks for display based on selected filter
  const filteredTasks = filter === 'all' 
    ? allTasks 
    : allTasks.filter(t => t.status === filter);

  const completionRate = allTasks.length > 0 
    ? Math.round((taskCounts.completed / allTasks.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="bg-[#FFE600] border-b-4 border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChecklistIllustration className="w-10 h-10" />
              <h1 className="font-['Caveat'] text-3xl text-[#1A1A1A]">TaskFlow</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#1A1A1A] font-medium hidden sm:block">
                Hey, {user?.name?.split(' ')[0]}! 👋
              </span>
              <Button variant="secondary" size="sm" onClick={logout}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome section */}
        <div className="page-enter mb-8">
          <div className="sketch-card p-6 flex flex-col sm:flex-row items-center gap-6">
            <CelebrateIllustration className="w-24 h-24 flex-shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-['Caveat'] text-3xl text-[#1A1A1A] mb-2">
                {completionRate >= 100 ? 'All done! 🎉' : 
                 completionRate >= 50 ? 'Keep it up! 💪' : 
                 'Let\'s get productive! ⚡'}
              </h2>
              <p className="text-gray-600">
                You've completed <span className="font-semibold text-[#1A1A1A]">{taskCounts.completed}</span> of{' '}
                <span className="font-semibold text-[#1A1A1A]">{allTasks.length}</span> tasks
              </p>
              {/* Progress bar */}
              <div className="mt-3 h-4 bg-white border-2 border-[#1A1A1A] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#51CF66] transition-all duration-500 ease-out"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
            <Link to="/tasks/new" className="flex-shrink-0">
              <Button size="lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Task
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="page-enter mb-6" style={{ animationDelay: '50ms' }}>
          <TaskFilter 
            currentFilter={filter} 
            onFilterChange={setFilter}
            taskCounts={taskCounts}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="sketch-card border-l-4 border-l-[#FF6B6B] p-4 mb-6 shadow-[2px_2px_0px_0px_#1A1A1A]">
            <p className="text-[#FF6B6B] font-medium">{error}</p>
          </div>
        )}

        {/* Task list */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-[#FFE600] border-t-[#1A1A1A] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Loading your tasks...</p>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onStatusToggle={handleStatusToggle}
            onDelete={handleDelete}
            emptyMessage={
              filter === 'completed' 
                ? 'No completed tasks yet. Keep going!' 
                : filter === 'pending'
                ? 'No pending tasks. Time to add some!'
                : 'No tasks yet. Create your first one!'
            }
          />
        )}
      </main>
    </div>
  );
}
