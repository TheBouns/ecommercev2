require('dotenv').config()
const bcrypt = require("bcryptjs")
const password = process.env.BONSIPASS;
const hash = bcrypt.hashSync(password,10)
'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: "bonsi",
      email:"bonsi@gmail.com",
      password:hash,
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
