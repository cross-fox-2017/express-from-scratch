'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",[
        {
          firstname:"Bandi",
          lastname:"Aa",
          phone:"08123456789",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          firstname:"Kandi",
          lastname:"Bb",
          phone:"0898765432",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          firstname:"Candi",
          lastname:"Cc",
          phone:"0868564421",
          createdAt:new Date(),
          updatedAt:new Date()
        }])
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
