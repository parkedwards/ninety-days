const db = require('./userModel');
const logger = require('../logs/logger');

// to add:
// validate service for encrypting + decrypting passwords

const userCtrl = {

  createUser: (req, res) => {
    const { email, password, first_name, last_name } = req.body;

    db.query(`
      INSERT INTO users (email, password, first_name, last_name)
      VALUES (${email}, ${password}, ${first_name}, ${last_name})
    `, (err) => {
      if (err) logger.error(err);
      else console.log('user created');
    });
  },

  loginUser: (req, res) => {
    const { email } = req.body;

    db.query(`SELECT password FROM users WHERE email=${email} LIMIT 1`, (err, user) => {
      if (err) {
        logger.error(err);
        return res.status(400).end();
      }

      // if no users found
      if (!user.rows[0]) return res.status(401).end();

      const password = user.rows[0].password;
      if (req.body.passwords === password) {
        // redirect to home
        return res.status(201).end();
      }

      // if passwords don't match
      return res.status(401).end();
    });
  },
};

module.exports = userCtrl;
