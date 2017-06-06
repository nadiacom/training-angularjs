(function () {
    'use strict';
    angular
        .module('dashboardModule')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/',
                component: 'dashboardComponent'
            })
            .state('home', {
                url: '/dashboard',
                component: 'dashboardComponent'
            });
    }
})();
