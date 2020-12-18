const { Tool, Feature, Bug } = require("../models/index");

const toolsController = {
  //fetch tools
  fetchTools(req, res) {
    Tool.findAll().then((tools) => res.send(tools));
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
  //add a bug to a tool
  addBug(req, res) {
    Bug.create(req.body)
      .then((bug) => bug.setTool(req.params.id))
      .then((bug) => {
        res.send(bug);
      })
      .catch((err) => console.log(err));
  },
};

module.exports = toolsController;
