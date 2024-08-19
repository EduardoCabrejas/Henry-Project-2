const getUsers = (req, res) => {
    res.status(200).send('Se ejecuta el controlador en la ruta /users')
}

module.exports = getUsers;