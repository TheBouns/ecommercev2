'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('curse_has_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CurseId: {
        type: Sequelize.INTEGER,
        references: { model: "Curses", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      CategoriesId: {
        type: Sequelize.INTEGER,
        references: { model: "categories", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('curse_has_categories');
  }
};