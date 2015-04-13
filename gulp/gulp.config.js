/* jshint -W068 */
;(function(){
    'use strict';

    module.exports = function() {
        var gulpConfig = {
            tempLoc: './.temp',
            buildLoc: './build',
            buildDevLoc: './build/dev/',
            buildRelLoc: './build/release/',
            buildPath: '',
            alljs:[
                './*.js',
                './server/**/*.js',
                './gulp/**/*.js'
            ],
            serverSource: [
                './server/**/*.*'
            ],
            bowerComponentsLoc: './bower_components/',
            publicVendorFolder: './public/vendor/',
            bower: {
                jquery: {
                    source: './bower_components/jquery/dist/*.*',
                    dest: './public/vendor/jquery/'
                },
                bootstrap: {
                    source: './bower_components/bootstrap/dist/**/*.*',
                    dest: './public/vendor/bootstrap/'
                },
                toastr: {
                    source: [
                        './bower_components/toastr/*.css',
                        './bower_components/toastr/*.js'
                    ],
                    dest: './public/vendor/toastr/'
                },
                fontawesomeCSS: {
                    source: './bower_components/fontawesome/css/*.css',
                    dest: './public/vendor/fontawesome/'
                },
                fontawesomeFONTS: {
                    source: './bower_components/fontawesome/fonts/*.*',
                    dest: './public/vendor/fontawesome/fonts/'
                },
                angularCore: {
                    source: [
                        './bower_components/angular/angular.js',
                        './bower_components/angular/angular.min.js',
                        './bower_components/angular/angular.min.js.map',
                        './bower_components/angular/angular-csp.css'
                    ],
                    dest: './public/vendor/angular/'
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
