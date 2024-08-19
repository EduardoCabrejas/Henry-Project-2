// const axios = require ('axios');
const Movie = require ('../db/models/Movie');

module.exports = {
    getAllMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.error('Error al obtener películas', error);
        }
    }
};

