const auth = require("../../../auth");

//MIDDLEWARE PARA VALIDAR SI UN USUARIO ESTA AUTENTICADO Y PUEDA CONSUMIR RECURSOS

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        switch (action) {
            case 'update': 
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;
            default: next();
        }
    }

    return middleware;
}