import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { loginUser, getMe } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
