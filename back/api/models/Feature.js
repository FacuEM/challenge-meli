const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Feature extends Model {}

Feature.init(
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
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: db,
    modelName: "Feature",
  }
);

module.exports = Feature;
