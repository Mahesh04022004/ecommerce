require("dotenv").config();
const express = require("express");
const connectToDb = require("./src/db/connectToDB");
const errorHandler = require("./src/middleware/errorHandler");
const authRoutes = require("./src/routes/authRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use("/api/auth", authRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "User Service" });
});

// Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`user-service running on port ${port}`);
});
