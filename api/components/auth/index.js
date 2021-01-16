const ctrl = require('./controller');
//const store = require('../../../store/dummy');
const store = require('../../../store/mysql');


module.exports = ctrl(store);

//FUNCIONES PARA EL MANEJO DE LA ALTA DE USUARIOS, LOGIN Y LOGOUT