const db = {
    user: [
        {id: '1', name: 'Roberta'},
        {id: '2', name: 'Margarita'}
    ]
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item=>item.id===id)[0] || null;
}

async function upsert(tabla, data) {
    db[tabla].push(data);
}

async function remove(tabla, id) {
    let col = await list(tabla);
    let element  = col.filter(item=>item.id===id)[0] || null;
    return dt[tabla.pop(element)];
}

module.exports = {
    list,
    get,
    upsert,
    remove
};