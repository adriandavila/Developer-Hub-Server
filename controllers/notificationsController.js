import asyncHandler from "express-async-handler";
import Notification from "../models/notificationModel.js";

// @desc Get user notifications
// @route GET /api/notificaions
// @access Private
export const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find({ user: req.user.id });
  res.status(200).json({ notifications });
});

// @desc Add a new notification
// @route POST /api/notifications
// @access Private
export const sendNotification = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "POST notification" });
});
