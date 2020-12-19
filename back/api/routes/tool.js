const express = require("express");
const toolsController = require("../controllers/toolsController");
const router = express.Router();

//fetch tools
router.get("/", toolsController.fetchTools);
//fetch single tool
router.get("/:id", toolsController.fetchSingleTool);
//add new tool
router.post("/", toolsController.addTool);
//add a feature to a tool
router.post("/:id/addFeature", toolsController.addFeature);
//fetch features from a tool
router.get("/:id/features", toolsController.fetchFeatures);
//add a bug to a tool
router.post("/:id/addBug", toolsController.addBug);
//fetch bugs from a tool
router.get("/:id/bugs", toolsController.fetchBugs);

module.exports = router;
