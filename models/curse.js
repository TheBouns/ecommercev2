'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curse.belongsTo(models.User);
      Curse.belongsToMany(models.Categories, {
        through: "curses_has_categories"
      });
      Curse.belongsToMany(models.Orders, { through: 'Curses_Has_Orders' });
    }
  
    
  }
  Curse.init({
    serial_number: DataTypes.STRING,
    title: DataTypes.STRING,
    duration: DataTypes.STRING,
    price: DataTypes.FLOAT,
    img: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curse',
  });
  return Curse;
};