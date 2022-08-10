import jwt_decode from "jwt-decode";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(400);
    throw new Error("Please add token");
  }

  const decodedToken = jwt_decode(token);
  const newUser = {
    email: decodedToken.email,
    name: decodedToken.name,
    picture: decodedToken.picture,
  };

  try {
    let user = await User.findOne({ email: newUser.email });

    if (user) {
      res.status(200);
    } else {
      user = await User.create(newUser);
      res.status(201);
    }
    res.json({
      email: user.email,
      name: user.name,
      picture: user.picture,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400);
    throw new Error("Login failed");
  }
});

// @desc    Get user data
// @route   POST /api/auth/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({ id: _id, name, email });
});

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Public
export const logout = asyncHandler(async (req, res) => {
  res.json({ message: "Logout route" });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
