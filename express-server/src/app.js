import "dotenv/config";

import express from "express";
import cors from "cors";

import connection from "@config/database";
import router from "@router";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/public", express.static("public/"));
app.use("/uploads", express.static("public/uploads/"));

app.use("/api/v1/", router);

const PORT = process.env.PORT || 5000;
connection.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  connection.test();
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is up and running on http://localhost:${PORT}`);
  });
});
