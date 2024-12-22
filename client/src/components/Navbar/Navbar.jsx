import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/global.css";
import "./navbar.css";

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
        const token = localStorage.getItem("token");
  
        if (!token) {
          console.error("No token found. Please login.");
          return;
        }
  
        const response = await fetch("http://localhost:8080/api/username", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setFirstName(data.firstName);
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
      <div className="flex items-center space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
              ? "text-blue-500 font-semibold" 
              : "text-black hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/add-menu" 
          className={({ isActive }) => 
            isActive 
              ? "text-blue-500 font-semibold" 
              : "text-black hover:text-blue-500"
          }
        >
          Add Menu
        </NavLink>
        <NavLink 
          to="/search-menu" 
          className={({ isActive }) => 
            isActive 
              ? "text-blue-500 font-semibold" 
              : "text-black hover:text-blue-500"
          }
        >
          Search Menu
        </NavLink>
      </div>
      <div className="flex items-center">
        <NavLink to="/profile">
          <img className="w-6 h-6 relative" src="group.png" alt="username" />
        </NavLink>
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
