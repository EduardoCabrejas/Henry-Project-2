//* Hacer la conx. a la base de datos en una función y exportarla */
require('dotenv').config();
const mongoose = require('mongoose');

const conDb = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexión a la base de datos exitosa');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
        throw err;
    }
}

module.exports = conDb;