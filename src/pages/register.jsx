import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../components/Input';
import authService from '../services/authService';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaCheck, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    address: '',
  });

  // Xử lý khi input thay đổi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate step
  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.fullName || !formData.email) {
          toast.error('Please fill in all fields');
          return false;
        }
        return true;
      case 2:
        if (!formData.phoneNumber || !formData.address) {
          toast.error('Please fill in all fields');
          return false;
        }
        return true;
      case 3:
        if (!formData.password || !formData.confirmPassword) {
          toast.error('Please fill in all fields');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match');
          return false;
        }
        return true;
      default:
        return false;
    }
  };

  // Handle next step
  const handleNextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  // Xử lý khi submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateStep()) return;

    try {
      await authService.register({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      });
      
      toast.success('🎉 Registration successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      
      window.location.href = '/login';
    } catch (error) {
      toast.error('❌ Registration failed!', {
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

  // Progress bar calculation
  const progress = ((step - 1) / 2) * 100;

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]"></div>
      </div>

      {/* Glass Card Container */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative">
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl -translate-x-2 -translate-y-2"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500 rounded-br-2xl translate-x-2 translate-y-2"></div>

        {/* Progress Bar with enhanced styling */}
        <div className="w-full h-2 bg-gray-200/50 backdrop-blur-sm rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Header with enhanced typography */}
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 relative">
            Create Account
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full -z-10"></div>
          </h1>
          <p className="text-gray-600">Fill in your details to get started</p>
        </div>

        {/* Form with enhanced styling */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              {/* Basic Information */}
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    label="Full Name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="pr-10"
                  />
                  <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                    <FaUser className="text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="pr-10"
                  />
                  <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="pr-10"
                  />
                  <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                    <FaPhone className="text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    label="Address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    required
                    className="pr-10"
                  />
                  <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {/* Password Information */}
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    className="pr-10"
                  />
                  <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                    <FaLock className="text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                    className="pr-10"
                  />
                  <div className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none h-[42px]">
                    <FaCheck className="text-gray-400" />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-between space-x-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 bg-white/80 backdrop-blur-sm text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center space-x-2 shadow-md"
              >
                <FaArrowLeft className="text-gray-600" />
                <span>Back</span>
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-[1.02]"
              >
                <span>Next</span>
                <FaArrowRight className="text-white" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-[1.02]"
              >
                <span>Create Account</span>
                <FaUser className="text-white" />
              </button>
            )}
          </div>
        </form>

        {/* Enhanced Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium relative group">
              Sign in
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
          </p>
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

export default Register; 