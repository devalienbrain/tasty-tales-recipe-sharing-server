const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, cookingTime, image } = req.body;
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      cookingTime,
      image,
      createdBy: req.user.id,
    });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('createdBy', 'username');
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    if (recipe.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    Object.assign(recipe, req.body);
    await recipe.save();
    res.json({ message: 'Recipe updated successfully', recipe });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    if (recipe.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await recipe.remove();
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
