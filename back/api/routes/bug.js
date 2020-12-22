const express = require("express");
const bugController = require("../controllers/bugController");
const router = express.Router();

//add a bug to a tool
router.post("/:id/addBug", bugController.addBug);
//fetch bugs from a tool
router.get("/:id/bugs", bugController.fetchBugs);
//fetch single bug from a tool
router.get("/:id/singleBug", bugController.fetchSingleBug);
//complete feature
router.put("/:id/complete/:toolId", bugController.completeBug);
//complete feature
router.put("/:id/active/:toolId", bugController.activeBug);

module.exports = router;
