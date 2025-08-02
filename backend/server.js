import express from "express";
import connectDB from "./config/database.js";
import classRouter from "./routes/classRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import servicesRoute from "./routes/servicesRoutes.js";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";

const app = express();
// allow request for all origin
app.use(cors());

// for dirName
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// server upload picture statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
app.use("/api/users", userRoutes);
app.use("/api/services", servicesRoute);
app.use("/api/classes", classRouter);
// server listen
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/fitness";
const port = process.env.PORT || 8000;

connectDB(DATABASE_URL);

app.listen(port, () => console.log(`Server listen on port ${port} `));
