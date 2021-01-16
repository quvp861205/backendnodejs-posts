//SERVICIOS PARA LA ENTIDAD USUARIO

const express = require('express');
const secure = require("./secure");
const response =  require('../../../network/response'); //Funciones de retorno exito o error
const controller =  require('./index'); //Funciones de entrada para obtener datos
const router = express.Router(); //Rutear los servicios http


router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.get("/remove/:id", remove);
router.put("/", secure("update"), upsert);

router.post("/follow/:id", secure("follow"), follow);
router.get('/:id/following', following);


//Obtener todos los usuarios
function list(req, res, next){
    controller.list().then((lista) => {
        response.success(req, res, lista, 200);
    }).catch(next);
    
}

//Obtener un usuario en especifico
function get(req, res, next){
    console.log(req.params.id);
    controller.get(req.params.id).then((user) => {
        response.success(req, res, user, 200);
    }).catch(next);
   
}

//Insertar un usuario
function upsert(req, res, next){
    controller.upsert(req.body).then((user) => {
        response.success(req, res, user, 201);
    }).catch(next);

}

//Remover un usuario
function remove(req, res, next){
    controller.remove(req.params.id).then((user) => {
        response.success(req, res, user, 201);
    }).catch(next);
  
}


//Seguir a un usuario
function follow(req, res, next){

    controller.follow(req.user.id, req.params.id).then((data) => {
        response.success(req, res, data, 201);
    }).catch(next);
  
}

//ver a quien esta siguiendo un usuario
function following(req, res, next) {
	return controller.following(req.params.id)
		.then( (data) => {
			return response.success(req, res, data, 200);
		})
		.catch(next);
}



module.exports = router;