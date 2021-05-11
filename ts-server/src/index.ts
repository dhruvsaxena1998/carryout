import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HelloWorld");
});

app.listen(3000, () => {
  console.log(`Server is up and running on http://localhost:3000`);
});
