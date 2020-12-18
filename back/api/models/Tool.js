const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Tool extends Model {}

Tool.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Tool",
  }
);

module.exports = Tool;
