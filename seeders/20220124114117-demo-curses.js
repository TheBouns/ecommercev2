'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('curses', [{
      title: "programming 101",
      duration:"400h",
      price:15,
      img:"aisjaisjas",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
