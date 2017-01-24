'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",[
      {
        firstname:"Eri",
        lastname:"Irawan",
        phone:"12345678901",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:"Isumi",
        lastname:"Karina",
        phone:"12345678901",
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ]
  )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
