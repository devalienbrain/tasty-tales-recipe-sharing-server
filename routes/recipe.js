const express = require('express');
const { createRecipe, getRecipes, updateRecipe, deleteRecipe } = require('../controllers/recipe');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

router.post('/', verifyToken, createRecipe);
router.get('/', getRecipes);
router.put('/:id', verifyToken, updateRecipe);
router.delete('/:id', verifyToken, deleteRecipe);

// module.exports = router
export const recipeRoutes = router;