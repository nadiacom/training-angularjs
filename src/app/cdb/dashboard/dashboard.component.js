(function() {
    'use strict';

    var MyDates = MyDates || {};

    MyDates.helpers = {
        toPattern: function(dateObj) {
            return dateObj != null ?
             new Date(dateObj.year, dateObj.monthValue - 1, dateObj.dayOfMonth).toISOString().slice(0, 10)
             : null;
        }
    };

    angular.module('app.cdb')
        .component('dashboardComponent', {
            templateUrl: 'src/app/cdb/dashboard/dashboard.html',
            controller: DashboardController,
            controllerAs: 'dashCtrl'
        });
    /* @ngInject */
    function DashboardController(DashFactory) {
        // jshint validthis: true
        const vm = this;
        vm.computersList = {};
        vm.$onInit = $onInit;
        vm.helpers = MyDates.helpers;

        function $onInit() {
            DashFactory.getComputers().then(function(response) {
                vm.computersList = response.data;
            });
        }
    }
})();