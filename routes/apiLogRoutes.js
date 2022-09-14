import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getApiLogs,
  getChartData,
  postApiLog,
  deleteApiLog,
  seedApiErrorLogs,
} from "../controllers/apiLogController.js";

const router = express.Router();

// @route GET /api/api-logs/
router.get("/", protect, getApiLogs);

// @rpite GET api/api-logs/chart-data
router.get("/chart-data", protect, getChartData);

// @route POST /api/api-logs/
router.post("/", protect, postApiLog);

// @route DELETE /api/api-logs/:id
router.delete("/:id", protect, deleteApiLog);

// @route GET /api/api-logs/seed
router.get("/seed", protect, seedApiErrorLogs);

export default router;
