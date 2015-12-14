(function (angular) {
    'use strict';
    //angular module  
    var myApp = angular.module('app', []);

    myApp.controller('mainCtrl', ['$scope', function ($scope) {
            
            $scope.currentModuleName = "";
            $scope.menuItems = [
                { name: "Kiadás", icon: "", href: "#/expense" },
                { name: "Bevétel", icon: "", href: "#/income" },
                { name: "Teendők", icon: "", href: "#/todo" },
                { name: "Áttekintés", icon: "", href: "#/dashboard" }];
           
            $scope.title = "Home";
            $scope.onViewLoad = function () {
                
            };
        }]);
    myApp.controller('appCtrl', ['$scope', 'resolvedVal', function ($scope, resolvedVal) {
            $scope.model = {};
            $scope.model.data = resolvedVal.data;
            global = resolvedVal.data;
        }]);

})(window.angular);
