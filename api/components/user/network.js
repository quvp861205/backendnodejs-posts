//SERVICIOS PARA LA ENTIDAD USUARIO

const express = require('express');
const response =  require('../../../network/response'); //Funciones de retorno exito o error
const controller =  require('./index'); //Funciones de entrada para obtener datos
const router = express.Router(); //Rutear los servicios http

router.get("/", list);
router.get("/:id", get);

//Obtener todos los usuarios
function list(req, res){
   
    controller.list().then((lista) => {
        response.success(req, res, lista, 200);
    }).catch((err) => {
        response.error(req, res, err.message, 500);
    });
    
}

//Obtener un usuario en especifico
function get(req, res){
    controller.get(req.params.id).then((user) => {
        response.success(req, res, user, 200);
    }).catch((err) => {
        response.error(req, res, err.message, 500);
    });    
}

//Insertar un usuario
function get(req, res){
    controller.upsert(req.body).then((user) => {
        response.success(req, res, user, 201);
    }).catch((err) => {
        response.error(req, res, err.message, 500);
    });    
}



module.exports = router;