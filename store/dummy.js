const db = {
    user: [ 
        {id: '1', name: 'Roberta', username: 'roberta'},
        {id: 'aGrdKygfscl7lOnB_l3Ut', name: 'Margarita', pass: 'margarita'}
    ],
    auth: [
        {id: '1', username: "roberta", password: "contra"},
        {id: 'aGrdKygfscl7lOnB_l3Ut', username: "margarita", password: "contra"},
    ]
};

async function list(tabla) {
    return db[tabla] || [];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item=>item.id===id)[0] || null;
}

async function upsert(tabla, data) {
    if(!db[tabla]) {
        db[tabla] = [];
    }

    db[tabla].push(data);

    console.log(tabla+" agregó: ");
    console.log(data);

}

async function remove(tabla, id) {
    let col = await list(tabla);
    let element  = col.filter(item=>item.id===id)[0] || null;
    return dt[tabla.pop(element)];
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];

    var result = col.filter(item => item[key] === q[key])[0] || null;

    console.log("Devolviendo query de "+tabla+":");
    console.log(result);

    return result;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
};