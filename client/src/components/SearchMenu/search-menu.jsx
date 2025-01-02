import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search-menu.css";

export const SearchMenu = () => {
  const [user_id, setUser_id] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors
  const [isLikedRecipes, setIsLikedRecipes] = useState({});
  const [isBookmarkedRecipes, setIsBookmarkedRecipes] = useState({});
  const [isLoadingL, setIsLoadingL] = useState(false);
  const [isLoadingB, setIsLoadingB] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage

        if (!token) {
          console.error("No token found. Please login.");
          return;
        }

        const response = await fetch("http://localhost:8080/api/username", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json(); // Parse JSON from the response
          setUser_id(data._id); // Update username state

          const likedState = data.likes.reduce((acc, recipeId) => {
            acc[recipeId] = true; // Mark as liked
            return acc;
          }, {});
          setIsLikedRecipes(likedState);

          const BookmarkedState = data.bookmarks.reduce((acc, recipeId) => {
            acc[recipeId] = true; // Mark as liked
            return acc;
          }, {});
          setIsBookmarkedRecipes(BookmarkedState);
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();

    // Fetch recipes from the backend
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/recipe_store"); // Adjust URL if needed
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const toggleLike = async (recipe_id) => {
    // Use `isLikedRecipes` as an object to track each recipe's like state
    const isLiked = isLikedRecipes[recipe_id] || false;
    setIsLikedRecipes({ ...isLikedRecipes, [recipe_id]: !isLiked }); // Optimistic update
    setIsLoadingL(true);

    try {
      if (!isLiked) {
        console.log("Liking the recipe...");
        console.log(recipe_id);
        await axios.post("http://localhost:8080/api/like_recipe/like/", {
          user_id: user_id,
          recipe_id: recipe_id,
        });
        console.log("Recipe liked successfully!");
      } else if (isLiked) {
        console.log("Disliking the recipe...");
        await axios.post("http://localhost:8080/api/like_recipe/dislike/", {
          user_id: user_id,
          recipe_id: recipe_id,
        });
        console.log("Recipe disliked successfully!");
      }
    } catch (error) {
      console.error("Error while toggling like:", error);
      // Revert optimistic update on error
      setIsLikedRecipes({ ...isLikedRecipes, [recipe_id]: isLiked });
    } finally {
      console.log(isLikedRecipes);
      setIsLoadingL(false); // Reset loading state
    }
  };

  const toggleBookmark = async (recipe_id) => {
    // Use `isLikedRecipes` as an object to track each recipe's like state
    const isBookmarked = isBookmarkedRecipes[recipe_id] || false;
    setIsBookmarkedRecipes({
      ...isBookmarkedRecipes,
      [recipe_id]: !isBookmarked,
    }); // Optimistic update
    setIsLoadingB(true);

    try {
      if (!isBookmarked) {
        console.log("Liking the recipe...");
        console.log(recipe_id);
        await axios.post(
          "http://localhost:8080/api/bookmark_recipe/bookmark/",
          {
            user_id: user_id,
            recipe_id: recipe_id,
          }
        );
        console.log("Recipe bookmarked successfully!");
      } else if (isBookmarked) {
        console.log("Disliking the recipe...");
        await axios.post(
          "http://localhost:8080/api/bookmark_recipe/remove_bookmark/",
          {
            user_id: user_id,
            recipe_id: recipe_id,
          }
        );
        console.log("Recipe bookmarked removed successfully!");
      }
    } catch (error) {
      console.error("Error while toggling bookmark:", error);
      // Revert optimistic update on error
      setIsBookmarkedRecipes({
        ...isBookmarkedRecipes,
        [recipe_id]: isBookmarked,
      });
    } finally {
      console.log(isLikedRecipes);
      setIsLoadingB(false); // Reset loading state
    }
  };

  console.log(search);

  if (loading) return <p>Loading recipes...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="bg-white py-10 px-6">
      <div className="mb-6">
        <h1 className="font-semibold text-xl mb-4">
          Explore Your Cravings Here !!
        </h1>
        <form
          onChange={(e) => setSearch(e.target.value)}
          className="flex items-center"
        >
          <input
            type="search"
            placeholder="Enter recipe name, ingredients"
            className="px-4 py-2 w-full border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-md ml-2"
          >
            Search
          </button>
        </form>
      </div>

      <hr className="border-t border-gray-200 my-6" />

      {/* Recipe List */}
      <div className="space-y-8">
        {/* Start Repeat for each Recipe */}
        {recipes
          .filter((recipe) => {
            return search.toLowerCase() === ""
              ? recipe
              : recipe.title.toLowerCase().includes(search);
          })
          .map((recipe) => (
            <div
              key={recipe._id}
              className="flex bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-64 h-64 bg-gray-300 rounded-md flex justify-center items-center mr-6">
                <img
                  src={
                    recipe.photo
                      ? `http://localhost:8080/${recipe.photo}`
                      : "https://placehold.co/128x128"
                  }
                  alt={`Image of ${recipe.title}`}
                  className="rounded-md"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">
                  {recipe.title} | Made By{" "}
                  <span className="text-yellow-600">
                    {recipe.userFirstName} {recipe.userLastName}
                  </span>
                </h2>
                <p className="text-sm text-gray-500">Ingredients</p>
                <p className="text-sm text-gray-700 mt-2">
                  {recipe.description}
                </p>
                <div className="flex space-x-4 mt-4">
                  <button
                    type="button"
                    className={`text-yellow-500 text-sm ${
                      isLoadingL ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !isLoadingL && toggleLike(recipe._id)} // Prevent multiple clicks while loading
                    disabled={isLoadingL}
                  >
                    <i
                      className={
                        isLikedRecipes[recipe._id]
                          ? "fas fa-heart"
                          : "far fa-heart"
                      }
                    ></i>{" "}
                    Like Recipe
                  </button>

                  <button
                    type="button"
                    className={`text-yellow-500 text-sm ${
                      isLoadingB ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !isLoadingB && toggleBookmark(recipe._id)}
                  >
                    <i
                      className={
                        isBookmarkedRecipes[recipe._id]
                          ? "fas fa-bookmark"
                          : "far fa-bookmark"
                      }
                    ></i>{" "}
                    Bookmark Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="text-center my-8">
        <span className="font-semibold text-lg">Page 1</span>
        <span className="text-yellow-500 text-lg ml-4 cursor-pointer">
          {">"}
        </span>
      </div>
    </section>
  );
};
