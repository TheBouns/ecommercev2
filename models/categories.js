"use strict";
const { Model } = require("sequelize");
const curses = require("./curse");
const curses_has_categories = require("./curse_has_categories");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.belongsToMany(models.Curse, {
        through: "curse_has_categories",
        as: "categories",
        foreignKey:"CategoriesId"
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
