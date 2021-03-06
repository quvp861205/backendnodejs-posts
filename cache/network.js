//SERVICIOS DE BD EN EL MICROSERVICIO MYSQL

const express = require('express');
const response =  require('../network/response'); //Funciones de retorno exito o error
const store =  require('../store/redis'); //Funciones de entrada para obtener datos
const router = express.Router(); //Rutear los servicios http

router.get("/:table", list);
router.get("/:table/:id", get);
router.post("/:table", upsert);

async function list(req, res, next) {
    const datos = await store.list(req.params.table);
    response.success(req, res, datos, 200);
}

async function get(req, res, next) {
    const datos = await store.get(req.params.table, req.params.id);
    response.success(req, res, datos, 200);
}

async function upsert(req, res, next) {
    const datos = await store.upsert(req.params.table, req.body);
    response.success(req, res, datos, 200);
}

module.exports = router;

