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

    angular.module('app')
        .component('addComponent', {
            templateUrl: 'src/app/add/addComputer.html',
            controller: AddController,
            controllerAs: 'addCtrl'
        });
    /* @ngInject */
    function AddController(AddFactory) {
        // jshint validthis: true
        const vm = this;
        vm.computer = {};
        vm.submit = submit;
        vm.helpers = MyDates.helpers;

        function submit() {
            AddFactory.addComputer(vm).then(function(response) {
                //vm.computersList = response.data;
            });
        }
    }
})();
