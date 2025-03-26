import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../components/Input';
import authService from '../services/authService';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Xử lý khi input thay đổi
  const handleInputChangeUsername = (e) => setUsername(e.target.value);
  const handleInputChangePassword = (e) => setPassword(e.target.value);
  const handleCheckboxChange = () => setRememberMe(!rememberMe);

  // Xử lý khi submit form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn chặn load lại trang mặc định

    try {
      await authService.login(username, password);
      
      // Hiển thị thông báo thành công
      toast.success('🎉 Login successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      
      // Redirect to home page or dashboard
      window.location.href = '/';
    } catch (error) {
      // Hiển thị thông báo lỗi
      toast.error('❌ Login failed!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="flex w-full h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]"></div>
      </div>

      {/* Left Column - Welcome Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 relative justify-center items-center p-12">
      <div className="relative text-center">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/30 rounded-tl-2xl -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/30 rounded-br-2xl translate-x-12 translate-y-12"></div>

          {/* Welcome Content */}
          <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
            <FaSignInAlt className="text-white w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Welcome Back!</h1>
          <p className="text-xl text-white/90">Sign in to continue your journey with us</p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8 bg-white/80 backdrop-blur-sm relative">
        <div className="w-full max-w-md">
          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl -translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-purple-500 rounded-br-2xl translate-x-2 translate-y-2"></div>

            {/* Header */}
            <div className="text-center mb-8 relative">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Login</h1>
              <p className="text-gray-600">Login to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div className="relative">
                <Input
                  label="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleInputChangeUsername}
                  placeholder="Enter your username"
                  required
                  className="pr-10"
                />
                <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                  <FaUser className="text-gray-400" />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChangePassword}
                  placeholder="Enter your password"
                  required
                  className="pr-10"
                />
                <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                  <FaLock className="text-gray-400" />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-600 select-none">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  Remember me
                </label>
                <a href="/forgot-password" className="text-blue-600 hover:text-blue-800 font-medium relative group">
                  Forgot password?
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-[1.02]"
              >
                <span>Login</span>
                <FaSignInAlt className="text-white" />
              </button>
            </form>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium relative group">
                  Create an account
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

// Add these styles to your CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;
document.head.appendChild(style);

export default Login;
