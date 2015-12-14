(function (angular) {
    'use strict';
    //angular module   
    angular.module('app.main')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider            
            .when('/expense', {
                templateUrl : 'expense',
                controller : 'expenseCtrl',
                controllerAs: 'ctrl'
            })         
        }]);
})(window.angular);
