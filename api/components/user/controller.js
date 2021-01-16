const store = require('../../../store/mysql');
const nanoid = require('nanoid');
const auth = require('../auth');

const TABLA =  'user';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if(!store) {
        store = require('../../../store/mysql');
    }

    function list() {   
             
        return store.list(TABLA);
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
