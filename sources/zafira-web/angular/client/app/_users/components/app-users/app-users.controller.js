(function () {
    'use strict';

    angular.module('app.appUsers')
        .controller('AppUsersController', AppUsersController);

    // **************************************************************************
    function AppUsersController($scope, $state, $mdDialog, $mdDateRangePicker, $location,
        UserService, UtilService, DashboardService) {
        'ngInject';
            
        $scope.UtilService = UtilService;
        $scope.DashboardService = DashboardService;

        $scope.users = [];
        $scope.order = 'username';

        var tmpToday = new Date();
        $scope.selectedRange = {
            selectedTemplate: null,
            selectedTemplateName: null,
            dateStart: null,
            dateEnd: null,
            showTemplate: false,
            fullscreen: false
        };

        var DEFAULT_SC = {page : 1, pageSize : 20};
        $scope.sc = angular.copy(DEFAULT_SC);

        // $scope.tabs[$scope.tabs.indexOfField('name', 'Users')].countFunc = function() {
        //     return $scope.sr && $scope.sr.totalResults ? $scope.sr.totalResults : 0;
        // };

        $scope.isEqualDate = function () {
            if ($scope.selectedRange.dateStart && $scope.selectedRange.dateEnd) {
                return $scope.selectedRange.dateStart.getTime() === $scope.selectedRange.dateEnd.getTime();
            }
        };

        $scope.isDateChosen = true;
        $scope.isDateBetween = false;

        $scope.changePeriod = function () {
            if ($scope.sc.period == "between") {
                $scope.isDateChosen = true;
                $scope.isDateBetween = true;
            }
            else if ($scope.sc.period == "before" || $scope.sc.period == "after" || $scope.sc.period == "") {
                $scope.isDateChosen = true;
                $scope.isDateBetween = false;
            }
            else {
                $scope.isDateChosen = false;
                $scope.isDateBetween = false;
            }
        };

        $scope.pick = function ($event, showTemplate) {
            $scope.selectedRange.showTemplate = showTemplate;
            $mdDateRangePicker.show({
                targetEvent: $event,
                model: $scope.selectedRange
            }).then(function (result) {
                if (result) $scope.selectedRange = result;
            })
        };

        $scope.onSelect = function () {
            console.log($scope.selectedRange.selectedTemplateName);
            return $scope.selectedRange.selectedTemplateName;
        };

        $scope.clear = function () {
            $scope.selectedRange.selectedTemplate = null;
            $scope.selectedRange.selectedTemplateName = null;
            $scope.selectedRange.dateStart = null;
            $scope.selectedRange.dateEnd = null;
        };

        $scope.isFuture = function ($date) {
            return $date.getTime() < new Date().getTime();
        };

        $scope.showChangePasswordDialog = function ($event, user) {
            $mdDialog.show({
                controller: function ($scope, $mdDialog, UtilService) {
                    'ngInject';

                    $scope.UtilService = UtilService;
                    $scope.user = user;
                    $scope.changePassword = { 'userId': user.id };
                    $scope.updateUserPassword = function (changePassword) {
                        UserService.updateUserPassword(changePassword)
                            .then(function (rs) {
                                if (rs.success) {
                                    $scope.changePassword = {};
                                    $scope.hide();
                                    alertify.success('Password changed');
                                }
                                else {
                                    alertify.error(rs.message);
                                }
                            });
                    };
                    $scope.hide = function () {
                        $mdDialog.hide(true);
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel(false);
                    };
                },
                template: require('./modals/password_modal.html'),
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true,
                fullscreen: true
            })
                .then(function (answer) {
                    if (answer) {
                        $state.reload();
                    }
                }, function () {
                });
        };

        

        $scope.showEditProfileDialog = function (event, user, index) {
            $mdDialog.show({
                controller: function ($scope, $mdDialog, UtilService) {
                    'ngInject';

                    $scope.UtilService = UtilService;
                    $scope.user = angular.copy(user);
                    $scope.updateStatus = function (user, status) {
                        user.status = status;
                        UserService.updateStatus(user).then(function (rs) {
                            if (rs.success) {
                                $scope.cancel(rs.data.status);
                            } else {
                                alertify.error(rs.message);
                            }
                        });
                    };
                    $scope.updateUser = function () {
                        UserService.createOrUpdateUser($scope.user).then(function (rs) {
                            if (rs.success) {
                                $scope.hide();
                                alertify.success('Profile changed');
                            }
                            else {
                                alertify.error(rs.message);
                            }
                        });
                    };
                    $scope.hide = function () {
                        $mdDialog.hide(true);
                    };
                    $scope.cancel = function (status) {
                        $mdDialog.cancel(status);
                    };
                },
                template: require('./modals/edit_modal.html'),
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: true
            })
                .then(function (answer) {
                    if (answer) {
                        $state.reload();
                    }
                }, function (status) {
                    if (status) {
                        $scope.sr.results[index].status = status;
                    }
                });
        };

        $scope.search = function (page) {
            $scope.sc.date = null;
            $scope.sc.toDate = null;
            $scope.sc.fromDate = null;

            if(page)
            {
                $scope.sc.page = page;
            }

            if ($scope.selectedRange.dateStart && $scope.selectedRange.dateEnd) {
                if(!$scope.isEqualDate()){
                    $scope.sc.fromDate = $scope.selectedRange.dateStart;
                    $scope.sc.toDate = $scope.selectedRange.dateEnd;
                }
                else {
                    $scope.sc.date = $scope.selectedRange.dateStart;
                }
            }

            var requestVariables = $location.search();
            if(requestVariables) {
                for(var key in requestVariables) {
                    if(key && requestVariables[key]) {
                        $scope.sc[key] = requestVariables[key];
                    }
                }
            }

            UserService.searchUsers($scope.sc).then(function(rs) {
                if(rs.success)
                {
                    $scope.sr = rs.data;
                }
                else
                {
                    alertify.error(rs.message);
                }
            });
        };

        (function initController() {
            $scope.search(1);
        })();
    };
})();
