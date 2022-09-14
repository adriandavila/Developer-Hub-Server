import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

// Load config
// dotenv.config({ path: "./config/config.env" });
dotenv.config({ path: "../.env" });

const port = process.env.PORT || 8000;

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  session({
    secret: "SECRET KEY",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

import userRoutes from "./routes/userRoutes.js";
app.use("/api/user", userRoutes);

import notificationsRoutes from "./routes/notificationsRoutes.js";
app.use("/api/notifications", notificationsRoutes);

import apiLogRoutes from "./routes/apiLogRoutes.js";
app.use("/api/api-logs", apiLogRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
