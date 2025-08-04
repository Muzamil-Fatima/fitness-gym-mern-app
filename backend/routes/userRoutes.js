import express from "express";
import {
  createUser,
  softDeleteUser,
  AllUsers,
} from "../controllers/userController.js";
import upload from "../utils/upload.js";

const router = express.Router();

// routes
router.get("/", AllUsers);
router.post(
  "/",
  upload.fields([{ name: "profileImage", maxCount: 1 }]),
  createUser
);
router.delete("/:id", softDeleteUser);

export default router;