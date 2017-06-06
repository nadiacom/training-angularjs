(function () {
    'use strict';
    angular
        .module('formModule')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('add', {
                url: '/add',
                component: 'formComponent'
            })
            .state('edit', {
                url: '/edit:id',
                component: 'formComponent'
            });
    }
})();
