const { Router } = require('express');
const getAllMovies = require('../controllers/moviesController');

const moviesRoute = Router();

moviesRoute.get('/', getAllMovies);

module.exports = moviesRoute;