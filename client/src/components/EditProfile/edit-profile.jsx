import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";

export const EditProfile = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
        Edit User Profile <span className="text-blue-500 cursor-pointer">Preview</span>
      </h2>
      
      <div className="rounded-xl overflow-hidden mb-6 relative">
        <div className="relative p-4">
          <div className="bg-white rounded-full p-2 inline-block">
            <img
              className="rounded-full w-40"
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
            <button className="text-white bg-yellow-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-yellow-500">Personal information</h3>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="user-name">
            Full Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-yellow-500 sm:text-sm">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              name="user-name"
              id="user-name"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Ayman Shaltoni"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="user-email">
            Email address
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
          <label className="block text-gray-700" htmlFor="user-phone">
            Mobile number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-yellow-500 sm:text-sm">
                <i className="fas fa-phone"></i>
              </span>
            </div>
            <input
              type="tel"
              name="user-phone"
              id="user-phone"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="+91 5502938123"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

