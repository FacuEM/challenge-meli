const express = require("express");
const priorityController = require("../controllers/priorityController");
const router = express.Router();

//add priority to feature
router.post("/addToFt/:id", priorityController.addPriorityFt);
//fetch the stars of a feature
router.get("/fetchFromFt/:id", priorityController.fetchStarsFt);
//add priority to bug
router.post("/addToBug/:id", priorityController.addPriorityBug);
//fetch the stars of a bug
router.get("/fetchFromBug/:id", priorityController.fetchStarsBug);

module.exports = router;
