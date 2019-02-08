(function () {
    'use strict';

    require('./app-users.controller');

    angular.module('app.appUsers').directive('appUsers', function () {
        return {
            template: require('./app-users.html'),
            controller: 'AppUsersController',
            scope: {
            },
            controllerAs: '$ctrl',
            restrict: 'E',
            replace: true,
            bindToController: true
        };
    });

})();
