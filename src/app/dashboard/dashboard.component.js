(function() {
    'use strict';

    angular.module('app')
        .component('dashboardComponent', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController,
            controllerAs: 'dashCtrl'
        });
    /* @ngInject */
    function DashboardController(ComputersAPI) {
        // jshint validthis: true
        const vm = this;
        vm.computersList = {};
        vm.$onInit = $onInit;
        vm.events = {
          onPageChange = onPageChange,
          onPageSizeChange = onPageSizeChange
        };

        function $onInit() {
            vm.totalNbComputer = 510;
            vm.page = 1;
            vm.size = 10;
            getComputers();
        };

        function getComputers() {
          ComputersAPI.getPage(vm.page, vm.size).then(function(response) {
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
