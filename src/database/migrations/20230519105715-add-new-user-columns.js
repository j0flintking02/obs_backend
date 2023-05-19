/* eslint-disable no-unused-vars */

const { tokenTypes } = require('../../config/tokens');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Users', 'documentId', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'documentImage', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'verificationStatus', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Users', 'documentId'),
      queryInterface.removeColumn('Users', 'documentImage'),
      queryInterface.removeColumn('Users', 'verificationStatus'),
    ]);
  },
};
