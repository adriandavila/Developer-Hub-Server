import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { loginUser, getMe } from "../controllers/authController.js";

const router = express.Router();

// @route POST /api/auth/login
router.post("/login", loginUser);

// @route GET /api/auth/me
router.get("/me", protect, getMe);

export default router;
