import React, { useState, useEffect } from "react"; // Added useState and useEffect
import "../../styles/global.css";
import axios from "axios";
import "./add-menu.css";

export const AddMenu = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
          setFirstName(data.firstName); // Update username state
          setLastName(data.lastName);
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    category: "",
    photo: null,
    username: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      const file = files[0];
      if (file) {
        setRecipe({ ...recipe, photo: file });

        // Generate image preview
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result); // Set the preview URL
        };
        reader.readAsDataURL(file);
      }
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", recipe.title);
    formData.append("description", recipe.description);
    formData.append("category", recipe.category);
    formData.append("photo", recipe.photo);
    formData.append("username", firstName + lastName);
    console.log(lastName + firstName);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/recipe_store",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Recipe added successfully!");
      setRecipe({
        title: "",
        description: "",
        category: "",
        photo: null,
        username: firstName + lastName,
      });
      setPreview(null);
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ backgroundColor: "black" }}
        className="w-full"
      >
        <div className="container mx-auto mt-8 p-6 bg-white rounded">
          <h2
            style={{ backgroundImage: "url('/pattern-bg.png')", width: "500px", textAlign: "center" }}
            className="mb-4 border-b-4 border-yellow-500 font-bold p-2"
          >
            Add The Recipe Of Your Choice!
          </h2>

          {/* Flex container for layout */}
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Left side: Upload Photo */}
            <div style={{ height: "58vh" }} className="w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col items-center">
              <div style={{ height: "50vh", width: "40vh" }}  className="w-48 h-48 mb-4 border border-gray-200 rounded overflow-hidden flex items-center justify-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-6xl text-gray-200">Photo</span>
                )}
              </div>
              <input
                type="file"
                id="upload"
                name="photo"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />
              <label
                htmlFor="upload"
                className="bg-yellow-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded cursor-pointer"
              >
                Upload Photo
              </label>
            </div>

            {/* Right side: Form inputs */}
            <div className="w-full lg:w-2/3">
              <div className="mb-6">
                <label
                  htmlFor="recipeName"
                  className="text-2xl mb-2 block text-yellow-700 px-4"
                >
                  Title
                </label>
                <input
                  id="recipeName"
                  name="title"
                  type="text"
                  placeholder="Recipe Name"
                  className="w-3/4 h-3/2 p-2 border border-gray-200 rounded text-1xl"
                  value={recipe.title}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="recipeDesc"
                  className="text-2xl mb-2 block text-yellow-700 px-4"
                >
                  Ingredients & Description
                </label>
                <textarea
                  id="recipeDesc"
                  name="description"
                  rows="4"
                  className="w-3/4 h-3/2 p-2 border border-gray-200 rounded "
                  value={recipe.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-8">
                <span className="text-2xl mb-2 block text-yellow-700 px-4">Category:</span>
                {["salad", "appetizer", "main", "dessert"].map((category) => (
                  <label
                    key={category}
                    className="inline-flex items-center ml-6 text-9/5xl"
                  >
                    <input
                      type="radio"
                      name="category"
                      className="form-radio"
                      value={category}
                      checked={recipe.category === category}
                      onChange={handleChange}
                    />
                    <span className="ml-2">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
              <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ml-auto"
            type="submit"
          >
            Add Recipe !!!
          </button>
            </div>
          </div>

          {/* Submit button */}
          
        </div>
      </div>
    </form>
  );
};