//Modulos requeridos
require('dotenv').config();
const express = require('express');
const http = require('http');
const helmet = require('helmet');
var compression = require('compression');
const { v4: uuidv4 } = require('uuid');

const app = express();

//app.use(helmet()); //agrega cabeceras para mejorar la seguridad.
app.use(compression()); //comprimir la respuesta del servidor al cliente en un archivo gzip. Para mejorar la transferencia y la velocidad

const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
app.use(express.static('./public'));

app.get('/api/get-uuid', function (req, res) {
    //console.log(process.env.HTTP_PORT, process.env.IP);
    res.send(uuidv4());
})

app.get('*', function (req, res) {
    res.status(404).send('404 Not found (.. ) ( ..)');
})

