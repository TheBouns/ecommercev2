'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: "bonsi",
      email:"bonsi@gmail.com",
      password:"password",
      rol:"admin",
      confirmed:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
    

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
