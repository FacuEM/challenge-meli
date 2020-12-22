const express = require("express");
const featureController = require("../controllers/featureController");
const router = express.Router();

//add a feature to a tool
router.post("/:id/addFeature", featureController.addFeature);
//fetch features from a tool
router.get("/:id/features", featureController.fetchFeatures);
//fetch single feature from a tool
router.get("/:id/singleFeature", featureController.fetchSingleFeature);
//complete feature
router.put("/:id/complete/:toolId", featureController.completeFeature);
//active feature
router.put("/:id/active/:toolId", featureController.activeFeature);

module.exports = router;
