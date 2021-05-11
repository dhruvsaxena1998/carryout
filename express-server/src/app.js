import "dotenv/config";

import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./router.js";
import database from "./config/database.js";

import isAuthorized from './middlewares/authorized.js'

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(":method :url | :status | :response-time ms"));

app.use("/api", router);
app.use("/public", express.static("public/"));
app.use("/uploads", express.static("uploads/"));

app.get("/", [isAuthorized(['admin'])], function (req, res) {
  const { hostname, protocol, state } = req;
  res.send({
    root: true,
    hostname,
    protocol,
    static: {
      public: "/public",
      uploads: "/uploads",
    },
    state,
    env: process.env.NODE_ENV || "development",
  });
});

export default app;
