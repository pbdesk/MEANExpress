;(function () {
    'use strict';

    var gulp = require('gulp');
    var G = require('gulp-load-plugins')({lazy:true});

    var gulpUtils = require('./gulp/gulp.utils.js')();

    gulp.task('hello-gulp', function() {
        console.log('Hello Gulp - from my first MEAN Project HelloMEAN');
    });

    gulp.task('codeReview', function() {
        gulpUtils.log('Analyzing source .JS files with JSCS & JSHint');
        return gulp
            .src(gulpUtils.config.alljs)
            .pipe(G.if(gulpUtils.args.verbose, G.print()))
            .pipe(G.jscs())
            .pipe(G.jshint())
            .pipe(G.jshint.reporter('jshint-stylish', {verbose:true}))
            .pipe(G.jshint.reporter('fail'));
    });

    gulp.task('clean-test', function() {
        gulpUtils.clean(gulpUtils.config.publicBowerLoc);
    });

}());
