/* eslint-disable no-unused-vars */

const { tokenTypes } = require('../../config/tokens');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Users', 'profileImage', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'gender', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'age', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'dob', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'maritalStatus', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'nationality', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Users', 'profileImage'),
      queryInterface.removeColumn('Users', 'gender'),
      queryInterface.removeColumn('Users', 'age'),
      queryInterface.removeColumn('Users', 'dob'),
      queryInterface.removeColumn('Users', 'maritalStatus'),
      queryInterface.removeColumn('Users', 'nationality'),
    ]);
  },
};
