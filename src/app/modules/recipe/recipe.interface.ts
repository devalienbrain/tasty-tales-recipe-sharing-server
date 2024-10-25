export interface IRecipe {
  title: string;
  description: string; // Added description field
  ingredients: string[];
  instructions: string;
  cookingTime: number; // in minutes
  userId: string; // reference to the user who created the recipe
  imageUrl?: string; // optional field for the recipe image
  createdAt?: Date;
  updatedAt?: Date;
}
