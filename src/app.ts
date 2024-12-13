// const express = require("express");
import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://tasty-tales-recipe-sharing-client.vercel.app",
      ],
    })
  );

app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
    res.send("Hello 'TastyTales: Recipe Sharing Online Platform' World!");
});

// console.log(process.cwd());

export default app;
