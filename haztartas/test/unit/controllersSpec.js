'use strict';

/* jasmine specs for controllers go here */
describe('Main controller', function() {
    var $scope, ctrl;

    beforeEach(module('app'));

    describe("SimpleController", function () {
        
        var scope;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("mainCtrl", {
                $scope: scope
            });
        }));
        
        it("should double the numbers", function () {
            expect(scope.title).toBe('Home');
        });
    });




});
