/* jshint -W068 */
;(function(){
    'use strict';

    module.exports = function() {
        var gulpConfig = {
            tempLoc: './.temp',
            buildLoc: './build',
            alljs:[
                './*.js',
                './server/**/*.js',
                './gulp/**/*.js'
            ],
            bowerComponentsLoc: './bower_components/',
            publicBowerLoc: './public/bower/',
            bower: {
                jquery: {
                    source: './bower_components/jquery/dist/*.*',
                    dest: './public/bower/jquery/'
                },
                bootstrap: {
                    source: './bower_components/bootstrap/dist/**/*.*',
                    dest: './public/bower/bootstrap/'
                },
                toastr: {
                    source: [
                        './bower_components/toastr/*.css',
                        './bower_components/toastr/*.js'
                    ],
                    dest: './public/bower/toastr/'
                },
                fontawesomeCSS: {
                    source: './bower_components/fontawesome/css/*.css',
                    dest: './public/bower/fontawesome/'
                },
                fontawesomeFONTS: {
                    source: './bower_components/fontawesome/fonts/*.*',
                    dest: './public/bower/fontawesome/fonts/'
                },
                angularCore: {
                    source: [
                        './bower_components/angular/angular.js',
                        './bower_components/angular/angular.min.js',
                        './bower_components/angular/angular.min.js.map',
                        './bower_components/angular/angular-csp.css'
                    ],
                    dest: './public/bower/angular/'
                }
            },
            myCss: [
                './public/css/*.css'
            ],
            autoprefixerOptions: {
                cascade: true,
                remove: false,
                browsers :['> 5%', 'last 2 versions']
            }
        };
        return gulpConfig;
    };

}());
