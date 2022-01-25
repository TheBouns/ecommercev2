'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curse_has_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  curse_has_categories.init({
    CursesId: DataTypes.INTEGER,
    CategoriesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'curse_has_categories',
  });
  return curse_has_categories;
};