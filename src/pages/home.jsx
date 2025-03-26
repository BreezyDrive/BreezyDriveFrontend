import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaShieldAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const features = [
  {
    icon: <FaCar className="text-4xl text-blue-500" />,
    title: 'Wide Selection',
    description: 'Choose from our extensive fleet of vehicles to match your needs.'
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500" />,
    title: 'Safe & Secure',
    description: 'All our vehicles are regularly maintained and fully insured.'
  },
  {
    icon: <FaClock className="text-4xl text-blue-500" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for your peace of mind.'
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-blue-500" />,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden fees or charges.'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-50 to-transparent opacity-30"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Journey Begins Here
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience the freedom of the open road with our premium car rental service. 
              Book your perfect ride today and make every journey memorable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/cars"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Browse Cars
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose BreezyDrive?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white bg-opacity-40 rounded-xl p-8 shadow-xl hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto text-center">
            <div className="backdrop-blur-lg bg-white bg-opacity-40 rounded-xl p-12 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Hit the Road?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Join thousands of satisfied customers who trust BreezyDrive for their car rental needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
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

export default Home;
