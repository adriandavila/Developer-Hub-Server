import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

// Load config
// dotenv.config({ path: "./config/config.env" });
dotenv.config({ path: "../.env" });

const port = process.env.PORT || 8000;

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

import testRoutes from "./routes/test.js";
app.use("/api/test", testRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
