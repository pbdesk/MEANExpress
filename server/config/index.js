module.exports = function() {

    var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    var envKeys = require('./' + env + '.json');
    var globalKeys = require('./global.json');
    for(var key in envKeys) {
        if (envKeys.hasOwnProperty(key) && !globalKeys[key]) {
            globalKeys[key] = envKeys[key];
        }
    }
    return globalKeys;
};
