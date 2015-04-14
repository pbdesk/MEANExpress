;(function (homeController) {
    'use strict';

    homeController.init = function(app){

        app.get('/', function(req, res, next) {
            console.log(app.config.key3);
            res.render('index', {title: 'Express'});
        });
    };

})(module.exports);

