import asyncHandler from "express-async-handler";
import ApiLog from "../models/apiLogModel.js";

// @desc Get all api error logs
// @route GET /api/api-logs
// @access Private
export const getApiErrorLogs = asyncHandler(async (req, res) => {
  const apiErrorLogs = await ApiLog.find();
  res.status(200).json({ apiErrorLogs });
});

// @desc Add a new api error log
// @route POST /api/api-logs
// @access Private
export const postApiErrorLog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "POST api error log" });
});
