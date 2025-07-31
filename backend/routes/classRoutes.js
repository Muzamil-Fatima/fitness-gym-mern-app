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
// get all services
router.get("/", getAllClasses);
// get by id
router.get("/:id", getClassById);
// update services
router.put(
  "/:id",
  upload.fields([
    { name: "classBanner", maxCount: 1 },
    { name: "classImage1", maxCount: 1 },
    { name: "classImage2", maxCount: 1 },
  ]),
  updateClass
);
// soft delete services
router.patch("/soft-delete/:id", softDeleteClass);
// restore services
router.patch("/restore/:id", restoreClass);
export default router;
