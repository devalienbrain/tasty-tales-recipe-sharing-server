// const express = require("express");
import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  // const a = 10;
  // console.log(a);

  res.send("Hello World!");
});

// console.log(process.cwd());

export default app;
