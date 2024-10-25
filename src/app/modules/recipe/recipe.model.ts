import mongoose, { Schema, Document } from "mongoose";
import { IRecipe } from "./recipe.interface";

const RecipeSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }, // Added description
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const Recipe = mongoose.model<IRecipe & Document>("Recipe", RecipeSchema);
export default Recipe;
