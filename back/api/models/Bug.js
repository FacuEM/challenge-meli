const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Bug extends Model {}

Bug.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize: db,
    modelName: "Bug",
  }
);

module.exports = Bug;
