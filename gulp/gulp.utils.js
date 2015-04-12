/* jshint -W068 */
;(function(){
    'use strict';

    module.exports = function(){

        var gulp = require('gulp');
        var args = require('yargs').argv;
        var del = require('del');
        var G = require('gulp-load-plugins')({lazy:true});

        var gulpConfig = require('./gulp.config')();

        var gulpUtils = {
            config: gulpConfig,
            args: args,
            log: _log,
            logV: _logV,
            copyFiles: _copyFiles,
            clean: _clean,
            cleanTemp: _cleanTemp,
            cleanBuild: _cleanBuild
        };
        return gulpUtils;

        function _log(msg){
            if(typeof(msg) === 'object'){
                for(var item in msg){
                    if(msg.hasOwnProperty(item)) {
                        G.util.log(G.util.colors.blue(msg[item]));
                    }
                }
            }
            else {
                G.util.log(G.util.colors.yellow(msg));
            }
        }

        function _logV(msg){
            if(args.verbose) {
                _log(msg);
            }
        }

        function _copyFiles(source, dest){
            _logV('Copying ' + source  + ' to ' + dest);
            return gulp
                .src(source)
                .pipe(gulp.dest(dest));
        }

        function _clean(dest){
            del(dest, function(err, deletedFiles){
                if(err){
                    _log('Error cleaning : in _clean call');
                    _log(err);
                }
                else {
                    _logV(deletedFiles.length +  ' Files deleted:');
                    _logV(deletedFiles.join(', '));
                }
            });
        }

        function _cleanTemp(){
            _clean(gulpConfig.temoLoc);
        }

        function _cleanBuild(){
            _clean(gulpConfig.buildLoc);
        }
    };

}());
