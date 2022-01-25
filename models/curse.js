"use strict";
const { Model, INTEGER } = require("sequelize");
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
        through: "curse_has_categories",
        as: "categories",
        foreignKey:"CategoriesId"
      });
      Curse.belongsToMany(models.Order, {
        through: "curses_has_orders",
        as: "orders",
        foreignKey: "OrderId",
      });
    }
  }
  Curse.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Did u forget the name??",
          },
        },
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Hoy much time i need to learn?",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Introduce a price",
          },
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Set a backgroung image",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    },
    {
      sequelize,
      modelName: "Curse",
    }
  );
  return Curse;
};
