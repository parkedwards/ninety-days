const express = require('express');
const {
  createUser,
  loginUser,
  getUserById,
  deleteUser,
} = require('./userCtrl');


const userRoute = module.exports = express.Router();


userRoute.post('/', createUser);
userRoute.post('/login', loginUser);

userRoute.get('/:user_id', getUserById);

userRoute.delete('/:user_id', deleteUser);
