;(function (controllers) {
    'use strict';

    var homeController = require('./homeController');

    controllers.init = function(app){
        homeController.init(app);
    };

})(module.exports);
