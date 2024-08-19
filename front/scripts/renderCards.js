const createMovieCard = require('./createMovieCard');

const moviesContainer = document.getElementById('movies-container');

function renderCards(data) {
    moviesContainer.innerHTML = '';

    data.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesContainer.appendChild(movieCard);
    });
}

module.exports = { renderCards };