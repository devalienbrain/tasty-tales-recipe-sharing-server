import Recipe from "./recipe.model";

export const getAllRecipesService = async () => {
  return await Recipe.find().populate("userId", "username");
};

export const getRecipeByIdService = async (id: string) => {
  return await Recipe.findById(id);
};

export const updateRecipeService = async (
  id: string,
  updatedData: Partial<typeof Recipe>
) => {
  return await Recipe.findByIdAndUpdate(id, updatedData, { new: true });
};

export const deleteRecipeService = async (id: string) => {
  return await Recipe.findByIdAndDelete(id);
};
