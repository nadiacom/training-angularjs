(function () {
    'use strict';
    angular.module('formModule')
        .component('formComponent', {
            templateUrl: 'src/app/form/form.html',
            controller: FormController,
            controllerAs: 'formCtrl'
        });

    /* @ngInject */
    function FormController($log, $stateParams, ComputersAPI, CompaniesAPI) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;
        vm.id = $stateParams.id;
        vm.computer = {};
        vm.companies = {};

        function $onInit() {
            $log.debug('FormController init');
            if (!angular.isUndefined(vm.id)) { // if id undefined, add state, else edit state
                ComputersAPI.get(vm.id, (response) => {
                    vm.computer = response.data;
                });
            }
            CompaniesAPI.getAll(response => {
                vm.companies = response.data;
            });
        }

        function add(computer){
            ComputersAPI.add();
        }
    }
})();