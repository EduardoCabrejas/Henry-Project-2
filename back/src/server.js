// ? Inicialización
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/indexRoute')

const server = express()

server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

const miMiddleware = (req, res, next) => {
    console.log(`Hemos recibido una request de tipo ${req.method} al endpoint ${req.url}`);
    next()
}

server.use(miMiddleware)

server.use(router);

module.exports = server;