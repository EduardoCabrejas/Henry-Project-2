const { Router } = require('express');
const getUsers = require('../controllers/userController');

const userRoute = Router();

userRoute.get ('/', getUsers);

module.exports = userRoute;