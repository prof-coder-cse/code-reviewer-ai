import express from "express";
import aiRoutes from "../src/routes/ai.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
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
