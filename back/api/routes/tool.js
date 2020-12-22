const express = require("express");
const toolsController = require("../controllers/toolsController");
const router = express.Router();

//fetch tools
router.get("/", toolsController.fetchTools);
//fetch single tool
router.get("/:id", toolsController.fetchSingleTool);
//add new tool
router.post("/", toolsController.addTool);

module.exports = router;
