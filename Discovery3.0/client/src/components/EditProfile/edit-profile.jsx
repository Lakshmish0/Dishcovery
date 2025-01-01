import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";

export const EditProfile = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 bg-white p-8 rounded-xl shadow-md">
      <h2 style={{top: "40px", left: "20px"}} className="text-2xl w-fit font-semibold text-yellow-500 mb-6 relative">
        Edit User Profile <span className="text-blue-500 cursor-pointer">Preview</span>
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Image Section */}
        <div style={{top: "35px", left: "20px"}} className="h-fit relative lg:w-1/3 flex flex-col items-center lg:items-start ">
          <div className="rounded-xl overflow-hidden mb-6 relative">
            <div className="relative p-4">
              <div className="bg-white rounded-full p-2 inline-block">
                <img
                style={{width: "190px"}}
                  className="rounded-full"
                  src="https://placehold.co/100x100"
                  alt="Placeholder image for user profile picture."
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-1 text-yellow-500">Your Photo</h3>
                <p className="text-gray-600 text-sm mb-4">This will be displayed on your profile</p>
                <input 
                  type="file" 
                  id="upload" 
                  className="hidden" 
                  accept="image/*" 
                />
                <label 
                  htmlFor="upload" 
                  className="text-white bg-yellow-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-pointer"
                >
                  Upload New
                </label>
                <Link to="/profile">
                  <button className="text-white bg-blue-500 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Go back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="lg:w-2/3">
          <h3 className="font-semibold mb-4 text-4xl text-blue-500">Personal Information</h3>
          <div className="flex gap-4">
            <div className="mb-4 flex-1">
              <label className="block text-gray-700" htmlFor="user-first-name">
                First Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-yellow-500 sm:text-sm">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="user-first-name"
                  id="user-first-name"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Ayman"
                />
              </div>
            </div>
            <div className="mb-4 flex-1">
              <label className="block text-gray-700" htmlFor="user-last-name">
                Last Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-yellow-500 sm:text-sm">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="user-last-name"
                  id="user-last-name"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Shaltoni"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="user-email">
              Email Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-yellow-500 sm:text-sm">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                name="user-email"
                id="user-email"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="AymanShaltoni@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700" htmlFor="user-password">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-yellow-500 sm:text-sm">
                <i class="fa-solid fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                name="user-password"
                id="user-password"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="mt-6 text-white bg-yellow-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
