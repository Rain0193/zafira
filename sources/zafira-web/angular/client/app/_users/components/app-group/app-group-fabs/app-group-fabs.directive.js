(function () {
    'use strict';

    angular.module('app.appGroup').directive('appGroupFabs', function () {
        return {
            template: require('./app-group-fabs.html'),
            scope: {
            },
            restrict: 'E',
            replace: true
        };
    });

})();
