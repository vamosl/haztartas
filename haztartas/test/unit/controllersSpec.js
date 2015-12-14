'use strict';

/* jasmine specs for controllers go here */
describe('Main controller', function() {

  beforeEach(function(){
    jasmine.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('app'));


  describe('mainCtrl', function(){
    var scope, ctrl;

    beforeEach(inject(function( $rootScope, $controller) {

      scope = $rootScope.$new();
      ctrl = $controller('mainCtrl', {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.title).toEqualData('Home');
     
    });
  });
});
