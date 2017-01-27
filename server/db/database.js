const pg = require('pg');
const config = require('config');
const logger = require('../logs/logger');

const dbConfig = config.get('db');
// consider adding logger here

const pool = new pg.Pool(dbConfig);

pool.connect((err) => {
  if (err) logger.err(err);
  logger.log('connected to database!');
});

module.exports = pool;
