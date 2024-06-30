'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          uuid: uuidv4(),
          name: 'John Doe',
          email: 'john@example.com',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: uuidv4(),
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
