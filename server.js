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

app.get("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.send({ id });
  } catch (error) {
    console.log("Error", error);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

export default app;
