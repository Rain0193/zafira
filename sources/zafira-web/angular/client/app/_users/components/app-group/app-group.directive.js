(function () {
    'use strict';

    require('./app-group.controller');

    angular.module('app.appGroup').directive('appGroup', function () {
        return {
            template: require('./app-group.html'),
            controller: 'AppGroupController',
            scope: {
            },
            controllerAs: '$ctrl',
            restrict: 'E',
            replace: true,
            bindToController: true
        };
    });

})();
