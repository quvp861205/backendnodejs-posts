//Inicio del servidor http://localhost:3000

const express =  require('express');
const config = require('../config.js');
const user =  require('./components/user/network');
const bodyParser = require("body-parser");

//importar la documentacion de https://editor.swagger.io/
//http://localhost:3000/api-docs
const swaggerUI = require("swagger-ui-express"); 

const app =  express();

app.use(bodyParser.json());

const swaggerDoc = require("./swagger.json");


//RUTAS DEL NAVEGADOR http://localhost:3000/api/use
app.use("/api/use", user);

//RUTA PARA LA DOCUMENTACION http://localhost:3000/api-docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

//INICIO DEL SERVIDOR EN EL PUERTO ESPECIFICO
app.listen(config.api.port, () => {
    console.log("Api escuchando en el puerto ", config.api.port);
});