import asyncHandler from "express-async-handler";
import ApiLog from "../models/apiLogModel.js";

// @desc Get all api logs
// @route GET /api/api-logs
// @access Private
export const getApiLogs = asyncHandler(async (req, res) => {
  const apiErrorLogs = await ApiLog.find();
  res.status(200).json({ apiErrorLogs });
});

// @desc Add a new api log
// @route POST /api/api-logs
// @access Private
export const postApiLog = asyncHandler(async (req, res) => {
  try {
    const newLog = req.body;
    await ApiLog.create(newLog);
    res.status(200).json({ message: "Successfully added log to the DB!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc delete an api log
// @route DELETE /api/api-logs/:id
// @access Private
export const deleteApiLog = asyncHandler(async (req, res) => {
  try {
    const targetID = req.params.id;
    if (targetID) {
      await ApiLog.deleteOne({ _id: targetID });
    }
    res.status(200).json({ message: "Successfully deleted API log!" });
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

// @desc seed some api logs
// @route GET /api/api-logs/seed
// @access Private
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
