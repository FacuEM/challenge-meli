const { Tool, User, Feature, Bug } = require("../models/index");

const toolsController = {
  //fetch tools
  fetchTools(req, res) {
    Tool.findAll({
      include: [{ model: Feature }, { model: Bug }],
    }).then((tools) => res.send(tools));
  },
  //fetch single tool
  fetchSingleTool(req, res) {
    Tool.findOne({
      where: { id: req.params.id },
      include: [{ model: Feature }, { model: Bug }, { model: User }],
    }).then((tool) => res.send(tool));
  },
  //add new tool
  addTool(req, res) {
    Tool.create(req.body)
      .then((tool) => tool.setUser(req.user))
      .then((tool) => res.send(tool))
      .catch((err) => res.status(401).send(err));
  },
};

module.exports = toolsController;
