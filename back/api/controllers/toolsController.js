const { Tool, Feature, Bug } = require("../models/index");

const toolsController = {
  //fetch tools
  fetchTools(req, res) {
    Tool.findAll().then((tools) => res.send(tools));
  },
  //fetch single tool
  fetchSingleTool(req, res) {
    Tool.findOne({ where: { id: req.params.id } }).then((tool) =>
      res.send(tool)
    );
  },
  //add new tool
  addTool(req, res) {
    Tool.create(req.body).then((tool) => res.send(tool));
  },
  //add a feature to a tool
  addFeature(req, res) {
    Feature.create(req.body)
      .then((feature) => feature.setTool(req.params.id))
      .then((feature) => {
        res.send(feature);
      })
      .catch((err) => console.log(err));
  },
  //fetch features from a tool
  fetchFeatures(req, res) {
    Feature.findAll({
      where: {
        ToolId: req.params.id,
      },
    }).then((features) => res.send(features));
  },
  //fetch single feature from a tool
  fetchSingleFeature(req, res) {
    Feature.findOne({
      where: {
        id: req.params.id,
      },
    }).then((feature) => res.send(feature));
  },
  //add a bug to a tool
  addBug(req, res) {
    Bug.create(req.body)
      .then((bug) => bug.setTool(req.params.id))
      .then((bug) => {
        res.send(bug);
      })
      .catch((err) => console.log(err));
  },
  //fetch bugs from a tool
  fetchBugs(req, res) {
    Bug.findAll({
      where: {
        ToolId: req.params.id,
      },
    }).then((bugs) => res.send(bugs));
  },
  //fetch single bug from a tool
  fetchSingleBug(req, res) {
    Bug.findOne({
      where: {
        id: req.params.id,
      },
    }).then((bug) => res.send(bug));
  },
};

module.exports = toolsController;
