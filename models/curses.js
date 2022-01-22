"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curses.belongsTo(models.User);
      Curses.belongsToMany(Categories, { through: curses_has_categories });
      Curses.belongsToMany(Orders, { through: Curses_Has_Orders });
    }
  }
  Curses.init(
    {
      serial_number: DataTypes.STRING,
      titel: DataTypes.STRING,
      duration: DataTypes.STRING,
      price: DataTypes.FLOAT,
      img: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Curses",
    }
  );
  return Curses;
};
