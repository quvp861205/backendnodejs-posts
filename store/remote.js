const request = require("request");
const querystring = require('querystring');

function createRemoteDB(host, port) {
    const URL = 'http://' + host + ':' + port;

    function list(table) {
        return req('GET', table);
    }

    function get(table, id) {
        return req('GET', table, id);
    }

    function upsert(table, data, esNuevo) {
        
        if(!esNuevo) {
            return update(table, data);
        }
        return insert(table, data);
    }
    
    function insert(table, data) {
        return req('POST', table, data);
    }
    
    function update(table, data) {
        return req('PUT', table, data);
    }


    function req(method, table, data) {
        let url = URL + "/" + table;
        let body = null;

        if(data && method === 'GET') {
            url += `/${data}`;
        } else if(data) {
            data = JSON.stringify(data);
        }

        console.log(`PETICION HTTP: ${method} -> ${url}`);        
        if(data!=undefined) console.log(data);

        return new Promise((resolve, reject) => {
            request({
                method: method,
                headers: {
                    'content-type': 'application/json',
                },
                url: url,
                body: data,
               
            }, (err, req, result) => {
                console.log(result);
                if( err ) {
                    console.error("Error con la base de datos remota", err);
                    return reject(err.message);
                }

                const resp = JSON.parse(result);
                
                return resolve(resp.body);
            });

        });
    }

    return {
        list,
        get,
        update,
        insert,
        upsert
    }
}

module.exports = createRemoteDB;