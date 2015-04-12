;(function () {
    'use strict';

    var gUtil = require('./gulp/gulp.utils.js')();

    var requireDir;
    requireDir = require('require-dir')('./gulp/tasks', {recurse: true});

    gUtil.gulp.task('hello-gulp', function() {
        console.log('Hello Gulp - from my first MEAN Project HelloMEAN');
    });

}());
