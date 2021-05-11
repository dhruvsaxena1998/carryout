import "dotenv/config";
import app from "./app";

const HOST = process.env.HOST || "localhost";
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is up and running at http://localhost:${PORT}`);
});
