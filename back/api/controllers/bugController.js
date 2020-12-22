const { Bug, Priority, User } = require("../models/index");

const bugController = {
  //add a bug to a tool
  addBug(req, res) {
    Bug.create(req.body)
      .then((bug) => bug.setTool(req.params.id))
      .then((bug) => bug.setUser(req.user))
      .then((bug) => {
        res.send(bug);
      })
      .catch((err) => res.status(401).send(err));
  },
  //fetch bugs from a tool
  fetchBugs(req, res) {
    Bug.findAll({
      where: {
        ToolId: req.params.id,
      },
      include: [{ model: Priority }, { model: User }],
    }).then((bugs) => res.send(bugs));
  },
  //fetch single bug from a tool
  fetchSingleBug(req, res) {
    Bug.findOne({
      where: {
        id: req.params.id,
      },
      include: { model: User },
    }).then((bug) => res.send(bug));
  },
  //bug completed
  completeBug(req, res) {
    Bug.update(
      { completed: true },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      }
    )
      .then(() =>
        Bug.findAll({
          where: {
            ToolId: req.params.toolId,
          },
          include: [{ model: Priority }, { model: User }],
        })
      )
      .then((bugs) => res.send(bugs))
      .catch((err) => console.log(err));
  },
  //bug active
  activeBug(req, res) {
    Bug.update(
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
        Bug.findAll({
          where: {
            ToolId: req.params.toolId,
          },
          include: [{ model: Priority }, { model: User }],
        })
      )
      .then((bugs) => res.send(bugs))
      .catch((err) => console.log(err));
  },
};

module.exports = bugController;
