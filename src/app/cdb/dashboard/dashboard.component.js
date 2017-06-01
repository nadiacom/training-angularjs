(function() {
    'use strict';

    angular.module('app.cdb')
        .component('dashboardComponent', {
            templateUrl: 'src/app/cdb/dashboard/dashboard.html',
            controller: DashboardController
        });
    /* @ngInject */
    function DashboardController(computers) {
        // jshint validthis: true
        const vm = this;
        vm.computersList = {};
        vm.$onInit = $onInit;

        function $onInit() {
            computers.list((response) => {
                vm.computersList = response.data;
            });
        }
    }
})();
