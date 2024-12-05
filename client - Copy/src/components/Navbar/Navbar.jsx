import React from "react";
import "../../styles/global.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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


  return (
    <header className="p-8 bg-yellow-400 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-blue-500 font-semibold">
          Home
        </Link>
        <Link to="/add-menu" className="ml-4">
          Add Menu
        </Link>
        <Link to="/search-menu" className="ml-4">
          Search Menu
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/profile">
          <img className="w-6 h-6 relative" src="group.png" alt="username" />
        </Link>
        <span className="ml-4">
          <div>{firstName} {lastName}</div>
        </span>

        <button
          className="ml-4 font-semibold relative px-4 border border-white rounded-2xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};
