const { Sequelize } = require('sequelize');

const config = require('../config/config');

const modelsPath = `${__dirname}/models`;

const options = {
  ...config.database,
  url: config.url,
  dialect: config.dialect,
  models: [modelsPath],
};

const database = new Sequelize(config.url, options);

module.exports = {
  database,
};
