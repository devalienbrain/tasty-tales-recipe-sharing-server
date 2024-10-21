import { Router } from "express";
import { createRecipe, getAllRecipes, getRecipeById } from "./recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);

// Additional routes for update, delete, etc.

export const RecipeRoutes = router;
