import React, { useState } from "react";
import "./search-menu.css";

export const SearchMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedRecipes, setLikedRecipes] = useState({});
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState({});

  const recipesPerPage = 4;

  const toggleLike = (recipeId) => {
    setLikedRecipes(prev => ({
      ...prev,
      [recipeId]: !prev[recipeId]
    }));
  };

  const toggleBookmark = (recipeId) => {
    setBookmarkedRecipes(prev => ({
      ...prev,
      [recipeId]: !prev[recipeId]
    }));
  };

  // Pagination handlers
  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  // Render recipe card template
  const RecipeCard = ({ recipeNumber }) => (
    <div className="flex bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="w-64 h-64 bg-gray-300 rounded-md flex justify-center items-center mr-6">
        <img 
          src={`https://placehold.co/128x128?text=Recipe+${recipeNumber}`} 
          alt={`Placeholder image for Recipe ${recipeNumber}`} 
          className="rounded-md" 
        />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-lg">
          Recipe Title {recipeNumber} | Made By <span className="text-yellow-600">USER NAME</span>
        </h2>
        <p className="text-sm text-gray-500">Ingredients</p>
        <p className="text-sm text-gray-700 mt-2">
          Description for Recipe {recipeNumber}. This is a detailed description of the recipe.
        </p>
        <div className="flex space-x-4 mt-4">
          <button 
            type="button" 
            onClick={() => toggleLike(`recipe${recipeNumber}`)}
            className={`text-yellow-500 text-sm ${likedRecipes[`recipe${recipeNumber}`] ? 'liked' : ''}`}
          >
            <i className={`far fa-heart ${likedRecipes[`recipe${recipeNumber}`] ? 'liked' : ''}`}></i> Like Recipe
          </button>
          <button 
            type="button" 
            onClick={() => toggleBookmark(`recipe${recipeNumber}`)}
            className={`text-yellow-500 text-sm ${bookmarkedRecipes[`recipe${recipeNumber}`] ? 'bookmarked' : ''}`}
          >
            <i className={`far fa-bookmark ${bookmarkedRecipes[`recipe${recipeNumber}`] ? 'bookmarked' : ''}`}></i> Bookmark Recipe
          </button>
        </div>
      </div>
    </div>
  );

  // Generate an array of 5 recipes
  const allRecipes = Array.from({ length: 5 }, (_, i) => i + 1);

  // Determine which recipes to show based on current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <section className="bg-white py-10 px-6">
      <div className="mb-6">
        <h1 className="font-semibold text-xl mb-4">Explore Your Cravings Here !!</h1>
        <form className="flex items-center">
          <input 
            type="search" 
            placeholder="Enter recipe name, ingredients" 
            className="px-4 py-2 w-full border border-gray-300 rounded-md" 
          />
          <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md ml-2">
            Search
          </button>
        </form>
      </div>

      <hr className="border-t border-gray-200 my-6"/>

      {/* Recipe List */}
      <div className="space-y-8">
        {currentRecipes.map(recipeNumber => (
          <RecipeCard key={recipeNumber} recipeNumber={recipeNumber} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="text-center my-8 flex justify-center items-center space-x-4">
        {currentPage > 1 && (
          <span 
            className="text-yellow-500 text-lg cursor-pointer mr-4"
            onClick={prevPage}
          >
            {'<'}
          </span>
        )}
        
        <span className="font-semibold text-lg">Page {currentPage}</span>
        
        {currentPage < Math.ceil(allRecipes.length / recipesPerPage) && (
          <span 
            className="text-yellow-500 text-lg cursor-pointer ml-4"
            onClick={nextPage}
          >
            {'>'}
          </span>
        )}
      </div>
    </section>
  );
};

