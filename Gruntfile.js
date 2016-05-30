/*globals module, require*/

module.exports = function (grunt) {

    'use strict';

    var files = [
        '*.js',
        'src/**/*.js',
        'tests/**/*.js'
    ];

    grunt.initConfig({

        jshint: {

            all: files,
            options: {

                jshintrc: true,
                reporter: require('jshint-stylish')
            }
        },
        jscs: {

            src: files
        },
        karma: {

            unit: {

                options: {

                    configFile: 'karma.conf.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask('test', ['jshint', 'jscs', 'karma']);
};
