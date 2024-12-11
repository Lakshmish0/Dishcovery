import React from "react";
import "../../styles/global.css";

export const AddMenu = () => {
    return (
      <div style={{ backgroundImage: "url('/pattern-bg.png')" }} className="w-full">
        <div className="container mx-auto mt-8 p-6 bg-white rounded">
          <h2 style={{ backgroundImage: "url('/pattern-bg.png')" }} className="text-2xl mb-4 border-b-4 border-yellow-500 font-bold p-2 ">Add The Recipe Of Your Choice!</h2>
          <div className="mb-4 flex flex-col items-center">
            <div className="border-2 border-gray-200 p-8 text-center mb-4 py-20 flex items-center justify-center">
              <span className="text-6xl text-gray-200">Photo</span>
            </div>
            <input type="file" id="upload" className="hidden" accept="image/*" />
            <label htmlFor="upload" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded cursor-pointer">Upload Photo</label>
          </div>
        </div>

        <div className="mb-6 ml-20">
          <label htmlFor="recipeName" className="text-lg mb-2 block">Title</label>
          <input id="recipeName" type="text" placeholder="Recipe Name" className="w-1/2 p-2 border border-gray-200 rounded" />
        </div>

        <div className="mb-6 ml-20">
          <label htmlFor="recipeDesc" className="text-lg mb-2 block">Ingredients & Description</label>
          <textarea id="recipeDesc" rows="4" className="p-2 border border-gray-200 rounded w-1/2"></textarea>
        </div>

        <div className="mb-8 ml-20">
          <span className="text-lg">Category:</span>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="category" className="form-radio" value="salad" />
            <span className="ml-2">Salad</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="category" className="form-radio" value="appetizer" />
            <span className="ml-2">Appetizer</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="category" className="form-radio" value="main" />
            <span className="ml-2">Main Course</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="category" className="form-radio" value="dessert" />
            <span className="ml-2">Dessert</span>
          </label>
        </div>

        <button className="ml-20 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Add Recipe !!!</button>
      </div>
    );
};