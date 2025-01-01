import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "../../styles/global.css"
import logo from "../../assets/images/logo 1.png";  

export const Footer = () => {
  return (
    <footer className="py-3 px-6 ">
    <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo and Company Name */}
        <div style={{ position:"relative", bottom:"-15px" }} className="flex items-center space-x-4 px-20">
            <img
                className="rounded-full h-20 w-20 shadow-lg"
                src={logo}
                alt="Tastssee Treasure Logo"
            />
            <div className="flex flex-col">
                <span className="logo-txt text-white text-xl font-bold tracking-wide">
                    Tastssee Treasure
                </span>
                <span className="para text-white text-sm mt-1">
                    Explore. Create. Taste.
                </span>
            </div>
        </div>

        {/* Right Section: Links */}
        <div className="mt-4 md:mt-0 flex flex-wrap space-x-4 text-sm px-20">
            <Link to="/" className="text-white hover:text-yellow-300 transition">
                Home
            </Link>
            <Link
                to="/add-menu"
                className="text-white hover:text-yellow-300 transition"
            >
                Add Menu
            </Link>
            <Link
                to="/search-menu"
                className="text-white hover:text-yellow-300 transition"
            >
                Search Menu
            </Link>
            <Link
                to="/profile"
                className="text-white hover:text-yellow-300 transition"
            >
                Your Recipes
            </Link>
        </div>
    </div>

    {/* Divider */}

    {/* Additional Footer Section */}
    <div style={{ position:"relative", width: "500px", left: "910px" }} className="text-sm text-white px-20 h-auto ">
        <p style={{ width: "500px" }} className="mt-2 md:mt-0 px-20 relative">
            &copy; 2023 Tastssee Treasure. All rights reserved.
        </p>
    </div>
</footer>


  );
};

