(function() {
    'use strict';
    angular
        .module('app.cdb')
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
            })
            .state('add', {
                url: '/add',
                component: 'addComponent'
            })
            .state('edit', {
                url: '/edit',
                component: 'editComponent'
            });
    }
})();
