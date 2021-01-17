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
        let dataBody = '';
        

        if(data && method === 'GET') {
            url += `/${data}`;
        } else if(data) {
            dataBody = JSON.stringify(data);
        }
        
        console.log(`\nPETICION HTTP: ${method} -> ${url}`);        
        if(dataBody!='') console.log(dataBody);

        return new Promise((resolve, reject) => {
            request({
                method: method,
                headers: {
                    'content-type': 'application/json',
                },
                url: url,
                body: dataBody,
                
            }, (err, req, result) => {
                
                if( err ) {
                    console.error("Error con la base de datos remota", err);
                    return reject(err.message);
                }

                console.log(`<< RESPUESTA >>`);
                console.log(result);

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