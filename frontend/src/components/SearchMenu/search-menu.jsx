import PropTypes from "prop-types";
import React from "react";
import "./search-menu.css";

export const SearchMenu = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="mb-6">
        <h1 className="font-semibold text-xl mb-4">Explore Your Cravings Here !!</h1>
        <form className="flex items-center">
          <input type="search" placeholder="Enter recipe name, ingredients" className="px-4 py-2 w-full border border-gray-300 rounded-md" />
          <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md ml-2">Search</button>
        </form>
      </div>

      <hr className="border-t border-gray-200 my-6"/>

      {/* Recipe List */}
      <div className="space-y-8">
        {/* Start Repeat for each Recipe */}
        <div className="flex bg-white p-6 rounded-lg shadow-md">
          <div className="w-64 h-64 bg-gray-300 rounded-md flex justify-center items-center mr-6">
            <img src="https://placehold.co/128x128" alt="Placeholder image representing a food item in the recipe" className="rounded-md" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg">Recipe Title 1 | Made By <span className="text-yellow-600">USER NAME</span></h2>
            <p className="text-sm text-gray-500">Ingredients</p>
            <p className="text-sm text-gray-700 mt-2">Description Here</p>
            <div className="flex space-x-4 mt-4">
              <button type="button" className="text-yellow-500 text-sm"><i className="far fa-heart"></i> Like Recipe</button>
              <button type="button" className="text-yellow-500 text-sm"><i className="far fa-bookmark"></i> Bookmark Recipe</button>
            </div>
          </div>
        </div>
        
        {/* ...Repeat for each additional recipe item */}
        {/* End Repeat for each Recipe */}
        {/* Additional Recipe items would continue here */}
      </div>

      {/* Pagination Controls */}
      <div className="text-center my-8">
        <span className="font-semibold text-lg">Page 1</span>
        <span className="text-yellow-500 text-lg ml-4 cursor-pointer">{'>'}</span>
      </div>
    </section>
  );
};

