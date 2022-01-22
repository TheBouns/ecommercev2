"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.User);
      Orders.belongsToMany(models.Curses, { through: "Curses_Has_Orders" });
    }
  }
  Orders.init(
    {
      tracking_number: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
