import Recipe from "./recipe.model";

export const getAllRecipesService = async () => {
  return await Recipe.find().populate("userId", "username"); // Populate with user details if needed
};

// Service to fetch a recipe by ID
export const getRecipeByIdService = async (id: string) => {
  return await Recipe.findById(id);
};