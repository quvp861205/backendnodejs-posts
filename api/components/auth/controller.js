
const nanoid = require('nanoid'); //generador de id
const auth = require('../../../auth'); //jsonwebtoken
const bcrypt =  require('bcrypt');

const TABLA =  'auth';


module.exports = function(injectedStore) {
    let store = injectedStore;

    async function login(username, password) {      
        
        const data = await store.query(TABLA, { username: username });

        return  bcrypt.compare(password, data.password).then((sonIguales) => {

            if(sonIguales===true) {
                return auth.sign(data);
            } else {
                throw new Error("Informacion invalida al comparar hashes");
            }  
        }).catch((error) => {
            return error;
        });
    }
     
    
    async function upsert(data, esNuevo){
        const authData = {
            id: data.id
        };

        if( data.username ) {

            authData.username = data.username;
        }

        if( data.password ) {
            
            authData.password = await bcrypt.hash(data.password, 5);
            console.log("--encriptando contraseña: "+data.password+" -> "+authData.password);
        }

        console.log(`<<Insertando datos en la tabla auth>>`);
        console.log(authData);

        return store.upsert(TABLA, authData, esNuevo);
    }

    return {
        upsert,
        login
    }
}