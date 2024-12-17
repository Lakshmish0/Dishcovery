import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/footer";
import { LikedRecipes as LikedRecipesComponent } from "../components/LikedRecipes/liked-recipes";
import "../styles/global.css";

export const LikedRecipesPage = () => {
    return (
      <>
        <Navbar />
        <LikedRecipesComponent />
        <Footer />
      </>
    );
};