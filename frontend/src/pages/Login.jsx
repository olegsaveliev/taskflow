import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { WaveIllustration, ChecklistIllustration } from '../components/illustrations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error?.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 doodle-dots"></div>
      <WaveIllustration className="absolute bottom-0 left-0 right-0 w-full h-48 text-[#FFE600] opacity-30" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Logo/Title */}
        <div className="text-center mb-8 page-enter">
          <ChecklistIllustration className="w-28 h-28 mx-auto mb-4" />
          <h1 className="font-['Caveat'] text-5xl text-[#1A1A1A] mb-2">TaskFlow</h1>
          <p className="text-gray-600">Get things done, one task at a time!</p>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md sketch-card p-8 page-enter" style={{ animationDelay: '100ms' }}>
          <h2 className="font-['Caveat'] text-3xl text-[#1A1A1A] mb-6 text-center">
            Welcome Back! 👋
          </h2>
          
          {error && (
            <div className="bg-red-50 border-2 border-[#FF6B6B] rounded-[12px] p-3 mb-4">
              <p className="text-[#FF6B6B] text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              required
            />
            
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              required
            />

            <Button 
              type="submit" 
              loading={loading} 
              className="w-full mt-4"
              size="lg"
            >
              Let's Go! 🚀
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-600">
              New here?{' '}
              <Link to="/register" className="text-[#1A1A1A] font-semibold underline decoration-[#FFE600] decoration-4 underline-offset-2 hover:decoration-[#1A1A1A]">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
