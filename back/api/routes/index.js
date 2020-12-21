const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const toolRoutes = require("./tool");
const priorityRoutes = require("./priority");

router.use("/auth", authRoutes);
router.use("/tools", toolRoutes);
router.use("/stars", priorityRoutes);

module.exports = router;
