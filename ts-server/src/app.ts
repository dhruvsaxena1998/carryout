import express from "express";

import cors from "cors";
import morgan from "morgan";

import routes from "./routes";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan(":method :url | :status | :response-time ms"));

app.use("/api", routes);
app.use("/public", express.static("public/"));
app.use("/uploads", express.static("uploads/"));

export default app;
