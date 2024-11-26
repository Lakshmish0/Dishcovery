import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "../../styles/global.css"
import logo from "../../assets/images/logo 1.png";  

export const Footer = () => {
  return (
    <footer className="bg-yellow-500 py-8 px-6 mt-10">
        <div className="text-center">
            <div className="mb-4">
                <img className="rounded-full h-20 mx-auto" src={logo} alt="Tastssee Treasure Logo" />
                <span className="text-white text-lg font-semibold block mt-2">Tastssee Treasure</span>
            </div>
            <div className="text-white mt-8">
                <Link to="/" className="mr-4 hover:underline">Home</Link>
                <Link to="/add-menu" className="mr-4 hover:underline">Add Menu</Link>
                <Link to="/search-menu" className="mr-4 hover:underline">Search Menu</Link>
                <Link to="/recipes" className="mr-4 hover:underline">Your Recipes</Link>
                <Link to="#" className="mr-4 hover:underline">Social Media Here</Link>
            </div>
        </div>
        <div className="text-center text-white mt-8 text-sm">
            <p>&copy; 2023 Tastssee Treasure. All rights reserved.</p>
        </div>
    </footer>
  );
};

