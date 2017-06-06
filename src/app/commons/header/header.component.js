(function () {
    'use strict';
    angular.module('app')
        .component('headerComponent', {
            templateUrl: 'src/app/commons/header/header.html',
            controller: HeaderController,
            controllerAs: 'headCtrl'
        });
    /* @ngInject */
    function HeaderController($translate) {
        // jshint validthis: true
        const vm = this;
        vm.langSelected = 'en';

        vm.changeLanguage = function (langKey) {
            $translate.use(langKey);
            vm.langSelected = langKey;
        };
    }
})();
