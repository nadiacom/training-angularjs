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
        vm.totalNbComputer = 510;
        vm.page = 1;
        vm.size = 10;
        vm.events = {
          onPageChange = onPageChange,
          onPageSizeChange = onPageSizeChange
        };

        function $onInit() {
            getComputers();
        };

        function getComputers() {
          DashFactory.getComputers(vm.page, vm.size).then(function(response) {
              vm.computersList = response.data;
          });
        }

        function onPageChange(page) {
            vm.page = page;
            getComputers();
        };

        function onPageSizeChange(size) {
            vm.size = size;
            getComputers();
        }
    }
})();
