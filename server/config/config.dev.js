;(function (configs) {
    'use strict';

    configs = require('./config.global');

    configs.env = 'dev';
    configs.overrideProperty = 'valueFromDev';

})(module.exports);
