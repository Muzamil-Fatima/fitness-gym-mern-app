import express from "express";
import { createAppointment } from "../controllers/appointmentController.js";
const router = express.Router();

router.post("/", upload.fields([{ name: "" }]), createAppointment);
export default router;
