const express = require('express');
const router = express.Router();
const { getAllMovies, addMovie } = require('../controllers/moviesController');
const validateMovieData = require('../middleware/validateMovies');

router.use(express.json());

router.post('/movies', validateMovieData, addMovie);

router.get('/movies', getAllMovies);

module.exports = router;