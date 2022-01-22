"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John",
        email: "example@example.com",
        password: "123456",
        rol: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John Salchichon",
        email: "Salchichon@example.com",
        password: "elbananero",
        rol: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pepas",
        email: "pepas@example.com",
        password: "13456",
        rol: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lamar",
        email: "Lamar@example.com",
        password: "123456",
        rol: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
