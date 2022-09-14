import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getApiErrorLogs,
  postApiErrorLog,
} from "../controllers/apiMonitorController.js";

const router = express.Router();

// @route GET /api/api-logs/
router.get("/", protect, getApiErrorLogs);

// @route POST /api/api-logs/
router.post("/", protect, postApiErrorLog);

export default router;
