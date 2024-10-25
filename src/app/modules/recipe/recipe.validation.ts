import { z } from "zod";

export const recipeValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"), // Added validation for description
  ingredients: z.array(z.string()),
  instructions: z.string().min(1, "Instructions are required"),
  createdBy: z.string().optional(),
  cookingTime: z.number().min(1, "Cooking time must be greater than 0"),
  image: z.string().optional(),
});
