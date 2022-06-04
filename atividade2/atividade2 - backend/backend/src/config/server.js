const express = require('express');

const server = express();

const cors = require('cors')
server.use(cors())

server.use(express.json());
server.listen(3000, () => console.log('Executando na porta 3000'))

module.exports = server