(function () {
    'use strict';

    angular.module('app.appGroup').directive('appGroupControls', function () {
        return {
            template: require('./app-group-controls.html'),
            scope: {
            },
            restrict: 'E',
            replace: true,
        };
    });

})();
