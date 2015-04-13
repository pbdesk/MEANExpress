;(function (configs) {
    'use strict';

    var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
    configs = require('./config.' +  env);

})(module.exports);
