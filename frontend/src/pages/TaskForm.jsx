import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { taskService } from '../services/taskService';
import Input from '../components/Input';
import Button from '../components/Button';
import { WritingIllustration } from '../components/illustrations';

const priorityOptions = [
  { value: 'low', label: 'Low', color: 'bg-[#51CF66]', emoji: '🌱' },
  { value: 'medium', label: 'Medium', color: 'bg-[#FFE600]', emoji: '⚡' },
  { value: 'high', label: 'High', color: 'bg-[#FF6B6B]', emoji: '🔥' },
];

export default function TaskForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditing);

  useEffect(() => {
    if (isEditing) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    try {
      const response = await taskService.getOne(id);
      const task = response.data.data.task;
      setTitle(task.title);
      setDescription(task.description || '');
      setPriority(task.priority || 'medium');
      setDueDate(task.due_date ? task.due_date.split('T')[0] : '');
    } catch (err) {
      setError('Failed to load task');
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    setLoading(true);

    try {
      const data = {
        title: title.trim(),
        description: description.trim() || null,
        priority,
        due_date: dueDate || null,
      };

      if (isEditing) {
        await taskService.update(id, data);
      } else {
        await taskService.create(data);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error?.message || 'Failed to save task');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      await taskService.delete(id);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#FFE600] border-t-[#1A1A1A] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading task...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#FFE600] border-b-4 border-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-2 text-[#1A1A1A] hover:underline decoration-2 underline-offset-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-8 page-enter">
        {/* Title with illustration */}
        <div className="flex items-center gap-4 mb-8">
          <WritingIllustration className="w-24 h-24 hidden sm:block" />
          <div>
            <h1 className="font-['Caveat'] text-4xl text-[#1A1A1A]">
              {isEditing ? 'Edit Task' : 'Create New Task'}
            </h1>
            <p className="text-gray-600">
              {isEditing ? 'Update your task details' : 'What do you need to get done?'}
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="sketch-card border-l-4 border-l-[#FF6B6B] p-4 mb-6 shadow-[2px_2px_0px_0px_#1A1A1A]">
            <p className="text-[#FF6B6B] font-medium">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="sketch-card p-8">
          <Input
            type="text"
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            required
          />

          <div className="mb-5">
            <label className="block font-medium text-[#1A1A1A] mb-2 text-sm">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details about this task..."
              rows={4}
              className="sketch-input resize-none"
            />
          </div>

          {/* Priority selector */}
          <div className="mb-5">
            <label className="block font-medium text-[#1A1A1A] mb-3 text-sm">
              Priority
            </label>
            <div className="flex gap-3">
              {priorityOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value)}
                  className={`
                    flex-1 py-3 px-4 rounded-[12px] border-2 border-[#1A1A1A]
                    font-semibold transition-all duration-150
                    flex items-center justify-center gap-2
                    ${priority === option.value
                      ? `${option.color} shadow-[4px_4px_0px_0px_#1A1A1A] -translate-y-1 ${option.value === 'high' ? 'text-white' : 'text-[#1A1A1A]'}`
                      : 'bg-white text-[#1A1A1A] hover:bg-[#FAFAF8]'
                    }
                  `}
                >
                  <span className="text-lg">{option.emoji}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <Input
            type="date"
            label="Due Date (optional)"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          {/* Actions */}
          <div className="flex gap-3 mt-8 pt-6 border-t-2 border-dashed border-gray-200">
            <Button type="submit" loading={loading} size="lg">
              {isEditing ? 'Save Changes' : 'Create Task'} ✨
            </Button>
            <Button 
              type="button" 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/dashboard')}
            >
              Cancel
            </Button>
            {isEditing && (
              <Button 
                type="button" 
                variant="danger" 
                size="lg"
                onClick={handleDelete} 
                className="ml-auto"
              >
                Delete
              </Button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
