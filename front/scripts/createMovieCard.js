function createMovieCard(movie) {

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie');

    const posterImg = document.createElement('img');
    posterImg.src = movie.poster;
    posterImg.alt = movie.title;
    movieCard.appendChild(posterImg);

    const title = document.createElement('h3');
    title.textContent = movie.title;
    movieCard.appendChild(title);

    const year = document.createElement('p');
    year.textContent = 'Year: ' + movie.year;
    movieCard.appendChild(year);

    const director = document.createElement('p');
    director.textContent = 'Director: ' + movie.director;
    movieCard.appendChild(director);

    const duration = document.createElement('p');
    duration.textContent = 'Duration: ' + movie.duration;
    movieCard.appendChild(duration);

    const genre = document.createElement('p');
    genre.textContent = 'Genre: ' + (Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre);
    movieCard.appendChild(genre);

    const rate = document.createElement('p');
    rate.textContent = 'Rate: ' + movie.rate;
    movieCard.appendChild(rate);

    const dltBtn = document.createElement('button');
    dltBtn.textContent = 'Eliminar';
    movieCard.appendChild(dltBtn);

    dltBtn.addEventListener('click', (event) => {
        event.preventDefault();
        movieCard.remove();
    });

    return movieCard;
}

module.exports = createMovieCard;