//SERVICIOS PARA LA ENTIDAD USUARIO

const express = require('express');
const response =  require('../../../network/response');
const router = express.Router();


//http://localhost:3000/api/use
router.get("/", function(req, res){
    response.success(req, res, 'Todo correcto', 200);
});

module.exports = router;