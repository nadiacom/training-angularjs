(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/',
                component: 'cdbDashboard'
            })
            .state('home', {
                url: '/dashboard',
                component: 'cdbDashboard'
            });
    }
})();
