import { Document } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  description: string; // Added description field
  ingredients?: string[];
  instructions: string;
  cookingTime: number; // in minutes
  createdBy?: string; // reference to the user who created the recipe
  image?: string; // optional field for the recipe image
  createdAt?: Date;
  updatedAt?: Date;
}
