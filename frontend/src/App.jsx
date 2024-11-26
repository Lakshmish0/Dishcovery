import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AddMenu } from "./pages/AddMenuPage";
import { SearchMenuPage } from "./pages/SearchMenuPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-menu" element={<AddMenu />} />
      <Route path="/search-menu" element={<SearchMenuPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;