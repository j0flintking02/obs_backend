const Sequelize = require('sequelize');
const { database } = require('../index');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = database;

db.user = require('./user')(database, Sequelize);
db.token = require('./token')(database, Sequelize);

module.exports = db;
