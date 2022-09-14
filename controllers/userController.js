import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Get user list
// @route GET /api/user-list
// @access Private
export const getUserList = asyncHandler(async (req, res) => {
  const userList = await User.find();
  res.status(200).json({ userList });
});
