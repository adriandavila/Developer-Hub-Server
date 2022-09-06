import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getNotifications } from "../controllers/notificationsController.js";

const router = express.Router();

// @route GET /api/notifications/
router.get("/", protect, getNotifications);

export default router;
