import React from "react";
import "../../styles/global.css"
import "./navbar.css";
import { Link } from "react-router-dom";


export const Navbar = () => {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    <header className="p-8 bg-yellow-400 shadow-md flex justify-between items-center">
        <div className="flex items-center">
            <Link to="/" className="text-blue-500 font-semibold">Home</Link>
            <Link to="/add-menu" className="ml-4">Add Menu</Link>
            <Link to="/search-menu" className="ml-4">Search Menu</Link>
        </div>
        <div className="flex items-center">
            <Link to="/profile">
                <img 
                    className="w-6 h-6 relative" 
                    src="group.png" 
                    alt="username" 
                />
            </Link>
            <span className="ml-4">User Name</span>
            <button 
                className="ml-4 font-semibold relative px-4 border border-white rounded-2xl" onClick={handleLogout}
            >
                Logout
            
            </button>
        </div>
    </header>
  );
};

