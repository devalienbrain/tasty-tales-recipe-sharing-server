import { z } from "zod";

export const recipeValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"), // Added validation for description
  ingredients: z
    .array(z.string())
    .nonempty("At least one ingredient is required"),
  instructions: z.string().min(1, "Instructions are required"),
  userId: z.string().min(1, "userId is required"),
  cookingTime: z.number().min(1, "Cooking time must be greater than 0"),
  imageUrl: z.string().optional(),
});
