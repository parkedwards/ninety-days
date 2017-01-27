const db = require('../db/database');
const logger = require('../logs/logger');

db.query(`
  CREATE TABLE IF NOT EXISTS "users" (
    _id serial primary key,
    username varchar(256) unique not null,
    password varchar(256) not null,
    first_name varchar(256) not null,
    last_name varchar(256) not null
  )`, (err) => {
  if (err) logger.error(err);
});

module.exports = db;
