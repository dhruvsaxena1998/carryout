import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import path from 'path';

import connection from '@config/database'
import router from "@router";

const app = express();

app.use(cors());
app.use(express.json());

const publicDir = path.join(__dirname, "public");
app.use("/public", express.static(publicDir));

app.use("/api/v1/", router);

const PORT = process.env.PORT || 3000;

connection().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      return console.error(err);
    }

    console.log(`Server is up and running on http://localhost:${PORT}`);
  });
});
