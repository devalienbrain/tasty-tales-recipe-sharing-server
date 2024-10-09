import express, { Application, Request, Response } from "express";
import cors from "cors";
import recipeRoutes from "../src/app/modules/recipe/recipe.route"; // Adjust path as necessary

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/recipes", recipeRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default app;
