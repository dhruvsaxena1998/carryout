import express from "express";

import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import { VerifyDB } from "./config/database";

const app = express();

// Middleware
app.use(cors());
app.use(morgan(":method :url | :status | :response-time ms"));

app.use("/api", routes);
app.use("/public", express.static("public/"));
app.use("/uploads", express.static("uploads/"));

VerifyDB().then((isConnected) => {
  if (!isConnected) {
    console.log("❌ Connection failed!");
    process.exit(1);
  }

  console.log("🐋 Connected successfully");
});

export default app;
