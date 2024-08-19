const addMovies = async () => {
    try {
        const title = document.getElementById('title').value;
        const year = document.getElementById('year').value;
        const director = document.getElementById('director').value;
        const duration = document.getElementById('duration').value;
        const genre = document.getElementById('genre').value;
        const rate = document.getElementById('rate').value;
        const poster = document.getElementById('poster').value;
        if (!title || !year || !director || !duration || !genre || !rate || !poster ) {
            alert("Hay datos incompletos. Por favor, rellene todos los campos.");
            return;
        }
        const movies = {title, year, director, duration, genre, rate, poster}
        const response = await axios.post ('http://localhost:3000/movies', movies);
        alert('Película agregada exitosamente.');
    } catch (err) {
        alert(err.response.data.error || 'Error inesperado al agregar la película. Por favor, inténtalo de nuevo.');
    }
}

const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', addMovies);

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.getElementById('director').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('poster').value = '';
});


