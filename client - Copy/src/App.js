import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
import Signup from "./components/Signup/";
import Login from "./components/Login";
// import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AddMenu } from "./pages/AddMenuPage"; 
import { SearchMenuPage } from "./pages/SearchMenuPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LikedRecipesPage } from "./pages/LikedRecipes";
import { BookmarkRecipesPage } from "./pages/BookmarkRecipesPage";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<HomePage />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/add-menu" element={<AddMenu />} />
			<Route path="/search-menu" element={<SearchMenuPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/liked-recipes" element={<LikedRecipesPage />} />
			<Route path="/bookmarked-recipes" element={<BookmarkRecipesPage />} />
		</Routes>
	);
}

export default App;