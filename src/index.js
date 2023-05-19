const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const { database } = require('./database');

let server;
database.authenticate().then(() => {
  logger.info('Connected to Postgres');
  server = app.listen(config.app.port, () => {
    logger.info(`Listening to port ${config.app.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
