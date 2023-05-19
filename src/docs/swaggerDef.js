const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Obs backend',
    version,
  },
  servers: [
    {
      url: `http://localhost:${config.app.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
