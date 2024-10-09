import { Router } from "express";
import { createRecipe, getAllRecipes } from "./recipe.controller";
import recipeRoutes from "./recipe.route";
const router = Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes);

// Additional routes for update, delete, etc.

export default router;
