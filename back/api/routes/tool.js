const express = require("express");
const toolsController = require("../controllers/toolsController");
const router = express.Router();

//fetch tools
router.get("/", toolsController.fetchTools);
//add new tool
router.post("/", toolsController.addTool);
//add a feature to a tool
router.post("/:id/addFeature", toolsController.addFeature);
//add a bug to a tool
router.post("/:id/addBug", toolsController.addBug);

module.exports = router;
