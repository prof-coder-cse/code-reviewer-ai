import express from "express";
import aiRoutes from "../src/routes/ai.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://code-reviewer-ai-1-7rkp.onrender.com",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/ai", aiRoutes);
export default app;
