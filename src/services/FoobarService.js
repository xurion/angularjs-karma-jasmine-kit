/*globals angular*/

angular.module('ExampleApp').service('FoobarService', [function () {

    'use strict';

    return {

        getFoo: function () {

            return 'foo';
        },

        getBar: function () {

            return 'bar';
        },

        getFoobar: function () {

            return this.getFoo() + this.getBar();
        }
    };
}]);
