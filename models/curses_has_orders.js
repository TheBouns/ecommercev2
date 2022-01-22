'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curses_has_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  curses_has_orders.init({
    CursesId: DataTypes.INTEGER,
    OrdersId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'curses_has_orders',
  });
  return curses_has_orders;
};