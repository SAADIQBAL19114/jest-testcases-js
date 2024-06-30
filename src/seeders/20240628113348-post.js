'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // First, fetch some user ids to associate with posts
    const users = await queryInterface.sequelize.query(`SELECT id from users;`);

    const userRows = users[0];

    await queryInterface.bulkInsert(
      'posts',
      [
        {
          body: 'This is the first post. It contains some interesting content.',
          userId: userRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body: "Here's another post. It's unique and can't be empty.",
          userId: userRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body: 'The third post is just as important as the first two!',
          userId: userRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
