//SERVICIOS PARA LA ENTIDAD USUARIO

const express = require('express');
const response =  require('../../../network/response'); //Funciones de retorno exito o error
const controller =  require('./index'); //Funciones de entrada para obtener datos
const router = express.Router(); //Rutear los servicios http

router.post("/login", login);


function login(req, res, next) {
    controller.login(req.body.username, req.body.password).
        then((token) => {
            console.log("token: "+ token);
            response.success(req, res, token, 200)
        })
        .catch(next);
}

module.exports = router;