//Inicio del servidor http://localhost:3000

const express =  require('express');
const config = require('../config.js');
const user =  require('./components/user/network');

const app =  express();


//RUTAS DEL NAVEGADOR http://localhost:3000/api/use
app.use("/api/use", user);

//INICIO DEL SERVIDOR EN EL PUERTO ESPECIFICO
app.listen(config.api.port, () => {
    console.log("Api escuchando en el puerto ", config.api.port);
});