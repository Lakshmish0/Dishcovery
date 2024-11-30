import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/footer";
import { BookmarkedRecipes as BookmarkedRecipesComponent } from "../components/BookMarksRecipes/bookmarked-recipes";
import "../styles/global.css";

export const BookmarkRecipesPage = () => {
    return (
      <>
        <Navbar />
        <BookmarkedRecipesComponent />
        <Footer />
      </>
    );
};