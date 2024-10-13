import { Router } from "express";
import { createRecipe, getAllRecipes } from "./recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes);

// Additional routes for update, delete, etc.

export default router;
