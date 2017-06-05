(function() {
    'use strict';
    angular
        .module('app')
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
            })
            .state('404', {
                url: '/404',
                component: 'app404'
            });
    }
})();
