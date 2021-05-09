import "dotenv/config";

import express from "express";
import cors from "cors";
import morgan from 'morgan'
import database from "./config/database.mjs";
import router from "./router.mjs";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url | :status | :response-time ms'))

app.use("/api", router);
app.use("/public", express.static("public/"));
app.use("/uploads", express.static("uploads/"));

app.get("/", function (req, res) {
  res.send({ root: true });
});

const SERVERPORT = process.env.SERVER_PORT || 3000;
app.listen(SERVERPORT, (err) => {
  if (err) process.exit(1);

  console.log(`Server is up and running on http://localhost:${SERVERPORT}`);
});
