import app from "./src/app.mjs";

const SERVERPORT = process.env.SERVER_PORT || 3000;
app.listen(SERVERPORT, (err) => {
  if (err) process.exit(1);

  console.log(`Server is up and running on http://localhost:${SERVERPORT}`);
});
