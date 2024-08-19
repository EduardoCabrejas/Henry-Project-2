const { renderCards } = require ('./renderCards');
const axios = require ('axios');
const fetchMovies = async () => {
    try {
        const response = await axios.get ('http://localhost:3000/movies');
        const data = response.data;
        renderCards(data);
    } catch (err) {
    console.log (err.message);
    };
}    
fetchMovies();

// $.get('https://students-api.up.railway.app/movies', (data, status) => {
//     renderCards(data);
// });


