import { Request, Response } from "express";
import Recipe from "./recipe.model";
import { recipeValidationSchema } from "./recipe.validation";
import {
  getAllRecipesService,
  getRecipeByIdService,
  updateRecipeService,
  deleteRecipeService,
} from "./recipe.service";

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const validatedData = recipeValidationSchema.parse(req.body);
    const recipe = new Recipe(validatedData);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.errors || "Error creating recipe" });
  }
};

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeByIdService(id); // Use service to get recipe by ID

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipe" });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedData = recipeValidationSchema.parse(req.body);
    const updatedRecipe = await updateRecipeService(id, validatedData);

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ error: error.errors || "Error updating recipe" });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await deleteRecipeService(id);

    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting recipe" });
  }
};
