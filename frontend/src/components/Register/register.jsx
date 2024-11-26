import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen py-6">
      <div className="bg-white p-10 rounded-lg shadow-lg min-w-[500px] mx-4">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-yellow-500 text-center">
          Recipe Hub
        </h1>
        <h2 className="text-xl text-gray-800 font-semibold mb-2 text-center">
          Let's Get You Set Up!
        </h2>
        <p className="text-gray-500 mb-4 text-center">
          Create a new account to access all features
        </p>
        <hr className="border-gray-300 mb-6" />
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="name" 
              className="block text-gray-600 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name Here"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block text-gray-600 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Here"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="password" 
              className="block text-gray-600 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your New Password Here"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-gray-600 font-semibold">
              I agree to terms & conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-bold py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Register Account
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
