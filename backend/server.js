import express from "express";
import connectDB from "../backend/config/database.js";

const app = express();
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/fitness";
const port = process.env.PORT || 8000;

connectDB(DATABASE_URL);

app.listen(port, () => console.log(`Server listen on port ${port} `));
