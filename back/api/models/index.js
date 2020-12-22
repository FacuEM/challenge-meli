const User = require("./User");
const Tool = require("./Tool");
const Feature = require("./Feature");
const Bug = require("./Bug");
const Priority = require("./Priority");

//Tool
Tool.belongsTo(User);
Tool.hasMany(Feature);
Tool.hasMany(Bug);
//Feature
Feature.belongsTo(Tool);
Feature.belongsTo(User);
Feature.hasMany(Priority);
//Bug
Bug.belongsTo(Tool);
Bug.belongsTo(User);
Bug.hasMany(Priority);
//Priority
Priority.belongsTo(Feature);
Priority.belongsTo(Bug);
//User
User.hasMany(Tool);
User.hasMany(Bug);
User.hasMany(Feature);

module.exports = { User, Tool, Feature, Bug, Priority };
