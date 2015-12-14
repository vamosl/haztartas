(function (angular) {
    'use strict';
    //angular module  
    var myApp = angular.module('app', 
                               ['ngMaterial', 
                                'ngRoute'
                               ]);

    myApp.controller('mainCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
            
            $scope.currentModuleName = "";
            $scope.menuItems = [
                { name: "Kiadás", icon: "", href: "#/expense" },
                { name: "Bevétel", icon: "", href: "#/income" },
                { name: "Teendők", icon: "", href: "#/todo" },
                { name: "Áttekintés", icon: "", href: "#/dashboard" }];
            
            //$scope.menuItems = //$scope.modules;
            $scope.title = "Home";
            $scope.onViewLoad = function () {
                
                //var module = menuService.fncGetMenuItems($scope.modules, $scope.currentModuleName());
                
                //$scope.moduleName = module.moduleLongName;
                //$scope.menuItems = module.moduleMenuItems;

            };
        }]);
    myApp.controller('appCtrl', ['$scope', 'resolvedVal', function ($scope, resolvedVal) {
            $scope.model = {};
            $scope.model.data = resolvedVal.data;
            global = resolvedVal.data;
        }]);

})(window.angular);
