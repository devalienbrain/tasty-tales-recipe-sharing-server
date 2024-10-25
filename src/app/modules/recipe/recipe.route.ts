import { Router } from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "./recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe); // Route for updating a recipe
router.delete("/:id", deleteRecipe); // Route for deleting a recipe

export const RecipeRoutes = router;
