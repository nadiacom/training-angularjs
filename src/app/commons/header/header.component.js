(function() {
    'use strict';
    angular.module('app')
        .component('headerComponent', {
            templateUrl: 'src/app/commons/header/header.html',
            controller: HeaderController,
            controllerAs: 'headCtrl'
        });
    /* @ngInject */
    function HeaderController() {
        // jshint validthis: true
        const vm = this;
    }
})();
