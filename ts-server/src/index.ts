import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is up and running at http://localhost:${PORT}`);
});
