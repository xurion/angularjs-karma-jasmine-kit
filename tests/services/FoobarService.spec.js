/*globals describe, beforeEach, module, inject, it, expect*/

describe('FoobarService', function () {

    'use strict';

    var FoobarService;

    beforeEach(function () {

        module('ExampleApp');

        inject(function (_FoobarService_) {

            FoobarService = _FoobarService_;
        });
    });

    describe('getFoo()', function () {

        it('should return "foo"', function () {

            expect(FoobarService.getFoo()).toBe('foo');
        });
    });

    describe('getBar()', function () {

        it('should return "bar"', function () {

            expect(FoobarService.getBar()).toBe('bar');
        });
    });

    describe('getFoobar()', function () {

        it('should return "foobar"', function () {

            expect(FoobarService.getFoobar()).toBe('foobar');
        });
    });
});
