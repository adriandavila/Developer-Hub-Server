import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserList } from "../controllers/userController.js";

const router = express.Router();

// @route GET /api/user/user-list
router.get("/user-list", protect, getUserList);

export default router;
