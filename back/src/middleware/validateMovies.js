function validateMovieData(req, res, next) {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (![title, year, director, duration, genre, rate, poster ].every(Boolean)) {
        return res.status(400).json({ error: 'Todos los datos son obligatorios' });
    }

    if (isNaN(year) || year.toString().length !== 4) {
        return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos' });
    }

    const rateValue = parseFloat(rate);

    if (isNaN(rateValue) || rateValue <= 0 || rateValue > 10) {
        return res.status(400).json({ error: 'El rate debe ser un número de 0 a 10.' });
    }
    next();
}

module.exports = validateMovieData;

