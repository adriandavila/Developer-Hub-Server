import express from "express";
import {
  getTest,
  setTest,
  updateTest,
  deleteTest,
} from "../controllers/testController.js";

const router = express.Router();

router.get("/", getTest);

router.post("/", setTest);

router.put("/:id", updateTest);

router.delete("/:id", deleteTest);

export default router;
