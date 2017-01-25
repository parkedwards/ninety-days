const pg = require('pg');
const config = require('config');
const dbConfig = config.get('db');
// consider adding logger here

const pool = new pg.Pool(dbConfig);

pool.connect((err) => {
  if (err) console.error(err);
  console.log('connected to database!');
});

module.exports = pool;