"use strict";
const { Model } = require("sequelize");
const curses = require("./curses");
const curses_has_categories = require("./curses_has_categories");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.belongsToMany(models.Curses, {
        through: "curses_has_categories",
      });
    }
  }
  Categories.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categories",
    }
  );
  return Categories;
};
