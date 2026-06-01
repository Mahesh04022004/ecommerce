const express = require("express");
const router = express.Router();
const { proxyTo } = require("../middleware/proxy");

// All user routes go to user-service on port 3001
router.use("/", proxyTo(process.env.USER_SERVICE_URL));

module.exports = router;
