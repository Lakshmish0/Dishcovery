import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import "../../styles/global.css";

export const Home = () => {
  const [user_id, setUser_id] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

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
          setUser_id(data._id);
          setfirstName(data.firstName);
          setlastName(data.lastName);
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);
  // console.log(user_id);
  // Fetch recipes when the component is rendered
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/recipe_store/user_recipe",
          {
            params: {
              user_id: user_id,
            },
          }
        );
        setRecipes(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes");
      }
    };
    fetchRecipes();
  }, [user_id]);



  return (
    <main>
      <section className="text-center py-10">
        <h1 className="slide-in-title font-family-serif text-5xl text-blue-700 font-semibold py-4">
          <span className="typewriter">Discover Recipe & Delicious Food</span>
        </h1>
        <div className="mt-4 flex justify-center">
          <input
            className="w-3/4 p-2 border border-yellow-500 rounded-2xl"
            type="search"
            placeholder="Search your favorite food"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-2 p-5 bg-yellow-300 font-semibold relative px-4 rounded-2xl">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </section>

      <section className="bg-white py-10 px-6">
        {/* Recipe List */}
        <div className="space-y-8">
          {/* Start Repeat for each Recipe */}
          {recipes &&
          (Array.isArray(recipes) ? recipes : [recipes]).length > 0 ? (
            (Array.isArray(recipes) ? recipes : [recipes]).map((recipe) => (
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
                    {firstName + " " + lastName || "Loading..."}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500">Ingredients</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {recipe.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            // Fallback for when recipes is empty or null
            <p className="text-center text-gray-500">No recipes found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="text-center my-8">
          <span className="font-semibold text-lg">Page 1</span>
          <span className="text-yellow-500 text-lg ml-4 cursor-pointer">
            {">"}
          </span>
        </div>
      </section>
    </main>
  );
};
