const { Tool, Feature, Bug, Priority } = require("../models/index");

const priorityController = {
  //add priority to feature
  addPriorityFt(req, res) {
    Priority.create(req.body)
      .then((stars) => stars.setFeature(req.params.id))
      .then((stars) => res.send(stars))
      .catch((err) => console.log(err));
  },
  //fetch the stars of a feature
  fetchStarsFt(req, res) {
    Priority.findAll({
      where: {
        featureId: req.params.id,
      },
      order: [["createdAt", "DESC"]],
    })
      .then((stars) => res.send(stars))
      .catch((err) => console.log(err));
  },
  //add priority to bug
  addPriorityBug(req, res) {
    Priority.create(req.body)
      .then((stars) => stars.setBug(req.params.id))
      .then((stars) => res.send(stars))
      .catch((err) => console.log(err));
  },
  //fetch the stars of a bug
  fetchStarsBug(req, res) {
    Priority.findAll({
      where: {
        bugId: req.params.id,
      },
      order: [["createdAt", "DESC"]],
    })
      .then((stars) => res.send(stars))
      .catch((err) => console.log(err));
  },
};

module.exports = priorityController;
