
const nanoid = require('nanoid');

const TABLA = 'post';

module.exports = function(injectedStore) {
    let store = injectedStore;

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        let esNuevo = true;
        
        const post = {
            text: body.text,
            user: body.user
        };
        
        if( body.id!=undefined ) {
            esNuevo = false;
            post.id = body.id;
        }
        else {
            post.id = nanoid.nanoid(); //Generar id automaticamente
        }

        return store.upsert(TABLA, post, esNuevo);
        
    }

    function remove(id) {
        return store.remove(TABLA, id);        
    }

    return {
        list,
        get,
        upsert,
        remove,
       
    }
}

