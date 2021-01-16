const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;
const error = require("../utils/error");

function sign(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret)
}

const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);

        console.log("Validar si es correcto el token de autentificacion "+decoded.id+" !== "+owner);
        if (decoded.id !== owner) {
            throw error('Necesitas estar autenticado', 401);
        }
    },
    logged: function(req, owner) {
        const decoded = decodeHeader(req);
    }

    //COMPROBAR SI ES O NO PROPIO
}

function getToken(auth) {
    if(!auth) {
        throw error('No viene token', 401);
    }

    if( auth.indexOf('Bearer ')===-1) {
        throw error('Formato de token invalido', 401);
    }

    let token = auth.replace('Bearer ', '');

    return token;
}


function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    return decoded;
}

module.exports = {
    sign,
    check,
};