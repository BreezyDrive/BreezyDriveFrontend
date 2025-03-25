import React from 'react'

const Login = () => {




  return (

    <div className="flex w-full h-screen">
      {/* Cột bên trái - Background (ẩn khi màn hình nhỏ) */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 justify-center items-center">
        <h1 className="text-white text-4xl font-bold animate-bounce">Welcome Back!</h1>
      </div>
 
      {/* Cột bên phải - Form login */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
        <div className="w-96 p-6 bg-white rounded-lg shadow-xl">
          {/* Tiêu đề */}
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">Login</h1>
          <p className="text-gray-500 text-center mb-6">Login to your account</p>

          {/* Input Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          {/* Input Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Checkbox Remember me */}
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="remember" className="text-gray-700">
              <input type="checkbox" id="remember" className="mr-2" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          {/* Button Login */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>

          {/* Links */}
          <div className="mt-4 text-center">
            <a href="/register" className="text-blue-600 hover:underline">Create an account</a>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default Login