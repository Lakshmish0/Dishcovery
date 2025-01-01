import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { HomePage } from "./pages/HomePage";
import { AddMenu } from "./pages/AddMenuPage";
import { SearchMenuPage } from "./pages/SearchMenuPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LikedRecipesPage } from "./pages/LikedRecipes";
import { BookmarkRecipesPage } from "./pages/BookmarkRecipesPage";
import { EditProfilePage } from "./pages/EditProfilePage";
import { LandingPage } from "./pages/LandingPage";
import { EditMenuPage } from "./pages/EditMenuPage";
import { RecipesPage } from "./pages/RecipesPage";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("token"));

  // Monitor localStorage for changes and update user state
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUser(token);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // Redirect to Landing Page after logout
  };

  return (
    <Routes>
      {/* Public Routes */}
      {!user ? (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Redirect unauthenticated users trying to access private routes */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          {/* Private Routes */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-menu" element={<AddMenu />} />
          <Route path="/search-menu" element={<SearchMenuPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/liked-recipes" element={<LikedRecipesPage />} />
          <Route path="/bookmarked-recipes" element={<BookmarkRecipesPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/logout" element={<Navigate replace to="/" />} />
          <Route path="/edit-recipes" element={<EditMenuPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          {/* Redirect logged-in users trying to access public routes */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/login" element={<Navigate replace to="/home" />} />
          <Route path="/signup" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </>
      )}
    </Routes>
  );
}

export default App;