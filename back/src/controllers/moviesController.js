const Movie = require('../db/models/Movie');
const movieServices = require('../services/movieServices');

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieServices.getAllMovies();
        res.json(movies);
    } catch (err) {
        console.error('Error al obtener las películas:', err.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const addMovie = async (req, res) => {
    console.log(req.body);
    try {
        const movieData = req.body;
        const newMovie = await Movie.create(movieData);
        res.status(201).json(newMovie);
    } catch (err) {
        console.error('Error al agregar la película:', err.message);
        res.status(400).json({ error: err.message });
    }
};


module.exports = {
    getAllMovies,
    addMovie
};
