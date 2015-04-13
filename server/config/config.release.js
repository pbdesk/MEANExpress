;(function (configs) {
    'use strict';

    configs = require('./config.global');

    configs.env = 'release';
    configs.overrideProperty = 'valueFromRelease';

})(module.exports);
