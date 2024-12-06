import React from "react";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { EditProfile } from "../components/EditProfile/edit-profile.jsx";
import { Footer } from "../components/Footer/footer.jsx";
import "../styles/style.css"; // Keep this import

export const EditProfilePage = () => {
  return (
    <>
      <Navbar />
      <EditProfile />
      <Footer />
    </>
  );
};
