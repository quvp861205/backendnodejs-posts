//Inicio del servidor http://localhost:3000

const express =  require('express');
const config = require('../config.js');
const user =  require('./components/user/network');
const bodyParser = require("body-parser");
const auth = require('./components/auth/network'); //middleware para verificar autentificacion
const post = require('./components/post/network'); 
const errors = require("../network/errors"); //middleware para gestionar errores

//importar la documentacion de https://editor.swagger.io/
//http://localhost:3000/api-docs
const swaggerUI = require("swagger-ui-express"); 

const app =  express();

app.use(bodyParser.json());

const swaggerDoc = require("./swagger.json");


//RUTA PARA LA ENTIDAD USUARIO http://localhost:3000/api/user
app.use("/api/user", user);

//RUTA PARA LOGIN
app.use("/api/auth", auth);

//RUTA PARA ENTIDAD POST
app.use("/api/post", post);

//RUTA PARA LA DOCUMENTACION http://localhost:3000/api-docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));


app.use(errors);

//INICIO DEL SERVIDOR EN EL PUERTO ESPECIFICO
app.listen(config.api.port, () => {
    console.log("Api escuchando en el puerto ", config.api.port);
});