const { Feature, Priority, User } = require("../models/index");

const featureController = {
  //add a feature to a tool
  addFeature(req, res) {
    Feature.create(req.body)
      .then((feature) => feature.setTool(req.params.id))
      .then((feature) => feature.setUser(req.user))
      .then((feature) => {
        res.send(feature);
      })
      .catch((err) => res.status(401).send(err));
  },
  //fetch features from a tool
  fetchFeatures(req, res) {
    Feature.findAll({
      where: {
        ToolId: req.params.id,
      },
      include: [{ model: Priority }, { model: User }],
    }).then((features) => res.send(features));
  },
  //fetch single feature from a tool
  fetchSingleFeature(req, res) {
    Feature.findOne({
      where: {
        id: req.params.id,
      },
      include: { model: User },
    }).then((feature) => res.send(feature));
  },
  //feature completed
  completeFeature(req, res) {
    Feature.update(
      { completed: true, active: false },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      }
    )
      .then(() =>
        Feature.findAll({
          where: {
            ToolId: req.params.toolId,
          },
          include: [{ model: Priority }, { model: User }],
        })
      )
      .then((features) => res.send(features))
      .catch((err) => console.log(err));
  },
  //feature active
  activeFeature(req, res) {
    Feature.update(
      { active: true },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      }
    )
      .then(() =>
        Feature.findAll({
          where: {
            ToolId: req.params.toolId,
          },
          include: [{ model: Priority }, { model: User }],
        })
      )
      .then((features) => res.send(features))
      .catch((err) => console.log(err));
  },
};

module.exports = featureController;
