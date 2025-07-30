import express from "express";
import {
  createServices,
  getAllServices,
  getServiceById,
  updateServices,
  softDeleteServices,
  restoreServices,
} from "../controllers/serviceController.js";
import upload from "../utils/upload.js";

const router = express.Router();
// create services
router.post(
  "/",
  upload.fields([
    { name: "servicesIcon", maxCount: 1 },
    { name: "servicesImage", maxCount: 1 },
  ]),
  createServices
);
// get all services
router.get("/", getAllServices);
// get by id
router.get("/:id", getServiceById);
// update services
router.put(
  "/:id",
  upload.fields([
    { name: "servicesIcon", maxCount: 1 },
    { name: "servicesImage", maxCount: 1 },
  ]),
  updateServices
);
// soft delete services
router.patch("/soft-delete/:id", softDeleteServices);
// restore services
router.patch("/restore/:id", restoreServices);
export default router;
