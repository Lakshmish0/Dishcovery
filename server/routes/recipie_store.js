const express = require("express");
const multer = require("multer");
const Recipe = require("../models/recipe"); 
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  });
  const upload = multer({ storage });

// POST route to add a new recipe
router.post("/", upload.single("photo"), async (req, res) => {
    try {
      const { title, description, category, username } = req.body;
      const photo = req.file ? req.file.path : null;
  
      const newRecipe = new Recipe({ title, description, category, photo, username });
      await newRecipe.save();
  
      res.status(201).json({ message: "Recipe added successfully!" });
    } catch (error) {
      console.error("Error saving recipe:", error);
      res.status(500).json({ error: "Failed to add recipe" });
    }
  });
  
  module.exports = router;