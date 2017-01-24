'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [
      {firstname: "John",lastname: "Doe",phone: "081234567890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "John",lastname: "Don",phone: "081234767890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "Don",lastname: "Jon",phone: "08123489890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "Andi",lastname: "Doe",phone: "081234587890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "John",lastname: "Andi",phone: "081223567890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "John",lastname: "Hadi",phone: "081234127890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "Hadi",lastname: "Doe",phone: "081278567890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "John",lastname: "Ari",phone: "088734567890",createdAt: Date.now(),updatedAt: Date.now()},
      {firstname: "Ari",lastname: "Doe",phone: "021234567890",createdAt: Date.now(),updatedAt: Date.now()}
    ])
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
