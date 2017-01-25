const db = require('../db/database');

db.query(`
  CREATE TABLE IF NOT EXISTS "users" (
    _id serial primary key,
    email varchar(256) unique not null,
    password varchar(256) not null,
    first_name varchar(256) not null,
    last_name varchar(256) not null
  )`, (err) => {
    if (err) console.error(err);
  });

module.exports = db;