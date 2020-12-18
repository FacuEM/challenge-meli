const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const toolRoutes = require("./tool");

router.use("/auth", authRoutes);
router.use("/tools", toolRoutes);

module.exports = router;
