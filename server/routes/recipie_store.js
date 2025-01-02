const express = require("express");
const multer = require("multer");
const Recipe = require("../models/recipe");
const {User} = require("../models/user");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST route to add a new recipe
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { user_id, title, description, category } = req.body;
    const photo = req.file ? req.file.path : null;

    const newRecipe = new Recipe({
      user_id,
      title,
      description,
      category,
      photo,
    });
    await newRecipe.save();

    res.status(201).json({ message: "Recipe added successfully!" });
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ error: "Failed to add recipe" });
  }
});

router.get("/", async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipes = await Recipe.find();

    // Enrich recipes with user information
    const enrichedRecipes = await Promise.all(
      recipes.map(async (recipe) => {
        const user = await User.findOne({ _id: recipe.user_id });
        if (user) {
          return {
            ...recipe.toObject(), // Convert Mongoose document to plain JS object
            userFirstName: user.firstName,
            userLastName: user.lastName,
          };
        }
        return recipe; // If no user is found, return the recipe as is
      })
    );
  
    res.status(200).json(enrichedRecipes); // Send the enriched recipes in the response
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

router.get("/user_recipe/", async (req, res) => {
  try {
    console.log(req.query);

    // Destructure query parameters directly from req.query
    const { user_id } = req.query;

    // Validate required parameters
    if (!user_id) {
      return res
        .status(400)
        .json({ error: "Missing required query parameters" });
    }

    // Query the database to find the user recipes
    const user_recipes = await Recipe.find({
      user_id: user_id,
    });

    // Handle the case where no recipes are found
    if (user_recipes.length === 0) {
      return res
        .status(404)
        .json({ error: "No recipes found for the given user" });
    }

    // Send the recipes in the response
    res.status(200).json(user_recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

// router.post("/user_edit_recipe/", async (req, res) => {
//   try {
//     console.log("hi", req.body);

//     // Destructure query parameters directly from req.query
//     const { user_id } = req.body;
//     // Validate required parameters
//     if (!user_id) {
//       return res
//         .status(400)
//         .json({ error: "Missing required query parameters" });
//     }

//     // Query the database to find the user recipes
//     const user_edit_recipes = await Recipe.updateMany(
//       {
//         firstName: oldfirstName,
//         lastName: oldlastName,
//         email: oldnormalizedEmail,
//       }, // Filter: Identify the document to update
//       {
//         $set: {
//           // Fields to update
//           firstName: firstName,
//           lastName: lastName,
//           email: normalizedEmail, // Replace with actual field and value
//         },
//       },
//       { upsert: false } // Options: Do not create a new document if no match is found
//     );

//     if (user_edit_recipes.matchedCount === 0) {
//       return res
//         .status(200)
//         .json({ error: "No recipes found for the given user" });
//     }

//     res.status(201).json({ message: "updated user details in recipes" });
//   } catch (error) {
//     console.error("Error in updating recipes:", error);
//     res.status(500).json({ error: "Failed to update recipes" });
//   }
// });

module.exports = router;
