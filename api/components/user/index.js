const ctrl = require('./controller');
//const store = require('../../../store/dummy');
const config = require('../../../config');

let store, cache;
if (config.remoteDB === true) {
    store = require('../../../store/remote-mysql');
} else {
    store = require('../../../store/mysql');
}

module.exports = ctrl(store);