import jwt from "jwt-decode";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Register new user
// @route   POST /api/auth
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, name } = req.body;
  if (!email || !name) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // Create use
  const user = await User.create({
    name,
    email,
    picture: req.body.picture ? req.body.picture : null,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc    Get user data
// @route   POST /api/auth/me
// @access  Public
export const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data" });
});
