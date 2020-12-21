const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Priority extends Model {}

Priority.init(
  {
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
    },
  },
  {
    sequelize: db,
    modelName: "Priority",
  }
);

module.exports = Priority;
