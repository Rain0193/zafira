(function () {
    'use strict';

    angular.module('app.appUsers').directive('appUsersControls', function () {
        return {
            template: require('./app-users-controls.html'),
            scope: {
            },
            restrict: 'E',
            replace: true,
        };
    });

})();
