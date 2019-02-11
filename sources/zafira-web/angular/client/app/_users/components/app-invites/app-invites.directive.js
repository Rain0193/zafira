(function () {
    'use strict';

    require('./app-invites.controller');

    angular.module('app.appInvites').directive('appInvites', function () {
        return {
            template: require('./app-invites.html'),
            controller: 'AppInvitesController',
            scope: {
            },
            controllerAs: '$ctrl',
            restrict: 'E',
            replace: true,
            bindToController: true
        };
    });

})();
