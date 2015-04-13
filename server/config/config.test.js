;(function (configs) {
    'use strict';

    configs = require('./config.global');

    configs.env = 'test';
    configs.overrideProperty = 'valueFromTest';

})(module.exports);
