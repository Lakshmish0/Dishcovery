import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "../../styles/global.css"
import logo from "../../assets/images/logo 1.png";  

export const Footer = () => {
  return (
    <footer className="bg-yellow-500 py-4 px-6 mt-20">
    <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo and Company Name */}
        <div className="flex items-center space-x-4 px-20">
            <img
                className="rounded-full h-20 w-20 shadow-lg"
                src={logo}
                alt="Tastssee Treasure Logo"
            />
            <div className="flex flex-col">
                <span className="text-white text-xl font-bold tracking-wide">
                    Tastssee Treasure
                </span>
                <span className="text-white text-sm mt-1">
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
            <Link
                to="#"
                className="text-white hover:text-yellow-300 transition"
            >
                Social Media
            </Link>
        </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white opacity-20 my-4"></div>

    {/* Additional Footer Section */}
    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white px-20">
        <p>&copy; 2023 Tastssee Treasure. All rights reserved.</p>
        <p className="mt-2 md:mt-0 px-20">
            Contact us at : {" "}
            <a
                href="mailto:support@tastsseetreasure.com"
                className="underline hover:text-yellow-300"
            >
                support@tastsseetreasure.com
            </a>
        </p>
    </div>
</footer>


  );
};

