const ctrl = require('./controller');
const store = require('../../../store/dummy');


module.exports = ctrl(store);

//FUNCIONES PARA EL MANEJO DE LA ALTA DE USUARIOS, LOGIN Y LOGOUT