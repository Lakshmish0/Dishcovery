import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/global.css";
import styles from "../Signup/styles.module.css";

export const EditProfile = () => {
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
          const data = await response.json(); // Parse JSON from the response
          setUser_id(data._id);
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const [newdata, setNewdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    user_id: "",
  });

  const [profile_photo, setProfile_photo] = useState({
    user_id:"",
    photo: null,
  });

  const [preview, setPreview] = useState(null);
  // const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(name);
    setNewdata((prev) => {
      if (name === "profile_photo") {
        // Skip updating `newdata` for `profile_photo`
        return prev;
      }
      return {
        ...prev,
        [name]: value,
        user_id: user_id
      };
    });
    console.log("newdata", newdata);

    if (name === "profile_photo") {
      const file = files[0];
      console.log(file);
      if (file) {
        setProfile_photo({
          user_id:user_id,
          photo: file,

        });

        // Generate image preview
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result); // Set the preview URL
        };
        reader.readAsDataURL(file);
      }
    } else {
      setProfile_photo({
        user_id:user_id,
        photo: null,

      });
    }
  };
  console.log('profile_photo',profile_photo)
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Profile Photo State:", profile_photo);
    console.log("New Data State:", newdata);

    try {
      console.log(profile_photo.photo);

      const formData = new FormData();
      formData.append("photo", profile_photo.photo);
      formData.append("user_id", profile_photo.user_id);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      await axios.post("http://localhost:8080/api/update_photo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Added successfully!");
      setPreview(null);

      await axios.post("http://localhost:8080/api/update_user", newdata);

      localStorage.removeItem("token");
      window.location.reload();
      navigate("/login");

      // console.log(message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-yellow-500 text-center">
        Edit User Profile
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl overflow-hidden relative text-center">
          <div className="relative p-4">
            <div className="bg-white rounded-full p-2 inline-block">
              {/* {isLoading && <p>Loading...</p>} */}
              {preview ? (
                <img
                  className="rounded-full w-40"
                  src={preview}
                  alt="Preview"
                />
              ) : (
                <img
                  name="profile_photo"
                  className="rounded-full w-40"
                  src="https://placehold.co/100x100"
                  alt="Profile"
                />
              )}
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-1 text-yellow-500">Update Your Photo</h3>
              <p className="text-gray-600 text-sm mb-4">
                This will be displayed on your profile
              </p>
              <input
                type="file"
                id="upload"
                name="profile_photo"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />
              <label
                htmlFor="upload"
                className="text-white bg-yellow-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-pointer"
              >
                Upload New
              </label>
              <Link to="/profile">
                <button className="text-white bg-blue-500 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                  Go back
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-yellow-500">
            Update Your Personal information
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="firstName">
              Fisrt Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-yellow-500 sm:text-sm">
                  <i className="fas fa-user"></i>
                </span>
              </div>

              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={newdata.firstName}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-yellow-500 sm:text-sm">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={newdata.lastName}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
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
                name="email"
                id="email"
                onChange={handleChange}
                value={newdata.email}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-yellow-500 sm:text-sm">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={newdata.password}
                required
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="New Password"
              />
            </div>
          </div>
          {error && <div className={styles.error_msg}>{error}</div>}
        </div>
        <button
          className="text-white bg-yellow-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};
