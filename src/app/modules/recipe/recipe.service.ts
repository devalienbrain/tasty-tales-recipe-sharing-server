import Recipe from "./recipe.model";

export const getAllRecipesService = async () => {
  return await Recipe.find().populate("userId", "username"); // Populate with user details if needed
};

// Additional service functions can be added for create, update, delete operations
