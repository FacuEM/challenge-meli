const User = require("./User");
const Tool = require("./Tool");
const Feature = require("./Feature");
const Bug = require("./Bug");

Bug.belongsTo(Tool);
Feature.belongsTo(Tool);

module.exports = { User, Tool, Feature, Bug };
