import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello From hostinger");
});

app.get("/users", (req, res) => {
  try {
  res.send("Hello From hostinger users");

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

export default app;
