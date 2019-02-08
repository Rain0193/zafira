(function () {
    'use strict';

    angular.module('app.appUsers').directive('appUsersFabs', function () {
        return {
            template: require('./app-users-fabs.html'),
            scope: {
            },
            restrict: 'E',
            replace: true
        };
    });

})();
