import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { WaveIllustration, TeamIllustration } from '../components/illustrations';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error?.message || 'Failed to create account');
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
        <div className="text-center mb-6 page-enter">
          <TeamIllustration className="w-28 h-28 mx-auto mb-4" />
          <h1 className="font-['Caveat'] text-5xl text-[#1A1A1A] mb-2">Join TaskFlow</h1>
          <p className="text-gray-600">Start your productivity journey!</p>
        </div>

        {/* Register Form */}
        <div className="w-full max-w-md sketch-card p-8 page-enter" style={{ animationDelay: '100ms' }}>
          <h2 className="font-['Caveat'] text-3xl text-[#1A1A1A] mb-6 text-center">
            Create Account ✨
          </h2>
          
          {error && (
            <div className="bg-red-50 border-2 border-[#FF6B6B] rounded-[12px] p-3 mb-4">
              <p className="text-[#FF6B6B] text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What should we call you?"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              required
            />

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
              placeholder="At least 6 characters"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              required
            />

            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Type it again"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              Start Being Productive! 🎯
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#1A1A1A] font-semibold underline decoration-[#FFE600] decoration-4 underline-offset-2 hover:decoration-[#1A1A1A]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
