const Movie = require('./movieServices');

async function checkMovies(req, res, next) {
    try {
        const moviesData = await getAllMovies();
        
        const movies = moviesData.map(movie => new Movie(movie.title, movie.poster, movie.director));

        req.movies = movies;

        next();
    } catch (error) {
        console.error('Error al obtener películas', error);
        res.status(500).json({ message: 'Error al obtener películas' });
    }
}

module.exports = checkMovies;

// class Movie {
//     constructor({title, poster, director}){
//         if(!title || !poster || !director)
//             throw new Error('Todos los campos son obligatorios');
//         this.title = title;
//         this.poster = poster;
//         this.director = director;
//     }
// }
// module.exports = Movie;