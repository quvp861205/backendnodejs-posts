//MICROSERVICIO DE MYSQL EN PUERTO 30001

//Ejemplos: 
// Listar: http://localhost:3001/user
// Obtener en especifico: http://localhost:3001/user/NOMUWpvTF8FsrgwijziOj

const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

app.use("/", router);

app.listen(config.mysql_service.port, () => {
    console.log('Servicio de mysql escuchando en el puerto ', config.mysql_service.port)
});