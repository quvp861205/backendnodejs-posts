const store = require('../../../store/dummy');
const nanoid = require('nanoid');
const auth = require('../auth');

const TABLA =  'user';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if(!store) {
        store = require('../../../store/dummy');
    }

    function list() {   
             
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username
        };

        if( body.id!=undefined ) {
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
            })
        }

        return store.upsert(TABLA, user);
        
    }

    function remove(id) {
        return store.get(TABLA, id);        
    }



    return {
        list,
        get,
        upsert,
        remove
    }
}
