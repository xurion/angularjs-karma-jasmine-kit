/*globals module*/

module.exports = function (config) {

    'use strict';

    config.set({

        basePath: './',
        frameworks: ['jasmine'],
        singleRun: true,
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/ExampleApp.js',
            'src/services/FoobarService.js',
            'tests/services/FoobarService.spec.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS']
    });
};
