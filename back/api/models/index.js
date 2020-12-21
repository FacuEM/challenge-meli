const User = require("./User");
const Tool = require("./Tool");
const Feature = require("./Feature");
const Bug = require("./Bug");
const Priority = require("./Priority");

Bug.belongsTo(Tool);
Feature.belongsTo(Tool);
Priority.belongsTo(Feature);
Priority.belongsTo(Bug);
Feature.hasMany(Priority);
Bug.hasMany(Priority);

module.exports = { User, Tool, Feature, Bug, Priority };
