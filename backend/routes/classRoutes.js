import express from "express";
import upload from "../utils/upload.js";
import {
  createClasses,
  getAllClasses,
  softDeleteClass,
  getClassById,
  updateClass,
  restoreClass,
} from "../controllers/classController.js";

const router = express.Router();
// create class
router.post(
  "/",
  upload.fields([
    { name: "classBanner", maxCount: 1 },
    { name: "classImage1", maxCount: 1 },
    { name: "classImage2", maxCount: 1 },
  ]),
  createClasses
);
// get all classes
router.get("/", getAllClasses);
// get by id
router.get("/:id", getClassById);
router.get("/slug/:slug", getClassById);
// update classes
router.put(
  "/:id",
  upload.fields([
    { name: "classBanner", maxCount: 1 },
    { name: "classImage1", maxCount: 1 },
    { name: "classImage2", maxCount: 1 },
  ]),
  updateClass
);
// soft delete classes
router.patch("/soft-delete/:id", softDeleteClass);
// restore classes
router.patch("/restore/:id", restoreClass);
export default router;
