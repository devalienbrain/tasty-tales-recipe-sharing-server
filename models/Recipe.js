const mongoose = require('mongoose');

export const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String, required: true },
  cookingTime: { type: Number, required: true }, // In minutes
  image: { type: String }, // Recipe image
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
