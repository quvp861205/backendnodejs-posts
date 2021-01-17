//SERVICIOS PARA LA ENTIDAD POST

const express = require('express');
const response =  require('../../../network/response'); //Funciones de retorno exito o error
const controller =  require('./index'); //Funciones de entrada para obtener datos
const router = express.Router(); //Rutear los servicios http
const secure = require("./secure");


router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.get("/remove/:id", remove);
router.put("/", secure("update"), upsert);

function list(req, res, next) {
    controller.list().then((data) => {
        response.success(req, res, data, 200);
    }).catch(next);
    
}

//Obtener un post en especifico
function get(req, res, next){
    controller.get(req.params.id).then((user) => {
        response.success(req, res, user, 200);
    }).catch(next);
   
}

//Insertar un post
function upsert(req, res, next){
    controller.upsert(req.body).then((user) => {
        response.success(req, res, user, 201);
    }).catch(next);

}

//Remover un post
function remove(req, res, next){
    controller.remove(req.params.id).then((user) => {
        response.success(req, res, user, 201);
    }).catch(next);
  
}

module.exports = router;