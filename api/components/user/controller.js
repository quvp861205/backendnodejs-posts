const nanoid = require('nanoid');
const auth = require('../auth');

const TABLA =  'user';

module.exports = function(injectedStore, injectedCache) {
    let store = injectedStore;
    let cache = injectedCache;

    async function list() {   
        console.log("Buscamos en cache la tabla "+TABLA);
        let users = await cache.list(TABLA);
        if(!users) {    
            console.log("No estaba en cache. Buscamos en bd la tabla "+TABLA);        
            users = await store.list(TABLA);
            cache.upsert(TABLA, users);
            console.log(TABLA+" se almacenó en cache");
        } else {
            console.log("Encontramos en cache la tabla "+TABLA);
        }
        return users;
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        let esNuevo = true;
        
        const user = {
            name: body.name,
            username: body.username
        };

        
        if( body.id!=undefined ) {
            esNuevo = false;
            user.id = body.id;
        }
        else {
            user.id = nanoid.nanoid(); //Generar id automaticamente
        }

        
        if( body.password!=undefined && body.username!=undefined ) {
            await auth.upsert({
                id: user.id,
                username: body.username,
                password: body.password
            }, esNuevo)
        }

        console.log(`<<Insertando datos en la ${TABLA}>>`);
        console.log(user)

        return store.upsert(TABLA, user, esNuevo);
        
    }

    function remove(id) {
        return store.get(TABLA, id);        
    }

    function follow(from, to) {
        return store.upsert(TABLA + '_follow', {
            user_from: from,
            user_to: to
        }, true);
    }

    
    //Info de quien esta siguiendo un usuario
    async function following(user) {
        const join = {}
        join[TABLA] = 'user_to'; // { user: 'user_to' }
        const query = { user_from: user };
        
        return await store.query(TABLA + '_follow', query, join);
    }



    return {
        list,
        get,
        upsert,
        remove,
        follow,
        following
    }
}
