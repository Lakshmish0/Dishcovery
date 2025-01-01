import React, { useState } from "react";
import "./search-menu.css";
import { Link } from "react-router-dom";

export const SearchMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 8;

  // Pagination handlers
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  // Render recipe card template
  const RecipeCard = ({ recipeNumber }) => (
    <div style={{ height: "50vh", width: "40vh" }} className="flex flex-col  rounded-lg shadow-md">
      <div style={{ height: "40vh", width: "40vh" }} className="bg-gray-300 rounded-md flex justify-center items-center ">
        <img style={{ height: "50vh", width: "50vh" }}
          src={`https://placehold.co/128x128?text=Recipe+${recipeNumber}`}
          alt={`Placeholder for Recipe ${recipeNumber}`}
          className="rounded-md w-full"
        />
      </div>
      <h3 className="mt-4 text-center text-2xl font-semibold">
        ROTI AND SABJI
      </h3>
    </div>
  );

  // Generate an array of 20 recipes
  const allRecipes = Array.from({ length: 20 }, (_, i) => i + 1);

  // Determine which recipes to show based on current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <section className="bg-white py-10 px-6">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Explore Your Cravings Here!!
        </h1>
        <form className="flex items-center">
          <input
            type="search"
            placeholder="Enter recipe name, ingredients"
            className="px-4 py-2 w-full border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-md ml-2 hover:bg-blue-500 font-semibold text-lg"
          >
            Search
          </button>
        </form>
      </div>

      <hr className="border-t border-gray-200 my-6" />

      {/* Recipe Grid */}
      <div style={{left: "25px", width:"200vh"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {currentRecipes.map((recipeNumber) => (
        <Link to="/recipes">
          <RecipeCard key={recipeNumber} recipeNumber={recipeNumber} />
          </Link>
        ))}
        
      </div>

      {/* Pagination Controls */}
      <div className="text-center my-8 flex justify-center items-center space-x-4">
        {currentPage > 1 && (
          <span
            className="text-yellow-500 text-lg cursor-pointer mr-4"
            onClick={prevPage}
          >
            {"<"}
          </span>
        )}

        <span className="font-semibold text-lg">Page {currentPage}</span>

        {currentPage < Math.ceil(allRecipes.length / recipesPerPage) && (
          <span
            className="text-yellow-500 text-lg cursor-pointer ml-4"
            onClick={nextPage}
          >
            {">"}
          </span>
        )}
      </div>
    </section>
  );
};
