import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LikedRecipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 1; // 1 recipe per page

  // Pagination handlers
  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  // Generate 3 recipe replicas
  const likedRecipes = [
    {
      id: 1,
      title: "Roti and Sabji",
      image: "frame-23.png",
      ingredients: "To make Roti, you'll need whole wheat flour, water, and salt. For the Sabji, you'll need assorted vegetables like potatoes, spinach, cauliflower, and carrots. You'll also need onion, tomato, ginger-garlic paste, and a variety of spices including turmeric powder, cumin powder, coriander powder, and red chili powder. Finally, you'll need oil or ghee for cooking.",
      description: "Roti and Sabji is a classic Indian meal. Soft, whole-wheat rotis are paired with a flavorful vegetable curry, or sabji. The vegetables are cooked with a blend of aromatic spices, creating a delicious and nutritious dish. This simple yet satisfying meal is a staple in Indian households and can be customized with a variety of vegetables and spices to suit individual preferences."
    },
    {
      id: 2,
      title: "Roti and Sabji 2",
      image: "frame-23.png",
      ingredients: "Similar ingredients to the first recipe",
      description: "Another variation of Roti and Sabji"
    },
    {
      id: 3,
      title: "Roti and Sabji 3",
      image: "frame-23.png",
      ingredients: "Similar ingredients to the first recipe",
      description: "Another variation of Roti and Sabji"
    }
  ];

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = likedRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="py-10 px-6">
      <div style={{width: "190vh"}} className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info Section */}
        <div style={{height: "55vh", top: "135px"}} className="col-span-1 bg-gray-100 p-6 rounded-lg shadow-md relative">
          <h1 className="text-3xl font-semibold mb-6 text-blue-600">
            Your Profile
          </h1>
          <div className="w-32 h-32 bg-gray-300 mb-6">
            <img
              src="logo 1.png"
              alt="User profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p>
            <strong>Name:</strong> Koushik S Jain
          </p>
          <p>
            <strong>Email:</strong> User Email Here
          </p>
          <p>
            <strong>Phone Number:</strong> User Phone no. Here
          </p>
          <Link to="/edit-profile">
            <button style={{width: "100px", height:"50px"}} className="bg-yellow-600 text-white px-3 py-1 mt-4 rounded-2xl">
              Edit Profile
            </button>
          </Link>
        </div>
        
        {/* Recipe Navigation Section */}
        <div className="col-span-2">
          {/* Recipe Navigation Section */}
          <h1 className="text-4xl font-semibold mb-6 text-yellow-600 ">
            Your Recipes
          </h1>
          <div className="flex space-x-6 mb-6 text-xl">
            <Link to="/profile" className="hover:underline">
              Recipes
            </Link>
            <Link to="/liked-recipes" className="hover:underline text-yellow-600">
              Liked Recipes
            </Link>
            <Link to="/bookmarked-recipes" className="hover:underline">
              Bookmarked Recipes
            </Link>
          </div>

        {/* Recipe Card */}
        {currentRecipes.map((recipe) => (
            <div style={{width: "120vh", height: "60vh"}} key={recipe.id} className="rounded-2xl mb-6 bg-white p-4 shadow-md">
              <div className="flex mb-2">
                <div className="w-1/2">
                  <img
                    className="w-auto h-auto rounded-lg"
                    src={recipe.image}
                    alt="Recipe"
                  />
                </div>
                <div className="relative w-3/4 pl-4">
                  <h3 className="text-xl font-semibold">{recipe.title}</h3>
                  <p>
                    <b>Ingredients:</b> {recipe.ingredients}
                  </p>
                  <p>
                    <b>Description:</b> {recipe.description}
                  </p>
                  <div className="flex space-x-4 mt-4">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-2xl">
                        Unlike Recipe
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Pagination */}
        <div className="flex justify-between items-center">
          {/* Previous Page Button */}
          {currentPage > 1 && (
            <span 
              className="text-yellow-500 text-lg cursor-pointer"
              onClick={prevPage}
            >
              Previous
            </span>
          )}

          {/* Current Page Display */}
          <span className="font-semibold text-lg">Page {currentPage}</span>
          
          {/* Next Page Button */}
          {currentPage < Math.ceil(likedRecipes.length / recipesPerPage) && (
            <span 
              className="text-yellow-500 text-lg cursor-pointer"
              onClick={nextPage}
            >
              Next
            </span>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

