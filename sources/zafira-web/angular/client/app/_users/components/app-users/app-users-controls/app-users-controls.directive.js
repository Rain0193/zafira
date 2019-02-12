(function () {
    'use strict';

    angular.module('app.appUsers').directive('appUsersControls', function () {
        return {
            template: require('./app-users-controls.html'),
            scope: {
                updateFn: '&'  //я так уже делала
            },
            restrict: 'E',
            replace: true,
            link: function(scope, elm, attrs) {             
            }
        };
    });

})();
