const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const toolRoutes = require("./tool");
const priorityRoutes = require("./priority");
const featureRoutes = require("./feature");
const bugRoutes = require("./bug");

router.use("/auth", authRoutes);
router.use("/tools", toolRoutes);
router.use("/stars", priorityRoutes);
router.use("/feature", featureRoutes);
router.use("/bug", bugRoutes);

module.exports = router;
