import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [error_image, setError_image] = useState("");
  const [user_id, setUser_id] = useState("");

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
          const data = await response.json();
          setUser_id(data._id); // Parse JSON from the response
          setFirstName(data.firstName); // Update username state
          setLastName(data.lastName);
          setEmail(data.email);
          
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
    console.log(user_id)

    const fetchProfileImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/update_photo",
          {
            params: {
              user_id: user_id,
            },
          }
        );
        const imageUrl = `http://localhost:8080/Profile_uploads/${response.data.imageUrl}`;
        setProfileImage(imageUrl);
        console.log(imageUrl) // Create a URL for the image blob
      } catch (err) {
        setError_image(err.response?.data?.message || "Failed to fetch image");
      }
    };

    fetchProfileImage();
  }, [firstName, lastName, email]);

  return (
    <div className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-blue-600">
          Your Profile
        </h1>

        {/* Profile Info Section */}
        <div className="flex mb-10">
          <div className="w-32 h-32 bg-gray-300 mr-6">
            <img
              src={profileImage}
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p>
              <strong>First Name:</strong> {firstName}
            </p>
            <p>
              <strong>Lasst Name:</strong> {lastName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <Link to="/edit-profile">
              <button className="bg-yellow-600 text-white px-3 py-1 mt-2 rounded-2xl">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Navigation Section */}
        <h1 className="text-3xl font-semibold mb-6 text-yellow-600">
          Your Recipes
        </h1>
        <div className="flex space-x-6 mb-6">
          <Link to="/profile" className="text-yellow-600 hover:underline">
            Recipes
          </Link>
          <Link to="/liked-recipes" className="hover:underline">
            Liked Recipes
          </Link>
          <Link to="/bookmarked-recipes" className="hover:underline">
            Bookmarked Recipes
          </Link>
        </div>

        {/* Recipe Card */}
        <div className="rounded-2xl mb-6">
          <div className="flex mb-2">
            <div className="w-3/2">
              <img className="w-full h-auto" src="frame-23.png" alt="Recipe" />
            </div>
            <div className="relative w-3/4 pl-4">
              <h3 className="text-xl font-semibold">Roti and Sabji</h3>
              <p>
                <b>Ingredients:</b> To make Roti, you'll need whole wheat flour,
                water, and salt. For the Sabji, you'll need assorted vegetables
                like potatoes, spinach, cauliflower, and carrots. You'll also
                need onion, tomato, ginger-garlic paste, and a variety of spices
                including turmeric powder, cumin powder, coriander powder, and
                red chili powder. Finally, you'll need oil or ghee for cooking.
              </p>
              <p>
                <b>Description:</b> Roti and Sabji is a classic Indian meal.
                Soft, whole-wheat rotis are paired with a flavorful vegetable
                curry, or sabji. The vegetables are cooked with a blend of
                aromatic spices, creating a delicious and nutritious dish. This
                simple yet satisfying meal is a staple in Indian households and
                can be customized with a variety of vegetables and spices to
                suit individual preferences.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="bg-yellow-600 text-white px-4 py-1 rounded-2xl">
                  Edit Menu
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-2xl">
                  Delete Menu
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center py-6">
          <span>Page 1</span>
          <i className="fas fa-chevron-right cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};
