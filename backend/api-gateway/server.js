require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const userRoutes = require("./src/routes/user.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log("API-GATEWAY runnnin on port", port);
});
