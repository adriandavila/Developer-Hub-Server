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

export const seedApiErrorLogs = asyncHandler(async (req, res) => {
  try {
    const routeOptions = ["/element", "/element/update", "/data/gmti"];
    const methodOptions = ["GET", "POST", "PUT", "DELETE"];
    const httpOptions = [200, 400, 404, 500, 501];
    for (let i = 0; i < 10; i++) {
      const log = {
        datetime: Date.now(),
        route: routeOptions[i % routeOptions.length],
        method: methodOptions[i % methodOptions.length],
        http: httpOptions[i % httpOptions.length],
        error: "Brief error message",
        fullErrorMessage: "Full error message",
        stackTrace: "Stack Trace",
        payload: "Payload",
        headers: "Headers",
      };

      const test = await ApiLog.create(log);
      if (test) continue;
    }
  } catch {
    res.status(500).json({
      message: "Failed to seed api error logs. Fatal error encountered.",
    });
    stackTrace();
    return;
  }

  res.status(200).json({ message: "Successfully seeded 10 api error logs" });
});
