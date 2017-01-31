const db = require('./userModel');
const logger = require('../logs/logger');

// to add:
// validate service for encrypting + decrypting passwords

const userCtrl = {

  createUser: (req, res) => {
    const user = req.body;
    // const {
    //   username,
    //   password,
    //   first_name,
    //   last_name,
    //   email,
    // } = req.body;

    db.query('insert into users (_id, username, password, first_name, last_name, email) values (default, $1, $2, $3, $4, $5)', [user.username, user.password, user.first_name, user.last_name, user.email], (err) => {
      if (err) {
        logger.error(err);
        return res.status(400).end();
      }
      // req.session.key = user.username; // something YM did for user sessions
      return res.status(201).end();
    });
    // db.query(`
    //   INSERT INTO users (username, password, first_name, last_name, email)
    //   VALUES (${user.username}, ${user.password}, ${user.first_name}, ${user.last_name}, ${user.email})
    // `, (err) => {
    //   if (err) {
    //     logger.error(err);
    //     return res.status(400).end();
    //   }
    //   req.session.key = username; // something YM did for user sessions
    //   return res.status(201).end();
    // });
  },

  deleteUser: (req, res) => {
    db.query(`DELETE FROM users WHERE _id=${req.params.user_id}`, (err) => {
      if (err) {
        logger.error(err);
        return res.status(400).end();
      }

      return res.status(204).end();
    });
  },

  getUserById: (req, res) => {
    db.query(`SELECT * FROM users WHERE _id=${req.params.user_id} LIMIT 1`, (err, users) => {
      if (err) {
        logger.error(err);
        return res.status(400).end();
      }
      return res.status(200).send(users.rows);
    });
  },

  loginUser: (req, res) => {
    const { username } = req.body;

    db.query(`SELECT password FROM users WHERE username=${username} LIMIT 1`, (err, user) => {
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
