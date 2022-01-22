"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("curses_has_categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CursesId: {
        type: Sequelize.INTEGER,
        references: { model: "Curses", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      CategoriesId: {
        type: Sequelize.INTEGER,
        references: { model: "Categories", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("curses_has_categories");
  },
};
