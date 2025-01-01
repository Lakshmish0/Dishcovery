const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  photo: { type: String },
  username: { type: String,required: true  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
